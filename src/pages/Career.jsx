import React from 'react';

const JobCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded transition-colors duration-300">
        Read More
      </button>
    </div>
  );
};

export default function CareersPage() {
  const jobs = [
    {
      title: "Graphic Designer",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    },
    {
      title: "Fashion Designer",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    },
    {
      title: "Copywriter",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    },
    {
      title: "Content Writer",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    },
    {
      title: "Social Media Executive",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    },
    {
      title: "SEO Executive",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    },
    {
      title: "Google Ads Executive",
      description: "Looking for a perfect workplace? Here is your chance to work at fast-growing e-commerce fashion brand..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

            {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto  px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="hover:text-gray-900 cursor-pointer">HOME</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">CAREER</span>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative h-80  overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: "url('https://www.beyoung.in/api/catalog/1-career/new-1hiring-category-banner-desktop-view.jpg')"
          }}
        />
     
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Join Beyoung Family
        </h1>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <JobCard key={index} title={job.title} description={job.description} />
          ))}
        </div>

        {/* Microsoft Store Badge */}
        <div className="flex justify-center mt-16">
          <div className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md cursor-pointer transition-colors duration-300 shadow-lg">
            Microsoft Store
          </div>
        </div>
      </div>
    </div>
  );
}