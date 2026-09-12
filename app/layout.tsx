import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binay Uppen Sharma | Full-Stack & AI Engineer",
  description:
    "Full-stack and AI engineering portfolio with evidence-backed case studies in semantic analytics, RAG, and database systems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
