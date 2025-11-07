// import express from "express";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();
// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message)
//     return res.status(400).json({ success: false, message: "All fields are required" });

//   try {
//     // Create reusable transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Mail details
//     const mailOptions = {
//       from: `${name} <${email}>`,
//       to: process.env.TO_EMAIL,
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
// You have a new contact form submission:
// ---------------------------------------
// Name: ${name}
// Email: ${email}
// Message: ${message}
//       `,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ success: false, message: "Email failed to send." });
//   }
// });

// export default router;
