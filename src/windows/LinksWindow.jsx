import React from 'react'
import { useApp } from '../context/AppContext'
import FloatingWindow from '../components/FloatingWindow'

const links = [
  { label: 'Instagram', href: 'https://www.instagram.com/brownpenguin03/', emoji: '📸' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prakhar-shukla-118159292/', emoji: '☕' },
  { label: 'BuyMeCoffee', href: 'https://www.linkedin.com/in/prakhar-shukla-118159292/', emoji: '☕' },
  { label: 'GitHub', href: 'https://github.com/PrakharShukla-17', emoji: '🐙' },
]

export default function LinksWindow() {
  const { darkMode } = useApp()

  return (
    <FloatingWindow id="links" title="links" defaultPos={{ x: 120, y: 140 }}>
      <div className="p-5 w-72">
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          find me around the web!
        </p>
        <div className="flex flex-col gap-2">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-semibold transition-all hover:scale-[1.02] hover:shadow-md ${
                darkMode
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <span>{l.emoji}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </FloatingWindow>
  )
}
