import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fantasy Command Center",
  description: "Personal fantasy football analytics and decision-support dashboard.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/fcc-icon.svg" },
  appleWebApp: {
    capable: true,
    title: "Fantasy CC",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
