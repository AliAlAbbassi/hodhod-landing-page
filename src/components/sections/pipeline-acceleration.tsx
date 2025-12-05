import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Shield, MessageSquare, User, Search, Target, Database, PenTool, Send, Brain, Eye, UserCheck, MessageCircle } from "lucide-react";
import { Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

export function PipelineAcceleration() {
  const automationFeatures = [
    {
      title: "Zero complex integrations",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      description: "Get started instantly without messy setups."
    },
    {
      title: "Talks like you",
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      description: "Hyper-personalized messages that sound authentic."
    },
    {
      title: "Keeps account safe",
      icon: <Shield className="w-6 h-6 text-green-500" />,
      description: "Operates within limits to protect your reputation."
    },
    {
      title: "One person powerhouse",
      icon: <User className="w-6 h-6 text-purple-500" />,
      description: "Scale your outreach without hiring a team."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Find High Intent Leads",
      description: "Identify leads that are actively in the market for a solution.",
      icon: <Target className="w-5 h-5" />
    },
    {
      step: "02",
      title: "Deep Research",
      description: "Analyze every prospect across 60+ data points.",
      icon: <Database className="w-5 h-5" />
    },
    {
      step: "03",
      title: "Qualify & Prioritize",
      description: "Automatically qualify for ICP fit and prioritize the best leads.",
      icon: <Search className="w-5 h-5" />
    },
    {
      step: "04",
      title: "Hyper-Personalized Messaging",
      description: "Craft messages in your unique voice that resonate.",
      icon: <PenTool className="w-5 h-5" />
    },
    {
      step: "05",
      title: "Scale & Manage",
      description: "Send at scale, manage replies, and keep your account safe.",
      icon: <Send className="w-5 h-5" />
    }
  ];

  const visitorProcess = [
    {
      title: "Recognize",
      description: "HODHOD recognizes visitors using your existing data and obtains their contact info.",
      icon: <Eye className="w-6 h-6 text-indigo-500" />
    },
    {
      title: "Learn",
      description: "Sees what they are most interested in on your website and learns who they are.",
      icon: <Brain className="w-6 h-6 text-pink-500" />
    },
    {
      title: "ReachOut",
      description: "If they don't convert, HODHOD reaches out via LinkedIn to drive action.",
      icon: <Send className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Interact",
      description: "Trained on your business to interact, reply, and convert visitors using proven methods.",
      icon: <MessageCircle className="w-6 h-6 text-teal-500" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-6">
            Massively Accelerate your <Highlight className="text-black">Outbound Pipelines</Highlight> With HODHOD
          </h2>
          <p className="text-xl text-neutral-600">
            Increase your total sales by 7% to 15% by accelerating your outbound pipelines with HODHOD.
          </p>
        </div>

        {/* Automation Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {automationFeatures.map((feature, idx) => (
            <Card key={idx} className="border-neutral-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 bg-neutral-50 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timing, Relevance, Research Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
              TIMING, RELEVANCE, AND RESEARCH
            </div>
            <h3 className="text-3xl font-bold text-neutral-900 mb-6">
              A top 1% rep working 24/7 on LinkedIn
            </h3>
            <p className="text-lg text-neutral-600 mb-8">
              Manual outreach is slow and inconsistent. HODHOD automates the heavy lifting while maintaining the quality of a human expert.
            </p>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center font-bold text-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-1 flex items-center gap-2">
                      {step.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 blur-2xl" />
            <div className="relative bg-white border border-neutral-200 rounded-2xl p-8 shadow-xl">
               <div className="flex items-center gap-4 mb-6 border-b border-neutral-100 pb-6">
                 <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                   <UserCheck className="h-6 w-6 text-indigo-600" />
                 </div>
                 <div>
                   <div className="font-bold text-neutral-900">Lead Qualified</div>
                   <div className="text-sm text-neutral-500">Match Score: 98%</div>
                 </div>
               </div>
               <div className="space-y-4">
                 <div className="bg-neutral-50 p-4 rounded-lg text-sm text-neutral-600">
                   <span className="font-semibold block text-neutral-900 mb-1">Observation:</span>
                   Prospect recently posted about scaling engineering teams and is hiring for 2 senior roles.
                 </div>
                 <div className="bg-neutral-50 p-4 rounded-lg text-sm text-neutral-600">
                   <span className="font-semibold block text-neutral-900 mb-1">Generated Message Strategy:</span>
                   Reference their recent post, mention our solution for scaling teams efficiently, and offer a specific case study.
                 </div>
                 <div className="bg-indigo-50 p-4 rounded-lg text-sm text-indigo-900 border border-indigo-100">
                   <span className="font-semibold block text-indigo-700 mb-1">Ready to send:</span>
                   "Hi [Name], loved your insights on team scaling..."
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Visitor Recognition Section */}
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/50 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The LinkedIn tool that floods your inbox (with real replies).
              </h2>
              <p className="text-neutral-300 text-lg">
                Hodhod is like having a sales rep who recognizes, learns about, and reaches out with custom 1-to-1 marketing for every visitor of your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visitorProcess.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-indigo-900/30 border border-indigo-500/30 rounded-xl max-w-2xl">
               <h4 className="text-lg font-bold text-indigo-300 mb-2">HODHOD AI Remarketing</h4>
               <p className="text-neutral-300">
                 HODHOD uses all this data to create 1-to-1 custom remarketing that is endlessly scalable. Not just scraping — we build a relationship.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
