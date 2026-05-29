import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AgentForge — AI-Powered Browser Automation Agent",
  description:
    "Automate browser tasks with natural language. Search, scrape, login, fill forms, and more — all with a single command.",
  keywords: [
    "browser automation",
    "AI agent",
    "web scraping",
    "auto login",
    "form filling",
  ],
  openGraph: {
    title: "AgentForge — AI-Powered Browser Automation Agent",
    description:
      "Automate browser tasks with natural language. One command away.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased noise-overlay`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          {children}
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#18181b",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "0.75rem",
              fontSize: "0.875rem",
            },
          }}
        />
      </body>
    </html>
  );
}
