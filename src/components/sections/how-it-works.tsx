import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HowItWorks() {
  const data = [
        {
          title: "Step 1",
          content: (
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We learn your ICP</h3>
              <p className="text-neutral-600 text-base md:text-lg font-normal mb-8">
                You fill out a questionnaire. We research your ideal customer — their pain points, motivations, what makes them reply. (Day 1-2)
              </p>
            </div>
          ),
        },
        {
          title: "Step 2",
          content: (
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We set up your infrastructure</h3>
              <p className="text-neutral-600 text-base md:text-lg font-normal mb-8">
                We configure your LinkedIn accounts, warm them up properly, and set up tracking. No risk to your accounts. (Day 3-5)
              </p>
            </div>
          ),
        },
        {
          title: "Step 3",
          content: (
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We build lists and write sequences</h3>
              <p className="text-neutral-600 text-base md:text-lg font-normal mb-8">
                We find prospects using buying signals — job changes, funding rounds, tech stack, hiring patterns. Then we write messages that don't sound like every other SDR. (Day 5-7)
              </p>
            </div>
          ),
        },
        {
          title: "Step 4",
          content: (
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">We run everything, you take meetings</h3>
              <p className="text-neutral-600 text-base md:text-lg font-normal mb-8">
                Campaigns go live. We handle connections, follow-ups, conversations. Qualified prospects land on your calendar. You close. (Day 7+)
              </p>
            </div>
          ),
        },
  ];

  return (
    <section className="py-24 border-y border-neutral-200" id="how-it-works">
      <div className="w-full">
        <div className="max-w-5xl mx-auto px-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Here's exactly what we do
          </h2>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
}
