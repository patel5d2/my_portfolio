
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const runtime = 'edge';

export default function ProjectsPage() {
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

  return (
    <div className="min-h-screen terminal-bg text-green-400">
      <main className="max-w-6xl mx-auto px-6 py-12 font-mono">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-mono text-2xl font-bold text-green-400">Projects</h1>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-4 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover">
              &gt; Back to Home
            </Button>
          </Link>
        </div>
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
      </main>
    </div>
  )
}
