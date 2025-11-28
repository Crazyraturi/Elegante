export const CATEGORY_DATA = {
  "plain-t-shirts": {
    // --- Core Content Fields ---
    title: "Plain Tshirts for Men",

    // --- Short Description (Visible before 'Read More') ---
    description_short:
      "Beyoung plain t shirts for men bring together unbeatable comfort, effortless style, and lasting quality. Crafted from premium breathable cotton, each tee offers a soft feel and a perfect fit that complements every look — from casual outings to everyday workwear. With their clean, minimal design and durable stitching, Beyoung’s plain t shirts are a must-have for every modern wardrobe.",

    // --- Long Description (CLEANED - Price Table & Date Removed) ---
    description_long: `
            <h3 class="seo-h3">Beyoung Plain Tshirts for Men with Great Quality</h3>
            <p>Plain T Shirts for Men: Timeless Basics for Everyday Wear. Good quality plain t shirts are the most basic yet staple piece every man has in their closet. They are so versatile that they can be dressed for any setting. You can easily pair them with anything without thinking much about it. When buying the best quality plain t-shirts for men online in India, fashion enthusiasts often consider essential factors and look for the best clothing store. The search for an and ideal destination ends at Beyoung. Even with a wardrobe full of fancy clothes, men’s plain t-shirts remain irresistible.</p>
            <p>Beyoung plain t shirts high quality collection caters to all the key aspects you seek while shopping for men’s plain t-shirts online in India. With a commitment to delivering exactly what buyers want, Beyoung has become the go-to destination for style icons looking for affordable plain t-shirts for men.</p>
            
            <h3 class="seo-h3">Beyoung Plain Tshirts for Men | Explore All Different Types</h3>
            <p>Solid plain t-shirts are the fundamental pieces of every wardrobe due to their endless versatility and timeless appeal. Each style brings its very own charm, making the solid t-shirts an inevitable staple for men who give importance to simplicity and utility. Here are a few plain t shirts for you:</p>
            
            <div class="style-guide-section">
                <h4>Plain Polo T-shirts</h4>
                <p>Men's polo t-shirts are a more stylish option. These t-shirts' collared design, button placket, and short sleeves make them more comfortable. Perfect with jacket chinos or denim to create a polished yet relaxed look.</p>
                
                <h4>Plain Oversized T-shirts</h4>
                <p>With a loose fit and relaxed silhouette, men's oversized t-shirts cannot be rivaled for any easy-wear comfort. Drooped shoulders and longer sleeves have been designed for added fashionable appeal. Layer up or wear slim-fit jeans or joggers for a chic look.</p>
                
                <h4>Plain Full Sleeve T-shirts</h4>
                <p>Men's Full-sleeve t-shirts cover the arms entirely and are versatile for layering when the weather gets cooler. They come in crew neck and V-neck designs. Combine them with cargo pants or joggers for a smart casual outfit.</p>
            </div>
            
            <h3 class="seo-h3">Style Men’s Plain T-Shirts for Different Occasions</h3>
            <p>If you think plain t-shirts are too basic to be a key wardrobe piece, then you are wrong. Men’s plain t shirts are incredibly versatile and perfect for styling, as they can easily be paired with almost anything. Here are some ways you can style basic plain t-shirts for different occasions: [List of occasions removed for brevity, but would be included here]</p>

            <h3 class="seo-h3">Why Choose Beyoung High Quality Plain T shirts for Men?</h3>
            [The rest of the final descriptive paragraphs are included here...]
        `,

    // ⭐️ NEW: Price Table Data Array ⭐️
    price_table_data: [
      { product: "Pick Any 4 - Plain T-shirt Combo 2.0", price: "₹1099" },
      { product: "Pick Any 3- Polo T-shirt Combo", price: "₹1399" },
      { product: "Pick Any 3- Plain T-shirt Combo 2.0", price: "₹899" },
      { product: "Black Plain T-Shirt 2.0", price: "₹379" },
      { product: "White Plain T-shirt 2.0", price: "₹379" },
      { product: "Olive Green Plain T-shirt 2.0", price: "₹379" },
      { product: "Brown Plain T-shirt 2.0", price: "₹379" },
      { product: "Mauve Polo T-shirt", price: "₹549" },
      { product: "Lush Green Polo T-shirt", price: "₹549" },
      { product: "Thunder Grey Polo T-shirt", price: "₹549" },
      { product: "French Wine Polo T-shirt", price: "₹549" },
      { product: "Plain Black Full Sleeves T-shirt", price: "₹499" },
    ],

   

    // --- Quick Links / Top Buttons (Omitted for brevity) ---
    buttons: [
      { label: "View All", url: "/t-shirts/plain/all" },
      { label: "Half Sleeve", url: "/t-shirts/plain/half-sleeve" },
      { label: "Full Sleeve", url: "/t-shirts/plain/full-sleeve" },
      { label: "Polo T-shirt", url: "/t-shirts/polo/plain" },
    ],
    // ⭐️ --- CORRECTED UNIQUE FILTERS --- ⭐️
    filters: [
      {
        id: "variants.color",
        label: "Color",
        options: [
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
        ],
      },
      {
        id: "variants.sizes.size",
        label: "Size",
        options: ["S", "M", "L", "XL", "XXL", "XXXL", "4XL", "5XL"],
      }, // Other specification filters
      { id: "category", label: "Category", options: ["Polo", "T-shirt"] },
      { id: "pattern", label: "Pattern", options: ["Plain", "Polo"] },
      { id: "fabric", label: "Fabric", options: ["Cotton Pique", "Cotton"] },
      { id: "neck", label: "Neck Type", options: ["Polo", "Round Neck"] },
      {
        id: "sleeves",
        label: "Sleeves",
        options: ["Half Sleeve", "Full Sleeve"],
      },
      { id: "fit", label: "Fit", options: ["Regular"] },
      {
        id: "occasion",
        label: "Occasion",
        options: ["Casual Wear", "Semi Formal Wear"],
      },
      {
        id: "combos",
        label: "Combos",
        options: ["Pack of 2", "Pick Any 2", "Pick Any 3", "Pick Any 4"],
      },
      {
        id: "price_range",
        label: "Price Range",
        options: ["₹299-499", "₹800-999", "₹1000-1499"],
      },
    ],

    // --- Dynamic FAQs ---
    faq: [
      {
        q: "Which Quality Plain T-Shirts are Best for the Rainy Season?",
        a: "For the rainy season, go for plain t-shirts made from premium cotton fabric that are soft, breathable, and quick-drying. These fabrics help you stay comfortable and fresh even with the occasional humidity or drizzle. Beyoung offers a great collection of plain t shirts for men that are perfect for daily wear in all seasons.",
      },
      {
        q: "What sizes are available for Men’s Plain T-Shirts?",
        a: "At Beyoung we believe in providing fashion for all sizes. So, we provide men’s plain t-shirts in sizes from Small to 5XL.",
      },
      {
        q: "What fabrics are used for Men's Plain T-Shirts?",
        a: "The most used fabrics in Plain T-shirts are cotton, polyester, and a blend of both (cotton-poly). Cotton has natural fibers that are breathable and soft. Polyester is made from synthetic fibers, it is highly durable and wicks moisture. The combination of both fabrics provides both comfort and durability.",
      },
      {
        q: "How often should we wash the Plain T-Shirt?",
        a: "The most used fabrics in Plain T-shirts are cotton, polyester, and a blend of both (cotton-poly). Cotton has natural fibers that are breathable and soft. Polyester is made from synthetic fibers, it is highly durable and wicks moisture. The combination of both fabrics provides both comfort and durability.",
      },
      {
        q: "What are the top Plain T-Shirt colors for Men?",
        a: "In men’s plain t-shirts the neutral colors, including black, white, gray, and navy blues are most popular and they go with almost all types of bottoms. The other most popular colors for men include earthy or pastel colors, including pink, lilac, olive, orange, beige, and yellow.",
      },
      {
        q: "Where I can buy Plain T-shirt combo?",
        a: "You are at the right place, Beyoung is the best brand for plain t shirts with the finest collection of men's plain t shirt combo i.e. in a pack of 2, 3, and 4. Here you have the feasibility of choosing different colors and different sizes in a single pack.",
      },
    ],
  },
  // ... all other category data objects will follow this same format
};
