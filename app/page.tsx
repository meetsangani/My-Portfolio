"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Briefcase,
  Download,
  Code,
  Globe,
  SmartphoneIcon as Android,
  ExternalLink,
  MessageCircle,
  Send,
  Server,
  FileCode,
  Image as ImageIcon,
  GraduationCap,
  Calendar,
  Filter,
} from "lucide-react"
import { FaHtml5, FaReact, FaNodeJs, FaPython, FaUserFriends, FaLightbulb, FaAndroid, FaPhp } from "react-icons/fa"
import { SiJavascript, SiMysql } from "react-icons/si"
import { BsChatSquareDots, BsTrophy } from "react-icons/bs"
import ParticlesBackground from "@/components/particles-background"
import TypedText from "@/components/typed-text"
import ServiceCard from "@/components/service-card"
import ProjectCard from "@/components/project-card"
import SkillBar from "@/components/skill-bar"
import RadialSkill from "@/components/radial-skill"
import ContactForm from "@/components/contact-form"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingAnimation from "@/components/loading-animation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BlogCard from "@/components/blog-card"
import TimelineItem from "@/components/timeline-item"
import ResumeModal from "@/components/resume-modal"
import { useState } from "react"

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("all");
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  // Project categories for filtering
  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "mern", name: "MERN Stack" },
  ];
  
  // Project data with categories
  const projects = [
    {
      id: 1,
      title: "TaskAssigner",
      description: "A comprehensive task management system with time tracking and task assignment features built with MERN stack.",
      image: "/TaskManager.png", // Make sure this image exists
      modalId: "taskassigner-modal",
      githubUrl: "https://github.com/meetsangani/TaskAssigner",
      categories: ["web", "mern"],
    },
    {
      id: 2,
      title: "CODO",
      description: "A versatile MERN stack application for code recording with real-time editing, multiple language support, and AI assistance.",
      image: "/CODO_RECORDING.mp4",  // Adding the leading slash to correctly reference from public folder
      modalId: "codo-modal",
      githubUrl: "https://github.com/meetsangani/Online-Compiler",
      isVideo: true,
      categories: ["web", "mern"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my skills, projects and services built with HTML, CSS and JavaScript.",
      image: "/portfolio.png", // Make sure this image exists
      modalId: "portfolio-modal",
      githubUrl: "https://github.com/meetsangani/My-Portfolio",
      categories: ["web"],
    },
    {
      id: 4,
      title: "NAAC-LLM-REPORT",
      description: "Mobile e-commerce application built with React Native, featuring product browsing, cart management, and secure checkout.",
      image: "/NAAC.png", // Make sure this image exists
      modalId: "NAAC-modal",
      githubUrl: "https://github.com/meetsangani/LLM-NACC-REPORT-ASSSSOR",
      categories: ["mobile"],
    },
  ];
  
  // Filter projects based on selected category
  const filteredProjects = projectFilter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(projectFilter));

  return (
    <main className="relative min-h-screen overflow-hidden">
      <LoadingAnimation />
      <ParticlesBackground />

      {/* Home Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-24 pb-16"
      >
        <div className="w-full md:w-1/2 flex justify-center md:order-2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <Image
              src="/mypic.jpg"
              alt="Meet Sangani profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left md:order-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 animate-fadeIn">Hello, It's Me</h3>
          <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-slideRight">Meet Sangani</h1>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            And I'm a <TypedText texts={["Web Developer", "App Developer", "MERN Stack Developer"]} />
          </h3>
          <div className="text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0 animate-fadeIn">
            I'm a MERN Stack Developer with 6 months of hands-on experience.
            <br />
            <strong>Work Experience</strong>
            <br />
            Junior MERN Stack Developer
            <br />
            2023 - Present
            <br />
            • Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js
            <br />
            • Building RESTful APIs and integrating with frontend
            <br />
            • Collaborating with UI/UX designers for responsive interfaces
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mb-6 animate-slideLeft">
            <Link href="https://github.com/meetsangani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-10 h-10 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/meet-sangani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-10 h-10 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link
              href="https://www.freelancer.com/u/meetsangani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Freelancer"
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-10 h-10 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Briefcase className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="animate-slideTop flex space-x-4">
            <Link href="#aboutme">
              <Button className="rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all">
                More About Me
              </Button>
            </Link>
            <Button 
              className="rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all flex items-center gap-2"
              onClick={() => setShowResumeModal(true)}
            >
              <Download className="h-4 w-4" /> View Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}

      {/* About Section */}
      <section id="aboutme" className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            About<span className="text-primary"> Me</span>
          </h2>

          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl text-center">
              <h4 className="text-xl md:text-2xl font-semibold mb-4">
                Full Stack <span className="text-primary">Developer</span>
              </h4>
              <div className="text-base md:text-lg mx-auto">
                If you are just getting into Android development this will give you a good road map on what to learn and
                in which order. If you are not familiar with the technology and concept I am talking about don't worry I
                have added links toward resources that will help become a good android developer.
                <br /><br />
                Before even talking to you, companies want to see what type of projects you've worked on and what you
                are able to do. It is important to build a nice portfolio with a couple of apps.
                <br /><br />
                You should include at least one project in Java and one in Kotlin.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Education & <span className="text-primary">Experience</span>
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline center line - hidden on very small screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/50 hidden sm:block"></div>
            
            {/* Mobile timeline - show only on very small screens */}
            <div className="sm:hidden space-y-8 mb-8">
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                <div className="flex items-center mb-2">
                  <Briefcase className="text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Junior MERN Stack Developer</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Imbuesoft LLP</p>
                <p className="text-xs text-muted-foreground mb-2">2023 - Present</p>
                <p className="text-sm">Working on full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Building RESTful APIs and collaborating with UI/UX designers.</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                <div className="flex items-center mb-2">
                  <GraduationCap className="text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Master of Computer Applications (MCA)</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Atmiya University, Rajkot</p>
                <p className="text-xs text-muted-foreground mb-2">2023 - 2025</p>
                <p className="text-sm">Pursuing advanced studies in computer applications with specialization in modern web technologies and software development methodologies.</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                <div className="flex items-center mb-2">
                  <GraduationCap className="text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Bachelor of Computer Applications (BCA)</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">Atmiya University, Rajkot</p>
                <p className="text-xs text-muted-foreground mb-2">2020 - 2023</p>
                <p className="text-sm">Completed undergraduate studies in computer applications with focus on programming fundamentals, web development, and database management.</p>
              </div>
            </div>
            
            {/* Desktop timeline - hide on small screens */}
            <div className="hidden sm:block">
              <TimelineItem 
                year="2023 - Present"
                title="Junior MERN Stack Developer"
                organization="Imbuesoft LLP"
                description="Working on full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Building RESTful APIs and collaborating with UI/UX designers."
                icon={<Briefcase />}
                position="right"
              />
              
              <TimelineItem 
                year="2023 - 2025"
                title="Master of Computer Applications (MCA)"
                organization="Atmiya University, Rajkot"
                description="Pursuing advanced studies in computer applications with specialization in modern web technologies and software development methodologies."
                icon={<GraduationCap />}
                position="left"
              />
              
              <TimelineItem 
                year="2020 - 2023"
                title="Bachelor of Computer Applications (BCA)"
                organization="Atmiya University, Rajkot"
                description="Completed undergraduate studies in computer applications with focus on programming fundamentals, web development, and database management."
                icon={<GraduationCap />}
                position="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-primary">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code className="h-10 w-10" />}
              title="MERN Stack Development"
              description="Build robust, scalable web apps using MongoDB, Express.js, React.js, and Node.js. RESTful APIs, authentication, and modern UI/UX."
              modalId="mern-modal"
            />

            <ServiceCard
              icon={<Android className="h-10 w-10" />}
              title="Android Development"
              description="Native & cross-platform Android apps with Java/Kotlin. Material Design, API integration, and Play Store deployment."
              modalId="android-modal"
            />

            <ServiceCard
              icon={<Globe className="h-10 w-10" />}
              title="Web Development"
              description="Responsive, dynamic websites with modern tech. SEO, e-commerce, CMS, and cross-browser compatibility."
              modalId="web-modal"
            />
            
            <ServiceCard
              icon={<ImageIcon className="h-10 w-10" />}
              title="UI/UX Design"
              description="User-centered design for web and mobile applications with focus on usability, aesthetics, and optimal user experience."
              modalId="ui-ux-modal"
            />
            
            <ServiceCard
              icon={<Server className="h-10 w-10" />}
              title="DevOps Services"
              description="Streamline development with CI/CD pipelines, containerization, cloud services, and automated deployment workflows."
              modalId="devops-modal"
            />
            
            <ServiceCard
              icon={<FileCode className="h-10 w-10" />}
              title="Technical Consultation"
              description="Expert guidance on technology stack selection, architecture design, code quality, and development best practices."
              modalId="consultation-modal"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-primary">Skills</span>
          </h2>
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="professional">Professional Skills</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="w-full">
              {/* Mobile view for technical skills */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaHtml5 className="text-orange-500 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-orange-500 text-center">HTML/CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaReact className="text-blue-500 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-blue-500 text-center">React</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <SiJavascript className="text-yellow-500 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-yellow-500 text-center">Javascript</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaPython className="text-purple-500 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-purple-500 text-center">Python</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaNodeJs className="text-green-500 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-green-500 text-center">Node.js</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaAndroid className="text-green-600 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-green-600 text-center">Android</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaPhp className="text-indigo-500 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-indigo-500 text-center">PHP</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <SiMysql className="text-blue-600 text-3xl mb-1" />
                  <span className="text-sm font-semibold text-blue-600 text-center">SQL</span>
                </div>
              </div>
              
              {/* Desktop view for technical skills */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaHtml5 className="text-orange-500 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-orange-500">HTML/CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaReact className="text-blue-500 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-blue-500">React</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <SiJavascript className="text-yellow-500 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-yellow-500">Javascript</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaPython className="text-purple-500 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-purple-500">Python</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaNodeJs className="text-green-500 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-green-500">Node.js</span>
                </div>
              </div>
              
              <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto mt-4">
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaAndroid className="text-green-600 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-green-600">Android</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaPhp className="text-indigo-500 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-indigo-500">PHP</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <SiMysql className="text-blue-600 text-4xl mb-2" />
                  <span className="text-lg font-semibold text-blue-600">SQL</span>
                </div>
                <div className="col-span-2"></div>
              </div>
            </TabsContent>
            
            <TabsContent value="professional" className="w-full">
              {/* Mobile view for professional skills */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <BsChatSquareDots className="text-primary text-3xl mb-1" />
                  <span className="text-sm font-semibold text-primary text-center">Communication</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaLightbulb className="text-primary text-3xl mb-1" />
                  <span className="text-sm font-semibold text-primary text-center">Problem Solving</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <FaUserFriends className="text-primary text-3xl mb-1" />
                  <span className="text-sm font-semibold text-primary text-center">TeamWork</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-muted/30 rounded-lg">
                  <BsTrophy className="text-primary text-3xl mb-1" />
                  <span className="text-sm font-semibold text-primary text-center">Leadership</span>
                </div>
              </div>
              
              {/* Desktop view for professional skills */}
              <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <BsChatSquareDots className="text-primary text-4xl mb-2" />
                  <span className="text-lg font-semibold text-primary">Communication</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaLightbulb className="text-primary text-4xl mb-2" />
                  <span className="text-lg font-semibold text-primary">Problem Solving</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <FaUserFriends className="text-primary text-4xl mb-2" />
                  <span className="text-lg font-semibold text-primary">TeamWork</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
                  <BsTrophy className="text-primary text-4xl mb-2" />
                  <span className="text-lg font-semibold text-primary">Leadership</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Latest <span className="text-primary">Projects</span>
          </h2>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {projectCategories.map((category) => (
              <Button
                key={category.id}
                variant={projectFilter === category.id ? "default" : "outline"}
                onClick={() => setProjectFilter(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                modalId={project.modalId}
                githubUrl={project.githubUrl}
                isVideo={project.isVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 md:px-10 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-center mb-12 max-w-lg mx-auto">Insights and tutorials on web development, mobile apps, and the latest tech trends</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard 
              title="Getting Started with MERN Stack Development"
              excerpt="Learn how to set up your first MERN stack project with this comprehensive guide for beginners."
              image="/placeholder.svg?height=200&width=400"
              date="May 12, 2023"
              readTime="8 min read"
              url="/blog/getting-started-with-mern"
            />
            <BlogCard 
              title="Advanced React Hooks: Beyond the Basics"
              excerpt="Take your React skills to the next level by mastering advanced hooks and custom hook patterns."
              image="/placeholder.svg?height=200&width=400"
              date="July 24, 2023"
              readTime="12 min read"
              url="/blog/advanced-react-hooks"
            />
            <BlogCard 
              title="Optimizing MongoDB for Production"
              excerpt="Best practices and performance tips for scaling your MongoDB database in production environments."
              image="/placeholder.svg?height=200&width=400"
              date="September 8, 2023"
              readTime="10 min read"
              url="/blog/optimizing-mongodb"
            />
          </div>
          
          <div className="text-center mt-8">
            <Link href="/blog">
              <Button variant="outline" className="rounded-full px-6">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Contact <span className="text-primary">Me</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h4 className="text-xl md:text-2xl font-semibold mb-4">Let's work Together</h4>
              <p className="text-base md:text-lg mb-6">
                Android operating system is the largest installed base among various mobile platforms across the globe.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-primary" />
                  <span>meetpatel26315@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>6354537665</span>
                </li>
              </ul>

              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full w-10 h-10 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full w-10 h-10 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full w-10 h-10 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ExternalLink className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-background border-t">
        <div className="container mx-auto text-center">
          <p>Developed by Meet Sangani ©{new Date().getFullYear()}</p>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  )
}
