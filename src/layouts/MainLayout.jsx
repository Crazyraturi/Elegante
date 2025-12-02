import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  const location = useLocation();

  const noFooterRoutes = ["/blog/details"];

  const noHeaderFooterRoutes = ["/login", "/signup"];

  const hideHeader = noHeaderFooterRoutes.includes(location.pathname);
  const hideFooter = noFooterRoutes.includes(location.pathname) || hideHeader;

  return (
    <>
      {!hideHeader && <Navbar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </>
  );
};
export default MainLayout;
