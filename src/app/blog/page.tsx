import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
    slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Top 15 Pre Wedding Photographers in Mumbai",
    description:
      "Pre wedding photographers in Mumbai are a bunch of sought-after professionals. That’s because, today, a pre wedding photoshoot is a prelude to every wedding, however big or small. It is essential to capture the moods and moments of the soon-to-be-married couple in each other’s presence before the wedding. Moments thus captured essentially remain in memory for a long and indeed something to recall and cherish in the future.",
    image: "/images/blog/09/pre-wedding-photographers-in-mumbai-27.jpg",
    slug: "top-15-pre-wedding-photographers-in-mumbai",
  },
  {
    id: 2,
    title: "Top 15 Pre Wedding Photographers in Pune",
    description:
      "Find Perfect Sets for your Shoot From Your Moments: Photoshoot studio in Mumbai. Studio shooting offers you the creative control needed for perfect background.",
     image: "/images/blog/09/pre-wedding-photographers-in-mumbai-5-1024x654.jpg",
     slug: "top-15-pre-wedding-photographers-in-pune",
  },
   {
    id: 3,
    title: "photoshoot locations in mumbai",
    description:
      "Discover the most exclusive photoshoot locations in Mumbai, Locations Hub. From the charm of stylish cityscapes to the serenity of peaceful outdoor spots, they provide a unique canvas for every frame. Seamlessly accessible, this hidden gem is perfect for capturing both the bustling spirit and tranquil beauty, ensuring your shoot stands out.",
     image: "/images/blog/09/photoshoot-locations-in-mumbai-2.jpg",
     slug: "photoshoot-locations-in-mumbai",
  },

   {
    id: 4,
    title: "photoshoot studio in mumbai",
    description:
      "Mumbai, where dreams come alive, is perfect for capturing unforgettable moments. A photoshoot studio in Mumbai like Mehboob Studio offers creative themes and stunning backdrops that reflect the city’s vibrant spirit. Whether for glamorous edgy fashion shoots, Mumbai’s expert photographers turn every moment into a masterpiece",
     image: "/images/blog/09/Photoshoot-studio-in-mumbai-1.jpg",
     slug: "photoshoot-studio-in-mumbai",
  },

   {
    id: 5,
    title: "shooting studio in mumbai",
    description:
      "When seeking the perfect location for your creative projects, the shooting studio in Mumbai at Locations Hub is an exceptional choice. This premier studio provides everything you need, from state-of-the-art equipment to versatile set designs. This location in Mumbai offer a diverse range of options to bring your vision to life. At Locations Hub, you’ll find features tailored to enhance your shoot, including ample natural lighting, customizable sets, and pet-friendly accommodations with in house restaurant.",
     image: "/images/blog/09/Shooting-studio-in-Mumbai-1-1.jpg",
     slug: "shooting-studio-in-mumbai",
  },

   {
    id: 6,
    title: "pre wedding sets in mumbai",
    description:
      "For couples seeking the perfect backdrop for their pre wedding photos, pre wedding sets in Mumbai at Locations Hub offer an ideal solution. This premier studio provides a range of stunning pre wedding sets, tailored to create memorable and picturesque moments.",
     image: "/images/blog/09/Best-pre-wedding-locations-in-mumbai-2-1350x675.jpg",
     slug: "pre-wedding-sets-in-mumbai",
  },

   {
    id: 7,
    title: "pre wedding sets in pune",
    description:
      "Pre wedding shoots are a cherished tradition, and pre wedding sets in Pune offer stunning, versatile options perfect for capturing these moments. The region boasts diverse locations, from serene gardens and heritage sites to modern interiors, each designed to enhance the beauty of your love story. These thoughtfully crafted sets provide ample opportunities for creative expression and personalized themes. Choosing the right one ensures both beautiful photos and a memorable experience, making it the ideal choice to celebrate your romance.",
     image: "/images/blog/09/Pre-wedding-sets-in-pune-2-1.jpg",
     slug: "pre-wedding-sets-in-pune",
  },

   {
    id: 8,
    title: "pre wedding studio in mumbai",
    description:
      "Step into the spotlight with the top Pre wedding studio in Mumbai, featuring ample natural lighting and stylish settings to ensure your photos are nothing short of cinematic. Locations Hub is equipped with professional lighting and expert setups that capture your love in the best light. They offer exclusive access to these stunning spaces, ensuring a seamless and extraordinary shoot",
     image: "/images/blog/09/Pre-wedding-studio-in-mumbai-1-1.jpg",
     slug: "pre-wedding-studio-in-mumbai",
  },
   {
    id: 9,
    title: "best place for photoshoot in mumbai",
    description:
      "Mumbai, the city of dreams, is a vibrant mix of culture, history, and stunning backdrops, making it perfect for photoshoots. From iconic landmarks like the Gateway of India and Marine Drive to serene settings such as Sanjay Gandhi National Park and Powai Lake, the city offers a variety of picturesque spots. Historic South Mumbai contrasts with the modern flair of Bandra Fort and Worli Sea Face, while Juhu and Versova beaches add coastal charm.",
     image: "/images/blog/09/Best-place-for-photoshoot-in-mumbai-1-1.jpg",
     slug: "best-place-for-photoshoot-in-mumbai",
  },

   {
    id: 10,
    title: "best pre wedding locations in mumbai",
    description:
      "Mumbai’s vibrant landscape offers an array of stunning options among the best pre wedding locations in Mumbai, setting the stage for unforgettable photos. Imagine capturing your love story against the backdrop of the city’s iconic landmarks or within the versatile settings of Locations Hub. Whether you’re enchanted by the elegance of a historic fort, the serene beauty of a lakeside, or the chic ambiance of an urban rooftop, Mumbai provides the perfect canvas. Each location, from picturesque gardens to modern studios, adds a unique flair to your shoot, ensuring your pre wedding photos are as exceptional as your love story. Explore these top spots to find the ideal setting that reflects your style and romance",
     image: "/images/blog/09/Best-pre-wedding-locations-in-mumbai-1-1.jpg",
     slug: "best-pre-wedding-locations-in-mumbai",
  },

   {
    id: 11,
    title: "shoot locations in mumbai",
    description:
      "Mumbai, the city that never sleeps, is a treasure trove of mesmerizing shoot locations that cater to every creative vision. From its iconic landmarks to hidden gems, this bustling metropolis offers a diverse range of settings perfect for capturing unforgettable moments. Whether you’re looking to infuse your shoot with urban chic, timeless elegance, or natural beauty, Mumbai has it all. Dive into our guide to discover the most captivating shoot locations in Mumbai, each offering its unique charm and backdrop to make your photos stand out. Join us as we unveil the top spots that will transform your creative ideas into stunning visual stories",
     image: "/images/blog/09/Shoot-locations-in-Mumbai-1-1.jpg",
     slug: "shoot-locations-in-mumbai",
  },
   {
    id: 12,
    title: "top 10 wedding photographers in mumbai",
    description:
      "Your wedding day deserves to be captured by the best, and in Mumbai, the top 10 wedding photographers are the cream of the crop. These experts are more than just photographers; they are artists who turn fleeting moments into timeless memories. With their unique styles and innovative techniques, they excel in capturing everything from candid emotions to grand portraits. Whether your wedding is grand or intimate, these wedding photographers in Mumbai are dedicated to making every shot a visual masterpiece. Discover the top 10 wedding photographers in Mumbai who can bring your dream wedding to life through their exceptional artistry.",
     image: "/images/blog/09/wedding-photographers-in-mumbai-49-1024x536.jpg",
     slug: "top-10-wedding-photographers-in-mumbai",
  },

   {
    id: 13,
    title: "11 beautiful pre wedding shoot locations in lonavala",
    description:
      "Locations Hub takes the lead on this list for the sheer versatility of its facilities! You have the photo and video shooting facilities spread over 5 acres of verdant land. The hub provides everything that you would expect of a professional setup and makes for a fabulous pre wedding shoot location. It is probably because Locations Hub is brought to you by True Shades, the leaders in pre wedding photography! The facility boasts 27 original sets, both indoor and outdoor, for your pre wedding shoots. Furthermore, you can dart from one set to another in a jiffy without having to bother about the logistics! Additionally, you do not have the bother of acquiring permissions or having to pay separately for services. Moreover, the hub is accessible from Lonavala in under two hours and is open to users around the clock! .",
     image: "/images/blog/09/11-beautiful-pre-wedding-shoot-locations-in-lonavala-2-1.jpg",
     slug: "11-beautiful-pre-wedding-shoot-locations-in-lonavala",
  },

   {
    id: 14,
    title: "pre wedding shoot locations in mumbai",
    description:
      "Pre wedding Shoot Locations in Mumbai are plenty but you need to find the right one for your requirements. When you want to strike a pose with your bae and freeze that shot in time you obviously need to be relaxed and ‘at home’ wherever on earth you are! The big day is perhaps around the corner and there are so many things to be taken care of that it would be difficult to manage both time and workload. ",
     image: "/images/blog/09/pre-wedding-shoot-locations-in-mumbai-1-1-1024x674.jpg",
     slug: "pre-wedding-shoot-locations-in-mumbai",
  },

   {
    id: 15,
    title: "pre wedding shoot locations in pune",
    description:
      "A wedding is a joyous occasion. It’s no wonder then that couples want to preserve those precious and joyful moments through photos. That, though, is not always possible as for the most part, the bride and groom have strained expressions on their faces. They are not to blame – after all, they are in the midst of hundreds of people- all watching them closely. So they artificially smile for the cameras concealing whatever emotions they may be going through.",
     image: "/images/blog/09/Pre-Wedding-Shoot-Locations-in-Pune-1-3-1024x678.jpg",
     slug: "pre-wedding-shoot-locations-in-pune",
  },
   {
    id: 16,
    title: "pre wedding locations in alibaug",
    description:
      "Pre wedding locations in Alibaug often make it to the front pages these days. A Pre wedding photoshoot is, after all, a fairy tale feeling, a prelude to the ‘big day’ to come. Two people are brought together in a romantic environment. The result is magical and wonderful.  In addition, the stunning atmosphere, the great landscapes, and the picture-perfect scenery are just breathtaking. An Alibaug pre wedding location is just the ideal backdrop to create dreamy memories of ‘everlasting love and affection’. Therefore, such a photoshoot is great to capture charming moments that can be recalled at will and treasured for eternity!",
     image: "/images/blog/09/Pre-wedding-Locations-in-Alibaug-2-2-1024x674.jpg",
     slug: "pre-wedding-locations-in-alibaug",
  },

   {
    id: 17,
    title: "film shooting locations",
    description:
      "Film Shooting Locations are a dime a dozen and come in various forms but it is difficult to find suitable ones. Locations Hub eliminates your difficulties and problems by providing you the perfect amalgamation of indoor and outdoor locations. Regardless of what you’re shooting, location and space are the nerve centers for a good film shoot. There are so many aspects to film shooting. You require space to house the huge assortment of equipment, parking space for trailers and vehicles, and realistic sets. These are just a few among a long list of requirements at film shooting locations.",
     image: "/images/blog/09/Film-Shooting-Locations-2-1024x674.jpg",
     slug: "film-shooting-locations",
  },
];

