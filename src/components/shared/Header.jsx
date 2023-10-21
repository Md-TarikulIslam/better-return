import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/images/navbar/1.webp";
import img2 from "../../assets/images/navbar/2.webp";
import img3 from "../../assets/images/navbar/3.webp";

const menuItems = [
  {
    title: "Soccer",
    description: "Matches from Premiere League, La Liga and much more",
    img: img,
    link: "/soccer",
  },
  {
    title: "CS:GO",
    description: "Exciting matches from Major tournaments and more",
    img: img2,
    link: "/cs-go",
  },
  {
    title: "Valorant",
    description: "From first September, we will start to give our prediction",
    img: img3,
    link: "/valorant",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex text-center justify-between bg-[#121c2e] lg:gap-10 xl:gap-[4.5rem] 2xl:gap-[7rem] text-white text-xs tracking-widest items-center fixed top-0 w-full z-30">
      <div className="w-48 xl:w-60 2xl:w-80 h-full py-5  sm:py-4 flex justify-center bg-[#252d52] px-1 lg:px-2 ">
        <Link to="/">
          <img className=" h-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-auto lg:justify-between justify-end  z-40">
        <div className="z-40 flex-auto items-center justify-between hidden lg:flex max-w-5xl">
          <li className="uppercase w-full  list-none hover:bg-[#3c4a62] z-40">
            {" "}
            <Menu open={openMenu} handler={setOpenMenu} allowHover>
              <MenuHandler>
                <Button
                  variant="text"
                  className=" hover:bg-[#3c4a62]  flex items-center gap-3 text-white font-normal text-xs font  py-6 rounded-none bg-none"
                >
                  Sports
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList className="xl:ml-0 2xl:ml-80 2xl:mr-[208px] w-full 2xl:w-[86rem] mx-auto hidden xl:w-full  bg-[#12223c] -mt-1 gap-3 overflow-visible lg:block rounded-b-3xl rounded-t-none border-none xl:px-28 2xl:px-20 py-10 z-50">
                <div className="flex justify-between items-center ">
                  <div>
                    <p className="text-lg text-white">Supported sports</p>
                    <p className="text-[10px]">Pick your favourite sports</p>
                  </div>
                  <div>
                    <Link to="more-game">
                      <p className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#1271ff] to-[#1afff1]">
                        See all supported sports{" "}
                        <FaArrowRight className="text-blue-900" />
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <p className="border-b border-gray-600 my-6"></p>
                </div>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {menuItems.map((menu) => {
                    return (
                      <div className="w-full">
                        <Link to={menu.link}>
                          <div className="relative w-full h-60">
                            <img
                              className="w-full h-full object-cover rounded-3xl brightness-50 hover:brightness-75"
                              src={menu.img}
                              alt=""
                            />
                            <div className="absolute bottom-6 text-white w-full px-5">
                              <p className="text-xl w-full">{menu.title}</p>
                              <p className="text-xs flex w-full items-center justify-between gap-5">
                                {menu.description} <FaArrowRight />{" "}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <p className="border-b border-gray-600 my-6"></p>
                </div>
              </MenuList>
            </Menu>
          </li>
          <Link
            to="/roi"
            className="uppercase list-none hover:bg-[#3c4a62] py-6 w-full"
          >
            Roi
          </Link>
          <a
            target="_blank"
            href="https://app.betterreturn.net/payment-plans"
            className="uppercase list-none hover:bg-[#3c4a62] py-6 w-full"
          >
            pricing
          </a>

          <a
            href="https://app.betterreturn.net/feed/history"
            className=" hover:bg-[#3c4a62] py-6 w-full"
          >
            <li className="uppercase list-none">results</li>
          </a>
          <Link
            to="/blogs"
            className="uppercase list-none hover:bg-[#3c4a62] py-6 w-full"
          >
            blogs
          </Link>

          <Link
            to="/contact"
            className="uppercase list-none hover:bg-[#3c4a62] py-6 w-full"
          >
            contact
          </Link>
          <Link
            to="/faq"
            className="uppercase list-none hover:bg-[#3c4a62] py-6 w-full"
          >
            faq
          </Link>
        </div>
        <div className="flex w-[18rem] lg:w-48 xl:w-72 2xl:w-[26rem] items-center">
          <a
            className="uppercase hover:bg-[#3c4a62] py-6  w-full "
            target="_blank"
            href="https://app.betterreturn.net/login"
          >
            <p>log in</p>
          </a>
          <a
            className="uppercase bg-[#064dfa] w-full py-6"
            target="_blank"
            href="https://app.betterreturn.net/signup"
          >
            <p>sign up</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
