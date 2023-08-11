import "./globals.css";
import { Inter } from "next/font/google";
import LeftSidebar from "@/lib/components/LeftSidebar/LeftSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className + " md:flex"}>
                <LeftSidebar />
                <main className="w-full p-3 lg:p-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
