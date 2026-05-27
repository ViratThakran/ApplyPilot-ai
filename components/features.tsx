"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  Target, 
  FileText, 
  BarChart3, 
  Shield, 
  Zap 
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our neural networks analyze millions of job postings to find positions that perfectly match your skills and preferences.",
    span: "col-span-1 md:col-span-2",
    gradient: "from-ocean to-teal",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Automatically identify and prioritize companies most likely to respond positively.",
    span: "col-span-1",
    gradient: "from-teal to-violet",
  },
  {
    icon: FileText,
    title: "Resume Optimization",
    description: "AI rewrites your resume for each application, highlighting relevant experience.",
    span: "col-span-1",
    gradient: "from-violet to-ocean",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track application status, response rates, and optimize your job search strategy with real-time insights.",
    span: "col-span-1 md:col-span-2",
    gradient: "from-ocean to-violet",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and never shared. Full control over what information is sent.",
    span: "col-span-1",
    gradient: "from-teal to-ocean",
  },
  {
    icon: Zap,
    title: "Instant Apply",
    description: "One-click applications with auto-filled forms and customized cover letters.",
    span: "col-span-1",
    gradient: "from-violet to-teal",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-ocean/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-violet/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-ocean mb-4 block">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="gradient-text"> Land Jobs Faster</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Powerful AI tools designed to maximize your chances of getting hired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${feature.span} group`}
              >
                <div className="h-full glass rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div
                    className={`absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
