"use client";

import { Suspense } from "react";
import ThankYouContent from "./ThankYouContent";

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="max-w-4xl mx-auto py-24 text-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}