import { cn } from "@/utils/misc";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivo Mujo - Portfolio",
  description: "A Full-Stack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "dark:bg-slate-800")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
          <footer className="py-6 mt-12 text-sm font-light text-gray-500 flex justify-center items-center dark:text-gray-400">
            © 2023
            <a className="ml-1" href="https://github.com/imujo" target="_blank">
              Ivo Mujo
            </a>
            . All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
