"use client"

import React from "react"

interface TypedTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypedText({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
}: TypedTextProps) {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isTyping, setIsTyping] = React.useState(true)

  React.useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < texts[currentIndex].length) {
        // Still typing the current text
        timeout = setTimeout(() => {
          setDisplayText(
            texts[currentIndex].substring(0, displayText.length + 1)
          )
        }, typingSpeed)
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenTexts)
      }
    } else {
      if (displayText.length > 0) {
        // Deleting the text
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        // Move to the next text
        setCurrentIndex((currentIndex + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [
    currentIndex,
    delayBetweenTexts,
    deletingSpeed,
    displayText,
    isTyping,
    texts,
    typingSpeed,
  ])

  return (
    <span className="text-primary">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}
