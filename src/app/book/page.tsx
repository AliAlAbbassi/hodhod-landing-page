import { BookDemoForm } from "@/components/book-demo-form";
import { DotBackground } from "@/components/ui/dot-background";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center py-20">
      <DotBackground />
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 hover:opacity-70 transition-opacity">
          HODHOD STUDIOS
        </Link>
      </div>
      <BookDemoForm />
    </main>
  );
}
