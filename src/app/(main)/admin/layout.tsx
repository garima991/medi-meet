import React from "react";
import { verifyAdmin } from "@/actions/admin";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin Settings - MediConnect",
  description: "Manage doctors, patients, and platform settings",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = await verifyAdmin();

  if (!isAdmin) {
    redirect("/onboarding");
  }

  return (
    <div>{children}</div>
  );
}
