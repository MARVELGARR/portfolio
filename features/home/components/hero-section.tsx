"use client"

import type React from "react"
import { heroContent, socials } from "@/lib/portfolio-data"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, FileText, ChevronRight, MapPin } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = { Github: <Github size={20} />, Linkedin: <Linkedin size={20} />, Twitter: <Twitter size={20} />, Mail: <Mail size={20} />, FileText: <FileText size={20} /> }

export function HeroSection() {
  const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } }
  const itemVariants: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }

  return <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-20">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />
    <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <motion.div className="relative z-10 mx-auto max-w-4xl space-y-10 text-center" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={itemVariants} className="inline-block"><div className="relative"><div className="absolute -inset-4 animate-pulse border border-primary/20" /><div className="flex h-20 w-20 items-center justify-center border-2 border-primary bg-card text-3xl font-bold tracking-tighter font-mono">MO</div><div className="absolute -right-1 -top-1 h-2 w-2 bg-primary" /><div className="absolute -bottom-1 -left-1 h-2 w-2 bg-primary" /></div></motion.div>
      <motion.div variants={itemVariants} className="space-y-6"><div className="space-y-4"><div className="mb-4 inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary"><span className="h-1.5 w-1.5 animate-pulse bg-primary" />System Online: Full Stack Dev</div><h1 className="text-balance text-5xl font-bold leading-none tracking-tighter text-foreground md:text-8xl">{heroContent.name.toUpperCase()}</h1><p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground font-mono md:text-xl">{`// ${heroContent.description}`}</p><div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-mono"><MapPin size={13} className="text-primary" />{heroContent.location}<span className="text-primary/30">//</span> Available for impactful builds</div></div></motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-3 border-y border-primary/10 py-5"><div className="border-r border-primary/10"><strong className="block text-2xl text-primary font-mono">35%</strong><span className="text-[9px] uppercase tracking-widest text-muted-foreground">Performance gain</span></div><div className="border-r border-primary/10"><strong className="block text-2xl text-primary font-mono">25%</strong><span className="text-[9px] uppercase tracking-widest text-muted-foreground">Engagement lift</span></div><div><strong className="block text-2xl text-primary font-mono">40%</strong><span className="text-[9px] uppercase tracking-widest text-muted-foreground">Less admin overhead</span></div></motion.div>
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-2"><Link href="#projects"><motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group flex items-center gap-2 border border-primary bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground font-mono">Initialize Projects<ChevronRight size={14} className="transition-transform group-hover:translate-x-1" /></motion.span></Link><a href="/Marvellous-Obatale-Resume.pdf" download className="flex items-center gap-2 border border-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground font-mono"><FileText size={14} />Download Resume</a></motion.div>
      <motion.div variants={itemVariants} className="mx-auto flex max-w-xs flex-wrap justify-center gap-6 border-t border-primary/10 pt-4">{socials.map((social, index) => <motion.a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: "var(--primary)" }} whileTap={{ scale: 0.9 }} transition={{ delay: index * 0.1 }} className="text-muted-foreground" aria-label={social.name}>{iconMap[social.icon]}</motion.a>)}</motion.div>
    </motion.div>
    <div className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-8 lg:flex"><div className="h-20 w-px bg-primary/20" /><span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] text-muted-foreground/50">PROTO.2026</span><div className="h-20 w-px bg-primary/20" /></div>
  </section>
}
