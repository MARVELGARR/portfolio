"use client"

import type React from "react"

import { socials } from "@/lib/portfolio-data"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, FileText, ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={24} />,
  Linkedin: <Linkedin size={24} />,
  Twitter: <Twitter size={24} />,
  Mail: <Mail size={24} />,
  FileText: <FileText size={24} />,
}

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="relative py-32 px-4 bg-card/30 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href={`mailto:${socials.find((s) => s.name === "email")?.link.replace("mailto:", "")}`}>
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              <Mail size={20} />
              Send an Email
              <ArrowRight size={16} />
            </motion.button>
          </Link>
          <Link href={socials.find((s) => s.name === "linkedin")?.link || "#"} target="_blank">
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-12">
          {socials.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 glass rounded-xl border border-primary/20 hover:border-primary/50 text-primary hover:text-secondary transition-all duration-300"
              aria-label={social.name}
            >
              {iconMap[social.icon]}
            </motion.a>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className="text-muted-foreground text-sm">
          © 2026 Marvellous Obatale. Built with Next.js, Framer Motion, and Tailwind CSS.
        </motion.p>
      </motion.div>
    </section>
  )
}
