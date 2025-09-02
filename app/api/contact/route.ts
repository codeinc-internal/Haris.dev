import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { from_name, reply_to, message } = await req.json();

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: reply_to,
      to: "harisejaz731@gmail.com", // your email
      subject: `New message from ${from_name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${reply_to}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
