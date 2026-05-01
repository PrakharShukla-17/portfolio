import React from 'react'
import { useApp } from '../context/AppContext'

const NAV_ITEMS = [
  {
    id: 'about',
    label: 'about',
    icon: (
      <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Speech bubble with i */}
        <ellipse cx="25" cy="23" rx="18" ry="15" />
        <text x="25" y="28" textAnchor="middle" fontSize="16" fontStyle="italic" fontFamily="serif" fill="currentColor" stroke="none">i</text>
        <path d="M19 37 L15 44" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'links',
    label: 'links',
    icon: (
      <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Chain link */}
        <path d="M20 30 L14 36 C10 40 10 46 14 40 C18 34 22 36 26 32" strokeLinecap="round" />
        <path d="M30 20 L36 14 C40 10 46 10 42 14 C38 18 34 16 30 20" strokeLinecap="round" />
        <path d="M22 28 L28 22" strokeLinecap="round" />
        <ellipse cx="17" cy="17" rx="8" ry="5" transform="rotate(-45 17 17)" />
        <ellipse cx="33" cy="33" rx="8" ry="5" transform="rotate(-45 33 33)" />
      </svg>
    ),
  },
  {
    id: 'work',
    label: 'work',
    icon: (
      <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Open folder */}
        <path d="M6 18 L6 40 L44 40 L44 22 L22 22 L18 16 L6 16 Z" />
        <path d="M6 22 L44 22" />
      </svg>
    ),
  },
  {
    id: 'faq',
    label: 'faq',
    icon: (
      <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Page with question mark */}
        <rect x="10" y="6" width="30" height="38" rx="2" />
        <text x="25" y="32" textAnchor="middle" fontSize="20" fontFamily="serif" fill="currentColor" stroke="none">?</text>
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'contact',
    icon: (
      <svg viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        {/* Envelope with @ */}
        <rect x="6" y="12" width="38" height="26" rx="2" />
        <path d="M6 12 L25 28 L44 12" />
        <circle cx="33" cy="25" r="7" />
        <path d="M40 25 C40 30 36 32 32 30" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function NavIcons() {
  const { openWindow, darkMode, playHover } = useApp()

  return (
    <div className="flex justify-center gap-8 mt-6">
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          className={`nav-icon-btn flex flex-col items-center gap-1 group ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}
          onClick={() => openWindow(item.id)}
          onMouseEnter={playHover}
        >
          <div className="group-hover:text-orange-400 transition-colors">
            {item.icon}
          </div>
          <span className="text-xs font-semibold tracking-wide">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
