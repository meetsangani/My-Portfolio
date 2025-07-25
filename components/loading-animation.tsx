"use client"

import { useState, useEffect } from "react"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingPercentage, setLoadingPercentage] = useState(0)

  useEffect(() => {
    // Increment percentage from 0 to 100
    const percentageInterval = setInterval(() => {
      setLoadingPercentage(prev => {
        if (prev >= 100) {
          clearInterval(percentageInterval)
          return 100
        }
        return prev + 1
      })
    }, 20) // 20ms * 100 = 2000ms (2 seconds) total

    // Hide the loading animation after a delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(percentageInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center h-24 w-24 rounded-full border-4 border-primary relative overflow-hidden">
          <span className="text-3xl font-bold text-primary z-10">MS</span>
          {/* Circular progress indicator */}
          <div 
            className="absolute bottom-0 left-0 bg-primary/20 w-full transition-all duration-300 ease-out"
            style={{ 
              height: `${loadingPercentage}%`,
              borderTopLeftRadius: loadingPercentage > 95 ? '50%' : '0',
              borderTopRightRadius: loadingPercentage > 95 ? '50%' : '0'
            }}
          />
        </div>
        
        {/* Improved loading bar animation */}
        <div className="mt-6 w-64 h-2 bg-gray-200/30 rounded-full overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 ease-out"
            style={{ width: `${loadingPercentage}%` }}
          />
        </div>
        
        <div className="mt-4 text-xl font-medium text-primary flex items-center gap-2">
          <div className="relative w-6 h-6">
            {loadingPercentage < 100 && (
              <div className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            )}
          </div>
          <span className="font-mono tracking-wider">{loadingPercentage}%</span>
        </div>
      </div>
    </div>
  )
}
