"use client"

import React, { useState, useEffect } from "react"
import { X, Download, Maximize, Minimize, ExternalLink, RefreshCw } from "lucide-react"
import { Button } from "./ui/button"

interface ResumeModalProps {
  onClose: () => void
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [pdfExists, setPdfExists] = useState(false)

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

  useEffect(() => {
    const checkPDFExists = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/MEET_RESUME.pdf", { 
          method: 'HEAD',
          cache: 'no-cache'
        })
        
        if (response.ok && response.headers.get('content-type')?.includes('application/pdf')) {
          setPdfExists(true)
          setIframeError(false)
        } else {
          setPdfExists(false)
          setIframeError(true)
        }
      } catch (error) {
        console.error("PDF file not accessible:", error)
        setPdfExists(false)
        setIframeError(true)
      } finally {
        setIsLoading(false)
      }
    }
    
    checkPDFExists()
  }, [])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
    setIframeError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setIframeError(true)
  }

  const openInNewTab = () => {
    const newWindow = window.open("/MEET_RESUME.pdf", "_blank")
    if (!newWindow) {
      window.location.href = "/MEET_RESUME.pdf"
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = "/MEET_RESUME.pdf"
    link.download = "Meet_Sangani_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const retryLoad = () => {
    setIsLoading(true)
    setIframeError(false)
    const iframe = document.getElementById('resume-iframe') as HTMLIFrameElement
    if (iframe) {
      iframe.src = iframe.src
    }
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all duration-300 animate-backdrop-in ${
        isFullScreen ? 'p-0' : 'p-4'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-card rounded-lg flex flex-col transition-all duration-300 shadow-2xl animate-modal-in ${
          isFullScreen 
            ? 'w-full h-full rounded-none' 
            : 'w-full max-w-5xl h-[90vh]'
        }`}
        onClick={handleModalClick}
      >
        <div className="flex justify-between items-center p-4 border-b bg-card/95 backdrop-blur-sm">
          <h2 className="text-xl font-semibold">Resume Preview</h2>
          <div className="flex items-center gap-2">
            {!isLoading && !iframeError && (
              <Button
                variant="ghost"
                size="icon"
                onClick={retryLoad}
                aria-label="Refresh"
                title="Refresh PDF"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleFullScreen}
              aria-label={isFullScreen ? "Exit full screen" : "View in full screen"}
            >
              {isFullScreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={openInNewTab}
              aria-label="Open in new tab"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={downloadResume}
              aria-label="Download resume"
            >
              <Download className="h-4 w-4" />
            </Button>
            {!isFullScreen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close resume"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden flex justify-center items-center bg-muted/10">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
              <p className="text-muted-foreground">Loading resume...</p>
            </div>
          ) : pdfExists && !iframeError ? (
            <iframe 
              id="resume-iframe"
              src="/MEET_RESUME.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH" 
              className="w-full h-full border-0"
              title="Resume Preview"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ minHeight: '500px' }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center max-w-md mx-auto p-6">
              <div className="mb-6">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                  <X className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Resume Not Available</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The PDF file could not be loaded. Please try one of the options below:
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button onClick={openInNewTab} variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open in New Tab
                </Button>
                <Button onClick={downloadResume} className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                If you continue to experience issues, please contact me directly at meetpatel26315@gmail.com
              </p>
            </div>
          )}
        </div>
        
        {isFullScreen && (
          <div className="p-4 border-t bg-card/95 backdrop-blur-sm flex justify-between items-center">
            <div className="flex gap-2">
              <Button onClick={openInNewTab} variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in New Tab
              </Button>
              <Button onClick={downloadResume} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
            <Button onClick={() => setIsFullScreen(false)}>
              Exit Full Screen
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
