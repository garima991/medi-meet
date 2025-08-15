'use server'

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";


// Set the user's role and related information

export async function setUserRole(formData : FormData){
  const {userId} = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // find user from db
  const user = await db.user.findUnique({
    where : {
      clerkUserId : userId,
    }
  });

  if(!user){
    throw new Error("User not found");
  }

  const role = formData.get("role");

  try{
    // for patient role
    if(role === "PATIENT"){
      await db.user.update({
        where:{
          clerkUserId : userId,
        },
        data : {
          role: "PATIENT",
        }
      });

      revalidatePath("/");
      return {success : true, redirect: "/doctors"};
    }

    // for doctor role
    if (role === "DOCTOR") {
      const speciality = formData.get("speciality") as string;
      const experienceVal = formData.get("experience") as string;
      const credentialUrl = formData.get("credentialUrl") as  string;
      const description = formData.get("description") as string; 

      const experience = parseInt(experienceVal);

      // input validation
      if (!speciality || !experience || !credentialUrl || !description) {
        throw new Error("All fields are required");
      }


      await db.user.update({
        where: {
          clerkUserId: userId,
        },
        data: {
          role: "DOCTOR",
          speciality,
          experience,
          credentialUrl,
          description,
          verificationStatus: "PENDING",
        },
      });

      revalidatePath("/");
      return { success: true, redirect: "/doctor/verification"};
    }
  }
   catch (error : any) {
    console.error("Failed to set user role:", error);
    throw new Error(`Failed to update user profile: ${error.message}`);
  }

}



// Get current users complete profile info

export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  try {
    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    return user;
  } catch (error) {
    console.error("Failed to get user information:", error);
    return null;
  }
}