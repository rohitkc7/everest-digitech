import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, budget, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Everest Digitech <onboarding@resend.dev>", // Replace with your verified domain later
      to: process.env.CONTACT_EMAIL ?? "hello@everestdigitech.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${service}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#134E4A;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Phone</td><td style="padding:8px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Service</td><td style="padding:8px 0;">${service}</td></tr>
            <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Budget</td><td style="padding:8px 0;">${budget || "—"}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #E5E7EB;margin:16px 0;" />
          <h3 style="color:#134E4A;">Message</h3>
          <p style="color:#374151;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
