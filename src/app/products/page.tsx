'use client'; // Si estás usando Next.js 13+ App Router

import { AppLayout } from '@/components/app-layout';
import { ProductList } from './product-list';
import type { Product } from '@/lib/types';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [origproducts, setOrigproducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [valor, setValor] = useState("");
 

  useEffect(() => {
    fetch('https://localhost:7011/api/Products') // URL de tu API
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener productos');
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setOrigproducts(data)
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmitSearh = (words: string)=>{
    if (words.trim() !== ""){
          const productoserch = origproducts.filter((p)=>
      p.name.toLowerCase().includes(words.toLowerCase())
    )
    setProducts(productoserch); 
    }else {
  setProducts(origproducts);
    }
  };
  return (
    <AppLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
          <div className="input-group">
  <div className="form-outline" data-mdb-input-init>
                <Input placeholder="Buscador" 
                  value={valor}
                      onChange={(e) => {
                const nuevoValor = e.target.value;
                setValor(nuevoValor);
                handleSubmitSearh(nuevoValor); 
              }}
                />
  </div>
  <button type="button" className="btn btn-primary" onClick={()=>handleSubmitSearh(valor)} data-mdb-ripple-init>
  </button>
</div>
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
