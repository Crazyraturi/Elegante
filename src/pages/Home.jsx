import Herosection from "../components/Home/Herosection";
import SuperSavingCombos from "../components/Home/SuperSavingCombos";
import MostWantedCategories from "../components/Home/MostWantedCategories";
import Newlaunched from "../components/Home/Newlaunched";
import Exclusive from "../components/Home/Exclusive";
import Testimonials from "../components/Home/Testimonials";
import NewArrival from "../components/Home/NewArrival";

const Home = () => {
  return (
    <div>
      <Herosection />
      <SuperSavingCombos />
      <MostWantedCategories />
      <Newlaunched />
      <Exclusive />
      <Testimonials />
      <NewArrival />
    </div>
  );
};

export default Home;
