import { Nav } from "@/components/nav"
import { HeroSection } from "@/features/home/components/hero-section"
import { SkillsSection } from "@/features/home/components/skills-section"
import { ProjectsSection } from "@/features/home/components/projects-section"
import { ExperienceSection } from "@/features/home/components/experience-section"
import { ContactSection } from "@/features/home/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
