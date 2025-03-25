import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chudi's Blog",
  description:
    "Explore Chukwudi Peter Ofoma's journey in software development, UI/UX design, and emerging tech. Learn, build, and grow with insights on coding, problem-solving, and the latest industry trends.",
  keywords: [
    "Chudi Ofoma",
    "Software Development",
    "Tech Blog",
    "Web Development",
    "Frontend Engineer",
    "Next.js",
    "React",
    "JavaScript",
    "UI/UX Design",
    "Programming",
    "Tech Insights",
    "Software Engineering",
  ],
  openGraph: {
    title: "Chudi's Blog | Tech, Development & Growth",
    description:
      "Follow Chukwudi Peter Ofoma's blog on software engineering, web development, and tech insights.",
    url: "https://chudi.vercel.app/blog",
    siteName: "Chudi's Blog",
    images: [
      {
        url: "https://chudi.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chudi's Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chudi's Blog | Tech, Development & Growth",
    description:
      "Explore software development, UI/UX, and the latest trends with Chukwudi Peter Ofoma.",
    images: ["https://chudi.vercel.app/og-image.png"],
  },
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ico/favicon.ico" sizes="any" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/ico/favicon-light.ico" sizes="any" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
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
                    href="/"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
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
