import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./project-universe.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://binay-uppen-sharma-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Binay Uppen Sharma | Applied AI, MERN & Integrations",
    description:
      "Complex workflows, useful software. Explore SRM projects, AI analytics and JavaScript-led integrations.",
    url: "/",
    type: "website",
  },
  title: "Binay Uppen Sharma | Applied AI, MERN & Integrations",
  description:
    "JavaScript and MERN foundations, growing toward forward-deployed engineering. Explore Accelerator AI team contributions, SRM proofs of concept, integrations and tested AI workflows.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = { themeColor: "#090e1c" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}`,
          }}
        />
        <link
          rel="preload"
          href="/fonts/manrope-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
