"use client"

import { useState, useEffect } from "react"
import { X, Download, Maximize, Minimize } from "lucide-react"
import { Button } from "./ui/button"

interface ResumeModalProps {
  onClose: () => void
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullScreen) {
          setIsFullScreen(false)
        } else {
          onClose()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, isFullScreen])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-all duration-300 ${
        isFullScreen ? 'p-0' : 'p-4'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-card rounded-lg flex flex-col transition-all duration-300 ${
          isFullScreen 
            ? 'w-full h-full rounded-none' 
            : 'w-full max-w-4xl h-[90vh]'
        }`}
        onClick={handleModalClick}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Resume Preview</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullScreen}
              aria-label={isFullScreen ? "Exit full screen" : "View in full screen"}
            >
              {isFullScreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </Button>
            <a 
              href="/Meet_Sangani_Resume.pdf" 
              download
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
            {!isFullScreen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close resume"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4 flex justify-center">
          <iframe 
            src="/Meet_Sangani_Resume.pdf" 
            className="w-full h-full border-0"
            title="Resume Preview"
          />
        </div>
        
        {isFullScreen && (
          <div className="p-4 border-t">
            <Button onClick={() => setIsFullScreen(false)} className="ml-auto block">
              Exit Full Screen
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
