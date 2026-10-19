import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamoka.example"),
  title: {
    default: "MAMOKA LLC | Technology that moves business forward",
    template: "%s | MAMOKA LLC",
  },
  description:
    "MAMOKA LLC is a San Diego IT consulting partner for practical technology strategy, cloud, security, and modern operations.",
  keywords: ["IT consulting", "technology strategy", "San Diego", "cloud consulting", "MAMOKA LLC"],
  openGraph: {
    title: "MAMOKA LLC | IT consulting",
    description: "Clear strategy. Capable systems. Confident teams.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
