"use client";

import Image from "next/image";
import { useModal } from "@/app/components/modal/ModalProvider";
import ShootTypeModal from "@/app/components/modal/ShootTypeModal";

export default function AboutUsPage() {
  const { openModal } = useModal();
  return (
    <main className="bg-white">
      
      {/* GLOBAL CONTAINER WRAPPER */}
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[60px]">

        {/* SECTION 1 – IMAGE + CONTENT */}
        <section className="py-8 grid md:grid-cols-2 gap-6 items-start">
          {/* IMAGE */}
          <div>
            <Image
              src="/about/low-res-for-upload-1.jpg"
              alt="Locations Hub Shoot"
              width={900}
              height={900}
              className="w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="text-[#74405B]">
            <h2 className="text-[22px] font-[700] mb-4">
              Locations Hub For shoot locations like no other!
            </h2>

            <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
              <strong>Locations Hub</strong> is a hub of shoot locations, brought to you by the couple behind True Shades Photography, Mumbai, India. So, train your lens in on us: zoom in and zoom out – True Shades remains true to its colors! As director of True Shades Photography, Arshid Bhimji believes that photography is an art that creates timeless, artistic memories. The style of photography is rather unique and creative, for it wraps up moments into an incredible crucible of toned elegance.
            </p>

          <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
              Furthermore, Medha Bhimji is Arshid’s partner in all senses of the term! She takes care of all creative calls at the photography locations, she does so with a spring in her feet! While Arshid has immense experience in managing the behind-the-lens criteria seamlessly, Medha is down-to-earth and enthusiastic. This potent combination is probably the secret of their continued success.
            </p>

             <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
             In addition, Arshid staunchly believes that photography goes way beyond merely capturing a picture on camera. He seems to stick to the quote by the French great, Henri Cartier-Bresson: <i>“It is an illusion that photos are made with the camera… they are made with the eye, heart, and head.”</i> Therefore, one look at Arshid’s work at the photoshoot locations exemplifies this belief. Arshid and Medha, an excellent duo with a dedicated work team at the shoot locations, has augured well for Locations Hub.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="pb-12 text-[#74405B]">
          <h3 className="text-[22px] font-[700] mb-4">
            Enthusiasm and Commitment at the photoshoot locations!
          </h3>

          <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
          To Arshid and Medha, photography is not only about painting real people, and real moments, but also relating real stories. They combine style, lighting, and location while they’re in tune with the clients’ dreams. As a result, the couple carries their enthusiasm and commitment to the photoshoot locations <br></br> at <strong>Locations Hub</strong>, their latest venture.
          </p>
           <p className="text-[14px] leading-[1.7em] font-[500] ">
            First of all, you need to consider various factors while selecting a location for your film or photoshoot. You will need to figure out the position of the sun at different times and different angles. Another factor is the likely sound disturbances that might come into play. So too, other issues such as public presence and movement, traffic, security, etc. Therefore, to ensure that shooting locations suit your project, you’ll need to check out the shoot locations in advance.
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="pb-12 text-[#74405B]">
          <h3 className="text-[22px] font-[700] mb-4">
            Self-sustained Shoot Locations
          </h3>

            <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
            Needless to say, good photography or cinematography is all about finding the right shoot location, with proper lighting. Also, the right ambience, and having the right props is important. It is most noteworthy that Locations Hub places great emphasis on these factors. The right spot sets the tone for the shoot. Situated on a sprawling and picturesque 5-acre piece of land, this place probably leaves nothing to be desired. Consequently, it’s the ideal shoot location for just about anything- a film, a fashion show, or a web series. Or pre wedding shoots and fashion photography for ads while soaking in the luxury of a great landscape. These photography locations are a delight to work in and are worthy of any kind of major project.
           </p>

           <p className="text-[14px] leading-[1.7em] font-[500] mb-4">While the resilience and vitality of Locations hub are self-evident, it offers:

</p>

          <ul className="space-y-3">
            {[
              "Premium sets with spacious and natural ambiance",
              "Air conditioned luxurious indoor sets",
              "Realistic outdoor sets",
              "Variety of props",
              "True-to-life original sets",
              "4 air-conditioned make-up rooms",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#74405B] text-white text-xs">
                  {index + 1}
                </span>
                <span className="text-[14px] leading-[1.7em] font-[500]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* SECTION 4 */}
        <section className="pb-16 text-[#74405B]">
          <h3 className="text-[22px] font-[700] mb-4">
            Best facilities on offer
          </h3>

          <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
            While shooting itself can be quite exhausting, the thought of having to travel back at the end of the day can be unnerving! At the Locations Hub shoot locations, we understand these nuances and therefore provide:
          </p>

          <ul className="list-disc pl-5 text-[15px] space-y-2 mb-4">
            <li className="text-[14px] leading-[1.7em] font-[500] ">Overnight stay facility</li>
            <li className="text-[14px] leading-[1.7em] font-[500] ">Pantry with refreshments</li>
            <li className="text-[14px] leading-[1.7em] font-[500] ">Free parking</li>
            <li className="text-[14px] leading-[1.7em] font-[500] ">Pet-friendly environment</li>
          </ul>

           <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
          In conclusion, once you visit Locations Hub and take a tour of our sets, you’ll experience the comforts of our service. From natural sunlit surroundings to unique sets you need to check out the photoshoot locations to realize what you have been missing! Locations Hub is, most of all, a place that offers matchless and undiscovered shoot locations for photographers and videographers.
        </p>

            <p className="text-[14px] leading-[1.7em] font-[500] mb-4">
          Once you visit Locations Hub and take a tour of our sets, you’ll experience the comfort of the service. From natural sunlit surroundings to unique sets you need to check out the location to realise what you have been missing! Locations Hub is a place that offers matchless and undiscovered locations for photographers and videographers. These spots are perfect for music video shoots, commercial shoots, film scenes, and more. We can assure you that you’ll be immensely pleased with no room for any kind of disappointment. Your visit to Locations Hub will add value to your overall experience paving the way for repeated visits in the future!These shoot locations would be especially relevant for music video shoots, commercial shoots, film scenes, and more. We can assure you that there are hardly any shooting locations in Mumbai that would be as natural and magnificent as Locations Hub. As a result, you will be immensely pleased, with no room for any kind of disappointment. Your visit to Locations Hub will add value to your overall experience paving the way for repeated visits in the future!
        </p>
        
        </section>

        {/* CTA */}
        <div className="text-center pb-20">
          <button  onClick={() => openModal(<ShootTypeModal />)} className="bg-[#ff8c1a] text-white px-12 py-3 font-[600] hover:bg-[#e57c14] transition">
            Book Now
          </button>
        </div>

      </div>
    </main>
  );
}