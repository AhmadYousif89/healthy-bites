import { Skeleton } from "@/components/ui/skeleton";

export function RecipesSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <RecipeCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function RecipeCardSkeleton() {
  return (
    <Skeleton className="bg-card flex flex-col gap-4 rounded p-2" aria-hidden="true">
      <div className="grid gap-4">
        <Skeleton className="aspect-square max-h-[450px]" />
        <div className="space-y-4 px-2">
          <div className="space-y-2.5">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      </div>
      <Skeleton className="h-12 w-full rounded-full" />
    </Skeleton>
  );
}
