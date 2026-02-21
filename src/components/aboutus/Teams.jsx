import React from "react";

const Teams = () => {
  return (
    <div className="p-5">
      <h1 className="uppercase font-semibold text-center text-2xl mb-2">
        Our Team, Our Dreamers
      </h1>
      <p className="text-center text-gray-600 mb-10">
        We started with just 2 young dreamers
      </p>

      <div className="flex justify-center gap-16 md:gap-32 m-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Javed - Founder"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
          />
          <h2 className="text-lg font-bold">Javed</h2>
          <p className="text-gray-500 font-medium">(Co-Founder)</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
            alt="Faizan - Co-Founder"
            className="w-32 h-32 rounded-full object-cover shadow-lg mb-4"
          />
          <h2 className="text-lg font-bold">Faizan</h2>
          <p className="text-gray-500 font-medium">(Co-Founder)</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
