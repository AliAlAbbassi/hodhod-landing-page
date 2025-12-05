import React from "react";
import { Check } from "lucide-react";

export const WhatsIncluded = () => {
  const items = [
    "LinkedIn account setup & warmup",
    "ICP research & targeting",
    "Prospect list building (using buying signals)",
    "Custom message sequences (engineers writing to engineers)",
    "Daily campaign management",
    "Inbox management & conversation handling",
    "Meeting booking directly to your calendar",
    "Weekly strategy calls & reporting",
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What's included
          </h2>
          <p className="text-xl text-neutral-600">
            End-to-end LinkedIn outreach. You do nothing but show up.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200"
            >
              <div className="w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-lg text-neutral-800">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
