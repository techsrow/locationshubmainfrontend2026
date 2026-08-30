/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import ShootTypeModal from "../components/modal/ShootTypeModal";
import { useModal } from "@/app/components/modal/ModalProvider";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const faqs = [
  {
    q: "What is Locations Hub ?",
    a: "Locations hub is sets of realistic locations for pre wedding, fashion shoots, music albums, web series, movies etc",
  },
  {
    q: "Where is Locations Hub located ?",
    a: "Locations Hub is between Mumbai and Lonavala, Khopoli Pali Road. 1 Hour Drive from Panvel.",
  },
  {
    q: "Are all indoor sets air conditioned?",
    a: "Yes, all the sets are air conditioned",
  },
  {
    q: "Does Locations Hub has a Canteen/Kitchen ?",
    a: "Yes we do have kitchen and canteen. A full time cook to serve you meals and refreshments.",
  },
  {
    q: "Are lunch and dinner served at Locations Hub ?",
    a: "Yes home made lunch/dinner/snacks are served in our canteen. For lunch and dinner you would have to inform a day prior for no of people. Snacks are served on Ala carte basis.",
  },
  {
    q: "How to book Locations Hub ?",
    a: "Your desired slots can be booked through our website or you can mail us at hello@locationshub.in or call us at 9920060062",
  },
  {
    q: "Does Locations Hub have green rooms ?",
    a: "Yes we have 4 green rooms of 250 sq ft each, one will be allotted to you when you check in.",
  },
  {
    q: "Is overnight stay/accomodation possible at Locations Hub ?",
    a: "Yes with additional charges of Rs 3000 (1 Room) you can overnight stay prior your shoot.",
  },
  {
    q: "Which season of the year is best to book Locations Hub ?",
    a: "We have designed in a way, anytime is best for shooting at Locations Hub.",
  },
  {
    q: "What are the timings of Locations Hub ?",
    a: "We are operational on all days from 6am to 8pm.",
  },
  {
    q: "Does Locations Hub provide photography and cinematography services ?",
    a: "Yes we provide photography and cinematography services with our own in house team. You can contact us 9920060062 for any query. You can add these services on check out page.",
  },
  {
    q: "Does Locations Hub make customized packages as per requirements ?",
    a: "Yes, please contact us on hello@locationshub.in or call us at 9920060062",
  },
  {
    q: "Are pets allowed at Locations Hub ?",
    a: "Yes we are a pet friendly property, with prior notice your pet can accompany you.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState<number | null>(12);

const recaptchaRef = useRef<ReCAPTCHA>(null);

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState("");
const [captchaToken, setCaptchaToken] = useState<string | null>(null);


    const { openModal } = useModal();



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
    <main className="bg-[#fff] py-16">
      <div className="max-w-4xl mx-auto px-4 pb-20">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#e6d2dc] py-4"
          >
            {/* QUESTION */}
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full flex justify-between items-center text-left font-quicksand text-[#74405B] text-[15px] md:text-[16px] font-[600]"
            >
              <span>{item.q}</span>
              <span className="text-lg">
                {active === index ? "▼" : "▶"}
              </span>
            </button>

            {/* ANSWER */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-[#74405B] text-[14px] leading-6">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
  
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

 {/* CTA */}
       <div className="mt-16 flex justify-center">
  <button
    onClick={() => openModal(<ShootTypeModal />)}
    className="bg-[#FF881D]
    text-white
    font-quicksand
    text-[18px]
    font-semibold
    px-[70px]
    py-[13px]
    rounded-[3px]
    hover:bg-[#e57c14]
    transition"
  >
    Book Now
  </button>
</div>
    </main>
    
  );
}
