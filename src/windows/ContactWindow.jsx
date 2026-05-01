import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import FloatingWindow from '../components/FloatingWindow'

export default function ContactWindow() {
  const { darkMode } = useApp()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', msg: '' })

  const inputClass = `w-full px-3 py-2 rounded border text-sm outline-none focus:ring-2 ${
    darkMode
      ? 'bg-gray-700 border-gray-600 text-gray-200 focus:ring-blue-500'
      : 'bg-white border-gray-300 text-gray-700 focus:ring-orange-300'
  }`

  const handleSubmit = async (e) => {
    e.preventDefault()
    // API call to backend
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}
    setSent(true)
  }

  if (sent) {
    return (
      <FloatingWindow id="contact" title="contact" defaultPos={{ x: 260, y: 150 }}>
        <div className="p-5 w-72 text-center">
          <span style={{ fontSize: '3rem' }}>💌</span>
          <p className={`mt-3 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            message sent! i'll get back to you soon :)
          </p>
        </div>
      </FloatingWindow>
    )
  }

  return (
    <FloatingWindow id="contact" title="contact" defaultPos={{ x: 260, y: 150 }}>
      <div className="p-5 w-72">
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          send me a message! or email me directly at{' '}
          <a href="mailto:hi@example.com" className="fancy-link">bagelsauce242@gamil.com</a>
        </p>
        <div className="flex flex-col gap-3">
          <div>
            <label className={`text-xs font-bold block mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>name</label>
            <input
              className={inputClass}
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="your name"
            />
          </div>
          <div>
            <label className={`text-xs font-bold block mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>email</label>
            <input
              className={inputClass}
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className={`text-xs font-bold block mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>message</label>
            <textarea
              className={`${inputClass} resize-none`}
              rows={4}
              value={form.msg}
              onChange={e => setForm(f => ({ ...f, msg: e.target.value }))}
              placeholder="say hi!"
            />
          </div>
          <button
            onClick={handleSubmit}
            className={`py-2 rounded font-bold text-sm transition-opacity hover:opacity-80 ${
              darkMode ? 'bg-blue-600 text-white' : 'bg-orange-400 text-white'
            }`}
          >
            send!
          </button>
        </div>
      </div>
    </FloatingWindow>
  )
}
