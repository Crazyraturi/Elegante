import { useState, useContext } from "react";
import { Plus } from "lucide-react";
import { CartContext } from "../../src/context/CartContext.jsx"
import { useNavigate } from "react-router-dom";

export default function AddressPage() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // State for Toast Popup
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // REAL AUTH LOGIC: Checks if a user token exists in storage
  const isLoggedIn = !!localStorage.getItem("token") || false; 

  const totalMRP = cartItems?.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    pinCode: "",
    city: "",
    state: "",
    address: "",
    locality: "",
    makeDefault: false,
  });

  const triggerToast = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;

    // 1. Names, City, State: No numbers, No special symbols (Only a-z, A-Z, spaces)
    if (["firstName", "lastName", "city", "state"].includes(name)) {
      if (/[^a-zA-Z\s]/.test(value) && value !== "") {
        triggerToast("Please enter valid information (Only characters allowed, no symbols or numbers)");
      }
    }

    // 2. Mobile & PinCode: Only numbers
    if (["mobile", "pinCode"].includes(name)) {
      if (/[^0-9]/.test(value) && value !== "") {
        triggerToast("Please enter valid information (Only numbers allowed)");
      }
      // Strictly limit entry to 10 digits for mobile
      if (name === "mobile" && value.replace(/\D/g, "").length > 10) return;
    }

    // 3. Address & Locality: Only characters and numbers (No special symbols)
    if (["address", "locality"].includes(name)) {
      if (/[^a-zA-Z0-9\s]/.test(value) && value !== "") {
        triggerToast("Please enter valid information (Only characters and numbers allowed, no special symbols)");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleContinue = () => {
    // 1. Check if user is logged in first
    if (!isLoggedIn) {
      triggerToast("Please log in first to continue.");
      return;
    }

    const {
      firstName,
      lastName,
      mobile,
      pinCode,
      city,
      state,
      address,
      locality,
    } = formData;

    // 2. Strict Check: Every field must be filled
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !mobile.trim() ||
      !pinCode.trim() ||
      !city.trim() ||
      !state.trim() ||
      !address.trim() ||
      !locality.trim()
    ) {
      triggerToast("⚠️ Please fill all required address fields before continuing.");
      return;
    }

    // 3. Strict Mobile Validation: Only exactly 10 digits
    const cleanMobile = mobile.replace(/\D/g, "");
    if (cleanMobile.length !== 10) {
      triggerToast("⚠️ Mobile number must be exactly 10 digits.");
      return;
    }

    // 4. Character-only validation check for Names/City/State (No symbols/numbers)
    const alphaRegex = /^[a-zA-Z\s]+$/;
    if (!alphaRegex.test(firstName) || !alphaRegex.test(lastName) || !alphaRegex.test(city) || !alphaRegex.test(state)) {
      triggerToast("⚠️ Names, City, and State must only contain letters.");
      return;
    }

    // 5. Alphanumeric check for Address/Locality (No symbols allowed)
    const alphaNumRegex = /^[a-zA-Z0-9\s]+$/;
    if (!alphaNumRegex.test(address) || !alphaNumRegex.test(locality)) {
      triggerToast("⚠️ Address and Locality must not contain special symbols.");
      return;
    }

    // 6. If all validations pass, proceed
    navigate("/payment", { state: { addressData: formData } });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Toast Notification */}
      {showPopup && (
        <div className="fixed bottom-10 right-10 z-50 bg-red-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <span className="font-medium">{popupMessage}</span>
        </div>
      )}

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-700">Cart</span>
            </div>
            <div className="w-20 border-t-2 border-dashed border-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span className="text-sm font-medium text-gray-700">Address</span>
            </div>
            <div className="w-20 border-t-2 border-dashed border-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">○</span>
              <span className="text-sm text-gray-400">Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Delivery Address</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <span className="px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600">+91</span>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    name="pinCode"
                    placeholder="Pin Code"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="City/District"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <input
                  type="text"
                  name="address"
                  placeholder="Address (House No, Street, Area)"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="locality"
                  placeholder="Locality / Town / Village *"
                  value={formData.locality}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="makeDefault"
                    checked={formData.makeDefault}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">Make this my Default Address</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                PRICE DETAILS ({cartItems?.length || 0} Items)
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Total MRP (Inc. of Taxes)</span>
                  <span>₹{totalMRP}</span>
                </div>
                <div className="flex justify-between text-gray-700 pb-3 border-b border-gray-200">
                  <span>Cart Total</span>
                  <span>₹{totalMRP}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold text-gray-900 mb-4">
                <span>Total Amount</span>
                <span>₹{totalMRP}</span>
              </div>

              <button
                onClick={handleContinue}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Continue Payment
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-12 mt-12 border-t flex flex-col items-center justify-center gap-10">
          <div className="flex justify-center items-center gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764930970/Addquality_ow5byd.png" alt="Quality" className="w-20 h-20 object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">Quality</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764930966/AddIndia_q4n5qi.png" alt="Made in India" className="w-20 h-20 object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">Made In India</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center mb-3 overflow-hidden">
                <img src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764930927/AddSecurity_uznknt.png" alt="Secure Payment" className="w-20 h-20 object-contain" />
              </div>
              <p className="text-sm font-medium text-gray-700">Secure Payments</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-8 justify-center items-center gap-6">
            {[
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931033/AddImg1_ka1eck.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931037/AddImg2_c81rwc.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931042/AddImg3_qlfflv.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931046/AddImg4_byjldq.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931050/AddImg5_iod4q5.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931054/AddImg6_du4m44.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931058/AddImg7_rmwhl9.png",
              "https://res.cloudinary.com/dj9tpadhk/image/upload/v1764931062/AddImg8_q2ahem.png",
            ].map((img, index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={img} alt="payment-logo" className="w-16 h-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}