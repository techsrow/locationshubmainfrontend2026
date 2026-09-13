import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      shootType,
      crewSize,
      planning,
    } = await req.json();

    const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "hello@locationshub.in,techsrow@gmail.com",
      replyTo: email,
      subject: "Commercial Shoot Enquiry",

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Commercial Shoot Enquiry</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${phone}</td>
            </tr>

            <tr>
              <td><strong>Type Of Shoot</strong></td>
              <td>${shootType}</td>
            </tr>

            <tr>
              <td><strong>Crew Size</strong></td>
              <td>${crewSize}</td>
            </tr>

            <tr>
              <td><strong>Planning Your Shoot</strong></td>
              <td>${planning}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error(
      "COMMERCIAL SHOOT EMAIL ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}