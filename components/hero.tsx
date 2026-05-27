"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { HeroScene } from "./hero-scene"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroScene />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-sm text-muted-foreground">
                AI-Powered Job Applications
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Land Your</span>
              <br />
              <span className="gradient-text">Dream Job</span>
              <br />
              <span className="text-foreground">on Autopilot</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Let our AI agents search, customize, and apply to hundreds of jobs 
              that match your skills—while you focus on preparing for interviews.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="gradient-ocean-violet text-white text-lg px-8 py-6 glow-ocean hover:opacity-90 transition-all"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-border hover:bg-secondary"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-ocean/20 to-violet/20 flex items-center justify-center text-xs font-medium text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">10,000+ Users</p>
                <p className="text-xs text-muted-foreground">Already landing jobs</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass rounded-2xl p-6 glow-ocean">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Live Activity</h3>
                  <span className="flex items-center gap-2 text-sm text-teal">
                    <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    Active
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { role: "Senior Engineer", company: "Google", status: "Applied", time: "2m ago" },
                    { role: "Product Manager", company: "Meta", status: "Matched", time: "5m ago" },
                    { role: "ML Engineer", company: "OpenAI", status: "Applied", time: "8m ago" },
                  ].map((job, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.15 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-secondary/50"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">{job.role}</p>
                        <p className="text-xs text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          job.status === "Applied" 
                            ? "bg-ocean/20 text-ocean" 
                            : "bg-teal/20 text-teal"
                        }`}>
                          {job.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{job.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 glass rounded-xl p-4 glow-violet"
              >
                <p className="text-2xl font-bold gradient-text">87%</p>
                <p className="text-xs text-muted-foreground">Success Rate</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl p-4 glow-teal"
              >
                <p className="text-2xl font-bold text-teal">24/7</p>
                <p className="text-xs text-muted-foreground">AI Agent Active</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
