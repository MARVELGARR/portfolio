"use client"

import { experience } from "@/lib/portfolio-data"
import { motion } from "framer-motion"
import { Terminal, Cpu, HardDrive } from "lucide-react"

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
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="experience" className="relative py-32 px-4 border-t border-primary/10 overflow-hidden">
      {/* Decorative side line */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <motion.div
        className="relative max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter uppercase">
              Exp_Timeline
            </h2>
            <div className="h-px flex-1 bg-primary/20" />
            <div className="text-[10px] font-mono text-primary/50 uppercase tracking-widest hidden sm:block">
              [INDEX: 04]
            </div>
          </div>
          <p className="text-muted-foreground text-lg font-mono">
            {`// Logging sequential professional deployments and system roles.`}
          </p>
        </div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experience.map((job, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-12 pb-0 group">
              {/* Technical Marker */}
              <div className="absolute left-0 top-0 flex flex-col items-center">
                <div className="w-10 h-10 bg-card border border-primary/40 flex items-center justify-center group-hover:border-primary transition-all">
                  <Terminal size={14} className="text-primary/60 group-hover:text-primary" />
                </div>
                <div className="w-px flex-1 bg-primary/10 min-h-[100px]" />
              </div>

              <div className="bg-card border border-primary/10 hover:border-primary/30 transition-all p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-primary/5 border border-primary/10 text-[9px] font-mono text-primary uppercase mb-2">
                      Active_Process
                    </div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight uppercase">{job.position}</h3>
                    <p className="text-primary font-mono text-sm tracking-wide">{`@ ${job.company}`}</p>
                  </div>
                  <div className="px-3 py-1 bg-muted border border-primary/5 font-mono text-[10px] text-muted-foreground uppercase h-fit md:mt-1">
                    {job.duration}
                  </div>
                </div>

                <p className="text-muted-foreground/90 font-mono text-xs leading-relaxed mb-6 pl-4 border-l border-primary/10 italic">
                  {`> ${job.description}`}
                </p>

                {job.achievements && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {job.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-muted/30 border border-primary/5 text-[10px] font-mono text-muted-foreground"
                      >
                        <div className="w-1 h-3 bg-primary/40 mt-0.5 shrink-0" />
                        {achievement.toUpperCase()}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
