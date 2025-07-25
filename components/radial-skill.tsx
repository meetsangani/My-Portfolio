"use client"

import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"

interface RadialSkillProps {
  name: string
  percentage: number
  color?: string
}

export default function RadialSkill({ name, percentage, color = "text-primary" }: RadialSkillProps) {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const isMobile = useMobile()
  
  // Responsive dimensions
  const size = isMobile ? 24 : 32
  const radius = isMobile ? 60 : 70
  const strokeWidth = isMobile ? 6 : 8
  const fontSize = isMobile ? "text-xl" : "text-2xl"

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [inView, percentage])

  // Calculate the stroke dash offset based on the progress
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-muted-foreground/20"
          />

          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className={color}
            style={{
              transition: "stroke-dasharray 0.6s ease-in-out",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-semibold">{progress}%</span>
        </div>
      </div>

      <span className="mt-2 text-sm font-medium text-center">{name}</span>
    </div>
  )
}
