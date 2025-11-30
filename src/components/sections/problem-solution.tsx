import React from "react";
import { ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-24">
        {/* The Problem */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Here's the problem
            </h2>
            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                Your SDRs send hundreds of LinkedIn messages every week.
                Most get ignored. The ones that don't? Generic replies that go nowhere.
              </p>
              <p>
                Meanwhile, your ideal customers — engineering leaders at companies that actually need your product — never hear from you.
              </p>
              <p>
                Or worse, they get a message so generic they immediately tune out.
              </p>
            </div>
          </div>
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <div className="flex flex-col gap-4 opacity-70">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                <p className="text-sm text-neutral-400 mb-2">To: VP Engineering</p>
                <p className="text-neutral-600">"Hi [Name], I'd love to pick your brain about..."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-red-200">
                <p className="text-sm text-neutral-400 mb-2">To: CTO</p>
                <p className="text-neutral-600">"Hope this email finds you well! We help companies..."</p>
              </div>
            </div>
             <p className="text-center text-red-500 font-semibold mt-4">🚫 Ignored</p>
          </div>
        </div>

        {/* The Solution */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 bg-indigo-50 p-8 rounded-2xl border border-indigo-100">
            <div className="flex flex-col gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-200 relative">
                <div className="absolute -left-2 -top-2 bg-indigo-600 text-white px-2 py-0.5 rounded text-xs font-bold">AI Personalized</div>
                <p className="text-sm text-neutral-400 mb-2">To: CTO @ [Tech Stack]</p>
                <p className="text-neutral-800 font-medium">"Saw you're migrating to Kubernetes. Most teams struggle with config drift there..."</p>
              </div>
            </div>
             <p className="text-center text-indigo-600 font-semibold mt-4">✅ Booked</p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What if it worked like this
            </h2>
             <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
              <p>
                What if every prospect got a message that felt like it was written just for them?
                Based on their role. Their company's tech stack. What they're posting about. Their pain points.
              </p>
              <p>
                What if an AI researched every single prospect — their background, their company, what they care about — and crafted outreach specifically for them?
              </p>
              <p>
                And what if a dedicated expert managed everything — the targeting, the sequences, the replies — so you just showed up to meetings?
              </p>
              <p className="font-bold text-neutral-900 flex items-center gap-2">
                That's exactly what Hodhod does. <ArrowRight className="w-5 h-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
