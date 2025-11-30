import React from "react";

export function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "We learn your ICP",
      description: "You fill out a questionnaire. We research your ideal customer — their pain points, motivations, what makes them reply.",
      timeline: "Day 1-2",
    },
    {
      step: 2,
      title: "We set up your infrastructure",
      description: "We configure your LinkedIn accounts, warm them up properly, and set up tracking. No risk to your accounts.",
      timeline: "Day 3-5",
    },
    {
      step: 3,
      title: "We build lists and write sequences",
      description: "We find prospects using buying signals — job changes, funding rounds, tech stack, hiring patterns. Then we write messages that don't sound like every other SDR.",
      timeline: "Day 5-7",
    },
    {
      step: 4,
      title: "We run everything, you take meetings",
      description: "Campaigns go live. We handle connections, follow-ups, conversations. Qualified prospects land on your calendar. You close.",
      timeline: "Day 7+",
    },
  ];

  return (
    <section className="py-24 border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Here's exactly what we do
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-bold text-lg">
                  {item.step}
                </span>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide bg-neutral-200/50 px-2 py-1 rounded">
                  {item.timeline}
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
