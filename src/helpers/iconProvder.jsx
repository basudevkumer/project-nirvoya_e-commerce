import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";
import { GiBackwardTime } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const allIcon = {
  search: <CiSearch />,
  navIcon: [
    { id: 1, icon: <FaRegUser /> },
    { id: 2, icon: <FaRegHeart /> },
    { id: 3, icon: <FaShoppingBasket /> },
  ],
  featureFooterIcon: [
    { id: 1, icon: <TbTruckDelivery /> },
    { id: 2, icon: <FaStar /> },
    { id: 3, icon: <GiBackwardTime /> },
    { id: 4, icon: <FaCreditCard /> },
  ],
  footerSocialIcon: [
     { id: 1, icon: <FaFacebookF /> },
     { id: 2, icon: <FaTwitter /> },
     { id: 3, icon: <FaLinkedinIn /> },
     { id: 4, icon: <FaInstagram /> },
  ]
};

export default allIcon;
