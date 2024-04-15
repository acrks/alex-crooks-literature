import type { Metadata } from "next";
import { Inter, Manrope, Sora, Lexend, Questrial, Cabin } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { cx } from "../utils/index";
import AuthProvider from "../providers/AuthProvider";
import ThemeProvider from "../providers/ThemeProvider";
import { ThemeContextProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lx",
});
const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ca",
});
const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-qu",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Alex Crooks Literature",
  description: "A hub for all writings from Alex Crooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          cabin.variable,
          "font-ca bg-light dark:bg-dark"
        )}
      >
        <AuthProvider>
          <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
