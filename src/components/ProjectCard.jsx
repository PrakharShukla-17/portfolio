import React from 'react'
import { useApp } from '../context/AppContext'

export default function ProjectCard({ 
  title, 
  description, 
  githubLink, 
  liveLink, 
  image, 
  emoji 
}) {
  const { darkMode } = useApp()

  return (
    <div className={`flex gap-4 py-5 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      
      {/* Thumbnail */}
      <div
        className={`flex-shrink-0 w-28 h-24 rounded-lg overflow-hidden flex items-center justify-center ${
          darkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}
      >
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span style={{ fontSize: '3rem' }}>{emoji || '🎮'}</span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h4 className={`font-bold text-base mb-1 ${darkMode ? 'text-blue-300' : 'text-orange-500'}`}>
          {title}
        </h4>

        <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          
          {/* GitHub Button */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-1.5 rounded text-sm font-semibold transition-opacity hover:opacity-80 ${
                darkMode
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Code
            </a>
          )}

          {/* Live / Check it out Button */}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-1.5 rounded text-sm font-semibold transition-opacity hover:opacity-80 ${
                darkMode
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-400 text-white'
              }`}
            >
              Check it out
            </a>
          )}

        </div>
      </div>
    </div>
  )
}