import BookingCalendar from "@/app/components/BookingCalendar";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex justify-center mt-20">
      <BookingCalendar slug={slug} />
    </div>
  );
}