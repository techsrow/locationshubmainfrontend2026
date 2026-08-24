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

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});
    const { openModal } = useModal();

    const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        token: captchaToken,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  } catch (err: any) {
    setError(err.message || "Something went wrong");
  }

  setLoading(false);
};

  return (
    <main className="bg-[#fff6f3] py-16">
      <div className="max-w-4xl mx-auto px-4">
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
  
<section className="bg-[#f1d5d5] py-16 px-4">
  <div className="max-w-3xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-10">
      <h2 className="text-[#74405B] text-[28px] font-bold">
        Didn’t Find the Answer?
      </h2>

      <div className="w-20 h-[3px] bg-[#74405B] mx-auto mt-3"></div>

      <p className="mt-6 text-[#74405B] text-sm">
        Please feel free to contact us for any questions or doubts.
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">
      {success && (
  <div className="bg-green-100 text-green-700 p-3 rounded">
    Thank you for contacting us. We will get back to you shortly.
  </div>
)}

{error && (
  <div className="bg-red-100 text-red-700 p-3 rounded">
    {error}
  </div>
)}
     <input
  name="name"
  value={formData.name}
  onChange={handleChange}
  type="text"
  placeholder="Name*"
  required
  className="w-full h-[40px] px-4 bg-white border border-gray-300 outline-none focus:border-[#74405B]"
/>

     <input
  name="email"
  value={formData.email}
  onChange={handleChange}
  type="email"
  placeholder="Email*"
  required
  className="w-full h-[40px] px-4 bg-white border border-gray-300 outline-none focus:border-[#74405B]"
/>

     <input
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  type="tel"
  placeholder="Telephone*"
  required
  className="w-full h-[40px] px-4 bg-white border border-gray-300 outline-none focus:border-[#74405B]"
/>

      <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={6}
  placeholder="Message*"
  required
  className="w-full p-4 bg-white border border-gray-300 outline-none resize-none focus:border-[#74405B]"
/>

      {/* Placeholder for reCAPTCHA */}
     <ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
  onChange={(token) => setCaptchaToken(token)}
/>

     <button
  type="submit"
  disabled={loading}
  className="bg-[#74405B] text-white px-8 py-3 font-medium hover:bg-[#5f3249] transition disabled:bg-gray-400"
>
  {loading ? "Sending..." : "Send Message"}
</button>
    </form>
  </div>
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
