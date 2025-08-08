"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = document.querySelectorAll('section[id]')
      let currentSection = "home"
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || "home"
        }
      })
      
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#aboutme", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '')
    return sectionId === activeSection
  }

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        <nav className={`hidden md:flex items-center space-x-6`}>
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`desktop-nav-link text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary active" : "text-foreground/80"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={handleLinkClick}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobile && (
        <nav
          className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-[400px] border-b" : "max-h-0"
          }`}
        >
          <div className="container mx-auto py-2 px-4">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link block py-3 px-4 rounded-md transition-colors hover:bg-muted ${
                      isActive(link.href) ? "text-primary active" : "text-foreground/80"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 0.05}s` : "0s",
                      transform: isMenuOpen ? "translateX(0)" : "translateX(-10px)",
                      opacity: isMenuOpen ? 1 : 0,
                      transition: "transform 0.3s ease, opacity 0.3s ease",
                    }}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
