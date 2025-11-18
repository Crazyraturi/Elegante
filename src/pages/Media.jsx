import yourstory from "../assets/yourstory.png";
import startup_story from "../assets/startup_story.png";
import smestreetlogo from "../assets/smestreetlogo.jpg";
import cnbc from "../assets/cnbc-news.png";
import indiaretail from "../assets/indiaretail-logo-23.png";
import vccircle from "../assets/vccircle.png";
import indiantoday from "../assets/logo_indiatoday.png";
import hrworld from "../assets/logo-hr-header.png";
import indianretailer from "../assets/indian-retailer.png";
import zeebusiness from "../assets/zee-business_logo1.png";

const NewsItem = ({ logo, title, date }) => (
  <div className="border-b border-gray-200 py-6 hover:bg-gray-50 transition-colors">
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-6 flex-1">
        <div className="h-20 w-32 flex items-center justify-center pl-2">
          <img src={logo} />
        </div>
        <p className="text-gray-800 text-sm md:text-base flex-1">{title}</p>
      </div>
      <span className="text-gray-600 text-sm whitespace-nowrap pr-10">
        {date}
      </span>
    </div>
  </div>
);

const Media = () => {
  const newsItems = [
    {
      logo: yourstory,
      title: "FASHION ECOMMERCE STARTUP BEYOUNG RAISES RS 40 CR FROM KLUB",
      date: "29 Apr 2023",
    },
    {
      logo: startup_story,
      title:
        "BeYoung secures Rs 40 crore funding from Klub for expansion plans",
      date: "29 Apr 2023",
    },
    {
      logo: smestreetlogo,
      title:
        "BeYoung Aims to Open 100+ Stores in Tier 2 and 3 Cities after Raising 40 Cr Funding through Klub",
      date: "27 Apr 2023",
    },
    {
      logo: cnbc,
      title:
        "Startup Digest: Ohmium raises $250M, PhonePe may waive off ZestMoney's debt, Uber expands 'Reserve' option & more",
      date: "26 Apr 2023",
    },
    {
      logo: indiaretail,
      title:
        "Online fashion brand Beyoung crosses Rs 100 crore in FY 2022-2023",
      date: "26 Apr 2023",
    },
    {
      logo: vccircle,
      title: "E-Commerce Firm Beyoung Raises Close To $5 Mn In Funding Round",
      date: "28 Apr 2023",
    },
    {
      logo: indiantoday,
      title: "Different career options in online fashion market",
      date: "30 Oct 2021",
    },
    {
      logo: hrworld,
      title: "BeYoung to hire over 150 professionals",
      date: "21 Oct 2021",
    },
    {
      logo: indianretailer,
      title: "Youth Apparel Startup Beyoung Forays into Semi-Premium Segment",
      date: "20 Oct 2021",
    },
    {
      logo: zeebusiness,
      title:
        "Textile Retail Segment: What consumers are looking for – Expert decodes",
      date: "15 Oct 2021",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-gray-900 cursor-pointer">HOME</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">
              BEYOUNG - IN THE NEWS
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-48 shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden sticky top-8">
              <div className="bg-linear-to-r from-yellow-400 to-yellow-500 px-4 py-3">
                <h2 className="font-semibold text-gray-800">
                  All Online Coverage
                </h2>
              </div>
              <div className="p-4">
                <button className="text-gray-700 hover:text-gray-900 font-medium">
                  2021
                </button>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="flex-1 bg-white rounded-lg shadow-sm">
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
