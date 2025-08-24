import { AppLayout } from "@/components/app-layout";
import { PaymentForm } from "./payment-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentsPage() {
    return (
        <AppLayout>
            <div className="flex justify-center">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Pago Seguro</CardTitle>
                        <CardDescription>Ingresa tus datos de pago para completar la compra.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PaymentForm />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}
