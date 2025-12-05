import React, { useState } from "react";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const [email, setEmail] = useState("");

  const featuredPosts = [
    {
      id: 1,
      title:
        "Rain-Proof Your Wardrobe: 7 Essentials for Monsoon Fashion in 2025",
      author: "Elegante",
      date: "Jul 3, 2025",
      image:
        "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=800&h=600&fit=crop",
      category: "Fashion",
      tags: ["Fashion Blog", "Lifestyle Blog"],
    },
    {
      id: 2,
      title: "Travel Packing Made Easy: From Beaches to Forts in Style",
      author: "Elegante",
      date: "Jul 8, 2025",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Dates",
      tags: [],
    },
    {
      id: 3,
      title: "Rain-Proof Your Wardrobe: 7 Essentials for Monsoon Fashion...",
      author: "Elegante",
      date: "Jul 4, 2025",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop",
      category: "Dates",
      tags: [],
    },
  ];

  const smallFeaturedPosts = [
    {
      id: 4,
      title: "Rain-Proof Your Wardrobe: 7 Essentials for Monsoon...",
      author: "Elegante",
      date: "Jul 3, 2025",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop",
      tags: ["Fashion Blog", "Lifestyle Blog"],
    },
    {
      id: 5,
      title: "Rakhi Gifts for Brothers Who Have Everything [But the...",
      author: "Elegante",
      date: "Jul 3, 2025",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      tags: ["Fashion Blog", "Lifestyle Blog"],
    },
    {
      id: 6,
      title: "RCB vs PBKS IPL Finals 2025: The Ultimate Men's...",
      author: "Elegante",
      date: "Nov 7, 2025",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      tags: ["Fashion Blog", "Lifestyle Blog"],
    },
  ];

  const allBlogPosts = [
    {
      id: 7,
      title: "Travel Packing Made Easy: From Beaches to Forts in Style",
      author: "Elegante",
      date: "Jul 10, 2025",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
      excerpt:
        "Travelling soon, yeah, or next? Just set your dates and start packing smart as you prepare for the journey. It's about packing smart as...",
    },
    {
      id: 8,
      title: "Rain-Proof Your Wardrobe: 7 Essentials for Monsoon Fashi...",
      author: "Elegante",
      date: "Jul 8, 2025",
      image:
        "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&h=500&fit=crop",
      excerpt:
        "The monsoon season is beautiful, but there are a few challenges that come with dressing comfortably and staying stylish at the same time during the...",
    },
    {
      id: 9,
      title: "Rakhi Gifts for Brothers Who Have Everything [But the...",
      author: "Elegante",
      date: "Jul 6, 2025",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=500&fit=crop",
      excerpt:
        "Here it always has been hard to get a unique gift idea for someone who has everything, especially a brother for whom none of a wishlist exists! So...",
    },
    {
      id: 10,
      title: "RCB vs PBKS IPL Finals 2025: The Ultimate Men's Fashion...",
      author: "Elegante",
      date: "Nov 7, 2025",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
      excerpt:
        "So yes, RCB vs PBKS are here, and it's a big time to be on the team. For fans across the world, this match isn't just about celebrating...",
    },
    {
      id: 11,
      title: "Final Results: World Fashion Inspired by IPL 2024's Final...",
      author: "Elegante",
      date: "Nov 7, 2025",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      excerpt:
        "The Indian Premier League (IPL) 2024 has been a riveting spectacle, not just for cricket but also fashion. With the IPL 2024 final approaching...",
    },
    {
      id: 12,
      title: "Shirt Colour Guide: Pick the Best Shirt Colours for Your Sk...",
      author: "Elegante",
      date: "Apr 18, 2025",
      image:
        "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=400&h=500&fit=crop",
      excerpt:
        "When it comes to style, the colors of the shirt or t shirt going well make all the difference. Selecting the correct shade is crucial not...",
    },
    {
      id: 13,
      title: "6 Must-Have Types of Pants in Every Modern Men's Wardrobe",
      author: "Elegante",
      date: "Apr 10, 2025",
      image:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
      excerpt:
        "When it comes to curating a versatile and stylish wardrobe, pants play a pivotal role. They are the cornerstone of a man's clothing in...",
    },
    {
      id: 14,
      title: "Summer Styling Guide: How to Stay Cool & Stylish",
      author: "Elegante",
      date: "Apr 10, 2025",
      image:
        "https://images.unsplash.com/photo-1621607428893-24399b31d7e2?w=400&h=500&fit=crop",
      excerpt:
        "Summer brings sunshine, holidays, and the perfect opportunity to refresh your wardrobe. However, it also presents the challenge...",
    },
    {
      id: 15,
      title: "Layering Is the Habit: How to Ace Light Layers in Summer",
      author: "Elegante",
      date: "Nov 7, 2025",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
      excerpt:
        "Layering in summer might seem counterintuitive, but with the right techniques, you can add depth to your outfits while still keeping them...",
    },
    {
      id: 16,
      title: "Men's Summer Beachwear 2025: Must-Have Outfits &...",
      author: "Elegante",
      date: "Nov 7, 2025",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=400&h=500&fit=crop",
      excerpt:
        "Summer 2025 is all about effortless style and fashionable comfort. When there comes a sandy beach or a poolside hangout, dressing well isn't just...",
    },
  ];

  const categories = ["Best Selling Categories", "Newsletter"];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Featured Posts */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Large Featured Post */}
          <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
            <img
              src={featuredPosts[0].image}
              alt={featuredPosts[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex gap-2 mb-3">
                {featuredPosts[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold mb-2">
                {featuredPosts[0].title}
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {featuredPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {featuredPosts[0].date}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Two Featured Posts Stacked */}
          <div className="flex flex-col gap-4">
            {featuredPosts.slice(1, 3).map((post) => (
              <div
                key={post.id}
                className="relative h-44 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Featured Blogs Section */}
        <div className="mb-8">
          <div className="bg-yellow-400 inline-block px-4 py-2 rounded-md mb-4">
            <h3 className="text-black font-bold">Featured Blogs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {smallFeaturedPosts.map((post) => (
              <div
                key={post.id}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-base font-bold mb-2">{post.title}</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Blogs Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Blog Grid */}
            <div className="lg:w-3/4">
              <div className="bg-yellow-400 inline-block px-4 py-2 rounded-md mb-6">
                <h3 className="text-black font-bold">All Blogs</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {allBlogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <User size={12} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-8">
                <button className="w-10 h-10 bg-yellow-400 text-black font-bold rounded flex items-center justify-center hover:bg-yellow-500">
                  1
                </button>
                <button className="w-10 h-10 bg-white text-black font-bold rounded flex items-center justify-center hover:bg-gray-100">
                  2
                </button>
                <button className="w-10 h-10 bg-white text-black font-bold rounded flex items-center justify-center hover:bg-gray-100">
                  &gt;
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Best Selling Categories */}
              <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                <div className="bg-yellow-400 inline-block px-4 py-2 rounded-md mb-4">
                  <h3 className="text-black font-bold text-sm">
                    Best Selling Categories
                  </h3>
                </div>
                <div className="space-y-2">
                  {/* Categories would be listed here */}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="bg-yellow-400 inline-block px-4 py-2 rounded-md mb-4">
                  <h3 className="text-black font-bold text-sm">Newsletter</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to our newsletter
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded mb-3 text-sm focus:outline-none focus:border-yellow-400"
                />
                <button className="w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-500 transition-colors">
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
