import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MEDINA EKONOMI — Masyarakat Ekonomi Digital Nasional",
  description:
    "Mesin ekonomi smart city nasional. Digitalisasi Pajak, OPD, dan Birokrasi Perijinan dalam satu ekosistem data terpadu. Mewujudkan pemerintahan tanpa kabut, pajak tanpa antre, perizinan tanpa paper.",
  keywords: [
    "MEDINA",
    "Masyarakat Ekonomi Digital Nasional",
    "Smart City",
    "Ekonomi Digital",
    "Digitalisasi Pajak",
    "Digitalisasi OPD",
    "Digitalisasi Perijinan",
    "Pemerintahan Digital",
  ],
  authors: [{ name: "MEDINA EKONOMI" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "MEDINA EKONOMI — Masyarakat Ekonomi Digital Nasional",
    description:
      "Mesin ekonomi smart city nasional. Pajak, OPD, Perijinan dalam satu ekosistem data.",
    siteName: "MEDINA EKONOMI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDINA EKONOMI",
    description: "Mesin ekonomi smart city nasional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
