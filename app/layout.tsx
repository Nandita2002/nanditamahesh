import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nanditamahesh.xyz"),

  title: {
    default: "Nandita Mahesh",
    template: "%s | Nandita Mahesh",
  },

  description:
    "Personal website of Nandita Mahesh. Software Engineer exploring software engineering, artificial intelligence, business intelligence, web development, and emerging technologies.",

  keywords: [
    "Nandita Mahesh",
    "Software Engineer",
    "Web Developer",
    "Artificial Intelligence",
    "Business Intelligence",
    "Java Developer",
    "Portfolio",
  ],

  authors: [{ name: "Nandita Mahesh" }],

  creator: "Nandita Mahesh",

  openGraph: {
    title: "Nandita Mahesh",
    description:
      "Personal website of Nandita Mahesh.",
    url: "https://nanditamahesh.xyz",
    siteName: "Nandita Mahesh",
    locale: "en_US",
    type: "website",
  },

  verification: {
    google:
      "51UzXZJh9Dw8QAis8F-e_eLoiZ-shHdew_hexblbGfg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}