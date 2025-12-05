export const NewArrival_DATA = {
  new_arrival: {
    title: "Men's New Arrival",
    description_short:
      "Step into the season with  Elegante’s freshest drop of men’s fashion — a bold blend of comfort, style, and street-ready attitude. From newly launched cargo pants and oversized t-shirts to everyday casual shirts and premium denim jeans for men, our new arrivals are tailored for the modern man on the move. Whether you're heading out for a casual day, styling up for the weekend, or just refreshing your everyday look, these newly added styles offer the perfect balance of trend and utility. Browse the latest collection of premium polo t shirts, versatile men’s shirts, and functional bottoms — all crafted for comfort and durability.",
    // buttons: [
    //   {
    //     label: "VIEW ALL",
    //     url: "/products?category=New Arrivals", // Use category for the main view all link
    //   },
    //   {
    //     label: "SHIRT",
    //     url: "/products?specificType=New_Arrival&productType=Shirt", // Use specificType + productType to trigger 15-day filter + subCategory filter
    //   },
    //   {
    //     label: "TROUSER",
    //     url: "/products?specificType=New_Arrival&productType=Trouser",
    //   },
    //   {
    //     label: "T-SHIRT",
    //     url: "/products?specificType=New_Arrival&productType=T-Shirt",
    //   },
    //   {
    //     label: "POLO T-SHIRT",
    //     url: "/products?specificType=New_Arrival&productType=Polo%20T-Shirt",
    //   },
    // ],
    filters: [
      {
        id: "type",
        label: "Type",
        options: ["Bottomwear", "Topwear"],
      },
      {
        id: "variants.color",
        label: "Color",
        options: [
          "Beige",
          "Black",
          "Blue",
          "Brown",
          "Green",
          "Grey",
          "Maroon",
          "Orange",
          "Pink",
          "Purple",
          "Red",
          "White",
          "Yellow",
        ],
      },
      {
        id: "variants.sizes.size",
        label: "Size",
        options: ["S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL"],
      },
      {
        id: "category",
        label: "Category",
        options: ["Boxer", "Full Sleeves", "Oversize", "Plain T-shirts"],
      },
      {
        id: "pattern",
        label: "Pattern",
        options: ["Plain"],
      },
      {
        id: "fabric",
        label: "Fabric",
        options: ["Cotton"],
      },
      {
        id: "neck_collar",
        label: "Neck/Collar",
        options: ["Round Neck"],
      },
      {
        id: "sleeves",
        label: "Sleeves",
        options: ["Half Sleeves", "Full Sleeves"],
      },
      {
        id: "fit",
        label: "Fit",
        options: ["Regular Fit", "Relaxed Fit"],
      },
      {
        id: "occasions",
        label: "Occasions",
        options: ["Casual Wear", "Lounge Wear"],
      },
      {
        id: "combos",
        label: "Combos",
        options: [
          "Pack of 2",
          "Pack of 3",
          "Pick Any 2",
          "Pick Any 3",
          "Pick Any 4",
        ],
      },
      {
        id: "price_range",
        label: "Price Range",
        options: ["₹1000 - ₹1499", "₹299 - ₹499", "₹800 - ₹999"],
      },
    ],

    price_table_data: {
      heading: "Buy Men's New Arrival at Best Price",
      items: [
        {
          product: "Off-white Recycled Yarn Oversized Sweatshirt",
          price: "₹799",
        },
        {
          product: "Brown Recycled Yarn Oversized Sweatshirt",
          price: "₹799",
        },
        {
          product: "Indigo Blue Over Dyed Baggy Fit Jeans",
          price: "₹1199",
        },
        {
          product: "Tinted Brown Over Dyed Baggy Fit Jeans",
          price: "₹1199",
        },
        {
          product: "Off White Elbow Patch Sweatshirt",
          price: "₹1199",
        },
        {
          product: "Beige Turtle Neck Sweatshirt",
          price: "₹1499",
        },
        {
          product: "Brown Camo Printed Hoodie",
          price: "₹1199",
        },
        {
          product: "Blue Camo Printed Hoodie",
          price: "₹1199",
        },
        {
          product: "Dark Grey Button Down Oxford Shirts",
          price: "₹899",
        },
        {
          product: "Navy Button Down Oxford Shirts",
          price: "₹899",
        },
        {
          product: "Beige Utility Shirt",
          price: "₹1199",
        },
        {
          product: "Dusty Olive Utility Shirt",
          price: "₹1199",
        },
      ],
    },
  },
};
