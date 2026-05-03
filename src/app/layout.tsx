import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

const themeScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle(
      "dark",
      storedTheme ? storedTheme === "dark" : systemPrefersDark
    );
  } catch {
    document.documentElement.classList.remove("dark");
  }
})();
`;

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-app-canvas pt-20 text-foreground transition-colors duration-300">
          <div className="w-full">
            <Menu />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
