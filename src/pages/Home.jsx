import React from "react";
import Herosection from "../components/Home/Herosection";
import SuperSavingCombos from "../components/Home/SuperSavingCombos";
import NewArrival from "../components/Home/NewArrival";
import MostWantedCategories from "../components/Home/MostWantedCategories";
import Newlaunched from "../components/Home/Newlaunched";
import Exclusive from "../components/Home/Exclusive";
import Testemonials from "../components/Home/Testemonials";

const Home = () => {
  return (
    <div>
      <Herosection />
      <SuperSavingCombos/>
      <NewArrival />
      <MostWantedCategories/>
      <Newlaunched/>
      <Exclusive/>
      <Testemonials/>
      
      
      
    </div>
  );
};

export default Home;
