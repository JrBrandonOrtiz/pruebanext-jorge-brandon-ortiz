import { Roboto } from "next/font/google"; 
import type { Metadata } from "next";
import '../styles/globals.scss';
import { AuthProvider } from "./auth-provider";

export const metadata: Metadata = {
    title: "Transport Solutions S.A",
    description: "Your one stop solution for all your transport needs",
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: "100"
}); 

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={roboto.className}> {/* Usa la clase de la fuente Roboto */}
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
