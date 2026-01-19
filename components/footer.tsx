"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-primary/5 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span>© {currentYear} MO_SYS</span>
          <div className="w-1 h-1 bg-primary/40 rounded-full" />
          <span>ALGORITHM_ARCHITECT</span>
        </div>
        <div className="font-mono text-[9px] uppercase tracking-widest opacity-40">
          Last_Updated: {new Date().toISOString().split('T')[0]}
        </div>
      </div>
    </footer>
  )
}
