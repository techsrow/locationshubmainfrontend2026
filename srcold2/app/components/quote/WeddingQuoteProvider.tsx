"use client";

import { createContext, useContext, useState } from "react";
import WeddingQuoteModal from "./WeddingQuoteModal";

interface WeddingQuoteContextType {
  openWeddingQuote: () => void;
  closeWeddingQuote: () => void;
}

const WeddingQuoteContext =
  createContext<WeddingQuoteContextType | null>(null);

export function WeddingQuoteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openWeddingQuote = () => setOpen(true);
  const closeWeddingQuote = () => setOpen(false);

  return (
    <WeddingQuoteContext.Provider
      value={{
        openWeddingQuote,
        closeWeddingQuote,
      }}
    >
      {children}

      <WeddingQuoteModal
        open={open}
        onClose={closeWeddingQuote}
      />
    </WeddingQuoteContext.Provider>
  );
}

export function useWeddingQuote() {
  const context = useContext(WeddingQuoteContext);

  if (!context) {
    throw new Error(
      "useWeddingQuote must be used inside WeddingQuoteProvider"
    );
  }

  return context;
}