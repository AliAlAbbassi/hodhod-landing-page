import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 tracking-tight">
          AI does the research. <br/> Experts run the campaigns. <br/> You take the meetings.
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 mb-24">
          10+ meetings in 90 days or you don't pay.
        </p>
        <Link href="/book">
          <ShimmerButton className="shadow-2xl h-24 px-16">
            <span className="whitespace-nowrap text-center text-2xl font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-4xl">
              Book a Call
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </section>
  );
}
