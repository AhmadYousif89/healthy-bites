import { cn } from "@/lib/utils";

export const Section = ({ className, children, ...props }: React.ComponentProps<"section">) => {
  return (
    <section
      className={cn("max-w-container mx-auto w-full px-4 md:px-8 lg:px-15 xl:px-0", className)}
      {...props}
    >
      {children}
    </section>
  );
};
