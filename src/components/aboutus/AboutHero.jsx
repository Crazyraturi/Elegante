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

        {/* ABOUT ME IMAGE */}
        <img
          src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764918792/about-us-gif_vbwx0n.gif"
          width={400}
          alt="About Me"
          className="mt-4"
        />

        <p className="font-normal text-lg text-center p-2">
          “About Us” is so overrated. Let's call it the “About Me” page. <br />
          You came a long way to know about me — here is MY STORY.
        </p>

        {/* TEXT ANIMATION VIDEO */}
        <div className="max-w-6xl rounded-2xl my-5 overflow-clip">
          <video
            autoPlay
            muted
            controls={false}
            loop
            playsInline
            src="https://res.cloudinary.com/dj9tpadhk/video/upload/v1764917850/brand_story_text_animation1_ugxbhz.mp4"
          ></video>
        </div>

        <p className="max-w-6xl text-center">
          Once upon a time, somewhere in the Universe, 4 dreamers (my young
          co-founders) met with the idea of creating a brand that offers Global
          Fashion. In 2018, after days of hard work and nights of dreams, they
          started my journey — “The Journey of Straticrestedge.” First order in
          days and lakhs of orders in years. You wanna know the drill? Well…
          here is my secret recipe:
        </p>

        {/* GIF SECTION */}
        <img
          className="p-5"
          src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764918792/about-us-gif_vbwx0n.gif"
          alt="Brand GIF"
        />

        <p className="text-center">Yes, this is what we are.</p>

        {/* CENTER VIDEO */}
        <div className="max-w-6xl rounded-2xl my-5 overflow-clip">
          <video
            className="w-full"
            autoPlay
            muted
            controls={false}
            loop
            playsInline
            src="https://res.cloudinary.com/dj9tpadhk/video/upload/v1764917858/About_Us_Center_Video_bwey3i.mp4"
          ></video>
        </div>

        <p className="max-w-6xl text-center mb-10">
          While others are snoozing, Straticrestedge is serving the youth of
          Bharat who want aspirational and value-for-money fashion. Because no
          one should have to compromise on fashion — I stepped in to change the
          game. <br />
          I want to be your Fashion Partner. From morning jogs to date nights,
          meetings to hangouts, I get you the look you want with sass and
          convenience. <br /> And here's something no one else offers —
          <strong> Customizable Combos.</strong>
        </p>
      </div>
    </>
  );
};

export default AboutHero;
