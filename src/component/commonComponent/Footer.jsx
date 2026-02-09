import React from "react";
import Container from "./Container";
import projectobject from "@/helpers/projectArrObj";
import allImages from "@/helpers/imageProvider";
import allIcon from "@/helpers/iconProvder";

const Footer = () => {
  // for images , icons and project arrays
  const { featuresFooter,footerLinks  } = projectobject;
  const { navImages } = allImages;
  const { footerSocialIcon } = allIcon;
  return (
    <footer className="">
      <div className="py-[53px] border-b-2 border-[#E5E5E5]">
        <Container>
          <div className="flex justify-between lg:px-5  ">
            {featuresFooter.map((items) => {
              return (
                <div
                  className="flex gap-x-3  items-center cursor-pointer"
                  key={items.id}
                >
                  <span className="text-4xl text-[#0198E9]">{items.icon}</span>
                  <div>
                    <p className="subheading text-[#333333]">{items.label}</p>
                    <p className="text-[#757575] body-base">{items.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div className="py-[60px]">
        <Container>
          <div className="grid grid-cols-6 gap-x-[90px]">
            <div className="col-span-2">
              <figure>
                <img src={navImages} alt="footer-image" />
              </figure>
              <p className="pt-9 pb-[26px] text-[#333333cd] body-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex gap-x-3">
                {footerSocialIcon.map((items) => {
                  return items.id === 4 ? (
                    <li
                      key={items.id}
                      className="w-fit p-2 bg-radial from-[#FA8F21] from-9% to-[#D82D7E]  to-78%  text-xl text-white rounded-full"
                    >
                      {items.icon}
                    </li>
                  ) : (
                    <li
                      key={items.id}
                      className="w-fit p-2 bg-[#0198E9] text-xl text-white rounded-full "
                    >
                      {items.icon}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="pb-3 text-[#333333] title-large !text-[20px] cursor-pointer">QUICK LINKS </li>
                {footerLinks[0].map((items,index) => {
                  return <li key={index} className="text-[#333333cd] body-regular">{items.title}</li>;
                })}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="pb-3 text-[#333333] title-large !text-[20px] whitespace-nowrap">CUSTOMER AREA</li>
                {footerLinks[1].map((items,index) => {
                  return <li key={index} className="text-[#333333cd] body-regular cursor-pointer">{items.title}</li>;
                })}
              </ul>
            </div>
            <div className="col-span-2">
              <p className="title-large-emphasized text-[#333333]">CONTACT</p>
               <p className="pt-9 pb-[26px] text-[#333333cd] body-regular ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              </p>
              <div>
                
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
