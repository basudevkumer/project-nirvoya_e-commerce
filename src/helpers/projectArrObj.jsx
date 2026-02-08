import allIcon from "./iconProvder";

const { navIcon } = allIcon;

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
};

export default projectobject;
