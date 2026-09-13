/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactUsPage() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validate form + captcha
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.message.trim() !== "" &&
    captchaToken !== null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // ✅ Success
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset captcha
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (err: any) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <main className="w-full">
      {/* MAP SECTION */}
      <section className="w-full h-[380px]">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Plot%20No%20648,%20Nadsur%20Village,%20Khopoli%20Pali%20Road,%20Raigad,%20Maharashtra%20410205&output=embed"
        ></iframe>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-white py-10 px-6 text-center">
        <div className="inline-block border border-[#74405B] px-10 py-2 mb-10">
          <h2 className="font-quicksand text-[22px] font-[600] text-[#74405B]">
            Contact Info
          </h2>
        </div>

        <p className="text-[17px] text-[#74405B] max-w-[900px] mx-auto font-[600] mb-6">
          Plot No 648, Nadsur Village, Khopoli Pali Road, Raigad, Sudhagad,
          Maharashtra 410205
          <br />
          <span className="text-orange-500 text-[15px] font-medium">
            Check out our location
          </span>
        </p>

        <div className="w-[280px] h-[1px]  bg-[#74405B] mx-auto my-6"></div>

        <p className="text-[17px] font-[600] text-[#74405B] mb-1">
          +91 99200 60062
        </p>
        <span className="text-orange-500 text-xs text-[15px] font-medium">
          Questions? Call us
        </span>

        <div className="w-[280px] h-[1px] bg-[#74405B] mx-auto my-6"></div>

        <p className="text-[17px] font-[600] text-[#74405B] mb-1">
          hello@locationshub.in
        </p>
        <span className="text-orange-500 text-xs text-[15px] font-medium">
          Drop us a line
        </span>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-6 text-[#74405B] text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaWhatsapp />
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="py-10 px-6 bg-secondary">
        <div className="text-center mb-12">
          <div className="inline-block border border-[#74405B] px-10 py-2">
            <h2 className="font-quicksand text-[22px] font-[700] text-[#74405B]">
              Enquiry Form
            </h2>
          </div>

          <p className="text-[17px] font-[600] text-[#74405B] mt-4 text-sm font-[600]">
            Wanna shoot with us ?
          </p>

          <p className="text-xs mt-2 text-orange-500 text-xs text-[15px] font-medium">
            Please fill in the details and our team will get back to you
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto space-y-6"
        >
          {success && (
            <div className="bg-green-100 text-green-700 p-3 text-sm rounded">
              Thank you for contacting us, we will be in touch shortly.
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-3 text-sm rounded">
              {error}
            </div>
          )}

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
            className="w-full bg-transparent border-b border-[#74405B] outline-none py-2 text-sm"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-transparent border-b border-[#74405B] outline-none py-2 text-sm"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full bg-transparent border-b border-[#74405B] outline-none py-2 text-sm"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your message..."
            required
            className="w-full bg-transparent border border-[#74405B] outline-none p-3 text-sm resize-none"
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setCaptchaToken(token)}
          />

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`px-6 py-2 text-sm transition ${
              !isFormValid || loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-[#74405B] text-white hover:bg-[#5f3249]"
            }`}
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
}