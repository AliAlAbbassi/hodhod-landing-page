import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

export function WhyUs() {
  const points = [
    {
      title: "AI does the research",
      description: "Every prospect gets researched — their role, company, tech stack, what they post about. No generic templates.",
    },
    {
      title: "Experts run the campaigns",
      description: "A dedicated Hodhod expert manages your outreach daily. Not a bot. Not you. Us.",
    },
    {
      title: "We only do dev tools",
      description: "We understand your buyers because we are your buyers. No generic B2B playbook.",
    },
    {
      title: "Engineers writing to engineers",
      description: "Your messages won't sound like desperate SDR spam. They'll sound like a peer reaching out.",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Why this works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {points.map((point, index) => (
            <GlowingStarsBackgroundCard key={index}>
              <GlowingStarsTitle>{point.title}</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  {point.description}
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          ))}
        </div>
      </div>
    </section>
  );
}
