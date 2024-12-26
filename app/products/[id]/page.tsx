// import { Suspense } from 'react';
// import { ProductDetails } from '@/components/product/product-details';
// import { getProduct, getProducts } from '@/lib/api';

// export async function generateStaticParams() {
//   const products = await getProducts();
//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const product = await getProduct(params.id);

//   return (
//     <Suspense fallback={<ProductSkeleton />}>
//       <ProductDetails product={product} />
//     </Suspense>
//   );
// }

// function ProductSkeleton() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="aspect-square bg-muted animate-pulse rounded-lg" />
//         <div className="space-y-4">
//           <div className="h-8 bg-muted animate-pulse rounded w-3/4" />
//           <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
//           <div className="h-6 bg-muted animate-pulse rounded w-1/4" />
//           <div className="h-24 bg-muted animate-pulse rounded" />
//           <div className="h-10 bg-muted animate-pulse rounded w-1/3" />
//         </div>
//       </div>
//     </div>
//   );
// }









import { Suspense } from 'react';
import { ProductDetails } from '@/components/product/product-details';
import { getProduct, getProducts } from '@/lib/api';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function generateStaticParams() {
  const products: Product[] = await getProducts();
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails product={product} />
    </Suspense>
  );
}

function ProductSkeleton() {
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
