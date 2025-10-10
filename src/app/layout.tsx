import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kaarobot - Reduce COD Returns with Smart WhatsApp Confirmations",
  description: "Reduce e-commerce returns by up to 70% with WhatsApp order confirmations and AI chatbot support. Built for Pakistani Shopify stores. Start free trial today.",
  keywords: ["COD returns", "WhatsApp automation", "Shopify Pakistan", "e-commerce chatbot", "order confirmation"],
  openGraph: {
    title: "Kaarobot - Reduce COD Returns with Smart WhatsApp Confirmations",
    description: "Reduce e-commerce returns by up to 70% with WhatsApp order confirmations and AI chatbot support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
