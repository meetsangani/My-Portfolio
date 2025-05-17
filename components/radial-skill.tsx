"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useMobile } from "@/hooks/use-mobile"

interface RadialSkillProps {
  name: string
  percentage: number
}

export default function RadialSkill({ name, percentage }: RadialSkillProps) {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const isMobile = useMobile(640)
  
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

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className={`relative w-${size} h-${size} sm:w-32 sm:h-32`}>
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted opacity-20"
          />

          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-primary transform -rotate-90 origin-center transition-all duration-1000 ease-out"
          />

          {/* Percentage text */}
          <text
            x="100"
            y="100"
            textAnchor="middle"
            dominantBaseline="middle"
            className={fontSize + " font-bold"}
            fill="currentColor"
          >
            {progress}%
          </text>
        </svg>
      </div>

      <span className="mt-2 sm:mt-4 text-sm sm:text-base font-medium text-center">{name}</span>
    </div>
  )
}
