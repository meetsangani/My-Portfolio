"use client"

import React from "react"
import { useState } from "react"
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
import { X } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  modalId: string
}

export default function ServiceCard({ icon, title, description, modalId }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Modal content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case "mern-modal":
        return {
          title: "MERN Stack Development",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">What I Offer:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full-stack web application development with MongoDB, Express.js, React.js and Node.js</li>
                <li>RESTful API design and implementation</li>
                <li>Database schema design and optimization</li>
                <li>State management using Redux or Context API</li>
                <li>JWT authentication and authorization</li>
                <li>Real-time applications with Socket.io</li>
                <li>Deployment and CI/CD pipeline setup</li>
                <li>Performance optimization and testing</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT", "REST API", "Mongoose"].map(
                  (tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </>
          ),
        }
      case "android-modal":
        return {
          title: "Android Development",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">What I Offer:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Native Android app development in Java and Kotlin</li>
                <li>Cross-platform development with React Native</li>
                <li>Material Design implementation</li>
                <li>RESTful API integration</li>
                <li>Local data storage and caching</li>
                <li>Push notification integration</li>
                <li>App performance optimization</li>
                <li>Play Store deployment and maintenance</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "Kotlin",
                  "Android Studio",
                  "React Native",
                  "SQLite",
                  "Firebase",
                  "Retrofit",
                  "Jetpack Compose",
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          ),
        }
      case "web-modal":
        return {
          title: "Web Development",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">What I Offer:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responsive website development</li>
                <li>Frontend development with modern frameworks</li>
                <li>Backend development and API integration</li>
                <li>E-commerce solutions</li>
                <li>Content Management Systems (WordPress, etc.)</li>
                <li>SEO optimization</li>
                <li>Website performance optimization</li>
                <li>Cross-browser compatibility</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "jQuery", "PHP", "WordPress"].map(
                  (tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </>
          ),
        }
      case "ui-ux-modal":
        return {
          title: "UI/UX Design",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">What I Offer:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>User interface design for web and mobile applications</li>
                <li>User experience research and implementation</li>
                <li>Wireframing and prototyping</li>
                <li>Design system creation</li>
                <li>Interactive mockups</li>
                <li>Visual design and branding</li>
                <li>Usability testing</li>
                <li>Responsive design for all screen sizes</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Photoshop", "Illustrator", "Principle"].map(
                  (tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </>
          ),
        }
      case "devops-modal":
        return {
          title: "DevOps Services",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">What I Offer:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>CI/CD pipeline implementation</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Cloud services configuration (AWS, Azure, GCP)</li>
                <li>Docker containerization</li>
                <li>Kubernetes orchestration</li>
                <li>Server monitoring and maintenance</li>
                <li>Performance optimization</li>
                <li>Automated testing and deployment</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS", "Azure", "Terraform", "Ansible"].map(
                  (tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </>
          ),
        }
      case "consultation-modal":
        return {
          title: "Technical Consultation",
          content: (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">What I Offer:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Technology stack selection guidance</li>
                <li>Architecture design and planning</li>
                <li>Code review and optimization</li>
                <li>Legacy system modernization strategies</li>
                <li>Performance optimization recommendations</li>
                <li>Security audit and improvements</li>
                <li>Team training and workshops</li>
                <li>Project management guidance</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-2">Areas of Expertise:</h3>
              <div className="flex flex-wrap gap-2">
                {["System Architecture", "Code Quality", "Best Practices", "Performance", "Security", "Scalability", "Project Planning", "Team Mentorship"].map(
                  (area) => (
                    <span key={area} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {area}
                    </span>
                  ),
                )}
              </div>
            </>
          ),
        }
      default:
        return {
          title: "Service Details",
          content: <p>No details available for this service.</p>,
        }
    }
  }

  const modalContent = getModalContent()

  return (
    <>
      <Card className="overflow-hidden border border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
            {icon}
          </div>

          <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>

          <p className="text-muted-foreground mb-6">{description}</p>

          <Button
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </Button>
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
