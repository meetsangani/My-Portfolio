"use client"

import React from "react"

export function useMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth < breakpoint)
      }

      checkIfMobile()

      window.addEventListener("resize", checkIfMobile)

      return () => window.removeEventListener("resize", checkIfMobile)
    }
  }, [breakpoint])

  return isMobile
}
