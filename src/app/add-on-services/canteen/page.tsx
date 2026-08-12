"use client";

export default function InHouseRestaurant() {
  return (
    <div className="bg-[#f3f0f2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Heading */}
        <h1 className="font-['Quicksand'] text-[22px] font-bold text-[#74405B] leading-[1.3] mb-6">
          In house Restaurant
        </h1>

        {/* Feature List */}
        <div className="space-y-3 mb-8 font-['Quicksand'] text-[18px] font-bold text-[#74405B]">

          <div className="flex items-center gap-3">
            <span>🍽️</span>
            <span>1500 sq ft restaurant with open kitchen</span>
          </div>

          <div className="flex items-center gap-3">
            <span>🥗</span>
            <span>Hygenic and fresh food</span>
          </div>

          <div className="flex items-center gap-3">
            <span>🍛</span>
            <span>Buffet and Ala carte available</span>
          </div>

          <div className="flex items-center gap-3">
            <span>🥦</span>
            <span>Pure Veg</span>
          </div>

          <div className="flex items-center gap-3">
            <span>💰</span>
            <span>Buffet Meal- Rs 300 per head</span>
          </div>

        </div>

        {/* Description Paragraph */}
        <div className="font-['Quicksand'] text-[16px] font-medium  text-[#74405B] font-medium">
          <p>
            Our restaurant is 1,500 sq ft with an open kitchen. Hygiene is our top priority.
            We offer buffet for Rs 300 per head per meal & Rs 150 per head for breakfast
            & evening snacks. Other ala carte refreshments are also available.
            Restaurant is operational from 7am to 9pm.
          </p>
        </div>

      </div>
    </div>
  );
}
