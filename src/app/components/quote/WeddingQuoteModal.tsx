/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import "./getQuote.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WeddingQuoteModal({
  open,
  onClose,
}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    emailAddress: "",
    eventDate: "",
    cityVenue: "",
    guestCount: "",
    howDidYouFindUs: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.contactNumber.trim() !== "" &&
    formData.emailAddress.trim() !== "" &&
    formData.eventDate.trim() !== "" &&
    formData.cityVenue.trim() !== "" &&
    formData.guestCount.trim() !== "" &&
    formData.howDidYouFindUs.trim() !== "";

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/wedquote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || "Something went wrong"
        );
      }

      setSuccess(true);

      setFormData({
        name: "",
        contactNumber: "",
        emailAddress: "",
        eventDate: "",
        cityVenue: "",
        guestCount: "",
        howDidYouFindUs: "",
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
        <button
          className="quote-close"
          onClick={onClose}
        >
          Close
        </button>

        <form
          className="quote-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
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
            <input
              type="text"
              name="eventDate"
              placeholder="Dates & Events *"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="cityVenue"
              placeholder="City/Venue *"
              value={formData.cityVenue}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="guestCount"
              placeholder="Number of Guests Expected *"
              value={formData.guestCount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="howDidYouFindUs"
              placeholder="How Did You Find Us? *"
              value={formData.howDidYouFindUs}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Additional Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {success && (
            <p
              style={{
                color: "green",
                marginBottom: "10px",
              }}
            >
              Wedding quote submitted successfully.
            </p>
          )}

          {error && (
            <p
              style={{
                color: "red",
                marginBottom: "10px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="quote-submit"
            disabled={!isFormValid || loading}
          >
            {loading
              ? "Sending..."
              : "Request Wedding Quote"}
          </button>
        </form>
      </div>
    </div>
  );
}