// export default function BlogPage() {
//   return (
//     <div className="max-w-[1100px] mx-auto px-6 py-16">
//       {blogs.map((blog) => (
//         <div
//           key={blog.id}
//           className="flex gap-8 py-8 border-b border-gray-200 last:border-none"
//         >
//           {/* Image */}
//           <div className="w-[300px] h-[180px] relative shrink-0">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               fill
//               className="object-cover rounded-sm"
//             />
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             {/* Heading */}
//             <h2 className="text-[18px] font-semibold text-gray-800 mb-3 capitalize">
//               {blog.title}
//             </h2>

//             {/* Paragraph */}
//             <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
//               {blog.description}
//             </p>

//             {/* Details */}

//            <Link
//   href={`/${blog.slug}`}
//   className="text-[13px] font-bold text-[#FF881D] hover:underline"
// >
//   Details »
// </Link>
           
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-12 md:py-16">
//   {blogs.map((blog) => (
//     <div
//       key={blog.id}
//       className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 border-b border-gray-200 last:border-none"
//     >
//       {/* Image */}
//       <div className="relative w-full md:w-[300px] h-[220px] md:h-[180px] shrink-0">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           fill
//           className="object-cover rounded-sm"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1">
//         <h2 className="text-[18px] font-semibold text-gray-800 mb-3 capitalize">
//           {blog.title}
//         </h2>

