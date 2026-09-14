import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nithish | Systems & Software Engineer",
  description:
    "Portfolio of Nithish — Systems & Software Engineer specializing in high-performance CLI tools in Rust, cybersecurity defense, and low-level systems exploration in C.",
  keywords: [
    "Nithish",
    "Systems Engineer",
    "Software Engineer",
    "Rust CLI",
    "C Raylib",
    "Cybersecurity",
    "Internet Society of India",
    "Linux",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Nithish" }],
  openGraph: {
    title: "Nithish | Systems & Software Engineer",
    description:
      "High-performance CLI tools in Rust, cybersecurity defense at the Internet Society of India, and low-level systems exploration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
