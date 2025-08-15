import React from "react";
import { Button } from "./ui/button";
import {
  Calendar,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  User,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Badge } from "./ui/badge";
import { checkUser } from "@/lib/checkUser";
import { checkAndAllocateCredits } from "@/actions/credit";

export default async function Header() {
  const user = await checkUser();
  if (user?.role === "PATIENT") {
    await checkAndAllocateCredits(user);
  }
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="glass-dark border-b border-white/10 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="hidden md:flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                MediConnect
              </span>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <SignedIn>
              {/* Admin Links */}
              {user?.role === "ADMIN" && (
                <Link href="/admin">
                  <Button
                    variant="glassPurple"
                    className="hidden md:inline-flex items-center gap-2"
                  >
                    <ShieldCheck className="h-4 w-4 text-purple-400" />
                    Admin Dashboard
                  </Button>
                  <Button variant="ghost" className="md:hidden w-10 h-10 p-0 glass-dark hover:bg-purple-500/10">
                    <ShieldCheck className="h-4 w-4 text-purple-400" />
                  </Button>
                </Link>
              )}

              {/* Doctor Links */}
              {user?.role === "DOCTOR" && (
                <Link href="/doctor">
                  <Button
                    variant="glassIndigo"
                    className="hidden md:inline-flex items-center gap-2"
                  >
                    <Stethoscope className="h-4 w-4 text-indigo-400" />
                    Doctor Dashboard
                  </Button>
                  <Button variant="ghost" className="md:hidden w-10 h-10 p-0 glass-dark hover:bg-indigo-500/10">
                    <Stethoscope className="h-4 w-4 text-indigo-400" />
                  </Button>
                </Link>
              )}

              {/* Patient Links */}
              {user?.role === "PATIENT" && (
                <Link href="/appointments">
                  <Button
                    variant="glassBlue"
                    className="hidden md:inline-flex items-center gap-2"
                  >
                    <Calendar className="h-4 w-4 text-blue-400" />
                    My Appointments
                  </Button>
                  <Button variant="ghost" className="md:hidden w-10 h-10 p-0 glass-dark hover:bg-blue-500/10">
                    <Calendar className="h-4 w-4 text-blue-400" />
                  </Button>
                </Link>
              )}

              {/* Unassigned Role */}
              {user?.role === "UNASSIGNED" && (
                <Link href="/onboarding">
                  <Button
                    variant="glassPurple"
                    className="hidden md:inline-flex items-center gap-2"
                  >
                    <User className="h-4 w-4 text-purple-400" />
                    Complete Profile
                  </Button>
                  <Button variant="ghost" className="md:hidden w-10 h-10 p-0 glass-dark hover:bg-purple-500/10">
                    <User className="h-4 w-4 text-purple-400" />
                  </Button>
                </Link>
              )}
            </SignedIn>

            {(!user || user?.role !== "ADMIN") && (
              <Link href={user?.role === "PATIENT" ? "/pricing" : "/doctor"}>
                <Badge
                  variant="glassPurple"
                  className="h-9 px-3 py-1 flex items-center gap-2"
                >
                  <CreditCard className="h-3.5 w-3.5 text-purple-400" />
                  <span className="text-purple-400 font-medium">
                    {user && user.role !== "ADMIN" ? (
                      <>
                        {user.credits}{" "}
                        <span className="hidden md:inline">
                          {user?.role === "PATIENT"
                            ? "Credits"
                            : "Earned Credits"}
                        </span>
                      </>
                    ) : (
                      <>Pricing</>
                    )}
                  </span>
                </Badge>
              </Link>
            )}

            <SignedOut>
              <SignInButton>
                <Button 
                  variant="glass" 
                  className="hover:bg-purple-500/10"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="glass-dark rounded-full p-1">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
}
