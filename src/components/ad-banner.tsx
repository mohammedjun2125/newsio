import { Megaphone } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function AdBanner() {
  return (
    <Card className="bg-muted">
      <CardContent className="flex aspect-square flex-col items-center justify-center p-6 text-center">
        <Megaphone className="h-12 w-12 text-muted-foreground/50" />
        <p className="mt-4 font-semibold text-muted-foreground">
          Advertisement
        </p>
        <p className="text-sm text-muted-foreground/80">
          Your ad could be here.
        </p>
      </CardContent>
    </Card>
  );
}
