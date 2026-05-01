import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [muted, setMuted] = useState(false)
  const [openWindows, setOpenWindows] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved === 'true') setDarkMode(true)
  }, [])

  const toggleDark = () => {
    setDarkMode(d => {
      localStorage.setItem('darkMode', !d)
      return !d
    })
  }

  const openWindow = (id) => {
    setOpenWindows(prev => prev.includes(id) ? prev : [...prev, id])
  }

  const closeWindow = (id) => {
    setOpenWindows(prev => prev.filter(w => w !== id))
  }

  const isOpen = (id) => openWindows.includes(id)

  const playHover = () => {
    if (muted) return
    // Placeholder: will play hover.mp3 once user adds it
    try {
      const audio = new Audio('/sounds/hover.mp3')
      audio.volume = 0.3
      audio.play().catch(() => {})
    } catch {}
  }

  return (
    <AppContext.Provider value={{ darkMode, toggleDark, muted, setMuted, openWindow, closeWindow, isOpen, playHover }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
