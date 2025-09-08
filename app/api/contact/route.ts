import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // use sandbox until domain verified
      to: ["info.globalshield@gmail.com"], // your receiving inbox
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Phone: ${phone || "N/A"}\n\nMessage:\n${message}`,
    });

    console.log("✅ Email sent:", data);
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("❌ Resend error:", error?.message || error);
    return NextResponse.json(
      { success: false, error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
