# 🌐 Elyse Joyeux — Portfolio Website

A personal portfolio website with a Node.js/Express backend that handles contact form submissions via email.

---

## 📁 Project Structure

```
wui-practice/
├── public/
│   ├── index.html          # Main portfolio page
│   ├── login.html          # Login page
│   ├── cra.htm             # Create account page
│   ├── forgot.htm          # Forgot password page
│   ├── portfolio.css       # Main portfolio styles
│   ├── login.css           # Login styles
│   ├── cra.css             # Create account styles
│   ├── forgot.css          # Forgot password styles
│   ├── portfolio.js        # Frontend JS (typed animation, nav)
│   ├── Elyse.png           # Profile image
│   └── hello.jpg           # Background image
├── server.js               # Express backend
├── package.json
├── .env                    # Secret credentials (never commit!)
└── .gitignore
```

---

## ✨ Features

- Responsive portfolio with smooth scroll and section navigation
- Typing animation (Web developer / Junior Cyber Enthusiast)
- Floating profile image animation
- Services section with hover rain effect
- Contact form that sends real emails via Gmail (Nodemailer)
- Mobile-friendly hamburger menu

---

## 🛠️ Tech Stack

**Frontend**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

**Backend**

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![Nodemailer](https://img.shields.io/badge/nodemailer-009688?style=flat&logo=gmail&logoColor=white)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jelyx-bit/wui-practice.git
cd wui-practice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your `.env` file

Create a `.env` file in the root directory:

```env
EMAIL=your_gmail@gmail.com
PASSWORD=your_gmail_app_password
```

> **Important:** Use a [Gmail App Password](https://myaccount.google.com/apppasswords),
> not your real Gmail password. Enable 2FA on your Google account first.

### 4. Run the server

```bash
npm start
```

The server runs on **http://localhost:5000**

---

## 📬 Contact Form API

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Sends contact form email |

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

**Success response:**
```json
{ "success": true, "message": "Message sent" }
```

**Error response:**
```json
{ "success": false, "message": "Failed to send message" }
```

---

## 🔒 Security Notes

- Never commit your `.env` file to GitHub
- Add `.env` to your `.gitignore` — already done in this project
- Always use Gmail App Passwords, never your real account password

---

## 🚀 Deployment

This project can be deployed on:

[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=flat&logo=render&logoColor=white)](https://render.com)
[![Railway](https://img.shields.io/badge/Railway-131415?style=flat&logo=railway&logoColor=white)](https://railway.app)
[![Netlify](https://img.shields.io/badge/Netlify-%23000000.svg?style=flat&logo=netlify&logoColor=white)](https://netlify.com)

> Set your `EMAIL` and `PASSWORD` as environment variables in the platform's dashboard — never in the code.

---

## 👤 Author

**Elyse Joyeux HARERIMANA**

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=flat&logo=firefox&logoColor=white)](https://elyjoyeux.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/elys%C3%A9-joyeux-16700a38b)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=flat&logo=github&logoColor=white)](https://github.com/Elyse-Joyeux)
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=flat&logo=facebook&logoColor=white)](https://web.facebook.com/profile.php?id=61572563025080)

---

## 📄 License

This project is open source and available under the [ISC License](LICENSE).
