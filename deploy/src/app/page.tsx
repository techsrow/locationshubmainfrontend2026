import Image from "next/image";
import FadeSlider from "./components/slider/FadeSlider";
import PremiumSetsSection from "./components/sections/PremiumSetsSection";
import OurSetsSection from "./components/sections/OurSetsSection";
import AddOnServicesParallax from "./components/sections/AddOnServicesParallax";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <FadeSlider />
       <PremiumSetsSection />
       <OurSetsSection />
       <AddOnServicesParallax/>
       <TestimonialsSection />
           {/* Other sections */}
    </>
  );
}
