import React from 'react'
import { useApp } from '../context/AppContext'

export default function TopBar() {
  const { darkMode, toggleDark, muted, setMuted } = useApp()

  return (
    <div className="fixed top-0 left-0 p-4 flex gap-4 z-50">
      {/* Dark mode toggle */}
      <button
        onClick={toggleDark}
        className={`text-xl hover:scale-110 transition-transform ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}
        title={darkMode ? 'Light mode' : 'Dark mode'}
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* Mute toggle */}
      <button
        onClick={() => setMuted(m => !m)}
        className={`text-xl hover:scale-110 transition-transform ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}
        title={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <span style={{ fontSize: '1.1rem' }}>🔇</span>
        ) : (
          <span style={{ fontSize: '1.1rem' }}>🔈</span>
        )}
      </button>
    </div>
  )
}
