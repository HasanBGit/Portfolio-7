"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, FileText, BookOpen, User, Briefcase } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "publications", "resume"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "about", label: "About", icon: User },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "publications", label: "Publications", icon: BookOpen },
                { id: "resume", label: "Resume", icon: FileText },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300 ${
                    activeSection === id
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              John Doe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                bridge the gap between design and functionality. I specialize in modern web technologies and have a keen
                eye for user experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through technical writing and speaking at conferences.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-800 rounded-full border-4 border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "AI Content Generator",
                description: "An AI-powered content generation tool using OpenAI's GPT API",
                tech: ["Python", "FastAPI", "OpenAI", "React"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video bg-gray-700 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Publications</h2>
          <div className="space-y-8">
            {[
              {
                title: "Building Scalable Web Applications with Next.js",
                publication: "Tech Weekly",
                date: "2024",
                description:
                  "A comprehensive guide to building and deploying scalable web applications using Next.js and modern deployment strategies.",
              },
              {
                title: "The Future of Frontend Development",
                publication: "Developer Magazine",
                date: "2023",
                description:
                  "Exploring emerging trends and technologies that are shaping the future of frontend development.",
              },
              {
                title: "Optimizing Database Performance in Node.js Applications",
                publication: "Backend Insights",
                date: "2023",
                description:
                  "Best practices and techniques for optimizing database queries and improving application performance.",
              },
            ].map((publication, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white mb-2">{publication.title}</CardTitle>
                      <CardDescription className="text-blue-400">
                        {publication.publication} • {publication.date}
                      </CardDescription>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{publication.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
          <div className="text-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Senior Full Stack Developer",
                    company: "Tech Corp",
                    period: "2022 - Present",
                    description: "Lead development of scalable web applications serving 100k+ users",
                  },
                  {
                    title: "Frontend Developer",
                    company: "StartupXYZ",
                    period: "2020 - 2022",
                    description: "Built responsive web applications using React and modern frontend technologies",
                  },
                  {
                    title: "Junior Developer",
                    company: "WebSolutions",
                    period: "2019 - 2020",
                    description: "Developed and maintained client websites using various web technologies",
                  },
                ].map((job, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">{job.title}</h4>
                    <p className="text-blue-400 mb-2">
                      {job.company} • {job.period}
                    </p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
              <div className="space-y-6">
                {[
                  {
                    degree: "Bachelor of Science in Computer Science",
                    school: "University of Technology",
                    period: "2015 - 2019",
                    description: "Graduated Magna Cum Laude with focus on Software Engineering",
                  },
                  {
                    degree: "Full Stack Web Development Bootcamp",
                    school: "Code Academy",
                    period: "2019",
                    description: "Intensive 6-month program covering modern web development technologies",
                  },
                ].map((education, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-lg font-semibold text-white">{education.degree}</h4>
                    <p className="text-purple-400 mb-2">
                      {education.school} • {education.period}
                    </p>
                    <p className="text-gray-300">{education.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 John Doe. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
