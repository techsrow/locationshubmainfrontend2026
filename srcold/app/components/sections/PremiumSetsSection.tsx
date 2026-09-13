"use client";

import { useState } from "react";

export default function PremiumSetsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-about px-6 md:px-[100px] py-10 text-center">
      {/* Heading */}
      <div className="inline-block border border-[#74405B] px-8 py-2 mb-8">
        <h2 className="font-quicksand font-[700] text-[17px] md:text-[22px] text-[#74405B]">
          Premium Sets at One Destination
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[15px] text-[#74405B] leading-7">
          The Best Location in Mumbai for photo sessions is at{" "}
          <strong>Locations Hub</strong>. Locations hub is characterized by
          style and elegance. They have the right atmosphere to capture those
          emotion-filled moments and freeze them in capsules of time.
          Additionally, we, at Locations Hub, can proudly boast of being
          positioned to cater to any niche that you can think of. Big and
          beautiful, we are sprawled across space – and are all-encompassing! We
          can provide you with the location in Mumbai for photo shoots. Name it
          and we have it. While we guarantee that your experience will be
          unforgettable, you may well get better than that!
          {open && (
            <>
              {" "}
              <p className="text-center mt-3 mb-2">
                ocations Hub is situated on a sprawling and picturesque 5-acre
                piece of land. It is ideal for shooting just about anything- a
                film, a fashion show, a web series, pre wedding shoots or just
                to indulge in the great landscape. We have realistic, delightful
                and spacious areas on our location for all types of shoots just
                waiting to be explored and experienced.
              </p>
              <p className="text-center">
                We at Locations Hub understand that all your shoots are those
                ‘rare’ projects that are treasured beyond compare. Therefore,
                our focus on providing the best location is intent and
                purposeful. We are determined to make your shoot the best thing
                that ever happened to you. To state that our sets are remarkable
                and nonpareil would be a modest understatement
              </p>
              <h4 className="text-center mt-4">
                <strong>Plush Shooting Sets</strong>
              </h4>
              <p className="text-center mt-3 mb-2">
                If you’re looking for the best locations that are captivating
                and gorgeous, aesthetic, iconic, peaceful, and enthralling,
                Locations Hub is the right place. Our shoot sets in Mumbai have
                it all. Whether you want picturesque landscapes lush with
                verdant green or a romantic spot blossoming with floral warmth.
                Our sets are just the thing for you.
              </p>
              <p className="text-center mt-3 mb-2">
                Maybe you’re in search of locations that are more austere and
                private, sober and symbolic. We cater to that too. Consequently,
                our shoot sets in Mumbai with scenic skylines and endless
                horizons are pictures of ‘hushed beauty.’ It seems like ‘awed
                silence’ can be inspirational, to say the least.
              </p>
              <p className="text-center mt-3 mb-2">
                Our iconic sets in Mumbai are the talk of the town. The grandeur
                of the sets spells the ultimate by symbolizing ‘longevity’ and
                ‘permanence’- the true basis for a location, these sets are
                perfect- the best location for an unforgettable shoot.
              </p>
              <p className="text-center mt-3 mb-2">
                In case you want the stunning sober backdrops sans the color and
                light, away from public glare, we have you covered. Some of our
                locations will fit the bill to a T. You and your team will have
                privy to the best sets that beat even your expectations. To be
                photographed against stunning panoramas and offbeat visuals is a
                highlight of the exciting moments of an alliance to be.
              </p>
              <h4 className="text-center mt-4">
                <strong>The Best Location For Shoot

</strong>
              </h4>

              <p className="text-center mt-3 mb-2">
                With in-house photographers and cinematographers, massive air conditioned indoor sets, and a sprawling outdoors, Locations Hub is the ‘be all and end all’ for all those who want to capture those precious moments of togetherness and relive them later. Furthermore, our locations are not just spaces but are ‘vibrant spots’ teeming with latent emotions befitting a prefect shoot.
              </p>
              <p className="text-center mt-3 mb-2">
               In conclusion, our incredible location for any shoots is ‘poetry in motion’. Just tell us what you want and our versatile team will make your dreams come true. Come and take a look and see why our locations and sets are incomparable.
              </p>
            </>
          )}
        </p>

        {/* Button */}
        <button
          onClick={() => setOpen(!open)}
          className="mt-10 bg-[#ff8c1a] text-white px-6 py-3 text-sm font-[600] hover:bg-[#e57c14] transition"
        >
          {open ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}
