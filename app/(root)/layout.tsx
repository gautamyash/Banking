import { Sidebar } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main className="">
    SIDEBAR
    {children}
  </main>
  );
}
