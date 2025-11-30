"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";

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
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 text-center gap-6">
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
            <Highlight className="text-black">
               Engineering Leaders.
            </Highlight>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed"
        >
          10+ meetings in 90 days or you don't pay. Done for you.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
           className="flex flex-col items-center gap-4 mt-2"
        >
           <p className="text-lg font-medium text-neutral-800">
             We generate pipeline — You close the deals.
           </p>
           
           <button className="mt-4 px-8 py-4 rounded-full bg-black text-white font-bold text-lg transition-transform hover:scale-105 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900">
              Book a Call
           </button>
        </motion.div>
      </div>
    </HeroHighlight>
  );
}
