'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export function GoBackButton() {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.back()} className="mb-8">
      <ChevronLeft className="mr-2 h-4 w-4" />
      Go Back
    </Button>
  );
}
