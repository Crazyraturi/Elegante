import React from "react";

const Teams = () => {
  return (
    <div className="p-5">
      <h1 className="upercase  font-semibold  text-center ">
        My Team, my Dreamers
      </h1>
      <p className="text-center">I was started by just 4 young dreamers</p>
      <div className="grid grid-cols-4 m-auto max-w-6xl mt-5">
        <div className="flex flex-col items-center">
          <h2>Shivam Soni</h2>
          <p>(Founder & CEO)</p>
        </div>
        <div className="flex flex-col items-center">
          <h2>Shivani Soni</h2>
          <p>(Co-Founder & CDO)</p>
        </div>
        <div className="flex flex-col items-center">
          <h2>Sakshi Soni</h2>
          <p>(Co-Founder & CMO)</p>
        </div>
        <div className="flex flex-col items-center">
          <h2>Shankar Mali</h2>
          <p>(Co-Founder & COO)</p>
        </div>
      </div>

      <div className="max-w-6xl m-auto rounded-2xl my-5 overflow-clip ">
        <video
          autoPlay
          muted
          controls={false}
          loop
          playsInline
          src="https://res.cloudinary.com/dj9tpadhk/video/upload/v1764917858/About_Us_Last_Bottom_Video_vwhwge.mp4"></video>
      </div>

      <p className="text-center max-w-6xl m-auto">
        But now, I have grown up into 300+ passionate Straticrestedgesters. All
        with the same aspiration as you - to look unique and stylish without
        compromising on quality and of course, not breaking the bank. In fact,
        everything is made in Bharat only, and the team is really proud of it.
        Even more proud of being trusted by 5 Million Straticrestedgesters (YOU
        guys). P.S. The team strives to make your shopping experience
        comfortable and satisfactory, and even COOLER!!{" "}
      </p>

      <div className="m-auto max-w-6xl mt-5">
        <h2 className=" text-2xl font-bold text-center">
          Together We Have Achieved
        </h2>
        <img
          className="object-cover mt-5"
          src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764918863/news-desktop_tfcwiy.jpg"
          alt="news-desktop"
        />
      </div>
    </div>
  );
};

export default Teams;
