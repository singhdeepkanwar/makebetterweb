// No need for dotenv, Vercel handles environment variables
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();

// Middleware
app.use(cors()); // It's still good practice to include this
app.use(express.json());

// The API endpoint. Note the path is now just '/' because the file itself defines the route.
app.post('/api/contact', (req, res) => {
  // ... (Your existing Nodemailer and validation logic remains EXACTLY the same) ...

  const { name, email, phone, company, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission from ${name}`,
    html: `... your HTML email body ...`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send message." });
    }
    res.status(200).json({ success: "Message sent successfully!" });
  });
});

// 🚨 CRITICAL CHANGE: DO NOT USE app.listen()
// Instead, export the app instance. Vercel will handle the rest.
module.exports = app;