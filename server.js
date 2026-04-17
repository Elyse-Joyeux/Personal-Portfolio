
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const nodemailer = require('nodemailer')


//no need of a database
// const mysql = require('mysql2')

app.use(express.static('public'))
app.use(express.json())
app.use(cors())



app.post('/api/contact', async (req, res)=>{
    const {name , email, message} = req.body
    const transportMessage = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }

    })
    
    try{
        await transportMessage.sendMail({
        from: process.env.EMAIL,
        replyTo: email,
        to: process.env.EMAIL,
        subject: `Portfolio message from ${name}`,
        html:`
            <h3>New message from your portfolio</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            `
    })
    res.json({success: true, message:'Message sent'})

    }catch(error){
        console.error("Message Error", error.message)
        return res.status(500).json({success: false, message: 'Failed to send message'})
    }
    

})

app.listen(5000, ()=>
    console.log("Server is running on http://localhost:5000")
)