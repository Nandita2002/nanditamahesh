import type { Metadata } from "next";
import "./globals.css";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.nanditamahesh.xyz"),

  title: {
    default: "Nandita Mahesh",
    template: "%s | Nandita Mahesh",
  },

  description:
    "Building, learning and documenting the journey. Personal website of Nandita Mahesh — Software Engineer, MBA Student, Product Builder and Active Learner.",

  keywords: [
    "Nandita Mahesh",
    "Software Engineer",
    "MBA Student",
    "Business Intelligence",
    "Web Developer",
    "Product Builder",
    "Active Learner",
    "Portfolio",
    "Technology",
    "Writing",
  ],

  authors: [
    {
      name: "Nandita Mahesh",
    },
  ],

  creator: "Nandita Mahesh",

  openGraph: {
    title: "Nandita Mahesh",
    description:
      "Building, learning and documenting the journey.",
    url: "https://www.nanditamahesh.xyz",
    siteName: "Nandita Mahesh",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nandita Mahesh",
    description:
      "Building, learning and documenting the journey.",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "51UzXZJh9Dw8QAis8F-e_eLoiZ-shHdew_hexblbGfg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
    
<Navbar />
        <main>{children}
        </main>

        <Footer />
      </body>
    </html>
  );
}