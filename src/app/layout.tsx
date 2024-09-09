import "~/styles/globals.css";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Shades | A new way to see colors",
  icons: {
    icon: "/favicon.ico",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased font-sans text-neutral-950 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
