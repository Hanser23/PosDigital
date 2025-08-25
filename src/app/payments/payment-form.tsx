'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/cart-context';

const formSchema = z.object({
  cardName: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  cardNumber: z.string().refine((value) => /^\d{16}$/.test(value), {
    message: 'El número de tarjeta debe tener 16 dígitos.',
  }),
  expiryDate: z.string().refine((value) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(value), {
    message: 'La fecha de expiración debe tener el formato MM/AA.',
  }),
  cvc: z.string().refine((value) => /^\d{3,4}$/.test(value), {
    message: 'El CVC debe tener 3 o 4 dígitos.',
  }),
});

export function PaymentForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { totalPrice, cart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        toast({
            title: '¡Pago Exitoso!',
            description: `Su pago de $${(totalPrice * 1.08).toFixed(2)} ha sido procesado.`,
        });206
        
        router.push('/dashboard');
    }, 2000);
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="cardName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre en la Tarjeta</FormLabel>
              <FormControl>
                <Input placeholder="Juan Pérez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Tarjeta</FormLabel>
              <FormControl>
                <Input placeholder="****************" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de Expiración</FormLabel>
                <FormControl>
                  <Input placeholder="MM/AA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVC</FormLabel>
                <FormControl>
                  <Input placeholder="123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <CreditCard className="mr-2 h-4 w-4" />
          )}
          Pagar ${(totalPrice * 1.08).toFixed(2)}
        </Button>
      </form>
    </Form>
  );
}
