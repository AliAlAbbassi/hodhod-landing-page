import { Hero } from "@/components/hero";
import { ProofBar } from "@/components/sections/proof-bar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatsIncluded } from "@/components/sections/whats-included";
import { Results } from "@/components/sections/results";
import { WhyUs } from "@/components/sections/why-us";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { DotBackground } from "@/components/ui/dot-background";

export default function Home() {
  return (
    <>
      <DotBackground />
      <main className="min-h-screen relative">
        <Hero />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </>
  );
}
