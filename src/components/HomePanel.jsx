import React from 'react'
import { useApp } from '../context/AppContext'
import NavIcons from './NavIcons'

export default function HomePanel() {
  const { darkMode } = useApp()

  const titleBar = darkMode
    ? 'bg-gray-900 text-gray-300 border-b border-gray-700'
    : 'bg-gray-700 text-white'

  const body = darkMode
    ? 'bg-gray-800 text-gray-100'
    : 'bg-white text-gray-800'

  return (
    <div
      className={`relative z-10 rounded-md overflow-hidden shadow-2xl`}
      style={{ width: 'min(540px, 90vw)' }}
    >
      {/* Title bar */}
      <div className={`px-4 py-2 text-sm font-semibold ${titleBar}`}>
        home
      </div>

      {/* Body */}
      <div className={`${body} px-8 pt-12 pb-8`}>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light tracking-wide">
            hi!{' '}
            <span className="font-bold italic" style={{ color: '#e8961a' }}>
              i'm prakhar
            </span>
          </h1>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            student, unemployed and broke
          </p>
        </div>

        <NavIcons />
      </div>
    </div>
  )
}
