import React from "react";
import Container from "./Container";
import allImages from "@/helpers/imageProvider";
import allIcon from "@/helpers/iconProvder";



const Navbar = () => {


    // for images and navbar
  const { navImages } = allImages;
  const {search} =  allIcon;
  return (
    <nav className="py-[34px]">
      <Container>
        <div className="flex items-center justify-between">
          <figure>
            <img src={navImages} alt="navimages" />
          </figure>
          <div className="relative ">
            <input type="text"  placeholder="I'm looking for..." className="py-3 rounded-lg px-5 bg-[#F6F6F6] border border-[#F1F1F1] placeholder:text-[#9B9B9B] min-w-[778px]"/>
             <span className="text-white bg-[#0198E9]  rounded-r-lg text-2xl absolute top-1/2 -translate-y-1/2 right-0 py-3 px-5">{search}</span>
          </div>
          <div></div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
