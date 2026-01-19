"use client"

import type React from "react"
import { socials } from "@/lib/portfolio-data"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, FileText, ArrowRight, CornerDownRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Mail: <Mail size={20} />,
  FileText: <FileText size={20} />,
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="contact" className="relative py-32 px-4 border-t border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] opacity-10" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-[0.3em] mb-4">
            Comm_Protocol_Active
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-foreground uppercase tracking-tighter">
            Establish_Contact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-mono">
            {`// Awaiting incoming transmission for collaborative system builds and procedural inquiries.`}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <Link href={`mailto:${socials.find((s) => s.name === "email")?.link.replace("mailto:", "")}`} className="flex-1 max-w-xs">
            <motion.button
              whileHover={{ x: 5, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between gap-3 px-6 py-6 border border-primary bg-primary text-primary-foreground rounded-none font-mono text-xs uppercase tracking-widest font-bold group transition-all"
            >
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>Initialize_Mail</span>
              </div>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          <Link href={socials.find((s) => s.name === "linkedin")?.link || "#"} target="_blank" className="flex-1 max-w-xs">
            <motion.button
              whileHover={{ x: 5, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between gap-3 px-6 py-6 border border-primary text-primary hover:bg-primary/5 rounded-none font-mono text-xs uppercase tracking-widest font-bold group transition-all"
            >
              <div className="flex items-center gap-3">
                <Linkedin size={18} />
                <span>Sync_LinkedIn</span>
              </div>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <div className="flex items-center gap-4 max-w-sm mx-auto">
            <div className="h-px flex-1 bg-primary/10" />
            <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.4em]">Alternative_Nodes</span>
            <div className="h-px flex-1 bg-primary/10" />
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            {socials.filter(s => !["email", "linkedin"].includes(s.name)).map((social, index) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "var(--primary)", borderColor: "var(--primary)" }}
                whileTap={{ scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                className="p-5 border border-primary/10 text-muted-foreground transition-all duration-300"
                aria-label={social.name}
              >
                {iconMap[social.icon]}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest">
            <CornerDownRight size={12} className="text-primary/40" />
            Localhost_2026_Distribution
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">Build: v1.4.2</span>
            <span className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">Status: Operational</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
