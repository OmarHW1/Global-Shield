import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // must match your verified domain
      to: ["info.globalshield@gmail.com"], // replace with your receiving email
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Phone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
