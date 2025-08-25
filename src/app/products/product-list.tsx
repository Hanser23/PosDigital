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
import { useEffect, useState } from 'react';

export function ProductList({ products }: { products: Product[] }) {
  const { addToCart } = useCart();
  const { toast } = useToast();
const [productlocal, setProductlocal] = useState<Product[]>([{
    productId: 0,
    name: "",
    description: "",
    price: 0,
    itbs: 0,
    photo: "",
    stock: 0,
    categories: 0,
    catgName: "",
    statusProd: "",
    barCode: 0,
    priceAcq: 0,
    createDate: "",
    unitMea: "",
    rating: 0,
    "data-ai-hint": undefined, // opcional
  }]);  

  const handlManageStock= (productId: Number, type: String) =>{
setProductlocal((prev) =>
    prev.map((p) =>
      p.productId === productId
        ? {
            ...p,
            stock:
              type === "Menos"
                ? Math.max(p.stock - 1, 0)
                : p.stock + 1,
          }
        : p
    )
  );
    /*
    if (type = 'Menos'){
      setProductlocal((prev) => ({
        ...prev,
        stock: Math.max(prev.stock - 1, 0),
      }));

    }else{
      setProductlocal((prev)=>({
        ...prev,
        stock: Math.max(prev.stock + 1, 0)
      }))
    }*/
  }
const handleAddToCart = (product: Product) => {
  // Calcula el nuevo stock
  const updatedStock = productlocal.find(p => p.productId === product.productId)?.stock ?? 0;
  const newStock = Math.max(updatedStock - 1, 0);

  // Actualiza el estado
  handlManageStock(product.productId, "Menos");

  // Usa el stock ya calculado
  toast({
    title: "Added to cart",
    description: `${product.name} has been added. Stock restante: ${newStock}`,
  });

  addToCart(product);
};
useEffect(() => {
  setProductlocal(products); 
}, [products]);

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
            <span className="badge text-sm-primary">  
              {product.catgName}
            </span>
            </CardFooter>
          <CardFooter className="flex items-center justify-between">
            <p className="text-xl font-bold">
              ${product.price}
            </p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleAddToCart(product)}
            > 
              <ShoppingCart className="mr-2 h-4 w-4" />
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
