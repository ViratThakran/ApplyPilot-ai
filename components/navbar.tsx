"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Rocket, FileText, Upload, Layout, Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { name: "Product", href: "#features" },
  { 
    name: "Resume", 
    href: "/resume",
    hasDropdown: true,
    dropdownItems: [
      { name: "Build New Resume", href: "/resume/build", icon: FileText, description: "Create from scratch with AI" },
      { name: "Upload Resume", href: "/resume/upload", icon: Upload, description: "Optimize your existing resume" },
      { name: "Templates", href: "/resume/templates", icon: Layout, description: "Browse professional designs" },
    ]
  },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Success Stories", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "glass border-b border-[var(--border-subtle)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              className="relative"
              animate={{
                boxShadow: [
                  "0 0 15px rgba(0, 240, 255, 0.2)",
                  "0 0 25px rgba(0, 240, 255, 0.4)",
                  "0 0 15px rgba(0, 240, 255, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00F0FF]">
                <Rocket className="h-4.5 w-4.5 text-[#050505] rotate-45" />
              </div>
            </motion.div>
            <span className="text-lg font-bold tracking-[-0.02em] text-[#F9FAFB]">
              CareerFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" ref={dropdownRef}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button
                    className="relative text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors duration-300 group flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] transition-all duration-300 group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="relative text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors duration-300 group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-2 w-72 rounded-xl glass-strong border border-[var(--border-subtle)] overflow-hidden z-50"
                    >
                      <div className="p-2">
                        {link.dropdownItems?.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgba(0,240,255,0.05)] transition-colors group/item"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.1)] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[rgba(0,240,255,0.2)] transition-colors">
                                <Icon className="w-5 h-5 text-[#00F0FF]" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">{item.name}</div>
                                <div className="text-xs text-[#9CA3AF]">{item.description}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                      <div className="border-t border-[var(--border-subtle)] p-3 bg-[rgba(0,240,255,0.02)]">
                        <Link
                          href="/resume"
                          className="flex items-center gap-2 text-xs text-[#00F0FF] hover:text-white transition-colors"
                        >
                          <Sparkles className="w-3 h-3" />
                          View all resume tools
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors px-4 py-2 rounded-full border border-[var(--border-subtle)] hover:border-[rgba(0,240,255,0.3)]"
            >
              Sign In
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm font-semibold text-[#050505] bg-[#00F0FF] px-6 py-2.5 rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300"
            >
              Start Free
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#9CA3AF]"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-semibold text-white hover:text-[#00F0FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-lg font-semibold text-[#050505] bg-[#00F0FF] px-8 py-3 rounded-full"
              >
                Start Free
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
