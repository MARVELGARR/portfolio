"use client"

import type React from "react"
import { heroContent, socials } from "@/lib/portfolio-data"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, FileText, ChevronRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Mail: <Mail size={20} />,
  FileText: <FileText size={20} />,
}

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Technical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center space-y-12 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block">
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/20 animate-pulse" />
            <div className="w-20 h-20 bg-card border-2 border-primary flex items-center justify-center text-3xl font-bold font-mono tracking-tighter">
              MO
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary" />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-[10px] uppercase tracking-[0.3em] text-primary mb-4"
            >
              <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
              System Online: Full Stack Dev
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-bold text-foreground text-balance leading-none tracking-tighter">
              {heroContent.name.toUpperCase()}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-mono">
              {`// ${heroContent.description}`}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap pt-4">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-none font-mono text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2 hover:bg-primary/90 transition-all border border-primary"
            >
              Initialize Projects
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-primary text-primary rounded-none font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all"
            >
              Establish Connection
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap pt-4 border-t border-primary/10 max-w-xs mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "var(--primary)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground transition-all duration-300"
              aria-label={social.name}
            >
              {iconMap[social.icon]}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Side decorative elements */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
        <div className="w-px h-20 bg-primary/20" />
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] text-muted-foreground/50">PROTO.2024</span>
        <div className="w-px h-20 bg-primary/20" />
      </div>
    </section>
  )
}
