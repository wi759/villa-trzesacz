import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Missing type or data in request body" },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
      SMTP_FROM,
      SMTP_TO,
    } = process.env;

    const emailSubject =
      type === "offer"
        ? `Neue Kaufanfrage / Oferta kupna – Trzęsacz Letniskowa 4a`
        : `Neue Kontaktanfrage / Zapytanie kontaktowe – Trzęsacz`;

    let emailText = "";
    if (type === "offer") {
      emailText = `
=== NEUES KAUFANGEBOT / NOWA OFERTA KUPNA ===
Datum/Zeit: ${new Date().toLocaleString("de-DE")}

Name: ${data.firstName} ${data.lastName}
Firma: ${data.company || "Keine / Brak"}
E-Mail: ${data.email}
Telefon: ${data.phone}
Angebotsbetrag: ${data.amount} PLN
Nachricht:
${data.message || "Keine Nachricht hinterlassen / Brak wiadomości"}
==============================================
      `;
    } else {
      emailText = `
=== NEUE KONTAKTANFRAGE / NOWE ZAPYTANIE ===
Datum/Zeit: ${new Date().toLocaleString("de-DE")}

Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone}
Nachricht:
${data.message}
==============================================
      `;
    }

    // Log to console for debugging/demo purposes
    console.log("Form Submission Received:");
    console.log(emailText);

    // If SMTP environment variables are not configured, simulate success
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !SMTP_TO) {
      console.warn(
        "SMTP environment variables not configured. Email logged to console instead of sending."
      );
      return NextResponse.json({
        success: true,
        message: "Simulation: Submission received and logged.",
        simulated: true,
      });
    }

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to: SMTP_TO,
      subject: emailSubject,
      text: emailText,
    });

    return NextResponse.json({ success: true, simulated: false });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to process form submission: " + error.message },
      { status: 500 }
    );
  }
}
