"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

// Schema Definitions
const formSchema = z.object({
  outreachStatus: z.enum([
    "Yes - I use a tool",
    "I send outreach manually",
    "I don't do LinkedIn outreach",
    "Other",
  ]),
  timeline: z.enum([
    "Within a week",
    "Next month",
    "Next quarter",
    "Not sure",
  ]),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().min(1, "Website is required"),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  {
    id: "outreach",
    title: "Current Outreach",
    description: "Do you currently do outreach on LinkedIn?",
    fields: ["outreachStatus"],
  },
  {
    id: "timeline",
    title: "Timeline",
    description: "How soon are you looking to start LinkedIn outreach to grow pipeline?",
    fields: ["timeline"],
  },
  {
    id: "personal",
    title: "About You",
    description: "Tell us who you are",
    fields: ["firstName", "lastName"],
  },
  {
    id: "company",
    title: "Company Details",
    description: "Let's get your calendar filled with qualified meetings",
    fields: ["email", "website"],
  },
  {
    id: "calendar",
    title: "Book a Call",
    description: "Talk to Ali to understand how well Hodhod can work for your company",
    fields: [],
  },
];

export function BookDemoForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { trigger, watch } = form;

  // Cal.com initialization
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"ali-hodhod"});
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const nextStep = async () => {
    const fields = steps[currentStep].fields as (keyof FormData)[];
    const isValid = await trigger(fields);

    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const isLastStep = currentStep === steps.length - 1;

  // Helper to determine if we should show the Cal embed immediately
  // For this flow, we show it on the last step 'calendar'
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="border-0 shadow-none bg-transparent">
        {!isLastStep && (
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">{steps[currentStep].title}</CardTitle>
            <CardDescription className="text-lg text-neutral-600">
              {steps[currentStep].description}
            </CardDescription>
          </CardHeader>
        )}
        <CardContent>
          <Form {...form}>
            <form className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 0 && (
                    <FormField
                      control={form.control}
                      name="outreachStatus"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {[
                                "Yes - I use a tool",
                                "I send outreach manually",
                                "I don't do LinkedIn outreach",
                                "Other",
                              ].map((option) => (
                                <FormItem
                                  key={option}
                                  className="flex items-center space-x-3 space-y-0 rounded-xl border border-neutral-200 p-4 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                                >
                                  <FormControl>
                                    <RadioGroupItem value={option} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer w-full text-lg">
                                    {option}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {currentStep === 1 && (
                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {[
                                "Within a week",
                                "Next month",
                                "Next quarter",
                                "Not sure",
                              ].map((option) => (
                                <FormItem
                                  key={option}
                                  className="flex items-center space-x-3 space-y-0 rounded-xl border border-neutral-200 p-4 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                                >
                                  <FormControl>
                                    <RadioGroupItem value={option} />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer w-full text-lg">
                                    {option}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" className="h-12 text-lg" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" className="h-12 text-lg" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Work Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@company.com" className="h-12 text-lg" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-lg">Company Website</FormLabel>
                            <FormControl>
                              <Input placeholder="company.com" className="h-12 text-lg" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="flex flex-col items-center justify-center w-full min-h-[800px] bg-white rounded-xl overflow-hidden border border-neutral-200">
                       <h3 className="text-2xl font-bold mb-2 mt-8 text-center">Schedule your Strategy Call</h3>
                       <p className="text-neutral-600 mb-8 text-center px-4">Talk to Ali to understand how well Hodhod can work for your company</p>
                       <div className="w-full h-full flex-1">
                         <iframe 
                           src="https://cal.com/ali-hodhod?embed=true" 
                           style={{width: "100%", height: "100%", border: "none", minHeight: "700px"}}
                           title="Cal.com"
                         ></iframe>
                       </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {!isLastStep && (
                <div className="flex justify-between pt-8">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`text-neutral-500 hover:text-neutral-900 ${currentStep === 0 ? 'invisible' : ''}`}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-black text-white hover:bg-neutral-800 rounded-full px-12 py-6 text-lg gap-1"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
