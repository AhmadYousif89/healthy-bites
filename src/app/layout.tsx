import type { Metadata } from "next";
import { nunito, nunitoSans } from "@/lib/fonts";
import "./globals.css";
import { Wrapper } from "./wrapper";

export const metadata: Metadata = {
  title: "Healthy Bites",
  description: "Discover delicious and nutritious recipes for a healthier you.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "var(--neutral-100)", color: "var(--neutral-900)" }}
        className={`${nunitoSans.variable} ${nunito.variable} bg-background antialiased`}
      >
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
