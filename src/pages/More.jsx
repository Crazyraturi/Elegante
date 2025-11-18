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
      email: "mirzapur.store@beyoung.in",
      hours: "10:30 Am To 10 PM (Mon-Sun)",
      image: mirzapur_store_offline,
    },
    {
      title: "Prahlad Nagar, Ahmedabad",
      address:
        "Beyoung Store, Shop No. 1, Ground Floor, Timber Point, Prahlad Nagar, Ahmedabad, Gujarat 380015",
      email: "store.ahmedabad@beyoung.in",
      hours: "10:30 Am To 10 PM (Mon-Sun)",
      image: Ahmedabad_store_offline,
    },
    {
      title: "Jankipuram, Lucknow",
      address:
        "Beyoung Store, Shop No. HS-1/6, Sector-A, Sitapur Road Scheme, Jankipuram, Lucknow-226021",
      email: "store.lucknow@beyoung.in",
      hours: "10:30 Am To 9:30 PM (Mon-Sun)",
      image: lucknow_store,
    },
    {
      title: "Station Road, Sikar",
      address:
        "Shop No. 1, Shri Shakti Tower, Opposite Maru Mandir, Station Road, Sikar-332001",
      email: "store.sikar@beyoung.in",
      hours: "10:30 Am To 9:30 PM (Mon-Sun)",
      image: sikar_store,
    },
    {
      title: "Kotri Road, Kota",
      address:
        "Shop No. 1, Plot No. 140, Gumanpura Yojna, Kotri Road, Kota 324007",
      email: "store.kota@beyoung.in",
      hours: "10:30 Am To 10 PM (Mon-Sun)",
      image: kota_Store,
    },
    {
      title: "Nagori Garden, Bhilwara",
      address: "Shop no. E-6 Factory Area, Nagori Garden Bhilwara 311001",
      email: "store.bhilwara@beyoung.in",
      hours: "10:30 AM to 9:30 PM (Mon-Sun)",
      image: Bhilwara_Store,
    },
    {
      title: "Ayad, University Road Udaipur",
      address:
        "Jai Jinendra Complex, University Rd, Luhar Colony, Ayad, Kharakua, Udaipur, Rajasthan 313001",
      email: "store.udr@beyoung.in",
      hours: "10 AM to 10 PM (Mon-Sun)",
      image: Udaipur_Store,
    },
    {
      title: "Magdalla, Surat, Gujarat",
      address:
        "Shop No-206, 2nd Floor VR Mall Dumas Rd, Magdalla, Surat, Gujarat 395007",
      email: "vrsurat.store@beyoung.in",
      hours: "10 AM to 10 PM (Mon-Sun)",
      image: surat_store,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <img src={MainHeaderBanner} />
      </header>

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center mb-20">
        {stores.map((data, index) => (
          <div key={index} className="mt-20 text-center">
            <h1 className="mb-5 text-[32px] font-semibold uppercase">
              {data.title}
            </h1>
            <div className="flex justify-between items-center w-[1170px] h-[491px] bg-[#F4F4F4]">
              <img src={data.image} className="w-[770px] h-[491px]" />

              <div className="w-[376px] h-[243px] bg-white border border-gray-300 rounded-lg mr-3 flex flex-col justify-center items-center">
                <h3 className="font-medium p-2">{data.title}</h3>

                <div className="flex justify-between items-start p-1">
                  <MapPin className="h-4" />
                  <div className="text-[#333333] text-[12px]">
                    {data.address}
                  </div>
                </div>

                <div className="flex justify-between items-start p-1">
                  <Clock className="h-4" />
                  <div className="text-[#333333] text-[12px]">
                    Timing - {data.hours}
                  </div>
                </div>

                <div className="text-[#333333] text-[12px] p-2">
                  Email ID - <span className="underline">{data.email}</span>
                </div>

                <button className="w-[334px] h-10 bg-black text-white cursor-pointer flex justify-center items-center gap-4">
                  <Navigation />
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
