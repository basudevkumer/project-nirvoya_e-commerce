import React from "react";
import Container from "./Container";
import allImages from "@/helpers/imageProvider";
import allIcon from "@/helpers/iconProvder";
import projectobject from "@/helpers/projectArrObj";

const Navbar = () => {
  // for images , projectObject and navbar
  const { navImages } = allImages;
  const { search } = allIcon;
  const { navIconArr, navBottomCategories } = projectobject;
  return (
    <nav className="">
      <Container>
        <div>
          <div className="flex items-center justify-between py-[34px]">
            <figure>
              <img src={navImages} alt="navimages" />
            </figure>
            <div className="relative ">
              <input
                type="text"
                placeholder="I'm looking for..."
                className="py-3 rounded-lg px-5 bg-[#F6F6F6] border border-[#F1F1F1] placeholder:text-[#9B9B9B] min-w-[778px]"
              />
              <span className="text-white bg-[#0198E9]  rounded-r-lg text-2xl absolute top-1/2 -translate-y-1/2 right-0 py-3 px-5">
                {search}
              </span>
            </div>
            <div>
              <ul className="flex gap-x-10 items-center">
                {navIconArr.map((items) => {
                  return items.text === "My cart" ? (
                    <li
                      className="flex gap-x-[6px] items-center text-[#29292E] body-base  cursor-pointer relative "
                      key={items.id}
                    >
                      <span>{items.icon} </span>
                      <span className=" flex justify-center items-center rounded-full w-5 h-5 absolute top-[2] -right-8  text-[14px] text-white  bg-[#FF5D5D]">
                        1
                      </span>
                      {items.text}
                    </li>
                  ) : (
                    <li
                      className="flex gap-x-[6px] items-center text-[#29292E] body-base  cursor-pointer"
                      key={items.id}
                    >
                      <span>{items.icon} </span>
                      {items.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className=" border-b-3 border-[#EFEEEE] ">
            <ul className="flex  justify-between">
              {navBottomCategories.map((items) => {
                return (
                  <li
                    className={`text-[#333333] pb-2 title-medium cursor-pointer px-2  relative after:absolute after:content-['']  after:w-[100%] after:h-[2px] after:-bottom-0 after:-left-full after:bg-[#0198E9]  overflow-hidden hover:after:left-0 `}
                  >
                    {items.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
