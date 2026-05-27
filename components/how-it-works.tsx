"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Upload, Settings, Zap, MessageSquare } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Your Resume",
    description: "Simply upload your resume and let our AI analyze your skills, experience, and career goals.",
    color: "ocean",
    gradient: "from-ocean to-teal",
  },
  {
    icon: Settings,
    title: "Customize Preferences",
    description: "Set your job preferences, target companies, salary range, and location. Our AI learns what you want.",
    color: "teal",
    gradient: "from-teal to-violet",
  },
  {
    icon: Zap,
    title: "AI Auto-Applies",
    description: "Our intelligent agents search job boards 24/7, customize applications, and apply on your behalf.",
    color: "violet",
    gradient: "from-violet to-ocean",
  },
  {
    icon: MessageSquare,
    title: "Interview & Connect",
    description: "Get notified when companies respond. We help you prepare with AI-powered interview coaching.",
    color: "ocean",
    gradient: "from-ocean to-teal",
  },
]

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-ocean/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-sm font-medium text-ocean mb-4 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Four Steps to Your
            <span className="gradient-text"> Dream Career</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Getting started is simple. Our AI handles the heavy lifting so you can focus on what matters.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-ocean via-teal to-violet"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`glass rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:glow-${step.color} transition-shadow duration-300`}
                    >
                      {/* Background gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />
                      
                      <div className="relative">
                        <span className="text-xs font-mono text-muted-foreground mb-2 block">
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative flex-shrink-0 order-first md:order-none">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center relative z-10`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {/* Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-xl opacity-50`}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
