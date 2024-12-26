import { Star } from 'lucide-react';

interface ProductRatingProps {
  rate: number;
  count: number;
}

export function ProductRating({ rate, count }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
      <span className="text-lg">{rate}</span>
      <span className="text-muted-foreground">({count} reviews)</span>
    </div>
  );
}