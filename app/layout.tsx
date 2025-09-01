import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haris.dev – Portfolio",
  description: "Power Platform Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
