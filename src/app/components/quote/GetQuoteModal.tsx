"use client";

import { useState } from "react";
import "./getQuote.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function GetQuoteModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="quote-overlay">
      <div className="quote-modal">
        <button className="quote-close" onClick={onClose}>
          Close
        </button>

        <form className="quote-form">
          <div className="form-group">
            <input type="text" placeholder="First Name *" required />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Contact Number **" required />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email Address *" required />
          </div>

          <div className="form-group">
            <textarea placeholder="Message" rows={5}></textarea>
          </div>

          <button type="submit" className="quote-submit">
            Request Quote
          </button>
        </form>
      </div>
    </div>
  );
}