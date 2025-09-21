import { cn } from "@/lib/utils";

export const Main = ({ className, children, ...props }: React.ComponentProps<"main">) => {
  return (
    <main className={cn("max-w-site mx-auto flex w-full grow flex-col", className)} {...props}>
      {children}
    </main>
  );
};
