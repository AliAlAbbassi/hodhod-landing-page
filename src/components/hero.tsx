"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

export function Hero() {
  return (
    <HeroHighlight
      header={
        <div className="absolute top-6 left-6 z-50">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900">
            HODHOD STUDIOS
          </h2>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold tracking-wider text-neutral-600 uppercase mb-4">
            FOR DEV TOOLS COMPANIES WITH A SALES TEAM
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight mb-6 tracking-tight">
            AI LinkedIn Agent That Books Meetings With{" "}
            <Highlight className="text-black">Engineering Leaders.</Highlight>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed mb-2">
            10+ meetings in 90 days or you don't pay. Done for you.
          </p>

          <p className="text-lg font-medium text-neutral-800">
            We generate pipeline — You close the deals.
          </p>

          <div className="mt-16">
            <Link href="/book">
              <ShimmerButton className="shadow-2xl h-16 px-8">
                <span className="whitespace-nowrap text-center text-lg font-bold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xl">
                  Book Demo
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