//         <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
//           {blog.description}
//         </p>

//         <Link
//           href={`/${blog.slug}`}
//           className="text-[13px] font-bold text-[#FF881D] hover:underline"
//         >
//           Details »
//         </Link>
//       </div>
//     </div>
//   ))}
// </div>

    
//   );
// }

export default function BlogPage() {
  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden md:block max-w-[1100px] mx-auto px-6 py-16">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex gap-8 py-8 border-b border-gray-200 last:border-none"
          >
            {/* Image */}
            {/* <div className="w-[300px] h-[180px] relative shrink-0">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-sm"
              />
            </div> */}
            <Link
  href={`/${blog.slug}`}
  className="w-[300px] h-[190px] relative shrink-0 block"
>
  <Image
    src={blog.image}
    alt={blog.title}
    fill
    className="object-cover  hover:opacity-90 transition"
  />
</Link>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-[18px] font-semibold text-gray-800 mb-3 capitalize">
  <Link
    href={`/${blog.slug}`}
    className="hover:text-[#FF881D] transition-colors"
  >
    {blog.title}
  </Link>
</h2>

              <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
                {blog.description}
              </p>

              <Link
                href={`/${blog.slug}`}
                className="text-[13px] font-bold text-[#FF881D] hover:underline"
              >
                Details »
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MOBILE VERSION ================= */}
      <div className="block md:hidden max-w-[1100px] mx-auto px-4 py-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="py-8 border-b border-gray-200 last:border-none"
          >
            {/* Image */}
            <div className="relative w-full h-[220px] mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-sm"
              />
            </div>

            {/* Content */}
            <h2 className="text-[18px] font-semibold text-gray-800 mb-3 capitalize">
              {blog.title}
            </h2>

            <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
              {blog.description}
            </p>

            <Link
              href={`/${blog.slug}`}
              className="text-[13px] font-bold text-[#FF881D] hover:underline"
            >
              Details »
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}