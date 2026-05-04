import type { ReactNode } from "react";
import { sharedMetadata } from "@/app/seo";
import "../globals.css";

export const metadata = sharedMetadata;

export default function RootRedirectLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
