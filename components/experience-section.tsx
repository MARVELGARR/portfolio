"use client"

import { experience } from "@/lib/portfolio-data"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

export function ExperienceSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="relative py-32 px-4 bg-background overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        className="relative max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">2+ years building scalable applications</p>
        </div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.map((job, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ x: 8 }} className="relative pl-8 pb-0 group">
              <div className="absolute -left-4 top-1 w-7 h-7 rounded-full border-2 border-primary bg-background group-hover:scale-125 transition-transform duration-300" />
              <motion.div
                className="absolute left-0 top-7 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              />

              <div className="glass p-6 rounded-xl border border-primary/20 hover:border-primary/50 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.position}</h3>
                    <p className="text-primary font-semibold">{job.company}</p>
                  </div>
                  <p className="text-muted-foreground text-sm whitespace-nowrap">{job.duration}</p>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4">{job.description}</p>

                {job.achievements && (
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 size={16} className="text-primary/60 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
