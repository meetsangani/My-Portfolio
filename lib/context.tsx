"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  theme: string
  setTheme: (theme: string) => void
  activeSection: string
  setActiveSection: (section: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')

  return (
    <AppContext.Provider value={{ theme, setTheme, activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within AppProvider')
  return context
}
