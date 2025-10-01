import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 border-b pb-4">
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="mt-4 h-6 w-1/4" />
      </header>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4 rounded-lg border p-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-8 w-5/6" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
