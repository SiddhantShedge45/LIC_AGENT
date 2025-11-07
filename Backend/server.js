import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import pkg from "validator"; // 👈 FIXED import
const { isEmail } = pkg; // ✅ extract isEmail safely

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🧱 Rate limiter to prevent spam
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5,
  message: { success: false, message: "Too many requests, please try later." },
});
app.use("/api/contact", limiter);

// 📨 Mail transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// 🧠 Test route
app.get("/", (req, res) => {
  res.send("✅ LIC Agent Contact API is running");
});

// 📬 Contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 🧩 Validation
    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }
    if (!isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format." });
    }
    if (phone.length < 8) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid phone number." });
    }

    // 💌 Email to LIC Agent
    const mailOptions = {
      from: `"LIC Agent Website" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p style="font-size:12px;color:gray;">Sent via LIC Agent Portfolio Website</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Optional: confirmation mail to user
    await transporter.sendMail({
      from: `"LIC Agent" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting LIC Advisor",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting our LIC Advisor. We’ve received your inquiry and will get back to you shortly.</p>
        <p>Warm regards,<br/>LIC Agent Team</p>
      `,
    });

    console.log(`✅ Message received from ${name} <${email}>`);
    return res.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("❌ Error sending mail:", error);
    return res
      .status(500)
      .json({ success: false, message: "Server error. Please try again later." });
  }
});

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
