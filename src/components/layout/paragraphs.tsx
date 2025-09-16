import { cn } from "@/lib/utils";

export const P1 = ({ className, children, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "tracking-neg-04 font-nunito-sans text-md leading-150 font-medium text-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const P2 = ({ className, children, ...props }: React.ComponentProps<"p">) => {
  return (
    <p
      className={cn(
        "tracking-neg-03 font-nunito-sans text-xs leading-150 font-medium text-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
