import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, projectType, budget, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const inquiry = {
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || null,
    projectType: projectType?.trim() || null,
    budget: budget?.trim() || null,
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  const { error } = await resend.emails.send({
    from: "Axiom Systems <onboarding@resend.dev>", // swap to a verified domain address later
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: inquiry.email,
    subject: `New inquiry from ${inquiry.name}`,
    text: [
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Company: ${inquiry.company ?? "-"}`,
      `Project type: ${inquiry.projectType ?? "-"}`,
      `Budget: ${inquiry.budget ?? "-"}`,
      "",
      inquiry.message,
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] resend error:", error);
    return NextResponse.json({ error: "Failed to send. Try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
