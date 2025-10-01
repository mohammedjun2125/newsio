"use client";

import { usePathname } from 'next/navigation';

export function SiteWrapper({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="flex min-h-screen flex-col">
      {!isAdminRoute && header}
      <div className="flex-1">{children}</div>
      {!isAdminRoute && footer}
    </div>
  );
}
