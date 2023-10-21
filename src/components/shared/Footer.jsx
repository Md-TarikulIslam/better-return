import { Typography } from "@material-tailwind/react";
import img from "../../assets/images/footer/1.png";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <div className="bg-[#172946]">
      <div className=" text-white text-center py-20">
        <p className="font-bold text-3xl lg:text-6xl ">Join today!</p>
        <p className="my-5">
          Bet:ter Return is the only AI-based prediction guide you need
        </p>
        <a href="https://app.betterreturn.net/signup">
          {" "}
          <button className="bg-[#064cfa] py-4 lg:px-10 px-6 text-white text-xs mt-5 tracking-widest uppercase">
            sign up now
          </button>
        </a>
        <div>
          <p className="border-solid border-t border-gray-600   mt-10 "></p>
        </div>
      </div>
      <footer className="relative w-full  text-white mb-14 lg:mb-0">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="uppercase text-[10px] font-semibold text-[#a5acb6] mb-4">
                Bet:terreturn
              </p>
              <div className="border-l border-[#596a8b] flex flex-col gap-3">
                <Link to="/">
                  <p className="hover:border-l pl-4 hover:border-white">Home</p>
                </Link>
                <Link to="/more-game">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Sports
                  </p>
                </Link>
                <Link to="/about-us">
                  <p className="hover:border-l pl-4 hover:border-white">
                    About Us
                  </p>
                </Link>
                <Link to="/contact">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Contact Us
                  </p>
                </Link>
                <Link to="/blogs">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Blogs
                  </p>
                </Link>
                <Link to="/faq">
                  <p className="hover:border-l pl-4 hover:border-white">FAQ</p>
                </Link>
              </div>
            </div>
            <div>
              <p className="uppercase text-[10px] font-semibold text-[#a5acb6] mb-4">
                start now
              </p>
              <div className="border-l border-[#596a8b] flex flex-col gap-3">
                <a href="https://app.betterreturn.net/signup">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Sign Up
                  </p>
                </a>
                <a href="https://app.betterreturn.net/login">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Login
                  </p>
                </a>
                <a href="https://app.betterreturn.net/payment-plans">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Pricing
                  </p>
                </a>
              </div>
            </div>
            <div>
              <p className="uppercase text-[10px] font-semibold text-[#a5acb6] mb-4">
                sports
              </p>
              <div className="border-l border-[#596a8b] flex flex-col gap-3">
                <Link to="/cs-go">
                  <p className="hover:border-l pl-4 hover:border-white">
                    CS:GO
                  </p>
                </Link>
                <Link to="/soccer">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Soccer
                  </p>
                </Link>
                <Link to="valorant">
                  <p className="hover:border-l pl-4 hover:border-white">
                    Valorant
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <p className="normal-case text-[10px] font-semibold text-[#a5acb6] mb-4">
                BetterReturn ApS
              </p>
              <div className=" flex flex-col gap-3">
                <p>
                  Ræveholmsvej 57 <br /> 2690 Karlslunde <br /> Denmark <br />{" "}
                  cvr. nr. 42198412
                </p>
                <a href="mailto:info@betterreturn.net">
                  <p>Email: info@betterreturn.net</p>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <Typography className="text-center text-xs text-[#7d8797] font-semibold">
              Bet:terReturn (vat.nr 42198412) is a Danish authorized institution
              under Danish law.
            </Typography>
            <Typography className="text-center text-xs text-[#7d8797] font-semibold my-1">
              Secure payment
            </Typography>
            <img className="w-1/5 mx-auto py-5" src={img} alt="" />
            <div className="flex lg:justify-between lg:px-80 pb-5 justify-center lg:flex-row flex-col ">
              <Link>
                <p className="text-xs text-[#7d8797] hover:text-[#afbccc] text-center font-semibold">
                  2023 Bet:ter Return
                </p>
              </Link>
              <Link to="/privacy-policy">
                <p className="text-xs text-[#7d8797] hover:text-[#afbccc] text-center font-semibold">
                  Privacy policy
                </p>
              </Link>
              <Link to="/gdpr">
                <p className="text-xs text-[#7d8797] hover:text-[#afbccc] text-center font-semibold">
                  GDPR
                </p>
              </Link>
              <Link to="/cookie-declaration">
                <p className="text-xs text-[#7d8797] hover:text-[#afbccc] text-center font-semibold">
                  Cookie Declaration
                </p>
              </Link>
              <Link to="/membership-terms-and-conditions">
                <p className="text-xs text-[#7d8797] hover:text-[#afbccc] text-center font-semibold">
                  Membership terms and condition
                </p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
