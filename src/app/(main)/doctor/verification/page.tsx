import { getCurrentUser } from '@/actions/onboarding';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, ClipboardCheck, XCircle } from 'lucide-react';
import { redirect } from 'next/navigation';

import React from 'react'

const VerificationPage = async () => {

    const user = await getCurrentUser();

    // if already verified, redirect to dashboard
    if(user?.verificationStatus === "VERIFIED"){
        redirect("/doctor");
    }

    const isRejected = user?.verificationStatus === "REJECTED";


  return (
    <div>
        <div className="container mx-auto">
            <Card className="border-emerald-900/30">
            <CardHeader>
                <div className={`mx-auto p-4 ${isRejected ? "bg-red-900/20" : "bg-amber-900/20"} rounded-full mb-4 w-fit`}>
                {isRejected ? (
                    <XCircle className="h-8 w-8 text-red-500"/>
                ) : (
                    <ClipboardCheck className="h-8 w-8 text-amber-500"/>
                )}
                </div>
                 <CardTitle>
                {isRejected ? "Verification Declined" : "Verification in Progress"}
            </CardTitle>
            <CardDescription>
                {isRejected ? "Unfortunately, your application needs revision" : "Thank you for submitting your information"}
            </CardDescription>
            </CardHeader>
                <CardContent>
                    {isRejected ? (<div>
                        <AlertCircle/>
                    </div>) : (
                        <div>
                            
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default VerificationPage;