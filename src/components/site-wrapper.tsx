"use client";

import { usePathname } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export function SiteWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdminRoute && <Header />}
      <div className="flex-1">{children}</div>
      {!isAdminRoute && <Footer />}
    </div>
  );
}
