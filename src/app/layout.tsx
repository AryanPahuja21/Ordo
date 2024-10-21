import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ordo - Organize Work, Empower Teams",
  description:
    "Ordo is a simple, powerful project management tool that helps teams organize tasks, streamline workflows, and stay aligned. Bring clarity to your projects and achieve more with Ordo's intuitive, efficient platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
