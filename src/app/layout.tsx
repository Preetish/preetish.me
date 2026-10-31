import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://preetish.me"),
  title: "Preetish Panda — Engineer-turned Growth Leader",
  description:
    "Engineer-turned growth leader. I build growth systems for tech and AI-native companies, along with open-source MarTech tools and published research on marketing.",
  authors: [{ name: "Preetish Panda", url: "https://preetish.me" }],
  creator: "Preetish Panda",
  keywords: [
    "Preetish Panda",
    "Growth Marketing",
    "Head of Growth",
    "Director of Growth",
    "Product Marketing",
    "GTM Strategy",
    "Bettermode",
    "Passage",
    "Switchboard",
    "Marketing Attribution",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://preetish.me",
    title: "Preetish Panda — Engineer-turned Growth Leader",
    description:
      "Engineer-turned growth leader. Building growth systems, open-source tools, and marketing research.",
    siteName: "Preetish Panda",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Preetish Panda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preetish Panda — Engineer-turned Growth Leader",
    description:
      "Engineer-turned growth leader. Building growth systems, open-source tools, and marketing research.",
    creator: "@Pr33tish",
    images: ["/images/avatar.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${newsreader.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  if (stored === 'dark' || stored === 'light') {
                    document.documentElement.setAttribute('data-theme', stored);
                  } else {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
