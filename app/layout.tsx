import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Binay Uppen Sharma | JavaScript & MERN Stack Developer",
  description:
    "JavaScript-first MERN stack developer. Explore SRM learning projects, proofs of concept, Accelerator AI contributions, and AI-assisted development workflows.",
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
