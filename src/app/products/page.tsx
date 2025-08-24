'use client'; // Si estás usando Next.js 13+ App Router

import { AppLayout } from '@/components/app-layout';
import { ProductList } from './product-list';
import type { Product } from '@/lib/types';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://localhost:7011/api/Products') // URL de tu API
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener productos');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
        </div>

        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </AppLayout>
  );
}
