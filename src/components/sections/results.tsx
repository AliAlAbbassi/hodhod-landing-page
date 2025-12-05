import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

export const Results = () => {
  const results = [
    {
      metric: "+14 meetings in 47 days",
      company: "Series A dev tools startup",
    },
    { metric: "+9 meetings in 30 days", company: "DevOps platform" },
    {
      metric: "$180K pipeline generated",
      company: "API infrastructure company",
    },
  ];

  return (
    <section className="py-24 border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Results from dev tools companies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <GlowingStarsBackgroundCard key={index}>
              <GlowingStarsTitle>{item.company}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>{item.metric}</GlowingStarsDescription>
                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 8.625L6 13.125L13.5 1.875"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </GlowingStarsBackgroundCard>
          ))}
        </div>
      </div>
    </section>
  );
};
