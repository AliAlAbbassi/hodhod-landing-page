import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Novatrix from "@/components/ui/novatrix-background";

export const ProblemSolution = () => {
  return (
    <section className="relative py-24 border-y border-neutral-200 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Novatrix
          color={[1, 1, 1]}
          amplitude={0.9}
          mouseReact={true}
          speed={1.0}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full">
          <div className="col-span-1 bg-neutral-900 min-h-[300px] border border-neutral-800 relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/50 to-transparent pointer-events-none" />
            <div className="max-w-full relative z-10">
              <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                Here's the problem
              </h2>
              <div className="mt-4 text-left text-xl/8 text-neutral-300">
                <p className="mb-4">
                  Your SDRs send hundreds of LinkedIn messages every week. Most
                  get ignored. The ones that don't? Generic replies that go
                  nowhere.
                </p>
                <p>
                  Meanwhile, your ideal customers — engineering leaders at
                  companies that actually need your product — never hear from
                  you. Or worse, they get a message so generic they immediately
                  tune out.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-neutral-900 min-h-[300px] border border-neutral-800 relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/50 to-transparent pointer-events-none" />
            <div className="max-w-full relative z-10">
              <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                What if it worked like this
              </h2>
              <div className="mt-4 text-left text-xl/8 text-neutral-300">
                <p className="mb-4">
                  What if every prospect got a message that felt like it was
                  written just for them? Based on their role. Their company's
                  tech stack. What they're posting about. Their pain points.
                </p>
                <p>
                  What if an AI researched every single prospect — their
                  background, their company, what they care about — and crafted
                  outreach specifically for them? And what if a dedicated expert
                  managed everything — the targeting, the sequences, the replies
                  — so you just showed up to meetings?
                </p>
                <p className="font-bold text-white mt-4">
                  That's exactly what Hodhod does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
