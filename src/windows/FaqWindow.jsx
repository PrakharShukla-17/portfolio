import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import FloatingWindow from '../components/FloatingWindow'

const faqs = [
  {
    q: 'did you use AI to make it',
    a: 'yes, i know i should have not used it at all but due to time constraints i had to speed up some part',
  },
  {
    q: 'was this your original idea',
    a: 'sort of, i wanted a boat here also but upon searching for various types i landed upon a creators protfolio and i fell in love with it, its inspired from that creators portfolio',
  },
  {
    q: 'who is the creator',
    a: "i dont know, i got the page info from a reddit thread, apparently he/she posted only photo and search bar could be seen",
  },
  {
    q: 'enough interrogation, your projects are so incompetent, will you do something about it',
    a: "yes, i know and i know im late but ill improve cause as tame impala said its better late than never",
  },
  {
    q: 'whats the secret behind your good looks',
    a: 'oh thank you, im blushing already.....well the secret is genetics',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const { darkMode } = useApp()

  return (
    <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <button
        className={`w-full text-left py-3 flex justify-between items-center text-sm font-semibold ${
          darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}
        onClick={() => setOpen(o => !o)}
      >
        {q}
        <span className="ml-2 opacity-50">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <p className={`pb-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function FaqWindow() {
  return (
    <FloatingWindow id="faq" title="faq" defaultPos={{ x: 200, y: 120 }}>
      <div className="p-5 w-80">
        {faqs.map(f => <FaqItem key={f.q} {...f} />)}
      </div>
    </FloatingWindow>
  )
}
