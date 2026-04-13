const mobile = require("../../assets/images/mobile.jpg");
const fashion = require("../../assets/images/fashion.jpg");
const food = require("../../assets/images/food.jpg");
const beauty = require("../../assets/images/beauty.jpg");
const kitchen = require("../../assets/images/kitchen.jpg");
const rewards = require("../../assets/images/rewards.jpg");
const deals = require("../../assets/images/deals.jpg");
const home = require("../../assets/images/home.jpg");
const gadgets = require("../../assets/images/gadgets.jpg");

const shortSleeveShirts = require("../../assets/images/shortSleeveShirts.jpg");
const cropTops = require("../../assets/images/cropTops.jpg");
const womenHandbags = require("../../assets/images/womenHandbags.jpg");
const womenWristWatch = require("../../assets/images/womenWristWatch.jpg");
const doorRugs = require("../../assets/images/doorRugs.jpg");
const kitchenKnifeSets = require("../../assets/images/kitchenKnifeSets.jpg");
const adaptersLamps = require("../../assets/images/adaptersLamps.jpg");
const humidityMakers = require("../../assets/images/humidityMakers.jpg");
const mobileHolder = require("../../assets/images/mobileHolder.jpg");
const laptopStand = require("../../assets/images/laptopStand.jpg");
const drawingTablet = require("../../assets/images/drawingTablet.jpg");
const usb_lan_maker = require("../../assets/images/usb_lan_maker.jpg");
const gardnerSheer = require("../../assets/images/gardnerSheer.jpg");
const ecoFriendlySofa = require("../../assets/images/ecoFriendlySofa.jpg");
const flowerPots = require("../../assets/images/flowerPots.jpg");
const chairCushion = require("../../assets/images/chairCushion.jpg");
const moonLamp = require("../../assets/images/moonLamp.jpg");
const wirelessBuds = require("../../assets/images/wirelessBuds.jpg");
const astronautMiniFigures = require("../../assets/images/astronautMiniFigures.jpg");
const account_product = require("../../assets/images/account_product.png");

export const featuredDeals = [
  {
    id: 1,
    title: "Short Sleeve Shirts",
    price: "$999",
    originalPrice: "$1199",
    discount: "20% OFF",
    image: shortSleeveShirts,
  },
  {
    id: 2,
    title: "Crop Tops",
    price: "$120",
    originalPrice: "$180",
    discount: "33% OFF",
    image: cropTops,
  },
  {
    id: 3,
    title: "Women Hand bags",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: womenHandbags,
  },
  {
    id: 4,
    title: "Women Wrist Watch",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: womenWristWatch,
  },
];

export const bestOfferForHome = [
  {
    id: 1,
    title: "Door Rugs",
    price: "$89.99",
    rating: 4.5,
    image: doorRugs,
  },
  {
    id: 2,
    title: "Kitchen Knife Sets",
    price: "$199.99",
    rating: 4.8,
    image: kitchenKnifeSets,
  },
  {
    id: 3,
    title: "Adapters Lamps",
    price: "$299.99",
    rating: 4.6,
    image: adaptersLamps,
  },
  {
    id: 4,
    title: "Humidity Makers",
    price: "$299.99",
    rating: 4.6,
    image: humidityMakers,
  },
];

export const trendingGedgets = [
  {
    id: 1,
    title: "Mobile Holder",
    price: "$999",
    originalPrice: "$1199",
    discount: "20% OFF",
    image: mobileHolder,
  },
  {
    id: 2,
    title: "Laptop Stand",
    price: "$120",
    originalPrice: "$180",
    discount: "33% OFF",
    image: laptopStand,
  },
  {
    id: 3,
    title: "Drawing Tablet",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: drawingTablet,
  },
  {
    id: 4,
    title: "USB LAN Maker",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: usb_lan_maker,
  },
];

export const outdoorOasis = [
  {
    id: 1,
    title: "Gardner Sheer",
    price: "$999",
    originalPrice: "$1199",
    discount: "20% OFF",
    image: gardnerSheer,
  },
  {
    id: 2,
    title: "Eco Friendly Sofa",
    price: "$120",
    originalPrice: "$180",
    discount: "33% OFF",
    image: ecoFriendlySofa,
  },
  {
    id: 3,
    title: "Flower Pots",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: flowerPots,
  },
  {
    id: 4,
    title: "Chair Cushion",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: chairCushion,
  },
];

