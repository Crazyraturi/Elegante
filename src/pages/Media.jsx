const NewsItem = ({ logo, title, date }) => (
  <div className="border-b border-gray-200 py-4 md:py-6 hover:bg-gray-50 transition-colors">
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 px-4 md:px-0">
      <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 w-full">
        <div className="h-12 w-20 sm:h-16 sm:w-24 md:h-20 md:w-32 flex items-center justify-center shrink-0">
          <img
            src={logo}
            alt="News logo"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <p className="text-gray-800 text-xs sm:text-sm md:text-base flex-1 leading-relaxed">
          {title}
        </p>
      </div>
      <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap sm:pr-4 md:pr-10 ml-24 sm:ml-0">
        {date}
      </span>
    </div>
  </div>
);

const Media = () => {
  const newsItems = [
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931484/yourstory_r3odxn.png",
      title:
        "FASHION ECOMMERCE STARTUP Straticrestedge RAISES RS 40 CR FROM KLUB",
      date: "29 Apr 2023",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931517/startup_story_xxayao.png",
      title:
        "Straticrestedge secures Rs 40 crore funding from Klub for expansion plans",
      date: "29 Apr 2023",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931546/smestreetlogo_ltcsfu.jpg",
      title:
        "Straticrestedge Aims to Open 100+ Stores in Tier 2 and 3 Cities after Raising 40 Cr Funding through Klub",
      date: "27 Apr 2023",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931597/cnbc-news_plizay.png",
      title:
        "Startup Digest: Ohmium raises $250M, PhonePe may waive off ZestMoney's debt, Uber expands 'Reserve' option & more",
      date: "26 Apr 2023",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931649/indiaretail-logo-23_lcz6sj.png",
      title:
        "Online fashion brand Straticrestedge crosses Rs 100 crore in FY 2022-2023",
      date: "26 Apr 2023",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931702/vccircle_bwanwz.png",
      title:
        "E-Commerce Firm Straticrestedge Raises Close To $5 Mn In Funding Round",
      date: "28 Apr 2023",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931739/logo_indiatoday_pomupv.png",
      title: "Different career options in online fashion market",
      date: "30 Oct 2021",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931775/logo-hr-header_zczekv.png",
      title: "Straticrestedge to hire over 150 professionals",
      date: "21 Oct 2021",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931825/indian-retailer_lteuqv.png",
      title:
        "Youth Apparel Startup Straticrestedge Forays into Semi-Premium Segment",
      date: "20 Oct 2021",
    },
    {
      logo: "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931861/zee-business_logo1_wx7pxc.png",
      title:
        "Textile Retail Segment: What consumers are looking for – Expert decodes",
      date: "15 Oct 2021",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">HOME</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">
              Straticrestedge - IN THE NEWS
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-48 lg:shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden lg:sticky lg:top-8">
              <div className="bg-linear-to-r from-yellow-400 to-yellow-500 px-4 py-3">
                <h2 className="font-semibold text-gray-800 text-sm md:text-base">
                  All Online Coverage
                </h2>
              </div>
              <div className="p-4">
                <button className="text-gray-700 hover:text-gray-900 font-medium text-sm md:text-base">
                  2021
                </button>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="flex-1 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {newsItems.map((item, index) => (
                <NewsItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
