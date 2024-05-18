import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ace",
    description: "Your companion to keep track of scores and matches.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <GoogleOAuthProvider clientId="248529645466-u2dodv7buk5ai21312vsfsir0mkntuis.apps.googleusercontent.com">
                <body className={inter.className}>{children}</body>
            </GoogleOAuthProvider>
        </html>
    );
}
