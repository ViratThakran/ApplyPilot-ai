"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

interface StatItemProps {
  value: number
  suffix: string
  label: string
  delay: number
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center relative"
    >
      <div className="relative inline-block">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
          {count.toLocaleString()}{suffix}
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-ocean via-teal to-violet origin-left"
        />
      </div>
      <p className="mt-4 text-muted-foreground text-sm md:text-base">{label}</p>
    </motion.div>
  )
}

export function Stats() {
  const stats = [
    { value: 2.4, suffix: "M+", label: "Applications Submitted" },
    { value: 87, suffix: "%", label: "Interview Success Rate" },
    { value: 150, suffix: "K+", label: "Jobs Landed" },
    { value: 4.9, suffix: "/5", label: "User Rating" },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ocean/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Job Seekers Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI has helped thousands of professionals land their dream jobs faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Connection lines - visible on larger screens */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <svg className="w-full h-4" viewBox="0 0 800 20" fill="none">
            <motion.path
              d="M0 10 Q 200 0, 400 10 T 800 10"
              stroke="url(#statsGradient)"
              strokeWidth="1"
              strokeDasharray="5 5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="50%" stopColor="#14B8A6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
