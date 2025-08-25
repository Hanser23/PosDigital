'use client';

import {
  CreditCard,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Sparkles,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCart } from '@/contexts/cart-context';
import { cn } from '@/lib/utils';
import {
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export function MainNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const menuItems = [
    {
      href: '/dashboard',
      label: 'Tablero',
      icon: LayoutDashboard,
    },
    {
      href: '/products',
      label: 'Productos',
      icon: Package,
    },
    {
      href: '/cart',
      label: 'Carrito de Compras',
      icon: ShoppingCart,
      badge: cartCount > 0 ? cartCount : undefined,
    },
    {
      href: '/payments',
      label: 'Pagos',
      icon: CreditCard,
    },
    {
      href: '/ai-description-generator',
      label: 'Generador IA',
      icon: Sparkles,
    },
  ];

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <SidebarMenuButton
              isActive={pathname === item.href}
              className="w-full"
            >
            <div className="relative inline-flex items-center">
              <div className="relative">
                <item.icon className="size-5" />
                {item.badge && (
                  <SidebarMenuBadge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {item.badge}
                  </SidebarMenuBadge>
                )}
              </div>
              <span className="ml-3">{item.label}</span>
            </div>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
