import { LayoutDashboard, Menu, Newspaper, PlusCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const AdminNav = () => (
  <nav className="grid items-start px-4 text-sm font-medium">
    <Link
      href="/admin"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <LayoutDashboard className="h-4 w-4" />
      Dashboard
    </Link>
    <Link
      href="/admin/new"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <PlusCircle className="h-4 w-4" />
      New Article
    </Link>
  </nav>
);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/admin" className="flex items-center gap-2 font-semibold">
              <Newspaper className="h-6 w-6 text-primary" />
              <span>Newsio Admin</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <AdminNav />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/admin" className="flex items-center gap-2 font-semibold">
                  <Newspaper className="h-6 w-6 text-primary" />
                  <span>Newsio Admin</span>
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <AdminNav />
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Can add search here if needed */}
          </div>
          <Button asChild variant="outline">
            <Link href="/">View Site</Link>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
