import React from 'react'
import { useApp } from '../context/AppContext'

export default function WaveBackground() {
  const { darkMode } = useApp()

  const lightColors = {
    wave1: '#a8d8f0',
    wave2: '#b8e0f7',
    wave3: '#c8e8fc',
    bg: '#d4eefb',
  }

  const darkColors = {
    wave1: '#0d3b6e',
    wave2: '#1a4f8a',
    wave3: '#1e5fa0',
    bg: '#0a2a4e',
  }

  const c = darkMode ? darkColors : lightColors

  return (
    <div className="wave-container">
      {/* Bottom solid fill */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '60%', background: c.bg }}
      />

      {/* Wave 3 (back) */}
      <div className="wave-layer wave-3" style={{ bottom: '30%' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill={c.wave3}
          />
        </svg>
      </div>

      {/* Wave 2 (mid) */}
      <div className="wave-layer wave-2" style={{ bottom: '20%' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C200,90 400,10 600,50 C800,90 1000,10 1200,50 L1200,120 L0,120 Z"
            fill={c.wave2}
          />
        </svg>
      </div>

      {/* Wave 1 (front) */}
      <div className="wave-layer wave-1" style={{ bottom: '10%' }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,50 C180,100 360,0 540,50 C720,100 900,0 1080,50 C1140,70 1170,60 1200,55 L1200,120 L0,120 Z"
            fill={c.wave1}
          />
        </svg>
      </div>

      {/* Shimmery top wave edge */}
      <div className="wave-layer wave-2" style={{ bottom: '40%' }}>
        <svg viewBox="0 0 1200 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,15 C150,0 300,30 450,15 C600,0 750,30 900,15 C1050,0 1150,20 1200,15 L1200,30 L0,30 Z"
            fill={darkMode ? '#4fc3f7' : '#90caf9'}
            opacity="0.4"
          />
        </svg>
      </div>
    </div>
  )
}
