import React from "react";

export function Results() {
  const results = [
    { metric: "+14 meetings in 47 days", company: "Series A dev tools startup" },
    { metric: "+9 meetings in 30 days", company: "DevOps platform" },
    { metric: "$180K pipeline generated", company: "API infrastructure company" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Results from dev tools companies
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                {item.metric}
              </p>
              <p className="text-lg text-neutral-600 font-medium">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
