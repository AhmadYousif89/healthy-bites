import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Wrapper } from "./wrapper";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Healthy Bites",
  description: "Discover delicious and nutritious recipes for a healthier you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} ${nunito.variable} bg-background antialiased`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
