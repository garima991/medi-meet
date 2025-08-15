'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import { revalidatePath } from "next/cache";

interface User {
    id : string;
    
}

// define credit allocations per plan
const PLAN_CREDITS = {
    free_user: 0,
    standard: 10,
    premium: 24,
}

// each appointment costs 2 credits
const APPOINTMENT_CREDIT_COST = 2;

export async function checkAndAllocateCredits(user) {
    try {
        // check is logged in
        if (!user) {
            return null;
        }

        // only allocate credits for patients
        if (user.role !== "PATIENT") {
            return user;
        }

        // check if user has a subscription
        const { has } = await auth();

        // check which plan user has
        const hasBasic = has({ plan: "free_user" });
        const hasStandard = has({ plan: "standard" });
        const hasPremium = has({ plan: "premium" });

        let currentPlan = null;
        let creditsToAllocate = 0;

        if (hasPremium) {
            currentPlan = "premium";
            creditsToAllocate = PLAN_CREDITS.premium;
        }
        else if (hasStandard) {
            currentPlan = "standard";
            creditsToAllocate = PLAN_CREDITS.standard;
        }
        else if (hasBasic) {
            currentPlan = "free_user";
            creditsToAllocate = PLAN_CREDITS.free_user;
        }

        // if user doesnt have plan, just return the user
        if (!currentPlan) {
            return user;
        }

        // check if we already allocated credits for this month
        const currentMonth = format(new Date(), "yyyy-MM");

        if (user.transactions.length > 0) {
            const latestTransaction = user.transactions[0];
            const transactionMonth = format(new Date(latestTransaction.createdAt),
                "yyyy-MM");
            const transactionPlan = latestTransaction.packageId;

            // if we already allocated credits for this month and the plan is the same, return 
            if (transactionMonth === currentMonth &&
                transactionPlan === currentPlan) {
                return user;
            }
        }

        // allocate credits and create transaction record
        const updatedUser = await db.$transaction(async (tx) => {
            // create transaction record
            await tx.creditTransaction.create({
                data: {
                    userId: user.id,
                    amount: creditsToAllocate,
                    type: "CREDIT_PURCHASE",
                    packageId: currentPlan,
                }

            })

            // updated user's credit details
            const updatedUser = await db.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    credits: {
                        increment: creditsToAllocate,
                    }
                }
            })
        });


        revalidatePath("/doctos");
        revalidatePath("/appointments");

        return updatedUser;
    }


    catch (error : any) {
        console.error("Failed to check subscription and allocate credits", error.message);
        return null;
    }

}




