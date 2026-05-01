import React from 'react'
import { useApp } from '../context/AppContext'

export default function SkillTag({ label }) {
  const { darkMode, playHover } = useApp()

  return (
    <span
      className={`skill-tag inline-block px-3 py-1 rounded border text-sm font-semibold cursor-default ${
        darkMode
          ? 'border-gray-500 text-gray-200 bg-gray-700 hover:border-blue-400 hover:text-blue-200'
          : 'border-gray-400 text-gray-700 bg-white hover:border-orange-400 hover:text-orange-600'
      }`}
      onMouseEnter={playHover}
    >
      {label}
    </span>
  )
}
