'use client';

import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { Card, CardContent, CardFooter } from './card';
import { Button } from './button';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card className="flex flex-col justify-between h-full">
      <CardContent className="pt-4">
        <div className="relative aspect-square mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{product.rating.rate}</span>
          <span className="text-muted-foreground">
            ({product.rating.count} reviews)
          </span>
        </div>
        <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
        <div className="text-sm text-muted-foreground mt-1">
          {product.category}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}