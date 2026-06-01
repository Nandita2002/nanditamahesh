import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Nandita Mahesh",
    template: "%s | Nandita Mahesh",
  },
  description:
    "Personal website of Nandita Mahesh.",
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