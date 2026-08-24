import React from "react";

export default function CancellationPolicyPage() {
  return (
    <main className="bg-[#fff] py-24">
      <div className="max-w-[1300px] mx-auto px-5 md:px-[60px]">
        
        {/* TITLE */}
        <h2 className="text-[14px] font-bold text-[#74405b] mb-6 uppercase">
          REFUND POLICY
        </h2>

        {/* LIST */}
        <ul className="text-[14px] font-medium text-[#74405b] space-y-4 list-disc pl-6">
          <li>
            The booking amount paid is non refundable. Just in case, after booking you decide not to avail the services, you’ll have to email us at hello@locationshub.in to get the balance waived off.
          </li>

          <li>
            You can also reschedule your booking by via email on hello@locationshub.in 48 hours prior your booking starts. Not informing us about rescheduling your booking 48 hours prior, your booking will be termed as cancelled.
          </li>

          <li>
            Due to some unavoidable situations, if studio is not operational we will reschedule your booking to a mutually convenient date.
          </li>
        </ul>

      </div>
    </main>
  );
}