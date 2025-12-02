import c1 from "../../assets/cred-mobi-freecharge.jpg";
import c2 from "../../assets/11HDFC-strip.jpg";
import c3 from "../../assets/cred-mobi-freecharge2.jpg";
import c4 from "../../assets/Freecharge-UPI11.jpg";
import c5 from "../../assets/flash.co.jpg";

export default function CollaborationsPage() {
  const collaborations = [
    {
      id: 1,
      image: c1,
      title: "Get mystery cashback upto Rs. 500 on MOV Rs.499 and above",
      bgColor: "bg-black",
    },
    {
      id: 2,
      image: c2,
      title: "Get Flat Rs 150/- Instant Discount.",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      image: c3,
      title:
        "Get Additional Cashback Upto ₹250 on transactions via the MobiKwik Wallet",
      bgColor: "bg-blue-700",
    },
    {
      id: 4,
      image: c4,
      title:
        "Get Upto Rs.50/- cashback On using Freecharge UPI Minimum Shopping of Rs.999/-",
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      image: c5,
      title: "Get Cashback Rs.100/ Cashback",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="hover:text-gray-900 cursor-pointer">HOME</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">COLLABORATION</span>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-12">
          Official Collaborations
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborations.map((collab) => (
            <div key={collab.id} className="flex flex-col">
              {/* Card with only image */}
              <div
                className={`${collab.bgColor} rounded-2xl overflow-hidden border-2 border-gray-200 shadow-sm`}
              >
                <img
                  src={collab.image}
                  alt={`Collaboration ${collab.id}`}
                  className="w-full h-90  "
                />
              </div>

              {/* Description and Button below card */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-700 mb-4 px-2 min-h-10">
                  {collab.title}
                </p>
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded transition-colors">
                  Redeem Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
