'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { Button } from '../ui/button';

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Store
        </Link>
        <Link href="/cart">
          <Button variant="ghost" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
}