import React from "react";

const stats = [
  { number: "47%", label: "connection acceptance rate" },
  { number: "12", label: "avg meetings booked per month" },
  { number: "7", label: "days to first campaign live" },
];

export function ProofBar() {
  return (
    <section className="w-full border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                {stat.number}
              </span>
              <span className="text-sm md:text-base font-medium text-neutral-500 uppercase tracking-wide text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
