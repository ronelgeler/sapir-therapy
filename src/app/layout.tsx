import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "נועם ספיר | רפלקסולוגית גוף-נפש | נס המגע",
  description: "הזמנה לטיפול בקליניקת 'נס המגע' – מרחב בטוח ושקט שבו הגוף שלך מקבל את תשומת הלב המגיעה לו. נועם ספיר, רפלקסולוגית בגישת גוף-נפש.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-sand-50 text-rose-900">
        {children}
      </body>
    </html>
  );
}