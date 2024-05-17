import { useState } from "react";
import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import ButtonGradient from "./../assets/svg/ButtonGradient";
import MenuSvg from "./../assets/svg/MenuSvg";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <div
      className={`fixed top-0 z-99 h-[4.7rem] w-full  flex items-center justify-center  px-4 bg-n-8/90 backdrop-blur-sm border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <a href="">
          <img src={brainwave} alt="" />
        </a>

        <div className="z-2   lg:flex items-center justify-center hidden ">
          {navigation.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className={`${
                item.url == pathname.hash ? "text-n-1" : "text-neutral-400"
              }  font-medium px-4 py-2 hover:text-color-1 transition-colors relative font-code text-2xl uppercase ${
                item.OnlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:py-8 block lg:text-xs lg:font-semibold`}
            >
              {item.title}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex  items-center justify-center gap-3 p-2">
          <a
            href="#signup"
            className="button hidden mr-10  text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            New account
          </a>
          <Button className="" href="#login">
            Sign in
            <ButtonGradient />
          </Button>
        </div>
        <div
          className=" lg:hidden z-2 border rounded-sm p-3 "
          onClick={() => setOpenNavigation(!openNavigation)}
        >
          <MenuSvg openNavigation={openNavigation} />
        </div>
        {openNavigation && (
          <>
            <div className="z-1 absolute top-10 left-0 w-full h-screen flex items-center justify-center flex-col">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className={`${
                    item.url == pathname.hash ? "text-n-1" : "text-neutral-400"
                  }  font-medium px-2 py-2 hover:text-color-1 transition-colors relative font-code  uppercase ${
                    item.OnlyMobile ? "lg:hidden" : ""
                  } px-3 py-3 md:py-8 block lg:text-xs lg:font-semibold`}
                >
                  {item.title}
                </a>
              ))}
              <HamburgerMenu />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
