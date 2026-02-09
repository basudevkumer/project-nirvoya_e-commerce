import allIcon from "./iconProvder";

const { navIcon, featureFooterIcon } = allIcon;

const projectobject = {
  navIconArr: [
    { id: 1, icon: navIcon[0].icon, text: "Login" },
    { id: 2, icon: navIcon[1].icon, text: "Wishlist" },
    { id: 3, icon: navIcon[2].icon, text: "My cart" },
  ],
  navBottomCategories: [
    {
      id: 1,
      label: "WOMEN'S FASHION",
      slug: "womens-fashion",
    },
    {
      id: 2,
      label: "MEN'S FASHION",
      slug: "mens-fashion",
    },
    {
      id: 3,
      label: "KID'S FASHION",
      slug: "kids-fashion",
    },
    {
      id: 4,
      label: "HOME & LIFESTYLE",
      slug: "home-lifestyle",
    },
    {
      id: 5,
      label: "ARTS & CRAFTS",
      slug: "arts-crafts",
    },
    {
      id: 6,
      label: "COMPUTER & ELECTRONICS",
      slug: "computer-electronics",
    },
    {
      id: 7,
      label: "FOOD & GROCERY",
      slug: "food-grocery",
    },
  ],

  featuresFooter: [
    {
      id: 1,
      icon: featureFooterIcon[0].icon,
      label: "FREE SHIPPING",
      text: "Order via Campaign",
    },
    {
      id: 2,
      icon: featureFooterIcon[1].icon,
      label: "BEST PRICE",
      text: "Quality products",
    },
    {
      id: 3,
      icon: featureFooterIcon[2].icon,
      label: "FREE RETURN",
      text: "Within 7 days returns",
    },
    {
      id: 4,
      icon: featureFooterIcon[3].icon,
      label: "SECURE PAYMENT",
      text: "100% secure payment",
    },
  ],
  footerLinks: [
    // Left column
    [
      { title: "About", href: "/about" },
      { title: "Contact us", href: "/contact" },
      { title: "Products", href: "/products" },
      { title: "Login", href: "/login" },
      { title: "Sign Up", href: "/signup" },
    ],
    // Right column
    [
      { title: "My Account", href: "/account" },
      { title: "Orders", href: "/orders" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Shipping Information", href: "/shipping" },
    ],
  ],
};

export default projectobject;
