import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider"
import { Separator } from "@/components/ui/separator";

const robotoMono = Roboto_Mono({
  variable: "--font-robotoMono",
  subsets: ["latin"]
})
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
    <html lang="pt-br" className={`${roboto.variable} ${robotoMono.variable}` }>
      <body
        className="antialiased noise"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Header />
          {/* <Separator
            className="fixed bg-gradient-to-r from-blue-900 via-red-500 to-orange-300 animate-bounce"
          /> */}
          <section className="px-4 min-h-full h-full w-full">
            {children}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
