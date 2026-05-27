"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "CareerFlow AI completely transformed my job search. I went from sending 50 applications a week manually to getting 3x more interviews with half the effort.",
    author: "Sarah Chen",
    role: "Software Engineer",
    company: "Now at Google",
    avatar: "SC",
    metrics: {
      before: "8 weeks job searching",
      after: "Hired in 2 weeks",
    },
  },
  {
    quote: "The AI customization is incredible. Each application feels personal, and recruiters actually respond. I landed my dream PM role at a FAANG company.",
    author: "Marcus Johnson",
    role: "Product Manager",
    company: "Now at Meta",
    avatar: "MJ",
    metrics: {
      before: "3% response rate",
      after: "34% response rate",
    },
  },
  {
    quote: "As a career changer, I was struggling to get noticed. CareerFlow helped me highlight transferable skills and land interviews at top tech companies.",
    author: "Emily Rodriguez",
    role: "Data Scientist",
    company: "Now at Stripe",
    avatar: "ER",
    metrics: {
      before: "0 interviews in 2 months",
      after: "7 interviews in 2 weeks",
    },
  },
  {
    quote: "The live telemetry feature is amazing. Watching the AI work while I focus on interview prep gave me peace of mind and saved countless hours.",
    author: "David Park",
    role: "ML Engineer",
    company: "Now at OpenAI",
    avatar: "DP",
    metrics: {
      before: "40+ hours/week job hunting",
      after: "5 hours/week review only",
    },
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-ocean/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-ocean mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories from
            <span className="gradient-text"> Real Users</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of professionals who&apos;ve accelerated their career with CareerFlow AI.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 md:p-12"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <div className="w-12 h-12 rounded-xl gradient-ocean-violet flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-ocean-teal flex items-center justify-center text-white font-bold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                {/* Before/After metrics */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Before</p>
                    <p className="text-sm text-foreground">{testimonials[currentIndex].metrics.before}</p>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <p className="text-xs text-teal uppercase tracking-wider mb-1">After</p>
                    <p className="text-sm font-medium text-teal">{testimonials[currentIndex].metrics.after}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
