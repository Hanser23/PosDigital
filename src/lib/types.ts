export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  'data-ai-hint'?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
