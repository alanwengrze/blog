import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"
import { RadialHome } from "@/components/radial-home";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Wengrze blog",
  description: "Blog sobre programação e desenvolvimento tanto pessoal quanto profissional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <RadialHome />
          <Header />
          <section className="px-4 min-h-screen w-full noise lg:px-0">
            {children}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
