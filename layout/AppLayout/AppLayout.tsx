import React from "react";
import AppHeader from "@/layout/AppLayout/AppHeader";
import AppFooter from "@/layout/AppLayout/AppFooter";

export default function AppLayout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter/>
        </>
    )
}