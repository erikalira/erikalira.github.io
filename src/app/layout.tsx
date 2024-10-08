import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erika Lira",
  description: "Erika Lira's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center pt-20 bg-white dark:bg-gray-950 text-black dark:text-white">
          <div className="z-10 w-full font-mono lg:flex lg:flex-col font-bold  max-w-[1440px]">
            <Menu />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
