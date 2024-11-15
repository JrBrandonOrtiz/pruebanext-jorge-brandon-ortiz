"use client";

import Sidebar from "@/ui/organisms/sidebar/Sidebar";
import AuthGuard from "./guard/authGuard";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {

    return(
        <>
            <AuthGuard>
                <Sidebar/>
                {children}
            </AuthGuard>
        </>
    )
}