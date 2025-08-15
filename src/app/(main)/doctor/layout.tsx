import PageHeader from "@/components/page-header";
import { Stethoscope } from "lucide-react";

export const metadata = {title: "Doctor Dashboard - MediConnect",
    description : "Manage your appointments and availability"
}

const DoctorDashboard = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
        <div>
            <PageHeader icon={<Stethoscope/>} title="Doctor Dashboard" />
            {children}
        </div>
    )
}