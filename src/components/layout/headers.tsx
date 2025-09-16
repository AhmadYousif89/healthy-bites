import { cn } from "@/lib/utils";

export const H1 = ({ className, children, ...props }: React.ComponentProps<"h1">) => {
  return (
    <h1
      className={cn(
        "tracking-neg-2 text-4xl leading-110 font-extrabold md:text-5xl lg:text-6xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children, ...props }: React.ComponentProps<"h2">) => {
  return (
    <h2
      className={cn("tracking-neg-2 text-2xl leading-120 font-extrabold md:text-3xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children, ...props }: React.ComponentProps<"h3">) => {
  return (
    <h3 className={cn("tracking-neg-1 text-xl leading-130 font-bold", className)} {...props}>
      {children}
    </h3>
  );
};

export const H4 = ({ className, children, ...props }: React.ComponentProps<"h4">) => {
  return (
    <h4 className={cn("tracking-neg-1 text-lg leading-130 font-bold", className)} {...props}>
      {children}
    </h4>
  );
};
