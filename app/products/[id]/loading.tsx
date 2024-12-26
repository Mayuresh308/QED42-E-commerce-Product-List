export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square bg-muted animate-pulse rounded-lg" />
        <div className="space-y-4">
          <div className="h-8 bg-muted animate-pulse rounded w-3/4" />
          <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
          <div className="h-6 bg-muted animate-pulse rounded w-1/4" />
          <div className="h-24 bg-muted animate-pulse rounded" />
          <div className="h-10 bg-muted animate-pulse rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}