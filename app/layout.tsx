import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import BottomNavigation from "@/components/custom/botton-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Books as Reels",
  description:
    "Get the gist of great books in captivating reels. Perfect for bookworms on the go!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  );
}
