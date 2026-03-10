import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Gharib | Principal Advanced Analytics Engineer",
  description: "Portfolio of Ahmed Gharib — Principal Advanced Analytics Engineer with 8+ years of experience in data engineering, analytics, and machine learning.",
  keywords: ["Data Engineer", "Analytics", "Machine Learning", "Power BI", "Azure", "Python"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
