import { cn } from "@/lib/utils";

export const Section = ({ className, children, ...props }: React.ComponentProps<"section">) => {
  return (
    <section className={cn("site:px-0 w-full px-4 md:px-8 lg:px-15", className)} {...props}>
      {children}
    </section>
  );
};
