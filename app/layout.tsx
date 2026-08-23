import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua Placidi — Machine Learning Researcher",
  description: "Research, engineering, publications and writing by Joshua Placidi.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
