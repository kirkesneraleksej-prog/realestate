import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЭСТЕЙТ — Агентство недвижимости",
  description:
    "Профессиональное агентство недвижимости. Квартиры, дома, коммерческая недвижимость. Более 15 лет на рынке, 2000+ успешных сделок.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={poppins.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
