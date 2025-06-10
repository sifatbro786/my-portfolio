import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Solaiman Sifat",
    description: "This is Solaiman Sifat's portfolio website.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${outfit.className}`}>{children}</body>
        </html>
    );
}
