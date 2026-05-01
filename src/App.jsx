import React from 'react'
import { AppProvider, useApp } from './context/AppContext'
import TopBar from './components/TopBar'
import StarLogo from './components/StarLogo'
import HomePanel from './components/HomePanel'
import WaveBackground from './components/WaveBackground'
import SocialFooter from './components/SocialFooter'
import FrogBuddy from './components/FrogBuddy'
import AboutWindow from './windows/AboutWindow'
import LinksWindow from './windows/LinksWindow'
import WorkWindow from './windows/WorkWindow'
import FaqWindow from './windows/FaqWindow'
import ContactWindow from './windows/ContactWindow'

function PortfolioApp() {
  const { darkMode, isOpen } = useApp()

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div
        className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
          darkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-800'
        }`}
      >
        {/* Animated wave background */}
        <WaveBackground />

        {/* Top controls */}
        <TopBar />

        {/* Main centered content */}
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-20">
          
          <div className="mt-4">
            <HomePanel />
          </div>
          {/* <SocialFooter /> */}
        </div>

        {/* Floating windows */}
        {isOpen('about') && <AboutWindow />}
        {isOpen('links') && <LinksWindow />}
        {isOpen('work') && <WorkWindow />}
        {isOpen('faq') && <FaqWindow />}
        {isOpen('contact') && <ContactWindow />}

        
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <PortfolioApp />
    </AppProvider>
  )
}
