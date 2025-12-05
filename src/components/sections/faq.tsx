import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const items = [
    {
      question: "Which channels does HODHOD support?",
      answer:
        "HODHOD supports LinkedIn outreach, including connection requests and InMails. HODHOD users safely send 1000-1200 messages per seat every month.",
    },
    {
      question: "How safe is it and does HODHOD risk my LinkedIn account?",
      answer:
        "HODHOD is the safest LinkedIn automation tool on the market and operates within LinkedIn's guidelines to keep your account safe. We offer a 5x money-back guarantee if your account is ever compromised through Hodhod's usage, though this has never happened to any of your users.",
    },
    {
      question:
        "Do I have to commit to an Annual Plan like other alternatives?",
      answer:
        "No. Hodhod offers flexible Quarterly plans without requiring a long-term commitment.",
    },
    {
      question: "How does HODHOD personalize messages? ",
      answer:
        "HODHOD uses research agents that scan the internet for relevant information about your prospect and their company. HODHOD researches things like company and prospect news, deep dives, competition, funding and hiring patterns, newsletter, blog and youtube videos yoru prospect has appeared on and uses that information to craft personalization that is actually relevant.",
    },
    {
      question: "What if it doesn't work?",
      answer:
        "You don't pay. 10+ meetings in 90 days or we work for free. There's no risk.",
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
};
