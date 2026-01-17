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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="relative py-32 px-4 bg-background overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies I've mastered over my journey</p>
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
              whileHover={{ y: -5 }}
              className="group p-8 glass rounded-2xl border border-primary/20 hover:border-primary/50 card-hover"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center group/item"
                  >
                    <span className="text-foreground/90 group-hover/item:text-foreground transition-colors">
                      {skill.name}
                    </span>
                    <motion.span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-primary/20 group-hover/item:border-primary/40 group-hover/item:text-primary/80 transition-all">
                      {skill.level}
                    </motion.span>
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
