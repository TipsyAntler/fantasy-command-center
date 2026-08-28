import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";
import "./command-center.css";
import "./nav-polish.css";

export const metadata: Metadata = {
  title: "Fantasy Command Center",
  description: "Personal fantasy football analytics and decision-support dashboard.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/apple-icon",
    apple: "/apple-icon",
  },
  appleWebApp: {
    capable: true,
    title: "FFCC",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
