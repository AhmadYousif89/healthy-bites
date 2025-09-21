"use client";

import { usePathname } from "next/navigation";

import { NavigationArea } from "@/components/navigation";
import { Footer } from "@/components/layout/footer";

type Props = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  return (
    <>
      <NavigationArea pathname={usePathname()} />
      {children}
      <Footer />
    </>
  );
};
