import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      contactNumber,
      emailAddress,
      eventDate,
      cityVenue,
      guestCount,
      howDidYouFindUs,
      message,
    } = await req.json();

    if (
      !name ||
      !contactNumber ||
      !emailAddress ||
      !eventDate ||
      !cityVenue ||
      !guestCount ||
      !howDidYouFindUs
    ) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to:
        process.env.CONTACT_RECEIVER ||
        "hello@locationshub.in",

      subject: "New Wedding Quote Request",

      html: `
        <h2>New Wedding Quote Request</h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Contact Number</strong></td>
            <td>${contactNumber}</td>
          </tr>

          <tr>
            <td><strong>Email Address</strong></td>
            <td>${emailAddress}</td>
          </tr>

          <tr>
            <td><strong>Dates & Events</strong></td>
            <td>${eventDate}</td>
          </tr>

          <tr>
            <td><strong>City / Venue</strong></td>
            <td>${cityVenue}</td>
          </tr>

          <tr>
            <td><strong>Number of Guests Expected</strong></td>
            <td>${guestCount}</td>
          </tr>

          <tr>
            <td><strong>How Did You Find Us?</strong></td>
            <td>${howDidYouFindUs}</td>
          </tr>

          <tr>
            <td><strong>Additional Message</strong></td>
            <td>${message || "-"}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Wedding quote request sent successfully",
    });
  } catch (error) {
    console.error("Wedding Quote Email Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}