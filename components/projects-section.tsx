"use client"

import { projects } from "@/lib/portfolio-data"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="relative py-32 px-4 bg-card/30 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Full-stack applications showcasing modern development practices
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/50 card-hover"
            >
              <div className="relative h-56 overflow-hidden bg-card">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-foreground flex-1">{project.title}</h3>
                  <motion.span className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary/70 whitespace-nowrap ml-4">
                    {project.difficulty}
                  </motion.span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary/80 rounded-full border border-primary/30 hover:border-primary/50 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group/link"
                  >
                    <Github size={18} className="group-hover/link:scale-110 transition-transform" />
                    Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group/link"
                  >
                    <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                    Live
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
