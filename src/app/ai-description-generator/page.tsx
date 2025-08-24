import { AppLayout } from '@/components/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GeneratorForm } from './generator-form';

export default function AiDescriptionGeneratorPage() {
  return (
    <AppLayout>
      <div className="flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Generador de Descripciones de Productos con IA</CardTitle>
            <CardDescription>
              Ingresa algunas palabras clave sobre tu producto y nuestra IA generará
              una descripción atractiva para ti.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GeneratorForm />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
