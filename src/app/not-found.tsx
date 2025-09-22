import { H1 } from "@/components/layout/headers";
import { P1 } from "@/components/layout/paragraphs";

export default function NotFound() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-4 px-4 text-center">
      <H1>404 - Page Not Found</H1>
      <P1 className="font-semibold">Oops! The page you're looking for doesn't exist.</P1>
    </div>
  );
}
