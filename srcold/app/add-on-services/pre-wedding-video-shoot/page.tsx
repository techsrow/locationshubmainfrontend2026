"use client";

import Link from "next/link";

export default function PreWeddingPhotographers() {
  return (
    <div className="bg-[#f3f0f2] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Heading */}
        <h1 className="font-['Quicksand'] text-[22px] font-[700] text-[#74405B] leading-[1.3] mb-6">
  Plan your pre wedding video shoot !

</h1>

        

        {/* Small Intro Line */}
        <p className="text-[#74405B] mb-6">
          Our in house team of cinematographers shooting at our locations with good experience.


        </p>

        {/* Feature Typography (Exact Style Applied) */}
        <div className="space-y-4 mb-8">
          
          <div className="flex items-center gap-3 font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
            <span>📸</span>
            <span>In House Cinematographers</span>
          </div>

          <div className="flex items-center gap-3 font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
            <span>🖼️</span>
            <span>
View our cinematographers work</span>
          </div>

          <div className="flex items-center gap-3 font-['Quicksand'] text-[18px] font-bold text-[#74405B]">
            <span>💰</span>
            <span>Cost - Rs 30,000</span>
          </div>

        </div>

        {/* Button (Exact CSS Applied) */}
       <div className="mb-12">
           <Link
    href="https://www.trueshadesphotography.com/pre-wedding-photographers-at-locations-hub/"
    className="
      inline-flex
      items-center
      justify-center
      bg-[#FF7905]
      font-['Quicksand']
      font-bold
      text-[18px]
      px-4
      py-2
      rounded-[3px]
      text-white
      hover:opacity-90
      transition
      btn-mx-w
      w-[300px]
    "
  >
    OUR WORK
  </Link>
        </div>

        {/* Lorem Ipsum Content */}
        <div className="space-y-8 text-[#74405B] font-medium  text-[16px]">
          <p className="pheight">
            At Locations Hub, we not only provide you with great photoshoot locations but great add on services as well. So, if you are looking for a pre wedding photoshoot, we’ll get you the best pre wedding photographers in Mumbai. And they come from our own stables True Shades Photography, obviously! We know how to deliver memories that will be treasured over a lifetime! After all, we have been in this passionate profession for years now!
          </p>

          <p className="pheight">
           While our photographers are experienced and versatile, it is also true that they deliver the best results for you. This is normally a once-in-a-lifetime occasion for most people, hence we know what it takes to deliver quality. Something that can be treasured for eternity.


          </p>

      <p className="pheight">
           Pre wedding photographers in Mumbai are plenty but none rise to the occasion as our professionals at True Shades. To our cameramen, photography is not just a profession, it is a form of art. Both classic and modern at the same time. Consequently, the best results are delivered, every single time.


          </p>
       <p className="pheight">
            Our professionals make use of the locations and sets like only they can, ensuring everything happens at ease. Most of all, they get you into the right frame of mind, enticing you to give your best, too. That’s why our pre wedding photographers deliver such great stills, time after time! The accolades we have received stand as a testimonial to our creativity and expertise.


          </p>

    <p className="pheight">
            So, all you need to do to hire the best pre wedding photographers in Mumbai is to book the event with us. Since they are also very familiar with the locations, everything, from sets to lighting and shot execution will be perfect. The most noteworthy fact will, of course, be your satisfaction at the end of it all, which is assured!


          </p>
        </div>

      </div>
    </div>
  );
}
