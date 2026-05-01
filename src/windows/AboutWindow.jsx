import React from 'react'
import { useApp } from '../context/AppContext'
import FloatingWindow from '../components/FloatingWindow'
import bojack from '../assets/bojack2.jpg'

export default function AboutWindow() {
  const { darkMode } = useApp()

  const link = (href, label) => (
    <a href={href} target="_blank" rel="noreferrer" className="fancy-link">{label}</a>
  )

  return (
    <FloatingWindow id="about" title="about" defaultPos={{ x: 60, y: 100 }}>
      <div className="p-5 w-80">
        {/* Profile header */}
        <div className="flex gap-4 items-center mb-5">
          <div className={`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 ${darkMode ? 'bg-teal-800' : 'bg-teal-100'}`}>
            <span style={{ fontSize: '2.5rem' }}><img src={bojack}></img></span>
          </div>
          <div>
            <h2 className="font-bold text-lg">
              Prakhar
              <span className="font-normal text-sm opacity-60"></span>
            </h2>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              3rd year cs student
            </p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              please hire me,
              I'll take your company to greater heights
              <a href="#" className="fancy-link"></a>
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p className="mb-3">hi, im interested in</p>
          <ul className="list-disc list-inside space-y-1">
            <li>making backend,</li>
            <li>making frontend,</li>
            <li>in earning money,</li>
            <li>and making money for your company</li>
          </ul>
          <p className="mt-3">
            interested in hiring me? send me an email at{' '}
            {link('mailto:rishishukla17122003@gmail.com', 'rishishukla17122003@gmail.com')}! :)
          </p>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-bold text-xs tracking-widest uppercase mb-2">
            Education
          </h3>
          <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="font-semibold">Btech Computer Science</p>
            <p className="text-xs opacity-70">IET Lucknow 2023-27     CGPA: 9.37</p>
          </div>
        </div>
      </div>
    </FloatingWindow>
  )
}
