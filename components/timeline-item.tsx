"use client"

import * as React from "react"

interface TimelineItemProps {
  year: string
  title: string
  organization: string
  description: string
  icon: React.ReactNode
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
    <div className={`relative flex items-start mb-12 ${position === "right" ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content box */}
      <div className={`w-1/2 ${position === "right" ? "pr-8 text-right" : "pl-8"}`}>
        <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-5 shadow-md">
          <h4 className="text-lg font-bold text-primary mb-2">{year}</h4>
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{organization}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      {/* Center icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 z-10">
        <div className="bg-primary rounded-full p-2.5 text-primary-foreground shadow-lg">
          {React.isValidElement(icon)
            ? React.cloneElement(icon, { className: "h-5 w-5" })
            : icon}
        </div>
      </div>

      {/* Empty space for the other side */}
      <div className="w-1/2"></div>
    </div>
  )
}
