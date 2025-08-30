"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  features: string[]
}

export function ProjectCard({ title, description, technologies, demoUrl, githubUrl, features }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <ul className="text-sm text-muted-foreground space-y-1 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 pt-2 mt-auto">
          {demoUrl && (
            <Button size="sm" asChild className="flex-1">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Source
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
