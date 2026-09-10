import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PullToRefresh from "@/components/PullToRefresh";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import "./globals.css";
import "./command-center.css";
import "./nav-polish.css";
import "./breaking-news.css";

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
        <PullToRefresh />
        <BreakingNewsTicker />
        <Nav />
        {children}
      </body>
    </html>
  );
}
