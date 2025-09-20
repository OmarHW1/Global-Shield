// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Quick sanity check in the browser at /api/contact
export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      message,
      formType,
      subject,
      // Hero form fields
      fullName,
      urgency,
      serviceType,
      additionalInfo,
      // Request form fields
      firstName,
      lastName,
      company,
      position,
      location,
      startDate,
      duration,
      teamSize,
      details,
      bookingType
    } = body;

    // Generate reference ID
    const referenceId = `GSP-${Date.now().toString().slice(-6)}`;
    console.log(`📋 Generated Reference ID: ${referenceId}`);

    // Validate required fields
    const requiredEmail = email;
    const requiredMessage = message || additionalInfo || details;
    const requiredName = name || fullName || `${firstName} ${lastName}`.trim();

    if (!requiredEmail || !requiredMessage) {
      return NextResponse.json(
        { success: false, error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Create transporter for privateemail.com
    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Determine email subject and content based on form type
    let emailSubject = "New Contact Form Submission";
    let emailContent = "";

    if (formType === "hero") {
      emailSubject = `New Hero Consultation Request from ${requiredName || "Unknown"}`;
      emailContent = `
        <h2>New Hero Section Consultation Request</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${fullName || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${urgency ? `<p><strong>Urgency:</strong> ${urgency}</p>` : ""}
          ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ""}
        </div>
        ${additionalInfo ? `
          <div style="margin: 20px 0;">
            <p><strong>Additional Information:</strong></p>
            <div style="background-color: #ffffff; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px;">
              ${additionalInfo.replace(/\n/g, '<br>')}
            </div>
          </div>
        ` : ""}
      `;
    } else if (formType === "contact") {
      emailSubject = `New Contact Page Submission from ${requiredName || "Unknown"}`;
      emailContent = `
        <h2>New Contact Page Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        </div>
        <div style="margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    } else if (formType === "request") {
      emailSubject = `New ${urgency === "immediate" ? "URGENT " : ""}Protection Request from ${requiredName || "Unknown"}`;
      emailContent = `
        <h2 style="color: ${urgency === "immediate" ? "#dc2626" : "#1f2937"}">
          New Protection Request${urgency === "immediate" ? " - URGENT" : ""}
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #495057; margin-top: 0;">Client Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          ${position ? `<p><strong>Position:</strong> ${position}</p>` : ""}
          <p><strong>Booking Type:</strong> ${bookingType === "self" ? "Self" : "On behalf of client"}</p>
        </div>

        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h3 style="color: #856404; margin-top: 0;">Service Requirements</h3>
          ${location ? `<p><strong>Location:</strong> ${location}</p>` : ""}
          ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ""}
          ${urgency ? `<p><strong>Urgency Level:</strong> <span style="color: ${urgency === "immediate" ? "#dc2626" : "#1f2937"}; font-weight: bold;">${urgency}</span></p>` : ""}
          ${startDate ? `<p><strong>Start Date:</strong> ${startDate}</p>` : ""}
          ${duration ? `<p><strong>Duration:</strong> ${duration}</p>` : ""}
          ${teamSize ? `<p><strong>Team Size:</strong> ${teamSize}</p>` : ""}
        </div>

        ${details ? `
          <div style="margin: 20px 0;">
            <p><strong>Specific Requirements & Threat Assessment:</strong></p>
            <div style="background-color: #ffffff; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px;">
              ${details.replace(/\n/g, '<br>')}
            </div>
          </div>
        ` : ""}
      `;
    } else {
      // Default fallback
      emailSubject = subject || `New Contact Form Submission from ${requiredName || "Unknown"}`;
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${requiredName || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        </div>
        <div style="margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px;">
            ${requiredMessage.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
    }

    const footer = `
      <hr style="margin: 30px 0;">
      <p style="color: #6c757d; font-size: 14px;">
        <em>This message was sent from your GlobalShield website${formType ? ` (${formType} form)` : ' contact form'}.</em>
      </p>
    `;

    // Email to you (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: "info@globalshield.co.uk",
      subject: emailSubject,
      html: emailContent + footer,
      replyTo: requiredEmail,
    };

    // Auto-reply email to sender
    const autoReplySubject = formType === "request" && urgency === "immediate"
      ? "URGENT: Your Protection Request Received - GlobalShield"
      : "Thank you for contacting GlobalShield";

    const autoReply = {
      from: process.env.EMAIL_USER,
      to: requiredEmail,
      subject: autoReplySubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">Thank you for your message, ${requiredName || "there"}!</h2>
          
          ${formType === "request" && urgency === "immediate" ? `
            <div style="background-color: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #991b1b; font-weight: bold; margin: 0;">
                🚨 URGENT REQUEST RECEIVED
              </p>
              <p style="color: #7f1d1d; margin: 5px 0 0 0;">
                Our rapid response team will contact you within 15 minutes.
              </p>
            </div>
          ` : `
            <p>We have received your ${formType === "hero" ? "consultation request" : formType === "request" ? "protection request" : "message"} and will get back to you as soon as possible. Our team typically responds within 2-24 hours during business days.</p>
          `}
          
          ${requiredMessage ? `
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Your ${formType === "hero" ? "consultation request" : "message"}:</h3>
              <div style="background-color: #ffffff; padding: 15px; border: 1px solid #dee2e6; border-radius: 5px;">
                ${requiredMessage.replace(/\n/g, '<br>')}
              </div>
            </div>
          ` : ""}
          
          <p>If you have any urgent inquiries or are in immediate danger, please call our 24/7 emergency hotline: <strong>+44 (0) 7497 580 732</strong></p>
          
          <p>Best regards,<br>
          <strong>The GlobalShield Team</strong></p>
          
          <hr style="margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px;">
            This is an automated response. All communications are encrypted and treated with strict confidentiality.
          </p>
        </div>
      `,
    };

    // Send emails
    console.log("📧 Sending notification email...");
    await transporter.sendMail(mailToYou);

    console.log("📧 Sending auto-reply email...");
    await transporter.sendMail(autoReply);

    console.log("✅ Emails sent successfully");

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!"
    });

  } catch (error: any) {
    console.error("❌ Nodemailer error:", error?.message || error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}