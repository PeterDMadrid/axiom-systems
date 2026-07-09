import { NextResponse } from "next/server";

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

  // TODO: deliver the inquiry somewhere durable. This stub only logs it.
  //
  // Wire up an email provider once RESEND_API_KEY is set (see .env.example):
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Axiom Systems <inquiries@axiomsystems.dev>",
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     subject: `New inquiry from ${inquiry.name}`,
  //     text: JSON.stringify(inquiry, null, 2),
  //   });
  //
  // Or persist to a database / forward to a CRM instead — this is the
  // only place that needs to change.
  console.log("[contact] new inquiry:", inquiry);

  return NextResponse.json({ ok: true });
}
