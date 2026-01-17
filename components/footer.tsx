"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-background border-t border-primary/20 py-8 px-4"
    >
      <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
        <p>© {currentYear} Marvellous Obatale. Full Stack Developer Portfolio.</p>
      </div>
    </motion.footer>
  )
}
