"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ProjectCard } from "@/components/project-card";
import { SkillIcon } from "@/components/skill-icon";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Facebook,
  Download,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Database,
  Palette,
  Globe,
  Server,
  Wrench,
  ExternalLink,
} from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A comprehensive weather application with user authentication and real-time data",
      technologies: [
        "React",
        "React Query",
        "React Hook Form",
        "Zod",
        "Firebase",
        "React Router",
        "Vercel",
      ],
      demoUrl: "https://weather-app-lime-pi-47.vercel.app/login",
      githubUrl: "https://github.com/Youssef-Bassiem/weather-app",
      features: [
        "Efficient data fetching and state management with React Query",
        "Robust form handling and validation using React Hook Form with Zod",
        "Firebase Authentication with Google and GitHub sign-in",
        "Single-page application architecture with React Router",
      ],
    },
    {
      title: "Customer Transactions",
      description:
        "Interactive dashboard for visualizing customer transaction data",
      technologies: [
        "React",
        "Recharts",
        "Tailwind CSS",
        "JSON Server",
        "Vite",
        "Vercel",
      ],
      demoUrl: "https://route-task-ashen.vercel.app/",
      githubUrl: "https://github.com/Youssef-Bassiem/Customer-Transactions",
      features: [
        "Interactive data visualizations using Recharts",
        "Efficient search functionality with regex validation",
        "JSON server API with development and production environments",
        "Responsive UI components with custom tooltips and tables",
      ],
    },
    {
      title: "To-Do List",
      description:
        "Feature-rich task management application with local storage persistence",
      technologies: ["React", "CSS3", "Local Storage", "React Icons"],
      demoUrl: "https://youssef-bassiem.github.io/todo-list/",
      githubUrl: "https://github.com/Youssef-Bassiem/todo-list",
      features: [
        "Local storage integration for data persistence",
        "Real-time task updates with completion, editing, and deletion",
        "Responsive design with custom CSS styling",
        "Intuitive UI with third-party icon libraries",
      ],
    },
  ];

  const skills = {
    "Programming Languages": [
      { name: "JavaScript", icon: <Code className="h-4 w-4" /> },
      { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
      { name: "C#", icon: <Code className="h-4 w-4" /> },
      { name: "C++", icon: <Code className="h-4 w-4" /> },
      { name: "Python", icon: <Code className="h-4 w-4" /> },
      { name: "Java", icon: <Code className="h-4 w-4" /> },
    ],
    "Frameworks & Libraries": [
      { name: "React.js", icon: <Globe className="h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <Palette className="h-4 w-4" /> },
      { name: "Shadcn/ui", icon: <Palette className="h-4 w-4" /> },
      { name: "Material-UI", icon: <Palette className="h-4 w-4" /> },
      { name: "Redux", icon: <Server className="h-4 w-4" /> },
      { name: "React Query", icon: <Server className="h-4 w-4" /> },
      { name: "React Hook Form", icon: <Globe className="h-4 w-4" /> },
      { name: "Zod", icon: <Globe className="h-4 w-4" /> },
    ],
    Databases: [
      { name: "MySQL", icon: <Database className="h-4 w-4" /> },
      { name: "Firebase", icon: <Database className="h-4 w-4" /> },
      { name: "Oracle Database", icon: <Database className="h-4 w-4" /> },
      { name: "PL/SQL", icon: <Database className="h-4 w-4" /> },
    ],
    "Tools & Others": [
      { name: "Git", icon: <Wrench className="h-4 w-4" /> },
      { name: "Figma", icon: <Palette className="h-4 w-4" /> },
      { name: "Docker", icon: <Server className="h-4 w-4" /> },
      { name: "Kubernetes", icon: <Server className="h-4 w-4" /> },
      { name: "Linux", icon: <Wrench className="h-4 w-4" /> },
      { name: "Blender", icon: <Palette className="h-4 w-4" /> },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-evenly px-4">
          <div className="font-semibold text-lg text-primary">
            Youssef Bassiem
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="text-center space-y-6 py-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Hi, I'm <span className="text-primary">Youssef Bassiem</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                Junior Front-End Developer
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Giza, Egypt
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  +20 109 945 0185
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild>
                <a href="#contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/Youssef_Bassiem_CV.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </section>
        </ScrollAnimation>

        {/* About Section */}
        <ScrollAnimation delay={100}>
          <section id="about" className="space-y-6">
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  I'm a passionate Junior Front-End Developer with a Bachelor's
                  degree in Computer Science from Ain Shams University. I
                  specialize in building modern, responsive web applications
                  using React, TypeScript, and cutting-edge technologies. With
                  experience in both frontend development and mentoring, I'm
                  dedicated to creating exceptional user experiences and
                  contributing to innovative projects.
                </p>
              </CardContent>
            </Card>
          </section>
        </ScrollAnimation>

        {/* Education Section */}
        <ScrollAnimation delay={200}>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Education</h2>
            <div className="grid grid-cols-1 max-w-2xl mx-auto">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle>Bachelor of Computer Science</CardTitle>
                      <CardDescription>
                        Faculty of Computer and Information Science, Ain Shams
                        University
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Duration:</span> Sep 2020 –
                      Jul 2024
                    </div>
                    <div>
                      <span className="font-medium">Grade:</span> Very Good (GPA
                      3.1)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Experience Section */}
        <ScrollAnimation delay={300}>
          <section id="experience" className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <div className="grid grid-cols-1 max-w-2xl mx-auto">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle>Silverkey – Giz-dual Project</CardTitle>
                      <CardDescription>Frontend Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Contributed to a large-scale educational platform built
                      with Angular 12 and ASP.NET Core
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Identified and addressed major issues in legacy codebase
                      lacking clean coding practices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Refactored key components to follow Angular best practices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      Investigated and resolved performance bottlenecks in form
                      handling and API integration
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://dualedu.moe.gov.eg/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit Website
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Projects Section */}
        <ScrollAnimation delay={400}>
          <section id="projects" className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ScrollAnimation key={project.title} delay={500 + index * 100}>
                  <div className="h-full">
                    <ProjectCard {...project} />
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>
        </ScrollAnimation>

        {/* Skills Section */}
        <ScrollAnimation delay={500}>
          <section id="skills" className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Technical Skills</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(skills).map(
                ([category, skillList], categoryIndex) => (
                  <ScrollAnimation
                    key={category}
                    delay={500 + categoryIndex * 100}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl text-center">
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {skillList.map((skill, index) => (
                            <ScrollAnimation
                              key={skill.name}
                              delay={500 + categoryIndex * 100 + index * 50}
                            >
                              <SkillIcon {...skill} />
                            </ScrollAnimation>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                )
              )}
            </div>
          </section>
        </ScrollAnimation>

        {/* Achievements Section */}
        <ScrollAnimation delay={600}>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">
              Achievements & Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-lg">
                        Contest Achievements
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 flex-1">
                  <div className="text-sm">
                    <div className="font-medium">
                      Top 3 - Data Structure Contest
                    </div>
                    <div className="text-muted-foreground">
                      University competition (2022) - Out of 100+ teams
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">
                      5th Place - UI/UX Workshop Contest
                    </div>
                    <div className="text-muted-foreground">
                      University workshop (2022) - Out of 25+ teams
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-lg">Certifications</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm flex-1">
                  <div>• Web Development Challenger (Udacity)</div>
                  <div>• UX Design Fundamentals (Mahara-Tech)</div>
                  <div>• The Ultimate React Course (Udemy)</div>
                  <div>• ITI Summer Training - Full Stack Development</div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact Section */}
        <ScrollAnimation delay={600}>
          <section id="contact" className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <p className="text-muted-foreground">
                    I'm always interested in new opportunities and
                    collaborations. Feel free to reach out if you'd like to work
                    together!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <a href="mailto:youssef.bassiem@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Me
                      </a>
                    </Button>
                    <div className="flex gap-2 justify-center">
                      <Button size="icon" variant="outline" asChild>
                        <a
                          href="https://linkedin.com/in/Youssef-Bassiem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a
                          href="https://github.com/Youssef-Bassiem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="icon" variant="outline" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <Facebook className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </ScrollAnimation>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8 mt-16">
        <div className="w-full text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Youssef Bassiem. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
