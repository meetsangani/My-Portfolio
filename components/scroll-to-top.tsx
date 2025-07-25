"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Throttle function to improve performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout
    let lastExecTime = 0
    return function (this: any, ...args: any[]) {
      const currentTime = Date.now()

      if (currentTime - lastExecTime > delay) {
        func.apply(this, args)
        lastExecTime = currentTime
      } else {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func.apply(this, args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }, [])

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  const throttledToggleVisibility = useCallback(
    throttle(toggleVisibility, 100),
    [toggleVisibility, throttle]
  )

  useEffect(() => {
    window.addEventListener("scroll", throttledToggleVisibility)
    return () => window.removeEventListener("scroll", throttledToggleVisibility)
  }, [throttledToggleVisibility])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      size="icon"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
