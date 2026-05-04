import type { ReactNode } from "react";
import { sharedMetadata } from "@/app/seo";
import "../globals.css";

export const metadata = sharedMetadata;

export default function DocLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
