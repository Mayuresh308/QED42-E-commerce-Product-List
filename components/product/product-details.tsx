'use client';

import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { ProductImage } from './product-image';
import { ProductRating } from './product-rating';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductImage src={product.image} alt={product.title} />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="mb-4">
            <ProductRating rate={product.rating.rate} count={product.rating.count} />
          </div>
          <div className="text-3xl font-bold mb-4">
            ${product.price.toFixed(2)}
          </div>
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          <div className="text-sm text-muted-foreground mb-6">
            Category: {product.category}
          </div>
          <Button
            size="lg"
            className="w-full md:w-auto"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}