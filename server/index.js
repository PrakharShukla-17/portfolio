import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, msg } = req.body
  console.log(`\n📩 New contact message:`)
  console.log(`   From: ${name} <${email}>`)
  console.log(`   Message: ${msg}`)
  // In production: send email via nodemailer or similar
  res.json({ success: true, message: 'Message received!' })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`)
})
