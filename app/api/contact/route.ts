// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // Create transporter (example: Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    })

    // Send message to admin
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_TO || "muhammadbilalmirza1029@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    })

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.CONTACT_TO || "muhammadbilalmirza1029@gmail.com",
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hi ${name},\n\nThanks for reaching out! I’ve received your message and will get back to you shortly.\n\nBest,\nBilal`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
