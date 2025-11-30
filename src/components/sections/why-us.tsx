import React from "react";
import { Search, Users, Code2, MessageCircle } from "lucide-react";

export function WhyUs() {
  const points = [
    {
      title: "AI does the research",
      description: "Every prospect gets researched — their role, company, tech stack, what they post about. No generic templates.",
      icon: Search,
    },
    {
      title: "Experts run the campaigns",
      description: "A dedicated Hodhod expert manages your outreach daily. Not a bot. Not you. Us.",
      icon: Users,
    },
    {
      title: "We only do dev tools",
      description: "We understand your buyers because we are your buyers. No generic B2B playbook.",
      icon: Code2,
    },
    {
      title: "Engineers writing to engineers",
      description: "Your messages won't sound like desperate SDR spam. They'll sound like a peer reaching out.",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why this works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {points.map((point, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
