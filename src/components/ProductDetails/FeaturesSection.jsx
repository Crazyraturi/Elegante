import Genuine from "../../assets/Genuine.svg";
import HappyCustomers from "../../assets/HappyCustomer.svg";
import MakeInIndia from "../../assets/MakeInIndia.svg";

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-3 my-12 text-center">
      <div>
        <div className="w-[110px] h-[110px] mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
          <img src={Genuine} alt="Genuine" className="h-max w-max" />
        </div>
        <div className="font-medium">Genuine Product</div>
      </div>
      <div>
        <div className="w-[110px] h-[110px] mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
          <img src={HappyCustomers} alt="Genuine" className="h-max w-max" />
        </div>
        <div className="font-medium">3M+ Happy Customers</div>
      </div>
      <div>
        <div className="w-[110px] h-[110px] mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
          <img src={MakeInIndia} alt="Genuine" className="h-max w-max" />
        </div>
        <div className="font-medium">Made In India</div>
      </div>
    </div>
  );
};

export default FeaturesSection;
