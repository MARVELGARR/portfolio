"use client"

import { projects as staticProjects } from "@/lib/portfolio-data"
import Link from "next/link"
import { ArrowUpRight, ChevronRight, Github, Loader2, Search, Star, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github"

type PortfolioProject = (typeof staticProjects)[number]

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("")
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<PortfolioProject | null>(null)

  useEffect(() => {
    fetchGitHubRepos("MARVELGARR").then((data) => setRepos(data.slice(0, 9))).finally(() => setLoading(false))
  }, [])

  const filteredProjects = useMemo(() => staticProjects.filter((project) => {
    const matchesFilter = filter === "All" || project.category === filter
    const haystack = `${project.title} ${project.description} ${project.technologies.join(" ")}`.toLowerCase()
    return matchesFilter && haystack.includes(query.toLowerCase())
  }), [filter, query])

  const categories = ["All", ...Array.from(new Set(staticProjects.map((project) => project.category)))]

  return (
    <section id="projects" className="relative overflow-hidden border-t border-primary/10 px-4 py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <motion.div className="relative mx-auto max-w-6xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: "-100px" }}>
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4"><h2 className="text-4xl font-bold uppercase tracking-tighter text-foreground md:text-5xl">Selected_Works</h2><div className="h-px flex-1 bg-primary/20" /><span className="hidden text-[10px] font-mono uppercase tracking-widest text-primary/50 sm:block">[INDEX: 02]</span></div>
          <p className="max-w-2xl text-lg font-mono text-muted-foreground">{`// Systems built to solve real problems, measured in outcomes.`}</p>
        </div>

        <div className="mb-10 flex flex-col gap-4 border-y border-primary/10 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`border px-3 py-2 text-[10px] font-mono uppercase tracking-widest transition-colors ${filter === category ? "border-primary bg-primary text-primary-foreground" : "border-primary/20 text-muted-foreground hover:border-primary hover:text-primary"}`} aria-pressed={filter === category}>{category}</button>)}
          </div>
          <label className="flex items-center gap-2 border border-primary/20 px-3 py-2 text-muted-foreground focus-within:border-primary"><Search size={14} className="text-primary" /><span className="sr-only">Search projects</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="SEARCH_SYSTEMS" className="w-full bg-transparent text-xs font-mono uppercase outline-none placeholder:text-muted-foreground/50 md:w-44" /></label>
        </div>

        {loading ? <div className="flex justify-center py-20"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div> : <>
          <div className="mb-5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground"><span>{filteredProjects.length} curated systems</span><span className="text-primary">{repos.length} live repositories detected</span></div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" layout>
            {filteredProjects.map((project) => <motion.article key={project.id} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="group relative overflow-hidden border border-primary/20 bg-card transition-all duration-500 hover:border-primary/60">
              <div className="relative h-52 overflow-hidden bg-muted"><Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" /><div className="absolute left-4 top-4 bg-primary px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-primary-foreground">{project.status}</div></div>
              <div className="space-y-4 p-6"><div><div className="mb-2 text-[10px] font-mono uppercase tracking-widest text-primary/60">{project.category} / {project.difficulty}</div><h3 className="text-xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">{project.title}</h3><p className="mt-2 line-clamp-2 h-8 text-xs font-mono text-muted-foreground">{project.description}</p></div><div className="flex flex-wrap gap-2">{project.technologies.slice(0, 3).map((tech) => <span key={tech} className="border border-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary/70">[{tech}]</span>)}</div><div className="flex items-center justify-between border-t border-primary/5 pt-4"><button onClick={() => setSelected(project)} className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary">Inspect_System</button><ArrowUpRight size={14} className="text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" /></div></div>
            </motion.article>)}
          </motion.div>
          {filteredProjects.length === 0 && <div className="border border-dashed border-primary/20 py-16 text-center font-mono text-sm text-muted-foreground">NO_MATCHING_SYSTEMS // ADJUST_QUERY</div>}

          <div className="mt-16 border-t border-primary/10 pt-8"><div className="mb-5 flex items-center justify-between"><h3 className="text-sm font-bold uppercase tracking-widest text-foreground">GitHub_Activity</h3><span className="text-[10px] font-mono text-primary">AUTO_SYNC: 10H</span></div><div className="grid gap-3 md:grid-cols-3">{repos.slice(0, 6).map((repo) => <Link key={repo.id} href={repo.html_url} target="_blank" className="group border border-primary/10 bg-card/20 p-4 transition-colors hover:border-primary/40"><div className="flex items-center justify-between"><Github size={18} className="text-primary/50 group-hover:text-primary" />{repo.stargazers_count > 0 && <span className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground"><Star size={10} />{repo.stargazers_count}</span>}</div><h4 className="mt-4 truncate font-mono text-sm uppercase text-foreground group-hover:text-primary">{repo.name}</h4><p className="mt-1 truncate text-[10px] font-mono text-muted-foreground">{repo.language || "UNKNOWN"} // {repo.description || "NO_DESCRIPTION"}</p></Link>)}</div></div>
        </>}
        <div className="mt-16 text-center"><Link href="https://github.com/MARVELGARR" target="_blank" className="group inline-flex items-center gap-4 border border-primary/20 bg-primary/5 px-8 py-4 font-mono text-xs uppercase tracking-widest transition-all hover:border-primary hover:bg-primary/10"><Github size={16} />Access_Full_Log<ChevronRight size={16} className="transition-transform group-hover:translate-x-1" /></Link></div>
      </motion.div>

      {selected && <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${selected.title} details`} onClick={() => setSelected(null)}><div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-primary/40 bg-card p-8" onClick={(event) => event.stopPropagation()}><button onClick={() => setSelected(null)} className="absolute right-4 top-4 text-muted-foreground hover:text-primary" aria-label="Close details"><X size={18} /></button><div className="mb-2 text-[10px] font-mono uppercase tracking-widest text-primary">{selected.category} // {selected.status}</div><h3 className="text-3xl font-bold uppercase tracking-tighter text-foreground">{selected.title}</h3><p className="mt-5 font-mono text-sm leading-relaxed text-muted-foreground">{selected.description}</p><div className="mt-6 border-l border-primary/30 pl-4 font-mono text-sm text-primary">IMPACT: {selected.impact}</div><div className="mt-6 grid gap-6 md:grid-cols-2"><div><h4 className="text-[10px] font-mono uppercase tracking-widest text-primary">Architecture</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{selected.architecture}</p></div><div><h4 className="text-[10px] font-mono uppercase tracking-widest text-primary">Stack</h4><div className="mt-2 flex flex-wrap gap-2">{selected.technologies.map((tech) => <span key={tech} className="border border-primary/20 px-2 py-1 text-[10px] font-mono text-muted-foreground">{tech}</span>)}</div></div></div><div className="mt-8 flex gap-5 border-t border-primary/10 pt-5 font-mono text-xs uppercase tracking-widest"> <Link href={selected.github} target="_blank" className="text-primary hover:underline">Code_Base</Link>{selected.live !== "#" && <Link href={selected.live} target="_blank" className="text-primary hover:underline">Live_Link</Link>}</div></div></div>}
    </section>
  )
}

export default ProjectsSection
