import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Quick sanity check in the browser at /api/contact
export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",            // switch to your domain after verification
      to: ["info.globalshield@gmail.com"],       // your receiving inbox
      subject: `New Contact Form Submission from ${name || "Unknown"}`,
      replyTo: email,
      text: `Phone: ${phone || "N/A"}\n\nMessage:\n${message || ""}`,
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
