import { AppLayout } from '@/components/app-layout';
import { ProductList } from './product-list';
import type { Product } from '@/lib/types';

const products: Product[] = [
{
  id: 1,
  name: 'Silla de Escritorio',
  description:
    'Una silla cómoda y con buen soporte, diseñada para largas horas de trabajo.',
  price: 299.99,
  image: 'https://tse4.mm.bing.net/th/id/OIP.nF_jHyeQfl1RHVlmfN0b4AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  'data-ai-hint': 'silla de oficina',
},
{
  id: 2,
  name: 'Teclado Mecánico Inalámbrico',
  description:
    'Un teclado táctil y sensible con iluminación RGB personalizable.',
  price: 149.99,
  image: 'https://telefonika.com/wp-content/uploads/2021/04/LOGITECH-G613-WIRLESS-MECHANICAL-GAMING-KEYBOARD_1.png',
  'data-ai-hint': 'teclado',
},
  {
  id: 3,
  name: 'Monitor 4K UHD',
  description:
    'Un impresionante monitor de 27 pulgadas con colores vibrantes y detalles nítidos.',
  price: 499.99,
  image: '/src/Util/Logo.png',
  'data-ai-hint': 'monitor de computadora',
},
{
  id: 4,
  name: 'Auriculares con Cancelación de Ruido',
  description: 'Sumérgete en el sonido con estos auriculares de alta gama.',
  price: 349.99,
  image: 'https://placehold.co/600x400',
  'data-ai-hint': 'auriculares',
},
{
  id: 5,
  name: 'Escritorio Ajustable de Pie',
  description:
    'Cambia entre estar sentado y de pie con este escritorio eléctrico de altura ajustable.',
  price: 599.99,
  image: 'https://placehold.co/600x400',
  'data-ai-hint': 'escritorio de pie',
},
{
  id: 6,
  name: 'Cámara Web HD',
  description: 'Una cámara web 1080p para videollamadas y transmisiones con gran claridad.',
  price: 89.99,
  image: 'https://placehold.co/600x400',
  'data-ai-hint': 'cámara web',
},
{
  id: 7,
  name: 'Estación de Acoplamiento',
  description:
    'Conecta todos tus periféricos con un solo cable USB-C. Incluye HDMI, Ethernet y puertos USB-A.',
  price: 129.99,
  image: 'https://placehold.co/600x400',
  'data-ai-hint': 'estación de acoplamiento',
},
{
  id: 8,
  name: 'Ratón Ergonómico',
  description:
    'Un ratón vertical diseñado para reducir la tensión en la muñeca durante largas sesiones de uso.',
  price: 79.99,
  image: 'https://placehold.co/600x400',
  'data-ai-hint': 'ratón de computadora',
}
];

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
        </div>
        <ProductList products={products} />
      </div>
    </AppLayout>
  );
}
