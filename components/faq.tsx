"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does CareerFlow AI find jobs for me?",
    answer:
      "Our AI agents continuously scan major job boards, company career pages, and LinkedIn 24/7. They use advanced matching algorithms to identify positions that align with your skills, experience, and preferences. The system learns from your feedback to improve matches over time.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use enterprise-grade encryption for all data at rest and in transit. Your information is never sold or shared with third parties. You maintain full control over what information is included in each application, and you can delete your data at any time.",
  },
  {
    question: "Can employers tell I used an AI to apply?",
    answer:
      "No. Our AI generates unique, personalized applications that read as authentically human. Each resume and cover letter is tailored to the specific job posting while maintaining your voice and style. Many of our users have received compliments on their well-crafted applications.",
  },
  {
    question: "What job boards does CareerFlow support?",
    answer:
      "We integrate with all major platforms including LinkedIn, Indeed, Glassdoor, ZipRecruiter, and company career pages for Fortune 500 companies. We also support industry-specific job boards for tech, finance, healthcare, and more. We&apos;re constantly adding new integrations.",
  },
  {
    question: "How is this different from other job search tools?",
    answer:
      "Unlike traditional job aggregators that just show you listings, CareerFlow actively applies on your behalf with fully customized applications. Our AI handles the entire process - from finding matches to submitting applications to tracking responses - while you focus on interview prep.",
  },
  {
    question: "Can I review applications before they are sent?",
    answer:
      "Yes! You can configure your preferences to require approval before any application is submitted, or you can enable auto-apply for positions that meet certain criteria. You always have full visibility into what&apos;s being sent on your behalf through our dashboard.",
  },
  {
    question: "What if I get too many interview requests?",
    answer:
      "That&apos;s a good problem to have! You can pause the AI agent at any time, adjust your application volume, or narrow your targeting criteria. We also provide interview scheduling assistance to help you manage multiple opportunities efficiently.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-ocean/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-ocean mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about CareerFlow AI.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-xl p-5 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
