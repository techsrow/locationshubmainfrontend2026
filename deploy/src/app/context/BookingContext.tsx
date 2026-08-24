"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Slot = {
  id: string;
  label: string;
  startTime: string;
  endTime: string;
};

type BookingData = {
  productId: string;
  productName: string;
  price: number;
  bookingAmount: number;
  date: string;
  slots: Slot[];
};

type BookingContextType = {
  booking: BookingData | null;
  setBooking: (data: BookingData) => void;
  clearBooking: () => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBookingState] = useState<BookingData | null>(null);

  const setBooking = (data: BookingData) => {
    setBookingState(data);
  };

  const clearBooking = () => {
    setBookingState(null);
  };

  return (
    <BookingContext.Provider value={{ booking, setBooking, clearBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }

  return context;
}