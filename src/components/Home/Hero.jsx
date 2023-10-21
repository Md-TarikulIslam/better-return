import React from "react";
import bg_img from "../../assets/images/bg/website-grid-tiles.svg";
import bg_video from "../../assets/videos/bg-video/a.mp4";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";
import { Button, Carousel } from "@material-tailwind/react";
import img1 from "../../assets/images/hero/1.svg";
import img2 from "../../assets/images/hero/2.png";
import img3 from "../../assets/images/hero/3.png";
import { Link, ScrollRestoration } from "react-router-dom";

const allData = [
  {
    date: "19th Oct, 1.00 PM",
    team1: "Inter Miami",
    team2: "Charlotte",
    prediction: "Inter Miami",
    odds: "2.52",
  },
  // {
  //   date: "10th Oct, 1.00 PM",
  //   team1: "Inter Miami",
  //   team2: "Charlotte",
  //   prediction: "Inter Miami",
  //   odds: "2.52",
  // },
];

const Hero = () => {
  return (
    <div className="min-h-screen mb-60 relative">
      <div className="relative flex justify-center items-center mt-[31px] lg:mt-[33px]">
        <video
          loop
          className="w-full hidden lg:block min-h-screen top-[33px] absolute object-cover brightness-[.2] "
          autoPlay
          muted
        >
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
      <div className="w-full min-h-screen absolute bg-[url('https://betterreturn.net/wp-content/uploads/2023/04/website-grid-tiles.svg')] z-10 bg-no-repeat lg:bg-center bg-cover">
        <div className="min-h-screen w-full bg-[#2e3e56] lg:bg-blue-700 absolute top-[33px]  object-cover opacity-25" />
        <div className="max-w-screen-xl  mx-auto text-white relative top-20 lg:top-16 z-20">
          <div className="w-full px-10 flex justify-between flex-col-reverse lg:flex-row items-center">
            <div>
              <p className="text-[#126fe2] text-[13px] font-medium tracking-widest mt-2 lg:mt-0 ">
                Empower your picks with our cutting-edge AI-powered prediction
                technology.
              </p>
            </div>
            <div>
              <a target="_blank" href="https://discord.com/invite/TMWQHhEj">
                {" "}
                <p className="tracking-widest text-sm lg:text-lg border-solid border border-blue-600 lg:py-3 lg:px-6 px-2 py-2 rounded flex gap-1 items-center font-semibold hover:animate-bounce hover:transition delay-300 -mt-10 lg:-mt-0">
                  <ChatBubbleBottomCenterIcon className="w-5 lg:w-6 transition-all" />{" "}
                  JOIN DISCORD
                </p>
              </a>
            </div>
          </div>
          <div className="flex justify-between flex-col-reverse lg:flex-row gap-3 lg:gap-10 lg:mt-10 mt-2 px-5 lg:px-5 xl:px-0">
            <div className="text-xl flex-1 lg:text-4xl xl:text-5xl ">
              <p className=" font-bold leading-relaxed">
                Sports prediction as an investment. Start making the right
                decisions with real data, NOT Emotions or Feelings! Stop
                gambling with your money! Try for FREE
              </p>
              <Link to="/roi">
                {" "}
                <Button className="bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 mt-2 lg:mt-5">
                  Explore our total roi
                </Button>
              </Link>
            </div>

            <div className="w-full flex-1 bg-[#333] bg-opacity-25 ">
              <Carousel
                transition={{ duration: 1 }}
                className="rounded-none  mx-auto"
                autoplay="true"
                loop="true"
                navigation={false}
              >
                {allData.map((d, index) => {
                  return (
                    <div className="py-4 lg:py-20 px-12 lg:px-20">
                      <p className="text-3xl lg:text-4xl font-semibold ">
                        Pick of the day
                      </p>
                      <p className="text-[#0494e8] my-2 lg:my-5 font-semibold">
                        {d.date}
                      </p>
                      <p className="font-bold">
                        {d.team1} <span className="font-normal">Vs</span>{" "}
                        {d.team2}
                      </p>
                      <p>Prediction: {d.prediction}</p>
                      <p>Odds: {d.odds}</p>
                      <button className=" bg-[#064cfa] text-white rounded-sm lg:px-6 lg:py-3 px-4 py-2 mt-3 lg:mt-5 text-md hover:bg-black">
                        {" "}
                        See More
                      </button>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto mt-20 lg:mt-[50px] relative">
          <div className="absolute">
            <div className="flex gap-0  lg:gap-16 items-center justify-center">
              <img className="w-28 lg:w-60" src={img1} alt="" />
              <img className="w-20 lg:w-32 ml-10" src={img2} alt="" />
              <img className="w-28 lg:w-60" src={img3} alt="" />
            </div>
            <div className="flex gap-20 px-5 lg:px-0">
              <div>
                <p className="text-white font-semibold text-3xl">72%</p>
                <p className="text-[#7889a8] mt-2 text-lg">
                  Successful predictions
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-3xl">10000+</p>
                <p className="text-[#7889a8] mt-2 text-lg">Predictions made</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-5 lg:px-0 relative top-[14.4rem]  lg:top-60 xl:top-[240px]">
          
           <a href="https://app.betterreturn.net/signup" className="w-full"> <Button
              className="py-5 lg:py-10 rounded-none bg-[#064cfa]  hover:bg-[#081949] tracking-widest "
              fullWidth
            >
              Sign up
            </Button></a>
           <a href="#hero" className="w-full"> <Button
              className="py-5 lg:py-10 rounded-none bg-[#14253c] hover:bg-[#0698fa] tracking-widest "
              fullWidth
            >
              learn more
            </Button></a>
          </div>
        </div>
      </div>

      <ScrollRestoration />
    </div>
  );
};

export default Hero;
