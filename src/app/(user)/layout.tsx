// styles
import "@/styles/globals.css";

// components
import BottomNavigation from "@/components/custom/BottomNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}
