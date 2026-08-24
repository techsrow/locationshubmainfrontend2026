/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useEffect, useState } from "react";

interface Props {
  selectedDate: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export default function CustomCalendar({
  selectedDate,
  onSelect,
}: Props) {

  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  /* ===============================
     LOAD LOCKED DATES FROM API
  =============================== */

  useEffect(() => {

    async function loadLockedDates() {

      try {

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/booking/locked-dates`
        );

        if (!res.ok) return;

        const data = await res.json();

        const dates = data.map((d: any) => new Date(d.date));

        setDisabledDates(dates);

      } catch (error) {

        console.error("Failed to load locked dates", error);

      }

    }

    loadLockedDates();

  }, []);

  return (
    <div className="border rounded-md p-4 shadow-sm bg-white">

      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        disabled={[
          { before: new Date() }, // disable past
          ...disabledDates        // disable admin locked dates
        ]}
        modifiersClassNames={{
          selected: "bg-[#5a1022] text-white",
          disabled: "text-gray-300 cursor-not-allowed",
        }}
        classNames={{
          caption: "flex justify-between items-center mb-4",
          caption_label:
            "text-lg font-semibold text-white bg-[#5a1022] px-4 py-2 rounded-md",
          nav_button:
            "text-[#5a1022] font-bold hover:text-[#3a0915]",
          head_cell: "text-gray-500 text-sm",
          cell: "p-2",
          day: "w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100",
        }}
      />

    </div>
  );
}