import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