export const popularItems = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "$89.99",
    rating: 4.5,
    image: "https://picsum.photos/id/26/200/200",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "$199.99",
    rating: 4.8,
    image: "https://picsum.photos/id/20/200/200",
  },
  {
    id: 3,
    title: "Designer Bag",
    price: "$299.99",
    rating: 4.6,
    image: "https://picsum.photos/id/21/200/200",
  },
  {
    id: 4,
    title: "Designer Bag",
    price: "$299.99",
    rating: 4.6,
    image: "https://picsum.photos/id/21/200/200",
  },
];

export const categories = [
  {
    id: 1,
    name: "Mobile",
    image: mobile,
    color: "#FF6B6B",
  },
  {
    id: 2,
    name: "Fashion",
    image: fashion,
    color: "#4ECDC4",
  },
  {
    id: 3,
    name: "Food",
    image: food,
    color: "#FFE66D",
  },
  {
    id: 4,
    name: "Beauty",
    image: beauty,
    color: "#FF85B3",
  },
  {
    id: 5,
    name: "Kitchen",
    image: kitchen,
    color: "#95E77E",
  },
  {
    id: 6,
    name: "Rewards",
    image: rewards,
    color: "#FFA07A",
  },
  {
    id: 7,
    name: "Deals",
    image: deals,
    color: "#FF6B6B",
  },
  {
    id: 8,
    name: "Home",
    image: home,
    color: "#4A90E2",
  },
  {
    id: 9,
    name: "Gadgets",
    image: gadgets,
    color: "#9B59B6",
  },
];

export const recommendedItems = [
  {
    id: 1,
    title: "Drawing Tablet for Kids, Chareable, No UV light Tablet",
    price: "602.72",
    rating: 1723,
    image: drawingTablet,
    off: 999.0,
  },
  {
    id: 2,
    title: "Laptop stand with a mobile holder with three heights",
    price: "199.99",
    rating: 1723,
    image: laptopStand,
    off: 1234,
  },
  {
    id: 3,
    title: "USB to LAN Convertor | Windows & Mac Supported",
    price: "299.99",
    rating: 1723,
    image: usb_lan_maker,
    off: 999.0,
  },
  {
    id: 4,
    title: "Moon Lamp, Prism, 3*3 inch, for Tables",
    price: "299.99",
    rating: 1723,
    image: moonLamp,
    off: 999.0,
  },
  {
    id: 5,
    title: "True Wireless buds, black, 40 db audio, fast charging buds",
    price: "89.99",
    rating: 1723,
    image: wirelessBuds,
    off: 999.0,
  },
  {
    id: 6,
    title: "Eco Friendly Sofa | Single Seated Sofa | Living Room Sofa",
    price: "199.99",
    rating: 1723,
    image: ecoFriendlySofa,
    off: 1723,
  },
  {
    id: 7,
    title: "Home Decor | Astronaut Mini Figures | Living room decor",
    price: "299.99",
    rating: 1723,
    image: astronautMiniFigures,
    off: 999.0,
  },
];

export const accountCategories = [
  {
    id: 1,
    title: "Women Wrist Watch",
    price: "$999",
    originalPrice: "$1199",
    discount: "20% OFF",
    image: womenWristWatch,
  },
  {
    id: 2,
    title: "Door Rugs",
    price: "$120",
    originalPrice: "$180",
    discount: "33% OFF",
    image: doorRugs,
  },
  {
    id: 3,
    title: "Kitchen knife sets",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: kitchenKnifeSets,
  },
  {
    id: 4,
    title: "adapters lamps",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: adaptersLamps,
  },
  {
    id: 5,
    title: "humidity makers",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: humidityMakers,
  },
  {
    id: 6,
    title: "mobile holder",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: mobileHolder,
  },
  {
    id: 7,
    title: "chair cushion",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: chairCushion,
  },
  {
    id: 8,
    title: "laptop stand",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: laptopStand,
  },
  {
    id: 9,
    title: "drawing tablet",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: drawingTablet,
  },
  {
    id: 10,
    title: "USB TO LAN maker",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: usb_lan_maker,
  },
  {
    id: 11,
    title: "Gardner sheer",
    price: "$15.99",
    originalPrice: "$25.99",
    discount: "38% OFF",
    image: gardnerSheer,
  },
];

