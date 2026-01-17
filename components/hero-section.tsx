"use client"

import type React from "react"

import { heroContent, socials } from "@/lib/portfolio-data"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, FileText } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Mail: <Mail size={20} />,
  FileText: <FileText size={20} />,
}

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center space-y-8 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="inline-block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-0.5"
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold gradient-text">
              MO
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
              Hi, I'm <span className="gradient-text">{heroContent.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {heroContent.description}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap pt-4">
          <Link href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              View My Work
            </motion.button>
          </Link>
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap pt-4">
          {socials.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
              className="p-3 glass rounded-lg hover:border-primary/50 text-primary hover:text-secondary transition-all duration-300"
              aria-label={social.name}
            >
              {iconMap[social.icon]}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap text-sm text-muted-foreground pt-8"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {heroContent.location}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {heroContent.phone}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
