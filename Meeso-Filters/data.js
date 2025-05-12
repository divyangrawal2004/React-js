const categories = [
  {
    category: "Women Ethnic",
    items: [
      { subCategory: "Sarees", products: ["All Sarees", "Silk Sarees", "Banarasi Silk Sarees", "Cotton Sarees", "Georgette Sarees", "Chiffon Sarees", "Heavy Work Sarees", "Net Sarees"] },
      { subCategory: "Kurtis", products: ["All Kurtis", "Anarkali Kurtis", "Rayon Kurtis", "Cotton Kurtis", "Chikankari Kurtis"] },
      { subCategory: "Kurta Sets", products: ["All Kurta Sets", "Kurta Palazzo Sets", "Rayon Kurta Sets", "Kurta Pant Sets", "Cotton Kurta Sets", "Sharara Sets"] },
      { subCategory: "Dupatta Sets", products: ["Cotton Sets", "Rayon Sets", "Printed Sets"] },
      { subCategory: "Suits & Dress Material", products: ["All Suits & Dress Material", "Cotton Suits", "Embroidered Suits", "Crepe Suits", "Silk Suits", "Patiala Suits"] },
      { subCategory: "Lehengas", products: ["Lehenga Cholis", "Net Lehenga", "Bridal Lehenga"] },
      { subCategory: "Other Ethnic", products: ["Blouses", "Dupattas", "Lehenga", "Gown", "Skirts & Bottomwear", "Islamic Fashion", "Petticoats"] }
    ]
  },
  {
    category: "Women Western",
    items: [
      { subCategory: "Topwear", products: ["All Topwear", "Tops", "Dresses", "T-shirts", "Jumpsuits"] },
      { subCategory: "Bottomwear", products: ["All Bottomwear", "Jeans & Jeggings", "Palazzos", "Shorts", "Skirts"] },
      { subCategory: "Innerwear", products: ["Bra", "Women Innerwear", "Briefs"] },
      { subCategory: "Sleepwear", products: ["Nightsuits", "Women Nightdress"] },
      { subCategory: "Maternity Wear", products: ["All Maternity & Feedingwear", "Maternity Kurtis & Dresses"] },
      { subCategory: "Sports Wear", products: ["All Women Sportwear", "Sports Bra"] }
    ]
  },
  {
    category: "Men",
    items: [
      { subCategory: "Top Wear", products: ["All Top Wear", "Tshirts", "Shirts", "Winter Wear", "Jackets", "Sweater and Sweatshirts"] },
      { subCategory: "Bottom Wear", products: ["Track Pants", "All Bottomwear", "Jeans", "Trousers", "Shorts"] },
      { subCategory: "Men Accessories", products: ["All Men Accessories", "Watches", "Belts & Wallets", "Jewellery", "Bags"] },
      { subCategory: "Men Footwear", products: ["Men Footwear", "Casual Shoes", "Sports Shoes", "Flip Flops & Sandals", "Formal Shoes", "Loafers"] },
      { subCategory: "Ethnic Wear", products: ["Kurtas Sets", "Ethnic Jackets", "Bottomwear"] },
      { subCategory: "Inner & Sleep Wear", products: ["All Inner & Sleep Wear", "Boxers", "Underwears"] }
    ]
  },
  {
    category: "Kids",
    items: [
      { subCategory: "Boys & Girls 2+ Years", products: ["Dresses", "Boys Sets", "Girls Sets", "Ethnicwear", "Nightwear", "Winter Wear", "Top Wear", "Bottomwear"] },
      { subCategory: "Infant 0-2 Years", products: ["Rompers", "Baby Sets", "Ethnicwear"] },
      { subCategory: "Toys & Accessories", products: ["Soft Toys", "Footwear", "Stationery", "Watches", "Bags & Backpacks"] },
      { subCategory: "Baby Care", products: ["Baby Bedding & Accessories", "All Baby Care", "Newborn Care"] }
    ]
  },
  {
    category: "Home & Kitchen",
    items: [
      { subCategory: "Kitchen & Appliances", products: ["View All", "Kitchen Tools", "Storage & Organizers", "Appliances", "Cookware", "Dinnerware", "Bakeware", "Glasses & Barware"] },
      { subCategory: "Home Furnishing", products: ["Bedsheets", "Curtains & Sheers", "Pillows, Cushions & Covers", "Cushions & Cushion Covers", "Carpets & Doormats", "Mattress Protectors", "Sofa & Diwan Sets", "Towels & Bathrobes", "Blankets, Quilts & Dohars"] },
      { subCategory: "Home Decor", products: ["All Home Decor", "Appliances Covers", "Clocks", "Storage & Organizers", "Showpieces", "Paintings & Photoframes", "Stickers & Wallpapers", "Lights", "Gifts & Mugs"] },
      { subCategory: "Kitchen & Dining", products: ["Kitchen Storage", "Cookware & Bakeware"] },
      { subCategory: "Home Improvement", products: ["All Home Essentials", "Cleaning Supplies", "Gardening", "Bathroom Accessories", "Insect Protection", "Home Tools"] }
    ]
  },
  {
    category: "Beauty & Health",
    items: [
      { subCategory: "Make up", products: ["Face", "Eyes", "Lips", "Nails", "Make up Kits", "Brushes & Tools", "Makeup Accessories"] },
      { subCategory: "Skincare", products: ["View All", "Face Masks & Peels", "Facecare", "Haircare", "Bath & Shower"] },
      { subCategory: "Baby & Mom", products: ["Baby Personal Care", "Mom Care"] },
      { subCategory: "Mens Care", products: ["Beard Care", "Fragrances for Men"] },
      { subCategory: "Healthcare", products: ["Ear Buds & Cleaners", "Condoms", "Sanitary Pads", "Dental Care", "Weight Management", "Health Monitors"] }
    ]
  },
  {
    category: "Jewellery & Accessories",
    items: [
      { subCategory: "Jewellery", products: ["All Jewellery", "Jewellery Set", "Earrings & Studs", "Mangalsutras", "Bangles", "Necklaces", "Rings", "Kamabandh & Maangtika", "Anklets", "Men Jewellery", "Oxidised"] },
      { subCategory: "Men Accessories", products: ["View All", "Watches", "Belts & Wallets", "Caps & Hats"] },
      { subCategory: "Women Accessory", products: ["Watches", "Hair Accessories", "Sunglasses", "Socks", "Scarves and Stoles"] }
    ]
  },
  {
    category: "Bags & Footwear",
    items: [
      { subCategory: "Women Bags", products: ["All Women Bags", "Handbags", "Clutches", "Slingbags", "Wallets", "Backpacks"] },
      { subCategory: "Men Bags", products: ["Men Wallets", "Crossbody Bags & Sling Bags", "Waist Bags"] },
      { subCategory: "Travel Bags, Luggage and Accessories", products: ["View All", "Duffel & Trolley Bags"] },
      { subCategory: "Men Footwear", products: ["Sports Shoes", "Casual Shoes", "Formal Shoes", "Sandals", "Loafers"] },
      { subCategory: "Women Footwear", products: ["Flats", "View All", "Bellies", "Heals and Sandals", "Boots", "Flipflops & Slippers"] },
      { subCategory: "Kids Footwear", products: ["View All", "Boys Shoes", "Girls Shoes", "Casual Shoes", "Flipflops & Slippers", "Sandals"] }
    ]
  },
  {
    category: "Electronics",
    items: [
      { subCategory: "Audio", products: ["Bluetooth Headphone & Earphones", "Wired Headphones & Earphones", "Speakers"] },
      { subCategory: "Mobile & Accessories", products: ["Smartwatches", "Mobile Holders", "Mobile cases and covers", "Mobile Chargers", "Mobile & Accessories - View All"] },
      { subCategory: "Smart Wearables", products: ["VR Box", "Tripod", "Microphone", "Photo & Video Accessories"] }
    ]
  },
  {
    category: "Sports & Fitness",
    items: [
      { subCategory: "Fitness", products: ["Yoga", "Hand Grip Strengthener", "Tummy trimmers", "Skipping Ropes", "Sweat Belts"] },
      { subCategory: "Sports", products: ["Badminton", "Skating", "Football", "Cricket"] }
    ]
  },
  {
    category: "Car & Motorbike",
    items: [
      { subCategory: "Car Accessories", products: ["Car Covers", "Interior Accessories", "Car Mobile Holders", "Car Repair Assistance"] },
      { subCategory: "Motorbike Accessories", products: ["Helmets", "Bike Accessories", "Bike LED Lights", "Safety Gear & Clothing"] }
    ]
  }
];


export { categories}