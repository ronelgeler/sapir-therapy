import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "נועם ספיר הדר | רפלקסולוגית גוף-נפש | נס המגע",
  description: "הזמנה לטיפול בקליניקת 'נס המגע' – מרחב בטוח ושקט שבו הגוף שלך מקבל את תשומת הלב המגיעה לו. נועם ספיר הדר, רפלקסולוגית בגישת גוף-נפש.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-sand-50 text-brand-900">
        {children}
      </body>
    </html>
  );
}