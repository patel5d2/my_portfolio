"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import Typewriter from "@/components/Typewriter"
import BackToTop from "@/components/BackToTop"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      company: "Deloitte",
      role: "Cyber Job Simulation",
      location: "Remote, Australia",
      period: "June 2025",
      achievements: [
        "Executed analysis of system and web activity logs to detect anomalies",
        "Coordinated simulated incident response activities",
        "Formulated investigative techniques to assess security risks",
      ],
    },
    {
      company: "Modus Technologies",
      role: "Implementation Team Lead",
      location: "Rosemont, Illinois",
      period: "Dec 2024 – Apr 2025",
      achievements: [
        "Headed a team of 3+ technicians, reducing rollout time by 25%",
        "Conducted system log reviews and compliance checks",
        "Designed structured onboarding, cutting ramp-up time by 40%",
      ],
    },
    {
      company: "Modus Technologies",
      role: "Network Technician / Help Desk",
      location: "Rosemont, Illinois",
      period: "Dec 2023 – Apr 2025",
      achievements: [
        "Implemented secure network infrastructures with VLANs",
        "Managed 100+ monthly technical support tickets",
        "Directed product reliability testing, reducing issues by 30%",
      ],
    },
  ]

  const projects = [
    {
      title: "Proxmox Home Lab",
      description:
        "Configured virtual server environment to simulate network configurations and test security protocols",
      tech: ["Virtualization", "Security Testing", "Proxmox VE"],
      date: "May 2024",
    },
    {
      title: "VaultWarden",
      description: "Self-hosted password manager with reverse proxy and SMTP protocol for multi-factor authentication",
      tech: ["Docker", "YAML", "MFA", "Nginx"],
      date: "Apr 2025",
    },
    {
      title: "Pi-hole",
      description: "Self-hosted DNS sinkhole to block network-wide advertisements, enhancing security",
      tech: ["Raspberry Pi", "DNS", "Network Security"],
      date: "Feb 2023",
    },
    {
      title: "SyncStudy",
      description: "Cross-platform study planning app for Android/iOS to manage tasks and track academic progress",
      tech: ["C#", ".NET MAUI", "SQLite", "MVVM"],
      date: "Aug 2025",
    },
  ]

  const skills = {
    cybersecurity: ["Log Analysis", "IDS/IPS", "MFA", "DLP", "Insider Threat Detection"],
    networking: ["Firewalls", "ACLs", "VLANs", "VPNs", "TCP/IP", "Nginx Reverse Proxy"],
    programming: ["Python", "Java", "C#", "JavaScript", "TypeScript", "SQL"],
    tools: ["React.js", "Next.js", "Docker", "Git", "Proxmox", "Tailscale", "MongoDB"],
  }

  const certifications = [
    { name: "Dean's List", year: "2023 - 2025" },
    { name: "Cybersecurity Foundations", year: "Jan 2023" },
    { name: "The Cybersecurity Threat Landscape", year: "Jan 2023" },
  ]

  return (
    <div className="min-h-screen terminal-bg text-green-400">
      {/* Header */}
      <header className="border-b-2 border-green-400 bg-black/90 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div
              className={`font-mono transition-all duration-700 ${mounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
            >
              <h1 className="text-xl md:text-2xl font-bold text-green-400 glitch flex items-center gap-2">~/dharmin-patel$ <span className="blinking-dot"></span></h1>
            </div>
            <nav
              className={`flex gap-6 transition-all duration-700 delay-300 ${mounted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
              <a href="#about" className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim">
                about
              </a>
              <a href="#experience" className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim">
                experience
              </a>
              <a href="#projects" className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim">
                projects
              </a>
              <a href="#skills" className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim">
                skills
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 font-mono">
        {/* Hero Section */}
        <section className="mb-20 min-h-[60vh] flex items-center">
          <div className="w-full">
            <div
              className={`transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <pre className="text-green-400 text-[0.5rem] md:text-[0.6rem] mb-4 leading-tight">
                {`
██████╗ ██╗  ██╗ █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗
██╔══██╗██║  ██║██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║
██║  ██║███████║███████║██████╔╝██╔████╔██║██║██╔██╗ ██║
██║  ██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██║██║╚██╗██║
██████╔╝██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝
                                                          
██████╗  █████╗ ████████╗███████╗██╗                     
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║                     
██████╔╝███████║   ██║   █████╗  ██║                     
██╔═══╝ ██╔══██║   ██║   ██╔══╝  ██║                     
██║     ██║  ██║   ██║   ███████╗███████╗                
╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝                
`}
              </pre>
              <p className="font-mono text-lg md:text-xl text-green-300 mb-6">&gt; Cybersecurity & IT Professional</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:9789563508"
                  className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim"
                >
                  &gt; (978) 956-3508
                </a>
                <a
                  href="mailto:Patel5d2@mail.uc.edu"
                  className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim"
                >
                  &gt; Patel5d2@mail.uc.edu
                </a>
                <a
                  href="https://linkedin.com/in/dharmin-V-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim"
                >
                  &gt; LinkedIn
                </a>
                <a
                  href="https://github.com/patel5d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-green-400 hover:text-green-300 transition-colors underline-anim"
                >
                  &gt; GitHub
                </a>
              </div>
              <a href="/Resume.pdf" download>
                <Button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-8 py-3 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover">
                  &gt; view_resume.pdf
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 scroll-mt-20">
          <h2 className="font-mono text-2xl font-bold text-green-400 mb-8"><Typewriter text="> 01_whoami.sh" /></h2>
          <div
            className={`transition-all duration-1000 delay-200 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <Card className="bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] card-tilt card-brackets pixel-border-double">
              <CardContent className="p-6">
                <div className="text-green-300 text-sm leading-relaxed space-y-3">
                  <p>&gt; Loading user profile...</p>
                  <p>&gt; University of Cincinnati – BS/MS in Cybersecurity & IT (Expected May 2027)</p>
                  <p>&gt; GPA: 3.65 | Dean's List 2023-2025</p>
                  <p className="pt-2">
                    &gt; Cybersecurity professional with hands-on experience in network security, incident response, and
                    system administration. Passionate about building secure infrastructures and investigating security
                    threats.
                  </p>
                  <p>
                    &gt; Experienced in leading technical teams, implementing secure network solutions, and managing
                    complex IT projects. Proficient in virtualization, self-hosted services, and full-stack development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="section-separator my-20" />

        {/* Experience Section */}
        <section id="experience" className="mb-20 scroll-mt-20">
          <h2 className="font-mono text-2xl font-bold text-green-400 mb-8"><Typewriter text="> 02_experience.log" /></h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] animate-fade-in-up card-tilt card-brackets pixel-border-double"
                style={{ animationDelay: `${index * 150}ms`, transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <CardTitle className="font-mono text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {exp.company}
                    </CardTitle>
                    <Badge className="bg-green-600 text-black font-mono text-xs font-bold border border-green-400 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="font-mono text-green-300 text-sm">
                    {exp.role} | {exp.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="font-mono text-green-300 text-sm flex items-start">
                        <span className="text-green-500 mr-2">&gt;</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="section-separator my-20" />

        {/* Projects Section */}
        <section id="projects" className="mb-20 scroll-mt-20">
          <h2 className="font-mono text-2xl font-bold text-green-400 mb-8"><Typewriter text="> 03_projects.sh" /></h2>
          <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] hover:scale-105 animate-fade-in-up card-tilt card-brackets pixel-border-double"
                style={{ animationDelay: `${index * 100}ms`, transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-mono text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="font-mono text-xs text-green-500">{project.date}</span>
                  </div>
                  <CardDescription className="font-mono text-green-300 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        className="bg-green-900/50 text-green-400 font-mono text-xs border border-green-600 hover:border-green-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="section-separator my-20" />

        {/* Skills Section */}
        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="font-mono text-2xl font-bold text-green-400 mb-8"><Typewriter text="> 04_skills.sh" /></h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            <Card className="bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] animate-fade-in-up card-tilt card-brackets pixel-border-double">
              <CardHeader>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.cybersecurity.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-green-900/50 text-green-400 font-mono text-xs border border-green-600 hover:border-green-400 transition-all hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] animate-fade-in-up card-tilt card-brackets pixel-border-double"
              style={{ animationDelay: "100ms", transitionDelay: "100ms" }}
            >
              <CardHeader>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Networking & Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.networking.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-green-900/50 text-green-400 font-mono text-xs border border-green-600 hover:border-green-400 transition-all hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] animate-fade-in-up card-tilt card-brackets pixel-border-double"
              style={{ animationDelay: "200ms", transitionDelay: "200ms" }}
            >
              <CardHeader>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-green-900/50 text-green-400 font-mono text-xs border border-green-600 hover:border-green-400 transition-all hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] animate-fade-in-up card-tilt card-brackets pixel-border-double"
              style={{ animationDelay: "300ms", transitionDelay: "300ms" }}
            >
              <CardHeader>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Tools & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-green-900/50 text-green-400 font-mono text-xs border border-green-600 hover:border-green-400 transition-all hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mt-8">
            <h3 className="font-mono text-xl font-bold text-green-400 mb-4"><Typewriter text="> 05_certifications.txt" /></h3>
            <Card className="bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] card-tilt card-brackets pixel-border-double">
              <CardContent className="p-6">
                <div className="space-y-2">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-center justify-between font-mono text-sm text-green-300">
                      <span>&gt; {cert.name}</span>
                      <Badge className="bg-green-600 text-black font-mono text-xs font-bold border border-green-400">
                        {cert.year}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="section-separator my-20" />

        {/* Contact Section */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-black/80 animate-fade-in-up hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] card-tilt card-brackets pixel-border-double">
            <CardHeader>
              <CardTitle className="font-mono text-2xl font-bold text-green-400"><Typewriter text="> 06_get_in_touch.sh" /></CardTitle>
              <CardDescription className="font-mono text-green-300 text-sm">
                Let's connect and build something secure together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-6 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover"
                >
                  <a href="mailto:Patel5d2@mail.uc.edu">&gt; Email Me</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-green-900/30 text-green-400 font-mono font-bold px-6 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover"
                >
                  <a href="https://linkedin.com/in/dharmin-V-patel" target="_blank" rel="noopener noreferrer">
                    &gt; LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent hover:bg-green-900/30 text-green-400 font-mono font-bold px-6 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover"
                >
                  <a href="https://github.com/patel5d2" target="_blank" rel="noopener noreferrer">
                    &gt; GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <BackToTop />

      <footer className="border-t-2 border-green-400 bg-black/90 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="font-mono text-green-500 text-sm">&gt; © 2025 Dharmin V. Patel | Cybersecurity Professional</p>
        </div>
      </footer>
    </div>
  )
}
