export const menu = [
  { name: "Home", href: "/" },
  { name: "Sets", href: "/sets-1" },
  { name: "Setup", href: "/setup" },
  {
    name: "Add On Services",
    children: [
      { name: "Photographers", href: "/add-on-services/pre-wedding-photographers" },
      { name: "Cinematographers", href: "/add-on-services/pre-wedding-video-shoot" },
      { name: "Overnight Accommodation", href: "/add-on-services/overnight-accomodation" },
      { name: "Restaurant", href: "/add-on-services/canteen" },
      { name: "Props", href: "/add-on-services/props" },
      { name: "Makeup Artist", href: "/add-on-services/makeup-artist" },
      {
        name: "Costumes",
        children: [
          { name: "Bride", href: "/add-on-services/bride" },
          { name: "Groom", href: "/add-on-services/groom" },
        ],
      },
    ],
  },

  {
    name: "Book Now",
    children: [
      { name: "Pre Wedding | Maternity", href: "/pre-wedding-or-maternity" },
      { name: "Product | Garment | Fashion", href: "/product-or-garment-or-fashion" },
      { name: "Music Video | Ad shoot", href: "/music-video-or-ad-shoot" },
      { name: "Web series | TV Serial", href: "/web-series-or-tv-serials" },
      // { name: "Pre Wedding | Maternity", href: "https://booking.locationshub.in/pre-wedding-or-maternity/" },
      // { name: "Product | Garment | Fashion", href: "https://booking.locationshub.in/product-or-garment-or-fashion/" },
      // { name: "Music Video | Ad shoot", href: "https://booking.locationshub.in/music-video-or-ad-shoot/" },
      // { name: "Web series | TV Serial", href: "https://booking.locationshub.in/web-series-or-tv-serials/" },
     
     
    ]
  },
 
  { name: "FAQ", href: "/faq" },
  { name: "About Us", href: "/about-locations-hub-shoot-locations-par-excellence" },
  { name: "Contact Us", href: "/contact-us" },
];
