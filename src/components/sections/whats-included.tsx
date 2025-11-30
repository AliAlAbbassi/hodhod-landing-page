import React from "react";
import { CheckCircle2, MessageSquare, Target, UserPlus, Calendar } from "lucide-react";

export function WhatsIncluded() {
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
    <section className="py-24 bg-white border-y border-neutral-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              What's included
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              End-to-end LinkedIn outreach. You do nothing but show up.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full p-8 bg-neutral-50 rounded-2xl border border-neutral-200 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-3">
              <Target className="w-8 h-8 text-indigo-600" />
              <span className="font-semibold text-neutral-900">Targeting</span>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-3">
              <MessageSquare className="w-8 h-8 text-indigo-600" />
              <span className="font-semibold text-neutral-900">Messaging</span>
            </div>
             <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-3">
              <UserPlus className="w-8 h-8 text-indigo-600" />
              <span className="font-semibold text-neutral-900">Connections</span>
            </div>
             <div className="p-4 bg-white rounded-xl shadow-sm border border-neutral-100 flex flex-col gap-3">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <span className="font-semibold text-neutral-900">Meetings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
