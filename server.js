require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body

    // Validate incoming data
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    try {
        await transporter.sendMail({
            from:    process.env.EMAIL,
            replyTo: email,
            to:      process.env.EMAIL,
            subject: `Portfolio message from ${name}`,
            html: `
                <h2>New message from your portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        })

        console.log(`✅ Email sent from ${name} (${email})`)
        res.json({ success: true, message: 'Message sent' })

    } catch (error) {
        console.error('❌ Email error:', error.message)
        res.status(500).json({ success: false, message: 'Failed to send message' })
    }
})

app.listen(5000, () =>
    console.log('🚀 Server is running on http://localhost:5000')
)