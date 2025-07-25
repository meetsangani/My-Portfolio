"use client"

import React from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }

      // Initial check
      checkIfMobile()

      // Add event listener for window resize
      window.addEventListener("resize", checkIfMobile)

      // Clean up event listener
      return () => window.removeEventListener("resize", checkIfMobile)
    }
  }, [breakpoint])

  return isMobile
}
