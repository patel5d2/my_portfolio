
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const runtime = 'edge';

export default function BlogPage() {
  const posts = [
    {
      title: "My First Blog Post",
      description: "This is my first blog post. I'm excited to share my thoughts with you!",
      date: "Nov 2, 2025",
    },
    {
      title: "Setting up a Proxmox Home Lab",
      description: "In this post, I'll walk you through the process of setting up a Proxmox home lab from scratch.",
      date: "Nov 5, 2025",
    },
    {
      title: "Securing Your Home Network",
      description: "Learn how to secure your home network with a few simple steps.",
      date: "Nov 10, 2025",
    },
  ]

  return (
    <div className="min-h-screen terminal-bg text-green-400">
      <main className="max-w-6xl mx-auto px-6 py-12 font-mono">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-mono text-2xl font-bold text-green-400">Blog</h1>
          <Link href="/">
            <Button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-4 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover">
              &gt; Back to Home
            </Button>
          </Link>
        </div>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group bg-black/80 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30 hover:shadow-[inset_0_0_20px_rgba(0,255,65,0.1)] animate-fade-in-up card-tilt card-brackets pixel-border-double"
              style={{ animationDelay: `${index * 150}ms`, transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="font-mono text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="font-mono text-green-300 text-sm">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-green-300 text-sm leading-relaxed">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
