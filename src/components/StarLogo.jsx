import React from 'react'
import { useApp } from '../context/AppContext'

export default function StarLogo() {
  const { darkMode, playHover } = useApp()

  return (
    <div className="star-logo select-none" onMouseEnter={playHover}>
      <span style={{ fontSize: '3rem', filter: darkMode ? 'hue-rotate(180deg) brightness(1.4)' : 'none' }}>
        ⭐
      </span>
    </div>
  )
}
