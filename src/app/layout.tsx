import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erika Lira",
  description:
    "Software engineering portfolio focused on fullstack, backend, cloud, DevOps, and applied AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-white pt-20 text-black dark:bg-gray-950 dark:text-white">
          <div className="w-full">
            <Menu />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
