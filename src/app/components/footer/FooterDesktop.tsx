import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-primary text-white">
      {/* Top Footer */}
      <div className="max-w-[1400px] mx-auto px-[100px] py-16 grid grid-cols-3 gap-16">
        {/* ADDRESS */}
        <div>
          <h3 className="font-[700] mb-4">Address</h3>
          <p className="text-sm leading-6">
            Plot No 648, Nadsur Village,
            <br />
            Khopoli Pali Road, Raigad, Sudhagad,
            <br />
            Maharashtra 410205
          </p>

          <p className="mt-4 text-sm">
            Contact - 9920060062
            <br />
            Mail - hello@locationshub.in
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
              <Link href="https://www.facebook.com/locations.hub" target="_black"><FaFacebookF /></Link>
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">

              <Link href="https://www.youtube.com/channel/UCcwtcuHfkdMP6HzMPJdbcPw">
              <FaYoutube />
              </Link>
              
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
            <Link href="https://www.instagram.com/locations.hub/">
            <FaInstagram />
            </Link>
              
            </span>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
            <Link href="https://api.whatsapp.com/message/HH47DA3IHQ4OA1?autoload=1&app_absent=0">
            <FaWhatsapp />
            </Link>
              
            </span>
          </div>
        </div>

        {/* BLOG POSTS */}
        <div>
          <h3 className="font-[700] mb-6">Blogs posts</h3>

          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4">
               <img
                src="/images/blog/09/Best-place-for-photoshoot-in-mumbai-1-1.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <span> <Link href="/top-15-pre-wedding-photographers-in-pune">Top 15 Pre Wedding Photographers in Pune</Link></span>
            </li>

            <li className="flex items-start gap-4">
              <img
                src="/images/blog/09/Film-Shooting-Locations-3-1024x678.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <span> <Link href="/top-15-pre-wedding-photographers-in-mumbai">Top 15 Pre Wedding Photographers in Mumbai</Link></span>
            </li>

            <li className="flex items-start gap-4">
              <img
                src="images/blog/09/wedding-photographers-in-mumbai-49-1024x536.jpg"
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
               <span> <Link href="/top-10-wedding-photographers-in-mumbai">Top 15 Pre Wedding Photographers in Mumbai</Link></span>
            </li>
          </ul>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="font-[700] mb-6">Useful Links</h3>
          <ul className="space-y-3 text-sm">
           
            <li>  <Link href="/blog">BLOGS</Link></li>
            <li>  <Link href="/about-locations-hub-shoot-locations-par-excellence">ABOUT US</Link></li>
            <li>  <Link href="/cancellation-policy">CANCELLATION POLICY</Link></li>
            <li>  <Link href="/terms-and-conditions">TERMS AND CONDITION</Link></li>
            <li>  <Link href="/privacy-policy">PRIVACY POLICY</Link></li>
            
            
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-[100px] py-6 flex justify-between items-center text-sm">
          <p>
            Locations Hub © 2024. All Rights Reserved. Powered By
            Kleverk Design Pvt Ltd
          </p>

          <div className="flex gap-6">
            <span><Link href="/blog">BLOG</Link></span>
            <span><Link href="/about-locations-hub-shoot-locations-par-excellence">ABOUT US</Link></span>
            <span><Link href="/cancellation-policy">CANCELLATION POLICY</Link></span>
            <span><Link href="/privacy-policy">PRIVACY POLICY</Link></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
