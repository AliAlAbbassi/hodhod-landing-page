import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import Novatrix from "@/components/ui/novatrix-background";

export function ProblemSolution() {
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
          <WobbleCard containerClassName="col-span-1 bg-white min-h-[300px] border border-neutral-200">
            <div className="max-w-md">
              <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-900">
                Here's the problem
              </h2>
              <div className="mt-4 text-left text-xl/8 text-neutral-700">
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
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 bg-white min-h-[300px] border border-neutral-200">
            <div className="max-w-md">
              <h2 className="text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-neutral-900">
                What if it worked like this
              </h2>
              <div className="mt-4 text-left text-xl/8 text-neutral-700">
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
                <p className="font-bold text-neutral-900 mt-4">
                  That's exactly what Hodhod does.
                </p>
              </div>
            </div>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
