'use client';

import Image from 'next/image';
import { useCart } from '@/contexts/cart-context';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ProductList({ products }: { products: Product[] }) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <Card key={product.productId} className="flex flex-col">
          <CardHeader>
            <div className="relative aspect-video w-full">
              <Image
                src={product.photo}
                alt={product.name}
                fill
                unoptimized
               /* className="rounded-t-lg object-cover"
                data-ai-hint={product['data-ai-hint']}*/
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="mt-2 text-sm">
              {product.description}
            </CardDescription>
          </CardContent>
                    
          <CardFooter className="flex items-center justify-between">
            <span className="badge text-bg-primary">Primary</span>

            <p className="text-sm font-bold">
              {product.catgName}
            </p>
            </CardFooter>
          <CardFooter className="flex items-center justify-between">
            <p className="text-xl font-bold">
              ${product.price}
            </p>
<button
  type="button"
  className="btn btn-success"
  onClick={() => handleAddToCart(product)}
>              <ShoppingCart className="mr-2 h-4 w-4" />
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
