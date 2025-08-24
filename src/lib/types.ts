export interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
  itbs: number;
  photo: string;
  stock: number;
  categories: number;
  catgName: string;
  statusProd: string;
  barCode: number;
  priceAcq: number;
  createDate: string;
  unitMea: string;
  rating: number;
  'data-ai-hint'?: string; // Opcional para sugerencias AI
}


export interface CartItem extends Product {
  quantity: number;
}
