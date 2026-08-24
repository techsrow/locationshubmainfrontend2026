export interface Slot {
  id: string;
  productId: string;
  label: string;
  startTime: string;
  endTime: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  slots: Slot[];
}

export interface ProductResponse {
  success: boolean;
  product: Product;
}

export interface LockBookingResponse {
  bookingId: string;
  totalAmount: number;
  bookingAmount: number;
  gstAmount: number;
  razorpayOrderId: string;
  lockExpiresAt: string;
}

export interface BookingDetails {
  bookingId: string;
  bookingDate: string;
  totalAmount: number;
  bookingAmount: number;
  gstAmount: number;
  slots: Slot[];
}