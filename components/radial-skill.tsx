"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

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

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage)
      }, 200)

      return () => clearTimeout(timer)
    }
  }, [inView, percentage])

  // Calculate the stroke dash offset based on the progress
  const radius = 70
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted opacity-20"
          />

          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
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
            className="text-2xl font-bold"
            fill="currentColor"
          >
            {progress}%
          </text>
        </svg>
      </div>

      <span className="mt-4 font-medium text-center">{name}</span>
    </div>
  )
}
