import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

// constants
const APP_NAME = "Reelearn";
const APP_URL = "https://www.reelearn.ai/";
const APP_DESCRIPTION = "Books as reels";

// metadata
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
  // manifest: "/manifest.json",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
