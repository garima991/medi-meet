"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function verifyAdmin(){
    const {userId} = await auth();

    if(!userId){
        return false;
    }

    try{
        const user = await db.user.findUnique({
            where : {
                clerkUserId : userId,
            }
        });

        return user?.role === "ADMIN"
    }
    catch(error){
        console.error("Failed to verify admin : ", error);
        return false;
    }

}


export async function getPendingDoctors(){
    const isAdmin = await verifyAdmin();

    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    try{
        const pendingDoctors = await db.user.findMany({
            where : {
                role : "DOCTOR",
                verificationStatus : "PENDING"
            },
            orderBy : {
                createdAt : "desc"
            }
        })

        return {doctors : pendingDoctors}
    }
    catch(error){
        console.error("Failed to get pending doctors", error);
    }
}




export async function getVerifiedDoctors(){
    const isAdmin = await verifyAdmin();

    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    try{
        const pendingDoctors = await db.user.findMany({
            where : {
                role : "DOCTOR",
                verificationStatus : "VERIFIED"
            },
            orderBy : {
                createdAt : "desc"
            }
        })
    }

    catch(error){
        console.error("Failed to get pending doctors", error);
    }
}


export async function updateDoctorStatus(formData : FormData){
    const isAdmin = await verifyAdmin();

    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    const doctorId = formData.get("doctorId") as string;
    const status = formData.get("status") as string;

    if(!doctorId || ["VERIFIED", "REJECTED"].includes(status)){
        throw new Error("Missing required fields");
    }

    try{
        await db.user.update({
            where:{
                id: doctorId,
            },
            data: {
                verificationStatus: status,
            }
        })

        revalidatePath("/admin");
        return {success : true};
    }
    catch(error){
        console.error("Failed to update doctor status", error);
        return {success : false};
    
    }
}

export async function updateDoctorActiveStatus(formData : FormData){
    const isAdmin = await verifyAdmin();

    if(!isAdmin){
        throw new Error("Unauthorized");
    }

    const doctorId = formData.get("doctorId") as string;
    const suspend = formData.get("suspend") === "true";

    try{
        const status = suspend ? "PENDING": "VERIFIED";

        await db.user.update({
            where:{
                id: doctorId,
            },
            data:{
                verificationStatus : status,
            }
        })

        revalidatePath("/admin");
        return {success : true};
    }
    catch(error){
        console.log(error);
    }

    
}