import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://binay-uppen-sharma-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Binay Uppen Sharma | JavaScript & MERN Developer",
    description:
      "Interfaces, APIs and AI workflows. Explore the work behind the code.",
    url: "/",
    type: "website",
  },
  title: "Binay Uppen Sharma | JavaScript & MERN Stack Developer",
  description:
    "JavaScript-first MERN stack developer. Explore SRM learning projects, proofs of concept, Accelerator AI contributions, and AI-assisted development workflows.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = { themeColor: "#5445e8" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/syne-display.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
