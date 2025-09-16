"use client";

import { usePathname } from "next/navigation";

import { NavigationArea } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={cn(
        "flex flex-col",
        "max-w-site relative mx-auto w-full grow",
        "bg-[size:100%] bg-[0px_30rem] bg-no-repeat lg:bg-[0px_24rem]",
        isHome && "bg-[url('/assets/images/icons/pattern-squiggle-1.svg')]",
      )}
    >
      <NavigationArea pathname={pathname} />
      <div className="max-w-container mx-auto">{children}</div>
      <Footer />
    </main>
  );
};
