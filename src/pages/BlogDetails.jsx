import React, { useState } from "react";
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";

export default function BlogDetailPage() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleCommentSubmit = () => {
    if (comment && name && email) {
      console.log({ comment, name, email, website, saveInfo });
      // Reset fields
      setComment("");
      setName("");
      setEmail("");
      setWebsite("");
    }
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      console.log("Newsletter email:", newsletterEmail);
      setNewsletterEmail("");
    }
  };

  const relatedPosts = [
    {
      title: "Travel Packing Made Easy: From Beaches to Forts in Style...",
      author: " Elegante",
      date: "Jul 10, 2025",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop",
    },
    {
      title:
        "Rain-Proof Your Wardrobe: 7 Essentials for Monsoon Fashion in 2025...",
      author: " Elegante",
      date: "Jul 4, 2025",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    },
    {
      title:
        "Rakhi Gifts for Brothers Who Have Everything (But Still Deserve More)...",
      author: " Elegante",
      date: "Jul 4, 2025",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=300&fit=crop",
    },
  ];

  const categories = ["Fashion", "Lifestyle", "Decor"];

  const shopLinks = [
    "Joggers For Men",
    "Men's Shirts",
    "Cargo Pants",
    "Oversized T-shirts",
    "Urban Shirts",
    "Men's Pyjamas",
    "Combos",
    "Polo T-shirts",
    "Satin Shirts",
    "Full Sleeve T-shirts",
  ];

  const jobListings = [
    {
      title: "Graphic Designer",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
    {
      title: "Fashion Designer",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
    {
      title: "Copywriter",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
    {
      title: "Content Writer",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
    {
      title: "Social Media Executive",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
    {
      title: "SEO Executive",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
    {
      title: "Google Ads Executive",
      description:
        "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">The  Elegante Blog</h1>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold transition">
            Shop At  Elegante
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-8 py-4">
            <li className="hover:text-yellow-400 cursor-pointer transition">
              HOME
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              FASHION
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              LIFESTYLE
            </li>
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="text-sm text-gray-600">
          Home » Lifestyle Blogs » 10 Summer Essentials Tips for Men to Stay
          Cool & Stylish
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-8">
              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <span className="bg-yellow-400 px-3 py-1 text-sm font-semibold rounded">
                  Fashion Blogs
                </span>
                <span className="bg-yellow-400 px-3 py-1 text-sm font-semibold rounded">
                  Lifestyle Blogs
                </span>
                <span className="bg-yellow-400 px-3 py-1 text-sm font-semibold rounded">
                  Travel
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold mb-4">
                10 Summer Essentials Tips for Men to Stay Cool & Stylish
              </h1>

              {/* Author & Date */}
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm">
                    👤
                  </span>
                  By  Elegante
                </span>
                <span>Apr 25, 2025</span>
              </div>

              {/* Featured Image */}
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=400&fit=crop"
                alt="Summer fashion for men"
                className="w-full rounded-lg mb-8"
              />

              {/* Content */}
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Summer brings sunshine, holidays, and outdoor adventures,
                  however, it also brings sizzling warmth and humidity. Staying
                  stylish while retaining cool can be a challenge; however, with
                  the right summer season necessities, you can effortlessly hold
                  both comfort and fashion.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Your summer essentials should be built around breathable
                  fabrics, lightweight clothing, and functional accessories to
                  help you beat the heat in style. Whether heading to work, a
                  casual outing, or a beach vacation, these summer clothing
                  essentials will keep you looking fresh and confident all
                  summer.
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Let's explore ten essential summer style tips every man should
                  follow to stay cool and stylish.
                </p>

                {/* Section 1 */}
                <h2 className="text-2xl font-bold mb-4">
                  1. Choose Lightweight & Breathable Fabrics
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The key to dressing well in summer starts with choosing the
                  right fabrics. The material of your clothing significantly
                  affects how you feel throughout the day.
                </p>

                <img
                  src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&h=400&fit=crop"
                  alt="Lightweight summer fabrics"
                  className="w-full rounded-lg mb-6"
                />

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Lightweight and Breathable Fabrics for Summer
                  </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Linen</strong> – One of the best summer essentials
                    men should invest in. Linen is lightweight, breathable, and
                    absorbs moisture, making it perfect for hot weather.
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Cotton</strong> – A classic choice that allows air
                    to circulate freely, keeping you dry and comfortable.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Avoid synthetic fabrics like polyester and nylon, as they
                    tend to trap heat and cause excessive sweating. A
                    well-curated summer wardrobe essentials collection should be
                    centered around natural, breathable materials.
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded font-semibold transition">
                    Explore Our Summer Collection
                  </button>
                </div>

                {/* Section 2 */}
                <h2 className="text-2xl font-bold mb-4">
                  2. Opt for Loose-Fitting Clothing
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The fit of your clothes plays a crucial role in keeping you
                  cool. Tight or body-hugging clothes restrict airflow, making
                  you feel hotter. Instead, opt for relaxed or regular-fit
                  summer clothing essentials to maintain comfort and
                  breathability.
                </p>

                <img
                  src="https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&h=400&fit=crop"
                  alt="Loose-fitting summer clothing"
                  className="w-full rounded-lg mb-8"
                />

                {/* Section 3 - Underwear */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Key Features to Look For:
                  </h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>
                      • Breathable cotton or moisture-wicking synthetic blends
                    </li>
                    <li>
                      • Seamless or flat-lock stitching to reduce friction
                    </li>
                    <li>• Quick-drying properties</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Opt for lightweight boxer briefs, undershirts, and socks
                    made from these materials. This small yet significant
                    adjustment to your summer necessities will make a noticeable
                    difference in comfort.
                  </p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded font-semibold transition">
                    Shop Men's Cotton Boxers
                  </button>
                </div>

                {/* Section 4 - Sunglasses */}
                <h2 className="text-2xl font-bold mb-4">
                  4. Prioritize UV Protection with Sunglasses
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A stylish pair of sunglasses is one of the most important
                  summer essentials men should own. Apart from being a fashion
                  statement, they protect your eyes from harmful UV rays and
                  prevent squinting and eye strain.
                </p>

                <h3 className="text-xl font-bold mb-3">
                  Choosing the Right Sunglasses
                </h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>
                    <strong>Polarized lenses</strong> – Reduce glare and enhance
                    visual clarity.
                  </li>
                  <li>
                    <strong>UV protection</strong> – Blocks harmful rays to
                    prevent eye damage.
                  </li>
                  <li>
                    <strong>Frame style</strong> – Aviators, wayfarers, and
                    clubmasters are timeless and suit most face shapes.
                  </li>
                </ul>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  A quality pair of sunglasses can instantly upgrade your look
                  while keeping your eyes protected.
                </p>

                {/* Section 5 - Footwear */}
                <h2 className="text-2xl font-bold mb-4">
                  5. Keep It Cool with Breathable Footwear
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Heavy boots and thick footwear are a no-go for summer.
                  Instead, choose footwear that provides comfort and air
                  circulation.
                </p>

                <h3 className="text-xl font-bold mb-3">
                  Best Summer Footwear for Men
                </h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li>
                    <strong>Loafers</strong> – A versatile option that pairs
                    well with both casual and semi-formal outfits.
                  </li>
                  <li>
                    <strong>Espadrilles</strong> – Lightweight and stylish for
                    beach outings or casual daywear.
                  </li>
                </ul>

                {/* Section 9 - Hat */}
                <h2 className="text-2xl font-bold mb-4">
                  9. Don't Forget a Breathable Hat
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  A stylish hat is a practical addition to your summer wardrobe.
                  A straw hat, bucket hat, or baseball cap not only protects
                  your face from the sun but also adds a cool and casual vibe to
                  your outfit.
                </p>

                {/* Section 10 - Hydration */}
                <h2 className="text-2xl font-bold mb-4">
                  10. Stay Hydrated & Wear Minimal Accessories
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  No matter how well you dress, staying hydrated is essential
                  for looking and feeling good in the summer. Dehydration can
                  make you feel exhausted and dull your appearance. Always carry
                  a water bottle and drink at least 8 glasses of water a day.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  As for accessories, less is more in a warm climate. Avoid
                  heavy jewelry that could make you feel hotter. Instead, opt
                  for lightweight watches, beaded bracelets, or minimal rings.
                </p>

                {/* Final Thoughts */}
                <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Dressing well in summer is about balancing comfort with style.
                  By incorporating these summer essentials, you'll stay cool,
                  confident, and effortlessly stylish throughout the season.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether it's upgrading your summer wardrobe essentials,
                  choosing the right summer clothing essentials, or focusing on
                  summer necessities like sunglasses and grooming, these tips
                  will ensure you're prepared for any warm-weather occasion.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Start curating your summer essentials list today, and enjoy
                  the season with the perfect blend of style and comfort with{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                     Elegante
                  </a>
                  !
                </p>
              </div>

              {/* Social Share */}
              <div className="flex gap-3 mt-8 pt-8 border-t">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition">
                  <Facebook size={18} />
                </button>
                <button className="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
                {[
                  "# Elegante",
                  "# Elegante_blog",
                  "#Fashion",
                  "#Lifestyle",
                  "#Men's Fashion",
                  "#mens summer fashion",
                  "#Styles",
                  "#summer",
                  "#summer essentials",
                  "#summer tips",
                ].map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="text-sm text-gray-600 hover:text-yellow-500 transition"
                  >
                    {tag}
                  </a>
                ))}
              </div>

              {/* Author */}
              <div className="mt-8 pt-8 border-t text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <h3 className="text-xl font-bold">By  Elegante</h3>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 bg-yellow-400 inline-block px-4 py-2">
                  Related Post
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((post, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold mb-2 hover:text-yellow-500 cursor-pointer transition">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>👤 {post.author}</span>
                          <span>📅 {post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment Form */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Leave a Reply</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comment *"
                    className="w-full border border-gray-300 rounded-lg p-4 mb-4 min-h-32"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name *"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email *"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                  />
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Website"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4"
                  />
                  <label className="flex items-center gap-2 mb-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={saveInfo}
                      onChange={(e) => setSaveInfo(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
                  </label>
                  <button
                    onClick={handleCommentSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-semibold transition"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 bg-yellow-400 inline-block px-4 py-2">
                Newsletter
              </h3>
              <p className="text-gray-700 mb-4">Subscribe to our newsletter</p>
              <div>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded p-3 mb-4"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded transition"
                >
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>

            {/* Best Selling Categories */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 bg-yellow-400 inline-block px-4 py-2">
                Best-Selling Categories
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Join  Elegante Family */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Join  Elegante Family
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold transition">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Popular Blogs */}
            <div>
              <h3 className="text-xl font-bold mb-4">POPULAR BLOGS</h3>
              <div className="space-y-4">
                <div>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                    FASHION
                  </span>
                  <p className="text-sm mt-2 text-gray-300">Jul 10, 2025</p>
                  <p className="text-sm mt-1">
                    TRAVEL PACKING MADE EASY: FROM BEACHES TO FORTS IN STYLE...
                  </p>
                </div>
                <div>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
                    LIFESTYLE
                  </span>
                  <p className="text-sm mt-2 text-gray-300">Jul 04, 2025</p>
                  <p className="text-sm mt-1">
                    RAKHI GIFTS FOR BROTHERS WHO HAVE EVERYTHING (BUT STILL
                    DESERVE MORE)...
                  </p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-bold mb-4">CATEGORIES</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded cursor-pointer transition"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 shrink-0" />
                  <span>
                    Eklingpura Chouraha, Ahmedabad Main Road (NH 8- Near Mahadev
                    Hotel) Udaipur, India- 313002
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} />
                  <a
                    href="mailto:support@ Elegante.in"
                    className="hover:text-yellow-400 transition"
                  >
                    support@ Elegante.in
                  </a>
                </p>
              </div>
            </div>

            {/* Follow Us & Shop The Look */}
            <div>
              <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
              <div className="flex gap-3 mb-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition"
                >
                  <Youtube size={18} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-4">SHOP THE LOOK</h3>
              <div className="flex flex-wrap gap-2">
                {shopLinks.slice(0, 6).map((link) => (
                  <span
                    key={link}
                    className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded text-xs cursor-pointer transition"
                  >
                    {link}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            Copyright © 2025  Elegante. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
