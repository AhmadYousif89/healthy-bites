import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "font-nunito",
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-12 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "focus-visible:ring-primary focus-visible:ring-[2px] focus-visible:ring-offset-2",
    "max-sm:active:border-primary max-sm:active:ring-primary max-sm:active:ring-[2px] max-sm:active:ring-offset-2",
    "cursor-pointer select-none",
  ],
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground text-md tracking-neg-05 leading-140 font-bold bg-primary hover:bg-neutral-800",
        link: "text-primary text-sm tracking-neg-03 leading-150 font-semibold rounded-[4px]",
      },
      size: {
        default: "h-15 w-49.5 px-8 py-4",
        sm: "h-8 gap-1.5 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
