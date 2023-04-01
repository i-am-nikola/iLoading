import Script from "next/script";
import React from "react";
import Header from "./Header";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Script src="/js/globals.js" />
            <Header />
            <main className="mx-auto">{children}</main>
        </>
    );
};

export default ClientLayout;
