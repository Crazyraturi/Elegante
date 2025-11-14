import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212121] w-full text-white py-12">
      
      {/* TOP SECTION — EMAIL SUBSCRIBE */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        
        {/* Left Side */}
        <div>
          <p>
            Xclusive coupons, extra savings, and tons of EVERYDAY deals delivered
            straight to your inbox.
          </p>
        </div>

        {/* Right Side – Email Input */}
        <div className="flex justify-center md:justify-end">
          <div className="flex w-[80%] bg-white rounded-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-l-xl placeholder-black font-bold bg-white outline-none text-black"
            />
            <button className="px-4 py-3 bg-[#F7E957] rounded-r-xl font-bold text-black">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER SECTIONS */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center mt-16">
        
        {/* SUPPORT */}
        <div>
          <h3 className="font-bold text-lg mb-3">SUPPORT</h3>
          <ul className="space-y-1">
            <li><Link to="/track-order">Track Order</Link></li>
            <li><Link to="/returns-exchange">Returns & Exchange Policy</Link></li>
            <li><Link to="/faqs">FAQ's</Link></li>
            <li><Link to="/terms">Terms and Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold text-lg mb-3">COMPANY</h3>
          <ul className="space-y-1">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/collab">Collaboration</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/beyoungistan">Beyoungistan</Link></li>
            <li><Link to="/blog">Beyoung Blog</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
          </ul>
        </div>

        {/* STORES NEAR ME */}
        <div>
          <h3 className="font-bold text-lg mb-3">STORES NEAR ME</h3>
          <ul className="space-y-1">
            <li><Link to="/store/udaipur">Udaipur</Link></li>
            <li><Link to="/store/lucknow">Lucknow</Link></li>
            <li><Link to="/store/ahmedabad">Ahmedabad</Link></li>
            <li><Link to="/store/kota">Kota</Link></li>
            <li><Link to="/store/mirzapur">Mirzapur</Link></li>
            <li><Link to="/store/bhilwara">Bhilwara</Link></li>
            <li><Link to="/store/more">More</Link></li>
          </ul>
        </div>

        {/* LOCATION */}
        <div>
          <h3 className="font-bold text-lg mb-3">LOCATION</h3>
          <ul className="space-y-1">
            <li><Link to="/contact">support@beyoung.in</Link></li>
            <li>
              <Link to="/location">
                Eklingpura Chouraha, Ahmedabad Main Road (NH 8 - Near Mahadev Hotel)
              </Link>
            </li>
            <li><Link to="/location">Udaipur, India - 313002</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
