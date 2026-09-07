/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import "./commercialShoot.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CommercialShootModal({
  open,
  onClose,
}: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    crewSize: "",
    planning: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.shootType.trim() !== "" &&
    formData.crewSize.trim() !== "" &&
    formData.planning.trim() !== "";

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch(
        "/api/commercial-shoot",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error ||
            "Something went wrong"
        );
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        shootType: "",
        crewSize: "",
        planning: "",
      });

      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(
        err.message ||
          "Failed to submit enquiry"
      );
    }

    setLoading(false);
  };

  return (
    <div className="commercial-overlay">
      <div className="commercial-modal">
        <button
          className="commercial-close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="commercial-title">
          Commercial Shoot Enquiry
        </h2>

        {success && (
          <p className="success-message">
            Enquiry submitted successfully ✅
          </p>
        )}

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <form
          className="commercial-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="shootType"
            value={formData.shootType}
            onChange={handleChange}
            required
          >
            <option value="">
              Type Of Shoot *
            </option>

            <option value="Fashion">
              Fashion
            </option>

            <option value="Catalogue">
              Catalogue
            </option>

            <option value="Music Video">
              Music Video
            </option>

            <option value="Ads">
              Ads
            </option>

            <option value="Films">
              Films
            </option>
          </select>

          <input
            type="number"
            name="crewSize"
            placeholder="Crew Size *"
            min="1"
            value={formData.crewSize}
            onChange={handleChange}
            required
          />

          <select
            name="planning"
            value={formData.planning}
            onChange={handleChange}
            required
          >
            <option value="">
              Planning Your Shoot *
            </option>

<option value="">
              Select Options
            </option>
            <option value="This Month">
              This Month
            </option>

            <option value="Next Month">
              Next Month
            </option>

            <option value="2-3 Months">
              2-3 Months
            </option>

            <option value="3+ Months Later">
              3+ Months Later
            </option>
          </select>

          <button
            type="submit"
            className="commercial-submit"
            disabled={
              !isFormValid || loading
            }
          >
            {loading
              ? "Sending..."
              : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}