import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "ספיר הדר | רפלקסולוגית - מטפלת גוף נפש",
  description: "החזירו את הגוף והנפש לאיזון דרך טיפול רפלקסולוגיה מקצועי והוליסטי עם ספיר הדר.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fdfdfc] text-[#2d4931]">
        {children}
      </body>
    </html>
  );
}