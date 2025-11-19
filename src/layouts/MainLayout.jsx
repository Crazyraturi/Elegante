import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../components/common/NavBar"
import Footer from "../components/common/Footer";


const MainLayout = ()=>{
    const location = useLocation();

    const noFooterRoutes = ["/blog/details"];

    const hideFooter = noFooterRoutes.includes(location.pathname)

   return(
    <><Navbar/>
       <Outlet/>
       {!hideFooter && <Footer/>}
    </>
   )
}
export default MainLayout;