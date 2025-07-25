"use client"

import { useState } from "react"
import Image from "next/image"
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
import { Github, ExternalLink, X, Play, Pause } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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

  // Updated images for TaskAssigner slider with fallback
  const taskAssignerImages = [
    "/TaskManager.png",
    "/TaskDashboard.png", 
    "/learning.png",
    "/HrMainScreen.png"
  ].filter(Boolean) // Remove any undefined/null values

  // Modal content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case "taskassigner-modal":
        return {
          title: "TaskAssigner Project",
          content: (
            <>
              {/* Slider for TaskAssigner */}
              <div className="mb-6">
                <Carousel className="w-full max-w-2xl mx-auto relative">
                  <CarouselContent>
                    {taskAssignerImages.map((imageSrc, index) => (
                      <CarouselItem key={index}>
                        <div className="relative h-64 md:h-80 w-full">
                          <Image
                            src={imageSrc}
                            alt={`TaskAssigner Screenshot ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hover:scale-110 transition-transform" />
                  <CarouselNext className="hover:scale-110 transition-transform" />
                </Carousel>
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">Project Overview:</h3>
              <p className="mb-4">
                TaskAssigner is a comprehensive task management system built using the MERN stack. It allows users to
                create, assign, track, and manage tasks efficiently.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>User authentication and authorization</li>
                <li>Task creation, assignment, and tracking</li>
                <li>Real-time notifications</li>
                <li>Dashboard with analytics</li>
                <li>Team collaboration features</li>
                <li>Progress monitoring and reporting</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Express.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JWT Authentication</span>
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">API Implementation:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>RESTful API design with Express.js</li>
                <li>MongoDB database integration</li>
                <li>JWT token-based authentication</li>
                <li>Real-time updates with Socket.io</li>
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
                <li>Real-time code editing and collaboration</li>
                <li>Screen and code recording capabilities</li>
                <li>Multiple programming language support</li>
                <li>AI-powered code assistance</li>
                <li>Live coding sessions</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Socket.io</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
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
                <li>Responsive design for all devices</li>
                <li>Interactive animations and effects</li>
                <li>Contact form integration</li>
                <li>Project showcase with modals</li>
                <li>Skills visualization</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind CSS</span>
              </div>
            </>
          ),
        }
      case "NAAC-modal":
        return {
          title: "NAAC LLM Report Assessor",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">Project Overview:</h3>
              <p className="mb-4">
                This project is an innovative mobile application leveraging Large Language Models (LLMs) 
                to streamline the NAAC accreditation process. It acts as an intelligent assistant for 
                understanding guidelines, assessing report components, and answering queries related to NAAC.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Interactive chat interface for queries.</li>
                <li>LLM-powered analysis of report sections.</li>
                <li>Guidance on NAAC criteria and parameters.</li>
                <li>Built with React Native for cross-platform mobile access.</li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python (Backend)</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">LLM Integration</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Flask/FastAPI</span>
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
                id="project-video"
                src={image}
                className="w-full h-full object-cover"
                muted
                loop
              />
              <button
                onClick={handleVideoToggle}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-12 w-12 text-white" />
                ) : (
                  <Play className="h-12 w-12 text-white" />
                )}
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
              onClick={() => setIsModalOpen(true)}
              className="flex-1"
            >
              View Details
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{modalContent.title}</DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div>{modalContent.content}</div>
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  )
}
