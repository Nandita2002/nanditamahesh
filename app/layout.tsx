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
<meta name="google-site-verification" content="51UzXZJh9Dw8QAis8F-e_eLoiZ-shHdew_hexblbGfg" />

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