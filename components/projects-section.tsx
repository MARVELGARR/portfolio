"use client"

import { projects as staticProjects } from "@/lib/portfolio-data"
import Link from "next/link"
import { ExternalLink, Github, Star, ChevronRight, Loader2, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github"

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await fetchGitHubRepos("MARVELGARR")
        setRepos(data.slice(0, 6)) // Get top 6 recent repos
      } catch (error) {
        console.error("Failed to load repos:", error)
      } finally {
        setLoading(false)
      }
    }
    loadRepos()
  }, [])

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
    <section id="projects" className="relative py-32 px-4 border-t border-primary/10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tighter uppercase">
              Selected_Works
            </h2>
            <div className="h-px flex-1 bg-primary/20" />
            <div className="text-[10px] font-mono text-primary/50 uppercase tracking-widest hidden sm:block">
              [INDEX: 02]
            </div>
          </div>
          <p className="text-muted-foreground text-lg font-mono max-w-2xl">
            {`// A compilation of primary builds and recursive GitHub repository activity.`}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Featured Projects First */}
            {staticProjects.slice(0, 3).map((project) => (
              <motion.div
                key={`static-${project.id}`}
                variants={itemVariants}
                className="group relative bg-card border border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden"
              >
                {/* Technical corner decor */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-full bg-primary/40" />
                  <div className="absolute top-0 right-0 h-px w-full bg-primary/40" />
                </div>

                <div className="relative h-56 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-primary text-primary-foreground border-l-2 border-primary-foreground/50">
                      Primary_System
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground uppercase tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-2 font-mono line-clamp-2 h-8">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 border border-primary/10 text-primary/70">
                        {`[${tech}]`}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Link href={project.github} target="_blank" className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors uppercase">
                        Code_Base
                      </Link>
                      {project.live !== "#" && (
                        <Link href={project.live} target="_blank" className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors uppercase">
                          Live_Link
                        </Link>
                      )}
                    </div>
                    <ArrowUpRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* GitHub Repos */}
            {repos.map((repo) => {
              if (staticProjects.some(p => p.github.toLowerCase().includes(repo.name.toLowerCase()))) return null;

              return (
                <motion.div
                  key={`repo-${repo.id}`}
                  variants={itemVariants}
                  className="group relative bg-card/20 border border-primary/10 hover:border-primary/40 transition-all duration-500 p-6 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Github className="text-primary/40 group-hover:text-primary transition-all duration-300" size={24} />
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                          <Star size={10} className="text-yellow-500/50" /> {repo.stargazers_count}
                        </span>
                      )}
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors animate-pulse" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-mono">
                      {`> ${repo.name.toUpperCase()}`}
                    </h3>
                    <p className="text-muted-foreground text-[11px] font-mono line-clamp-2 h-8 opacity-70">
                      {repo.description || "NO_DESCRIPTION_AVAILABLE"}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-primary/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-primary/60">
                      {`TYPE: ${repo.language || "UNKNOWN"}`}
                    </span>
                    <Link
                      href={repo.html_url}
                      target="_blank"
                      className="text-[10px] font-mono font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
                    >
                      Initialize
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        <div className="mt-20 text-center">
          <Link
            href={`https://github.com/MARVELGARR`}
            target="_blank"
            className="group inline-flex items-center gap-4 px-8 py-4 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 transition-all font-mono text-xs uppercase tracking-widest"
          >
            <Github size={16} />
            <span>Access_Full_Log</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
