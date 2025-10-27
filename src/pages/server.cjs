// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Allows the server to accept JSON in the request body

// Test route
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the API server!" });
});

// The main API endpoint for handling form submissions
app.post('/api/contact', (req, res) => {
  // Destructure the form data from the request body
  const { name, email, phone, company, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, and message are required." });
  }

  // Set up the Nodemailer transporter using credentials from .env
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email options
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Sender address
    to: process.env.EMAIL_TO, // List of receivers
    subject: `New Contact Form Submission from ${name}`, // Subject line
    text: `You have a new submission with the following details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`, // Plain text body
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `, // HTML body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send message.", details: error.message });
    }
    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ success: "Message sent successfully!" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});