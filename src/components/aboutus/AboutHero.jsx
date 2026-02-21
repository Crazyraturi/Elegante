import React from "react";

const AboutHero = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="hover:text-gray-900 cursor-pointer">HOME</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">ABOUT US</span>
        </div>
      </div>

      {/* MAIN WRAPPER */}
      <div className="flex flex-col items-center justify-center">
        {/* Top Image */}
        <img
          src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764918402/aboutusimg_p1hjl7.jpg"
          width={400}
          alt="About Hero"
        />

        <p className="font-normal text-lg text-center p-2">
          “About Us” is so overrated. Let's call it the “About Me” page. <br />
          So, you came a long way to know about me. Let us present to you <br />
          MY STORY.
        </p>
      </div>
    </>
  );
};

export default AboutHero;