export const accountProducts = [
  {
    id: 1,
    title: "Samsung 108 cm (43 inches) 4K Ultra HD tv",
    price: "602.72",
    rating: 4.2,
    image: account_product,
    off: 999.0,
    onExclusiveDiscount: true,
  },
  {
    id: 2,
    title: "Tcl 101 cm (40 incehs ) Metallic Bezel-less Full",
    price: "199.99",
    rating: 3.0,
    image: account_product,
    off: 1234,
    onExclusiveDiscount: true,
  },
  {
    id: 3,
    title: "Samsung 108 cm (43 inches) 4K Ultra HD tv",
    price: "299.99",
    rating: 4.0,
    image: account_product,
    off: 999.0,
    onExclusiveDiscount: true,
  },
  {
    id: 4,
    title: "Samsung 108 cm (43 inches) 4K Ultra HD tv",
    price: "299.99",
    rating: 2,
    image: account_product,
    off: 999.0,
    onExclusiveDiscount: true,
  },
  {
    id: 5,
    title: "Samsung 108 cm (43 inches) 4K Ultra HD tv",
    price: "89.99",
    rating: 5.0,
    image: account_product,
    off: 999.0,
    onExclusiveDiscount: false,
  },
  {
    id: 6,
    title: "Samsung 108 cm (43 inches) 4K Ultra HD tv",
    price: "199.99",
    rating: 5.0,
    image: account_product,
    off: 1723,
    onExclusiveDiscount: true,
  },
  {
    id: 7,
    title: "Samsung 108 cm (43 inches) 4K Ultra HD tv",
    price: "299.99",
    rating: 5.0,
    image: account_product,
    off: 999.0,
    onExclusiveDiscount: true,
  },
];

export const accountReviews = [
  {
    id: 1,
    name: "Oliver Smith",
    rating: 5,
    userImage: require("../../assets/images/emily_Johnson.png"),
    date: "March 26, 2025",
    title: "Outstanding Visuals",
    desc: "The picture quality is exceptional, with vibrant colors and sharp details that make every scene come alive.I noticed that the interface can be slightly laggy at times. The inclusion of multiple HDMI ports makes connecting external devices convenient. Overall, a solid choice for the price.",
    likes: 231,
    dislikes: 4,
    images: [
      require("../../assets/images/reviews1.jpg"),
      require("../../assets/images/reviews2.jpg"),
    ],
  },
  {
    id: 2,
    name: "Oliver Smith",
    rating: 5,
    userImage: require("../../assets/images/emily_Johnson.png"),
    date: "March 26, 2025",
    title: "Outstanding Visuals",
    desc: "The picture quality is exceptional, with vibrant colors and sharp details that make every scene come alive.I noticed that the interface can be slightly laggy at times. The inclusion of multiple HDMI ports makes connecting external devices convenient. Overall, a solid choice for the price.",
    likes: 231,
    dislikes: 4,
    images: [],
  },
  {
    id: 3,
    name: "Emily Johnson",
    rating: 3,
    userImage: require("../../assets/images/JamesWilliams.png"),
    date: "March 20, 2025",
    title: "Great Value",
    desc: "This TV offers excellent features for its price point. Smart functionalities are user-friendly. The picture and sound quality are impressive. However, I noticed that the interface can be slightly laggy at times. The inclusion of multiple HDMI ports makes connecting external devices convenient. Overall, a solid choice for the price.",
    likes: 231,
    dislikes: 4,
    images: [
      require("../../assets/images/reviews1.jpg"),
      require("../../assets/images/reviews2.jpg"),
      require("../../assets/images/reviews3.jpg"),
      require("../../assets/images/reviews4.jpg"),
      require("../../assets/images/reviews5.jpg"),
    ],
  },
];

export const accountAbout = [
  {
    id: 1,
    des: "Welcome to YourStore - your trusted destination for fashion, electronics, home essentials and more. Since day one, our mission has been simple: deliver quality products at fair prices with reliable service and fast delivery. With thousands of happy customers, we continue to grow as one of the most reliable shopping platforms online.",

    des2: "Our wide collection includes fashion & lifestyle, gadgets, and home needs - all handpicked to give you the best experience. With secure payment options, hassle - free returns, and responsive customer care, YourStore is built around trust, convenience, and innovation.",

    joinedDate: "January 2022",
    url: "www.nikwalker.com",
    views: "1,254,789",
    products: "1,254",
    reviews: 560,
    followers: "85,000",
    revenue: "150,000",
    nation: "United kingdom",
  },
];
