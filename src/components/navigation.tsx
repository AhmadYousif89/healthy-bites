import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import Logo from "public/assets/images/icons/logo.svg";
import MenuIcon from "public/assets/images/icons/icon-hamburger-menu.svg";

type NavigationAreaProps = {
  pathname: string;
};

const PATHS = ["/", "/about", "/recipes"] as const;

export const NavigationArea = ({ pathname }: NavigationAreaProps) => {
  return (
    <header className="border-b border-neutral-300">
      <nav className="max-w-site mx-auto flex items-center justify-between p-4 md:p-8 md:pb-5 lg:px-15 lg:py-5">
        <Link href="/" className="">
          <Logo />
        </Link>
        <div className="hidden grow lg:grid">
          <ul className="tracking-neg-03 flex items-center justify-center gap-10 text-sm leading-150 font-semibold">
            {PATHS.map((path) => (
              <li
                key={path}
                className={cn(
                  "hover:border-orange h-6.5 min-w-12.5 border-b-2 border-transparent hover:border-b-2",
                  pathname === path ? "border-orange border-b-2" : "",
                )}
              >
                <Button asChild variant="link" className="rounded-4 size-auto p-px">
                  <Link href={path}>
                    {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button asChild className="ml-23.25 hidden h-13 w-41.75 lg:inline-flex">
          <Link href="/recipes">Browse Recipes</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              "rounded-4 bg-accent flex size-10 cursor-pointer items-center justify-center outline-none lg:hidden",
              "focus-visible:ring-primary focus-visible:ring-2",
            )}
          >
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="p-2 md:w-[704px]">
            <DropdownMenuItem asChild className={pathname === "/" ? "bg-accent/25" : ""}>
              <Link href="/" className="rounded-8 min-w-[327px] px-2 py-3">
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={pathname === "/about" ? "bg-accent/25" : ""}>
              <Link href="/about" className="rounded-8 min-w-[327px] px-2 py-3">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className={pathname === "/recipes" ? "bg-accent/25" : ""}>
              <Link href="/recipes" className="rounded-8 min-w-[327px] px-2 py-3">
                Recipes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button asChild className="mt-2.5 h-13 w-full">
                <Link
                  href="/recipes"
                  className="focus:bg-primary/90 focus:text-primary-foreground w-full"
                >
                  Browse Recipes
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};
