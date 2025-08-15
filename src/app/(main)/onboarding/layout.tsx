import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";


export const metadata = {
    title: "MediMeet",
    description: "Complete your profile to get started with MediMeet"
}

const OnboardingLayout = async ({ children }) => {

    const user = await getCurrentUser();
    if (user) {
        if (user.role === "PATIENT") {
            redirect("/doctors");
        }
        else if (user.role === "DOCTOR"){
            if (user.verificationStatus === "VERIFIED") {
                redirect("/doctor");
            }
            else {
                redirect("/doctor/verification");
            }
        } 
        else if(user.role === "ADMIN"){
            redirect("/admin");
        }
    }


    return (
        <div className="mx-auto px-4 py-18">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mt-10 mb-6">
                    <h1 className="text-3xl md:text-4xl gradient-title mb-2">Welcome to MediMeet !</h1>
                    <p className="text-muted-foreground text-lg">Tell us how you want to use the platform</p>
                </div>
            
            
            {children}
            </div>
            
        </div>
    )
}

export default OnboardingLayout;