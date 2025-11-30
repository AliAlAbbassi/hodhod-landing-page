import React from "react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
          AI does the research. <br/> Experts run the campaigns. <br/> You take the meetings.
        </h2>
        <p className="text-xl md:text-2xl text-neutral-600 mb-10">
          10+ meetings in 90 days or you don't pay.
        </p>
        <button className="px-10 py-5 rounded-full bg-black text-white font-bold text-xl transition-transform hover:scale-105 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 shadow-lg">
          Book a Call
        </button>
      </div>
    </section>
  );
}
