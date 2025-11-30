import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const items = [
    {
      question: "How fast can we start?",
      answer: "First campaign live in 7 days. Most clients see first meetings within 2-3 weeks.",
    },
    {
      question: "Will this get our LinkedIn accounts banned?",
      answer: "No. We warm up accounts properly, send 20-30 personalized messages per day, and never mass blast. Your accounts stay safe.",
    },
    {
      question: "What counts as a \"meeting\"?",
      answer: "A booked call with someone matching your ICP who has decision-making power. Not random chats or tire-kickers.",
    },
    {
      question: "Do we see who you're contacting?",
      answer: "Yes. Full visibility. We send you the prospect list before reaching out.",
    },
    {
      question: "What metrics do we get?",
      answer: "Connection rates, reply rates, positive replies, meetings booked, pipeline value. Weekly reports.",
    },
    {
      question: "Why not just hire an SDR?",
      answer: "An SDR costs $70K+ per year, takes 3 months to ramp, and might not work out. We cost less, start in 7 days, and guarantee results. If we don't deliver, you don't pay.",
    },
    {
      question: "What if we already have a sales team?",
      answer: "We plug into your existing team. They focus on closing, we fill the top of the funnel.",
    },
    {
      question: "What if it doesn't work?",
      answer: "You don't pay. 10+ meetings in 90 days or we work for free. There's no risk.",
    },
  ];

  return (
    <section className="py-24 border-y border-neutral-200">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-neutral-900 hover:text-neutral-700 hover:no-underline text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-600 leading-relaxed text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
