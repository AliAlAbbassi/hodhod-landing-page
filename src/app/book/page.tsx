import { BookDemoForm } from "@/components/book-demo-form";
import { DotBackground } from "@/components/ui/dot-background";
import Link from "next/link";
import Image from "next/image";

export default function BookPage() {
  return (
    <>
      <DotBackground />
      <main className="min-h-screen relative flex flex-col items-center justify-center py-20">
        <div className="absolute top-8 left-8 z-50">
          <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 hover:opacity-70 transition-opacity">
            HODHOD STUDIOS
          </Link>
        </div>
        <div className="absolute top-8 right-8 z-50">
          <Image
            src="/transparent.png"
            alt="Hodhod Studios Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <BookDemoForm />
      </main>
    </>
  );
}
