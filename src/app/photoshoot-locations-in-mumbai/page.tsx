import Image from "next/image";
import "./pune.css";
import Link from "next/link";

import GetQuoteButton from "@/app/components/quote/GetQuoteButton";
import YouTubeEmbed from "@/app/components/YouTubeEmbed";
import YouTubeAutoPlay from "@/app/components/YouTubeAutoPlay";

export default function PhotoStudio() {
  return (
    <div className="page-wrapper">
      <div className="container">
        {/* ================= Banner ================= */}
        <div className="image-wrapper">
         <YouTubeAutoPlay videoId="Kautj5HqYro" />
        </div>

        <div className="center mb-2 btnsets">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
          Find Perfect Sets for your Shoot
          </a>
        </div>

        <h4 className="sub-heading ">Snap the City: Top Photoshoot locations in Mumbai </h4>        
        <h4 className="b-h3">Unveil Mumbai’s Hidden Gems: Perfect Locations for Stunning Photoshoots</h4>  

        <div className="content">
         Discover the most exclusive <Link href="https://booking.locationshub.in/pre-wedding-shoot-locations/"><span className="highlight"><strong>Photoshoot locations in Mumbai</strong></span></Link>, Locations Hub. From the charm of stylish cityscapes to the serenity of peaceful outdoor spots, they provide a unique canvas for every frame. Seamlessly accessible, this hidden gem is perfect for capturing both the bustling spirit and tranquil beauty, ensuring your shoot stands out.
        </div>
       

        {/* ================= 1 ================= */}
        <h3 className="b-h3">Take Your Shoot to New Heights with Mumbai’s Best Photo Spots
</h3>


        

        <div className="content">
          <p>
            Locations Hub reveals the <Link href="https://booking.locationshub.in/pre-wedding-shoot-locations/"><span className="highlight"><strong> Top Photoshoot locations in Mumbai</strong></span></Link>. Whether it’s dramatic backgrounds or lush props you seek, they blend great sets with vast open spaces, offering the perfect balance for your creative vision. Let their sets bring your ideas to life with stunning backgrounds that are perfect for any occasion.
          </p>
          <h6 className="h6"><strong>Other well know places open to all</strong>

</h6>
          <p>
           Mumbai, the city of dreams, is a vibrant mix of culture, history, and stunning backdrops, making it perfect for photoshoots. From iconic landmarks like the Gateway of India and Marine Drive to serene settings such as Sanjay Gandhi National Park and Powai Lake, the city offers a variety of picturesque spots. Historic South Mumbai contrasts with the modern flair of Bandra Fort and Worli Sea Face, while Juhu and Versova beaches add coastal charm. 

Nature enthusiasts will appreciate green spaces like Aarey Colony. Whether you’re a pro or capturing special moments, Mumbai’s diverse locations ensure a spectacular shoot
          </p>
         
        </div>

       
        <Image
          src="/images/blog/09/photoshoot-locations-in-mumbai-2.jpg"
          alt="Ajinkya Jadhav Photography"
          width={1200}
          height={600}
          className="main-image"
        />

         <div className="center mb-2 btnsets1">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn"
          >
          Find Perfect Sets for your Shoot
          </a>
        </div>
      
       

        {/* ================= 3 ================= */}
        <h3 className="b-h3">Where Magic Happens: Mumbai’s Premier Photoshoot Locations!
</h3>
       

      
        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
           Elevate your photography at the premier photoshoot locations in Mumbai with Locations Hub. Offering ample natural lighting, versatile settings, and stunning backdrops, they are ideal for everything from glamorous fashion shoots to candid lifestyle captures. Whatever the theme, these venue guarantee picture-perfect results.


          </p>
        </div>

        {/* ================= 3 ================= */}
        <h3 className="b-h3">Picture-Perfect Mumbai

</h3>
       

      
        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
           Locations Hub showcases the most photogenic photoshoot location in Mumbai, where every angle is designed to make your session extraordinary. With pet-friendly environments and awe-inspiring scenery, they offer the versatility to suit any shoot, from portraits to commercials, making your experience memorable and unique



          </p>
        </div>

          <h3 className="b-h3">Unlock Mumbai’s Ultimate Venues for Flawless Photoshoots


</h3>
       

      
        <div className="content mt-4">
          {/* 👉 Paste FULL Ajinkya paragraph here */}

          <p>
          Explore the ultimate photoshoot locations in Mumbai with Locations Hub. From iconic marvels to serene nature escapes they offer a range of settings to ensure your shoot is flawless. Whether it’s a commercial, editorial, or personal project, these venues set the stage for unforgettable results




          </p>
        </div>

        
                <Image
                  src="/images/blog/09/photoshoot-locations-in-mumbai-1.jpg"
                  alt="Frozen Flash Photography"
                  width={1200}
                  height={600}
                  className="main-image"
                />
                 <div className="center mb-2">
          <a
            href="https://www.locationshub.in/sets-1/"
            target="_blank"
            className="main-btn btnsets1"
          >
          Find Perfect Sets for your Shoot
          </a>
        </div>

         <h3 className="b-h3">Mumbai’s Top Photo Destination


</h3>
                 
                <div className="content mt-4">
                  {/* FULL paragraph */}
        <p>
            Discover Mumbai’s top photoshoot locations in Mumbai with Locations Hub, where stunning sets, expansive spaces, and natural beauty combine to offer perfect shooting conditions. They cater to all types of photography, ensuring you capture moments that are as vibrant and dynamic as the city itself.


        
        
        </p>
        
                </div>

       

        {/* <div className="center">
          <a
            href="https://api.whatsapp.com/send?phone=919920144211&text=I%20am%20interested%20in%20getting%20Pre%20Wedding%20Packages.%20Please%20share%20all%20details."
            target="_blank"
            className="main-btn"
          >
            Get Pre Wedding Packages
          </a>
        </div>
        <GetQuoteButton className="get-quote-btn text-center" /> */}


<div className="center">
 <button className="btn-book">
         Book Now
         </button>
</div>
        
        
      </div>
    </div>
  );
}
