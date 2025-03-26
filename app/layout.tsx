import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

import { IBM_Plex_Mono } from "next/font/google";

const typewriter = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Adjust weight as needed
  display: "swap",
});

export const metadata = {
  title: "Chudi's Blog",
  description:
    "Explore Chukwudi Peter Ofoma's journey in software development, UI/UX design, and emerging tech. Learn, build, and grow with insights on coding, problem-solving, and the latest industry trends.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/ico/favicon.ico"
          sizes="any"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/ico/favicon-light.ico"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`antialiased min-h-screen ${typewriter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header className="w-full border-b border-muted/50 bg-background">
              <div className="container flex items-center justify-between py-4">
                <Link href="/" className="text-lg font-semibold">
                  Chudi.dev
                </Link>
                <nav className="flex items-center gap-6 text-sm font-medium">
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="https://chudi.vercel.app/"
                    className="hover:text-primary transition-colors"
                  >
                    Portfolio
                  </Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
