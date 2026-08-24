"use client";

import { createContext, useContext, useState } from "react";
import GetQuoteModal from "./GetQuoteModal";

interface QuoteContextType {
  openQuote: () => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = () => setOpen(true);
  const closeQuote = () => setOpen(false);

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote }}>
      {children}
      <GetQuoteModal open={open} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used inside QuoteProvider");
  }
  return context;
}