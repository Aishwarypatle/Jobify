import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { AuthProvider } from "@/service/auth-context";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobify",
  description: "Find Remote Jobs Easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
            <AuthProvider>
              {children}
              <ToastContainer 
                limit={4} 
                autoClose={2000}
                position="top-center"
                closeOnClick={true}
                theme="colored"
              />
            </AuthProvider>
          </Providers>
      </body>
    </html>
  );
}
