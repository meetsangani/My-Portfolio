"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "./ui/button"

interface ResumeModalProps {
  onClose: () => void
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 2 // Assuming the resume has 2 pages

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Prevent clicks inside the modal from closing it
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Resume Preview</h2>
          <div className="flex items-center gap-3">
            <a 
              href="/MEET_RESUME.pdf" 
              download
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4 flex justify-center">
          <iframe 
            src={`/MEET_RESUME.pdf#page=${currentPage}`} 
            className="w-full h-full border rounded"
            title="Resume Preview"
          />
        </div>
        
        <div className="border-t p-3 flex items-center justify-between">
          <div className="text-sm">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
