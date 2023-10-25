import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToolList from "@/app/components/common/ToolList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Toolbox",
  description: "Useful tools for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"w-full h-screen gap-4 flex"}>
          <ToolList />
          {children}
        </div>
      </body>
    </html>
  );
}
