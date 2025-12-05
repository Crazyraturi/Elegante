const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-3 my-8 text-center">
      <div>
        <div className="w-[90px] h-[90px] mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933434/Genuine_coc8wx.svg"
            alt="Genuine"
            className="h-max w-max"
          />
        </div>
        <div className="font-medium">Genuine Product</div>
      </div>
      <div>
        <div className="w-[90px] h-[90px] mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933440/HappyCustomer_y2tr4o.svg"
            alt="Genuine"
            className="h-max w-max"
          />
        </div>
        <div className="font-medium">3M+ Happy Customers</div>
      </div>
      <div>
        <div className="w-[90px] h-[90px] mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764933447/MakeInIndia_l2allp.svg"
            alt="Genuine"
            className="h-max w-max"
          />
        </div>
        <div className="font-medium">Made In India</div>
      </div>
    </div>
  );
};

export default FeaturesSection;
