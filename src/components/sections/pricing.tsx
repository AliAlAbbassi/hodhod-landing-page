import React from "react";
import { Check } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

export const Pricing = () => {
  const includes = [
    "5 LinkedIn accounts managed",
    "Unlimited prospect research",
    "Custom messaging sequences",
    "Daily campaign management",
    "Inbox management & replies",
    "Weekly strategy calls",
  ];

  return (
    <section className="py-24 border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Simple pricing
          </h2>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-xl">
          <div className="p-8 md:p-12 text-center bg-neutral-900 text-white">
            <h3 className="text-2xl font-bold mb-4">Monthly Plan</h3>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold">$4,999</span>
              <span className="text-neutral-400">/mo</span>
            </div>
            <p className="text-neutral-400 text-sm">
              3 month minimum. No lock-in after.
            </p>
          </div>

          <div className="p-8 md:p-12 bg-white">
            <div className="flex flex-col gap-5 mb-10">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-20 text-center">
              <p className="font-bold text-indigo-900 mb-1">Guarantee</p>
              <p className="text-indigo-700 text-sm">
                10+ meetings in 90 days or we work for free until you get them.
              </p>
            </div>

            <Link href="/book" className="w-full">
              <ShimmerButton className="w-full h-20 shadow-2xl">
                <span className="whitespace-nowrap text-center text-xl font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-2xl">
                  Book Demo
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
