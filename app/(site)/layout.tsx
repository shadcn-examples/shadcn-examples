import { SiteHeader } from "@/components/site-header";
import React from "react";
import { SiteFooter } from "@/components/site-footer";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
