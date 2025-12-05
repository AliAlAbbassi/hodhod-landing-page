import React from "react";
import Novatrix from "@/components/ui/novatrix-background";

const stats = [
  { number: "47%", label: "connection acceptance rate" },
  { number: "12", label: "avg meetings booked per month" },
  { number: "7", label: "days to first campaign live" },
];

export function ProofBar() {
  return (
    <section className="relative w-full border-y border-neutral-200 overflow-hidden">
      {/* Novatrix Background Layer */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Novatrix
          color={[1, 1, 1]}
          amplitude={0.1}
          mouseReact={true}
          speed={0.25}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <span className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tighter">
                {stat.number}
              </span>
              <span className="text-xs md:text-sm font-semibold text-neutral-600 uppercase tracking-wide leading-tight max-w-[120px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
