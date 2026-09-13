"use client";

import { useWeddingQuote } from "./WeddingQuoteProvider";

export default function WeddingQuoteButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { openWeddingQuote } = useWeddingQuote();

  return (
    <button
      type="button"
      className={className}
      onClick={openWeddingQuote}
    >
      {children || "Get Wedding Quote"}
    </button>
  );
}