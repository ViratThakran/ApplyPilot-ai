"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface LogEntry {
  id: number
  timestamp: string
  type: "info" | "success" | "warning" | "action"
  message: string
}

const logMessages = [
  { type: "info" as const, message: "Initializing AI agent for session_7a3f2b..." },
  { type: "action" as const, message: "Scanning LinkedIn for Senior Engineer roles..." },
  { type: "success" as const, message: "Found 47 matching positions at target companies" },
  { type: "info" as const, message: "Analyzing job requirements for Google SWE III..." },
  { type: "action" as const, message: "Customizing resume for cloud infrastructure focus..." },
  { type: "success" as const, message: "Application submitted to Google - Job ID: #GGL-2847" },
  { type: "info" as const, message: "Processing next target: Meta ML Engineer..." },
  { type: "action" as const, message: "Generating tailored cover letter..." },
  { type: "success" as const, message: "Cover letter optimized - ATS score: 94/100" },
  { type: "action" as const, message: "Submitting application to Meta careers portal..." },
  { type: "success" as const, message: "Application submitted to Meta - Job ID: #META-1293" },
  { type: "warning" as const, message: "Rate limit approaching on Indeed - switching to Glassdoor" },
  { type: "info" as const, message: "Scanning Glassdoor for Product Manager roles..." },
  { type: "success" as const, message: "Found 23 matching PM positions" },
  { type: "action" as const, message: "Prioritizing based on salary range and location..." },
  { type: "info" as const, message: "Top match: Stripe PM - 95% skill alignment" },
  { type: "action" as const, message: "Customizing application for fintech experience..." },
  { type: "success" as const, message: "Application submitted to Stripe - Job ID: #STRP-4521" },
  { type: "info" as const, message: "Session summary: 12 applications, 3 interviews scheduled" },
]

function getTimestamp() {
  const now = new Date()
  return now.toLocaleTimeString("en-US", { hour12: false }) + "." + String(now.getMilliseconds()).padStart(3, "0")
}

let logIdCounter = 0

export function LiveTelemetry() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTime, setCurrentTime] = useState("00:00:00.000")
  const [isMounted, setIsMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle hydration by only showing dynamic time after mount
  useEffect(() => {
    setIsMounted(true)
    setCurrentTime(getTimestamp())
    const timeInterval = setInterval(() => {
      setCurrentTime(getTimestamp())
    }, 100)
    return () => clearInterval(timeInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % logMessages.length
        logIdCounter += 1
        const newLog: LogEntry = {
          id: logIdCounter,
          timestamp: getTimestamp(),
          ...logMessages[nextIndex],
        }
        setLogs((prevLogs) => [...prevLogs.slice(-15), newLog])
        return nextIndex
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [logs])

  const getTypeColor = (type: LogEntry["type"]) => {
    switch (type) {
      case "success":
        return "text-teal"
      case "warning":
        return "text-yellow-500"
      case "action":
        return "text-violet"
      default:
        return "text-ocean"
    }
  }

  const getTypePrefix = (type: LogEntry["type"]) => {
    switch (type) {
      case "success":
        return "[SUCCESS]"
      case "warning":
        return "[WARNING]"
      case "action":
        return "[ACTION]"
      default:
        return "[INFO]"
    }
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-violet/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-ocean mb-4 block">Live Telemetry</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Watch Your AI Agent
            <span className="gradient-text"> In Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real-time visibility into what your AI agent is doing right now.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">
                careerflow-agent@ai ~ $ ./run_job_search.sh
              </span>
              <div className="ml-auto flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="text-xs text-teal font-mono">LIVE</span>
              </div>
            </div>

            {/* Terminal content */}
            <div
              ref={containerRef}
              className="p-4 h-80 overflow-y-auto font-mono text-sm hide-scrollbar"
            >
              {logs.map((log, index) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-2 mb-2"
                >
                  <span className="text-muted-foreground shrink-0">{log.timestamp}</span>
                  <span className={`shrink-0 ${getTypeColor(log.type)}`}>
                    {getTypePrefix(log.type)}
                  </span>
                  <span className="text-foreground">
                    {index === logs.length - 1 ? (
                      <TypewriterText text={log.message} />
                    ) : (
                      log.message
                    )}
                  </span>
                </motion.div>
              ))}
              {isMounted && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>{currentTime}</span>
                  <span className="animate-pulse">▌</span>
                </div>
              )}
            </div>
          </div>

          {/* Stats below terminal */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: "Applications Today", value: "47" },
              { label: "Response Rate", value: "23%" },
              { label: "Interviews Scheduled", value: "5" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [text])

  return <>{displayText}</>
}
