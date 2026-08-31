/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import "./getQuote.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Quote Request:", body);

    // existing email code

    return Response.json({ success: true });
  } catch (error) {
    console.error("QUOTE API ERROR:", error);

    return Response.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export default function GetQuoteModal({ open, onClose }: Props) {

  const [formData, setFormData] = useState({
  firstName: "",
  contactNumber: "",
  emailAddress: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState("");


const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const isFormValid =
  formData.firstName.trim() !== "" &&
  formData.contactNumber.trim() !== "" &&
  formData.emailAddress.trim() !== "";

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);
  setError("");
  setSuccess(false);

  try {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong");
    }

    setSuccess(true);

    setFormData({
      firstName: "",
      contactNumber: "",
      emailAddress: "",
      message: "",
    });

    setTimeout(() => {
      onClose();
    }, 1500);
  } catch (err: any) {

    
    setError(err.message);
  }

  setLoading(false);
};



  if (!open) return null;

  return (
    <div className="quote-overlay">
      <div className="quote-modal">
        <button className="quote-close" onClick={onClose}>
          Close
        </button>

       <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
  type="text"
  name="firstName"
  placeholder="First Name *"
  value={formData.firstName}
  onChange={handleChange}
  required
/>
          </div>

          <div className="form-group">
            <input
  type="tel"
  name="contactNumber"
  placeholder="Contact Number *"
  value={formData.contactNumber}
  onChange={handleChange}
  required
/>
          </div>

          <div className="form-group">
           <input
  type="email"
  name="emailAddress"
  placeholder="Email Address *"
  value={formData.emailAddress}
  onChange={handleChange}
  required
/>
          </div>

          <div className="form-group">
           <textarea
  name="message"
  placeholder="Message"
  rows={5}
  value={formData.message}
  onChange={handleChange}
/>
          </div>

         <button
  type="submit"
  className="quote-submit"
  disabled={!isFormValid || loading}
>
  {loading ? "Sending..." : "Request Quote"}
</button>
        </form>
      </div>
    </div>
  );
}