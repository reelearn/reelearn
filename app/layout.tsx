import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import BottomNavigation from "@/components/custom/botton-navigation";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Reelearn";
const APP_URL = "https://www.reelearn.ai/";
const APP_DESCRIPTION = "Books as reels";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME,
  title: {
    default: `${APP_NAME} - Home`,
    template: `${APP_NAME} - %s`,
  },
  description: APP_DESCRIPTION,
  verification: {
    google: "",
  },
  manifest: "/manifest.json",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],

  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  // TODO open graph
  // openGraph: {
  //   type: "website",
  //   url: APP_URL,
  //   title: APP_NAME,
  //   description: APP_DESCRIPTION,
  //   siteName: APP_NAME,
  //   images: ["/images/open-graph.png"],
  // },

  // TODO: for google search console
  // other: {
  //   "google-site-verification": "",
  // },
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
