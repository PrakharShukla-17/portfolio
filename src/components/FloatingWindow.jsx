import React, { useRef, useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'

export default function FloatingWindow({ id, title, children, defaultPos }) {
  const { darkMode, closeWindow } = useApp()
  const [pos, setPos] = useState(defaultPos || { x: 80, y: 80 })
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      setPos({
        x: Math.max(0, clientX - offset.current.x),
        y: Math.max(0, clientY - offset.current.y),
      })
    }
    const onUp = () => { dragging.current = false }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  const onMouseDown = (e) => {
    dragging.current = true
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    const rect = windowRef.current.getBoundingClientRect()
    offset.current = { x: clientX - rect.left, y: clientY - rect.top }
    e.preventDefault()
  }

  const darkTitleBar = darkMode ? 'bg-gray-900 text-gray-200 border-gray-700' : 'bg-gray-700 text-white'
  const darkBody = darkMode ? 'bg-gray-800 text-gray-100 border-gray-700' : 'bg-white text-gray-800'

  return (
    <div
      ref={windowRef}
      className={`window-panel ${darkMode ? 'dark' : ''}`}
      style={{ left: pos.x, top: pos.y, maxHeight: '80vh' }}
    >
      {/* Title bar */}
      <div
        className={`drag-handle flex items-center justify-between px-3 py-2 text-sm font-semibold ${darkTitleBar} border-b`}
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
      >
        <span>{title}</span>
        <button
          onClick={() => closeWindow(id)}
          className="hover:opacity-70 transition-opacity font-mono text-xs px-1"
        >
          [x]
        </button>
      </div>

      {/* Body */}
      <div
        className={`${darkBody} overflow-y-auto`}
        style={{ maxHeight: 'calc(80vh - 40px)' }}
      >
        {children}
      </div>
    </div>
  )
}
