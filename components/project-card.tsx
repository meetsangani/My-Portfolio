"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { X, Github, Play, Pause } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  modalId: string
  githubUrl: string
  isVideo?: boolean
}

export default function ProjectCard({
  title,
  description,
  image,
  modalId,
  githubUrl,
  isVideo = false,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Modal content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case "taskassigner-modal":
        return {
          title: "TaskAssigner Project",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">Project Overview:</h3>
              <p className="mb-4">
                TaskAssigner is a comprehensive task management system built using the MERN stack. It allows users to
                create, assign, track, and manage tasks efficiently.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>User authentication and authorization with JWT</li>
                <li>Task creation with priority levels and deadlines</li>
                <li>Task assignment to team members</li>
                <li>Real-time status updates</li>
                <li>Time tracking for tasks</li>
                <li>Dashboard with analytics</li>
                <li>RESTful API integration</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API", "JWT", "Axios"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">API Implementation:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>GET /api/tasks - Retrieve all tasks</li>
                <li>GET /api/tasks/:id - Retrieve specific task</li>
                <li>POST /api/tasks - Create new task</li>
                <li>PUT /api/tasks/:id - Update task status</li>
                <li>DELETE /api/tasks/:id - Delete task</li>
              </ul>
            </>
          ),
        }
      case "codo-modal":
        return {
          title: "CODO Recording Project",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">Project Overview:</h3>
              <p className="mb-4">
                CODO Recording is an advanced web application built with MERN stack that provides real-time code
                editing, recording, and AI assistance for developers and educators.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Real-time collaborative code editor</li>
                <li>Multiple programming language support</li>
                <li>Image-to-code conversion using AI</li>
                <li>Session recording and playback</li>
                <li>Code snippet sharing and exporting</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Monaco Editor"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          ),
        }
      case "portfolio-modal":
        return {
          title: "Portfolio Website Project",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">Project Overview:</h3>
              <p className="mb-4">
                A responsive portfolio website designed to showcase my skills, projects, and services in an interactive
                and engaging way.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Responsive design for all device sizes</li>
                <li>Dark/Light theme toggle</li>
                <li>Interactive particle background</li>
                <li>Animated skill progress bars</li>
                <li>Project showcase with modal details</li>
                <li>Contact form with email integration</li>
                <li>Smooth scrolling and section animations</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "Particles.js",
                  "Typed.js",
                  "Web3Forms",
                  "Responsive Design",
                  "CSS Animations",
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          ),
        }
      default:
        return {
          title: "Project Details",
          content: <p>No details available for this project.</p>,
        }
    }
  }

  const modalContent = getModalContent()

  const handleVideoToggle = () => {
    const video = document.getElementById("project-video") as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <Card className="overflow-hidden border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
        <div className="relative h-48 w-full overflow-hidden">
          {isVideo ? (
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover"
                // poster="/placeholder.svg"
                muted
                loop
                id="project-video"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                onClick={handleVideoToggle}
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="w-12 h-12 text-white" /> : <Play className="w-12 h-12 text-white" />}
              </button>
            </div>
          ) : (
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          )}
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>

          <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsModalOpen(true)}
            >
              Learn More
            </Button>

            <Button
              variant="outline"
              className="flex-1 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-primary">{modalContent.title}</DialogTitle>
          </DialogHeader>
          <DialogDescription>{modalContent.content}</DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
