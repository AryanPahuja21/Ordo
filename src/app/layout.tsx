import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ordo - Organize Work, Empower Teams",
  description:
    "Ordo is a simple, powerful project management tool that helps teams organize tasks, streamline workflows, and stay aligned. Bring clarity to your projects and achieve more with Ordo's intuitive, efficient platform.",
  icons: ["/logo.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <QueryProvider>
          <NuqsAdapter>
            <Toaster />
            {children}
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
