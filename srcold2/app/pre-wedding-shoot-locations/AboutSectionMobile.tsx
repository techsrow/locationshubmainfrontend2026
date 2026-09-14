import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import localFont from "next/font/local";


const amsterdam = localFont({
  src: "../../fonts/Amsterdam.ttf",
  display: "swap",
});

export default function AboutSection(): JSX.Element {

    
  return (
    <section className="about about-mobile">

    <h2 className={`about-title ${amsterdam.className}`}>
  About Us
</h2>

      <div className="about-wrapper">
  <div className="about-image">
          <Image
            src="/trueshades-founder-1.jpg"
            alt="About Locations Hub"
            width={420}
            height={320}
            priority
            className="about-img"
          />
        </div>
        <div className="about-box">
          <p className="about-text">
            With our professional team of highly skilled photographers and artists,
            we have carved a niche for ourselves in Mumbai and we are proud to say
            that we have been acclaimed as one of the best. Don’t take our word for
            it—come and experience it for yourself!
          </p>

          <p className="about-founder">
            Founder Arshid Bhimji & Medha Bhimji
          </p>
        </div>

      

      </div>

    </section>
  );
}