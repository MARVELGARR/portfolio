"use client"

import { skills } from "@/lib/portfolio-data"
import { motion } from "framer-motion"

export function SkillsSection() {
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
    <section id="skills" className="relative py-32 px-4 border-t border-primary/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-primary/30 to-transparent" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono text-primary/50 uppercase tracking-widest hidden sm:block">
              [INDEX: 03]
            </div>
            <div className="h-px w-12 bg-primary/20" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter uppercase">
              Tech_Capabilities
            </h2>
            <div className="h-px flex-1 bg-primary/20" />
          </div>
          <p className="text-muted-foreground text-lg font-mono">
            {`// Listing core architectural components and stack expertise.`}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="group p-8 bg-card border border-primary/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-primary" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{skillGroup.category}</h3>
              </div>

              <ul className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group/item flex flex-col gap-1"
                  >
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-mono text-foreground/80 group-hover/item:text-primary transition-colors">
                        {`> ${skill.name}`}
                      </span>
                      <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                        {`[ ${skill.level} ]`}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-primary/5 group-hover/item:bg-primary/20 transition-colors" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
