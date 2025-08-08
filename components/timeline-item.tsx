"use client"

import { ReactNode } from "react"

interface TimelineItemProps {
  year: string
  title: string
  organization: string
  description: string
  icon: ReactNode
  position: "left" | "right"
}

export default function TimelineItem({
  year,
  title,
  organization,
  description,
  icon,
  position,
}: TimelineItemProps) {
  return (
    <div className={`relative flex items-center mb-8 ${position === 'left' ? 'justify-start' : 'justify-end'}`}>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white z-10">
        {icon}
      </div>
    
      <div className={`w-5/12 ${position === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className="bg-muted/30 rounded-lg p-6 border-l-4 border-primary">
          <div className="text-primary font-semibold text-sm mb-1">{year}</div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-2">{organization}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
