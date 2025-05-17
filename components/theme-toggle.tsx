"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  showLabel?: boolean
}

export default function ThemeToggle({ 
  variant = "ghost", 
  size = "icon", 
  showLabel = false 
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={toggleTheme} 
      className="rounded-full hover:bg-primary/10"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      {showLabel && (
        <span className="ml-2">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      )}
    </Button>
  )
}
