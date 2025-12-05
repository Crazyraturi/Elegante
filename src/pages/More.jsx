import { MapPin, Clock, Navigation } from "lucide-react";
import MainHeaderBanner from "../assets/MainHeaderBanner.jpg";
import mirzapur_store_offline from "../assets/mirzapur_store_offline.jpg";
import Ahmedabad_store_offline from "../assets/Ahmedabad_store_offline.jpg";
import lucknow_store from "../assets/lucknow_store.jpg";
import sikar_store from "../assets/sikar_store.jpg";
import kota_Store from "../assets/kota_Store.jpg";
import Bhilwara_Store from "../assets/Bhilwara_Store.jpg";
import Udaipur_Store from "../assets/Udaipur_Store.jpg";
import surat_store from "../assets/surat_store.png";

const More = () => {
  const stores = [
    {
      title: "Girdhar Chauraha, Mirzapur",
      address:
        "House No. 563, Girdhar Ka Chauraha, Badli Katra, next to Lenskart, Dankinganj, Mirzapur, Uttar Pradesh 231001",
      email: "mirzapur.store@Elegante.in",
      hours: "10:30 Am To 10 PM (Mon-Sun)",
      image: mirzapur_store_offline,
    },
    {
      title: "Prahlad Nagar, Ahmedabad",
      address:
        "Elegante Store, Shop No. 1, Ground Floor, Timber Point, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      email: "store.ahmedabad@Elegante.in",
      hours: "10:30 Am To 10 PM (Mon-Sun)",
      image: Ahmedabad_store_offline,
    },
    {
      title: "Jankipuram, Lucknow",
      address:
        "Elegante Store, Shop No. HS-1/6, Sector-A, Sitapur Road Scheme, Jankipuram, Lucknow-226021",
      email: "store.lucknow@Elegante.in",
      hours: "10:30 Am To 9:30 PM (Mon-Sun)",
      image: lucknow_store,
    },
    {
      title: "Station Road, Sikar",
      address:
        "Shop No. 1, Shri Shakti Tower, Opposite Maru Mandir, Station Road, Sikar-332001",
      email: "store.sikar@Elegante.in",
      hours: "10:30 Am To 9:30 PM (Mon-Sun)",
      image: sikar_store,
    },
    {
      title: "Kotri Road, Kota",
      address:
        "Shop No. 1, Plot No. 140, Gumanpura Yojna, Kotri Road, Kota 324007",
      email: "store.kota@Elegante.in",
      hours: "10:30 Am To 10 PM (Mon-Sun)",
      image: kota_Store,
    },
    {
      title: "Nagori Garden, Bhilwara",
      address: "Shop no. E-6 Factory Area, Nagori Garden Bhilwara 311001",
      email: "store.bhilwara@Elegante.in",
      hours: "10:30 AM to 9:30 PM (Mon-Sun)",
      image: Bhilwara_Store,
    },
    {
      title: "Ayad, University Road Udaipur",
      address:
        "Jai Jinendra Complex, University Rd, Luhar Colony, Ayad, Kharakua, Udaipur, Rajasthan 313001",
      email: "store.udr@Elegante.in",
      hours: "10 AM to 10 PM (Mon-Sun)",
      image: Udaipur_Store,
    },
    {
      title: "Magdalla, Surat, Gujarat",
      address:
        "Shop No-206, 2nd Floor VR Mall Dumas Rd, Magdalla, Surat, Gujarat 395007",
      email: "vrsurat.store@Elegante.in",
      hours: "10 AM to 10 PM (Mon-Sun)",
      image: surat_store,
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="w-full">
        <img
          src={MainHeaderBanner}
          className="w-full h-auto"
          alt="Header Banner"
        />
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mb-12 sm:mb-20">
        {stores.map((data, index) => (
          <div
            key={index}
            className="mt-8 sm:mt-12 md:mt-20 text-center w-full"
          >
            <h1 className="mb-4 sm:mb-5 text-xl sm:text-2xl md:text-[32px] font-semibold uppercase px-4">
              {data.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1170px] mx-auto bg-[#F4F4F4] rounded-lg overflow-hidden">
              {/* Image - Hidden on mobile, visible on desktop */}
              <img
                src={data.image}
                className="hidden md:block md:w-[770px] md:h-[491px] object-cover"
                alt={data.title}
              />

              {/* Info Card */}
              <div className="w-full md:w-[376px] bg-white border border-gray-300 rounded-lg m-4 md:mr-3 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
                <h3 className="font-medium text-base sm:text-lg">
                  {data.title}
                </h3>

                <div className="flex gap-2 sm:gap-3 items-start text-left">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-1" />
                  <div className="text-[#333333] text-xs sm:text-sm">
                    {data.address}
                  </div>
                </div>

                <div className="flex gap-2 sm:gap-3 items-start text-left">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 mt-1" />
                  <div className="text-[#333333] text-xs sm:text-sm">
                    Timing - {data.hours}
                  </div>
                </div>

                <div className="text-[#333333] text-xs sm:text-sm text-left">
                  Email ID -{" "}
                  <span className="underline break-all">{data.email}</span>
                </div>

                <button className="w-full h-10 sm:h-12 bg-black text-white cursor-pointer flex justify-center items-center gap-3 sm:gap-4 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  <Navigation className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Get Direction</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
