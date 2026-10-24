import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build with Hami — Authentication Component",
  description: "Modern production-ready Next.js authentication component.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}