"use client";

import { useQuote } from "./QuoteProvider";

export default function GetQuoteButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openQuote } = useQuote();

  return (
    <button className={className} onClick={openQuote}>
      {children || "Get Quote"}
    </button>
  );
}