const nodemailer = require('nodemailer')

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    const { name, email, message } = JSON.parse(event.body)

    if (!name || !email || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ success: false, message: 'All fields are required' })
        }
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
            from: process.env.EMAIL,
            replyTo: email,
            to: process.env.EMAIL,
            subject: `Portfolio message from ${name}`,
            html: `
                <h2>New message from your portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        })
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Message sent' })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: 'Failed to send message' })
        }
    }
}