"use client";

export function SiteWrapper({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen flex-col">
      {header}
      <div className="flex-1">{children}</div>
      {footer}
    </div>
  );
}
