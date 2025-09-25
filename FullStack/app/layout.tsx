import type { Metadata } from "next";
import { Work_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";

const workSans = Work_Sans({
});



export const metadata: Metadata = {
  title: "Career Guider",
  description: "Your AI-Powered Career Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${workSans.className} antialiased`}
      >
            {children}
      </body>
    </html>
  );
}
