import type { Metadata } from "next";
import {FloatingNavbar} from "@/components/FloatingNavbar";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/Navbar";





export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"bg-background"}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark']}
      >
        <Navbar/>
        {children}
      </ThemeProvider>
    </main>
  );
}
