import React from "react";
import img1 from "../../assets/images/featured/1.webp";
import img2 from "../../assets/images/featured/2.webp";
import img3 from "../../assets/images/featured/3.webp";
import img4 from "../../assets/images/featured/4.webp";
import img5 from "../../assets/images/featured/5.webp";
import img6 from "../../assets/images/featured/6.webp";
import img7 from "../../assets/images/featured/7.webp";
import img8 from "../../assets/images/featured/8.webp";
import img9 from "../../assets/images/featured/9.webp";
import img10 from "../../assets/images/featured/10.webp";
import img11 from "../../assets/images/featured/11.webp";
import img12 from "../../assets/images/featured/12.webp";
import img13 from "../../assets/images/featured/13.webp";
import img14 from "../../assets/images/featured/14.webp";
import img15 from "../../assets/images/featured/15.webp";
import img16 from "../../assets/images/featured/16.webp";
import img17 from "../../assets/images/featured/17.png";
import img18 from "../../assets/images/featured/18.webp";
import img19 from "../../assets/images/featured/19.png";
import img20 from "../../assets/images/featured/20.webp";
import img21 from "../../assets/images/featured/21.webp";
import img22 from "../../assets/images/featured/22.png";
import img23 from "../../assets/images/featured/23.webp";
import img24 from "../../assets/images/featured/24.webp";
import img25 from "../../assets/images/featured/25.webp";
import img26 from "../../assets/images/featured/26.webp";
import img27 from "../../assets/images/featured/27.webp";
import img28 from "../../assets/images/featured/28.webp";
import img29 from "../../assets/images/featured/29.webp";
import img30 from "../../assets/images/featured/30.webp";
import img31 from "../../assets/images/featured/31.webp";
import img32 from "../../assets/images/featured/32.webp";
import img33 from "../../assets/images/featured/33.webp";
import img34 from "../../assets/images/featured/34.webp";
import img35 from "../../assets/images/featured/35.webp";
import img36 from "../../assets/images/featured/36.webp";
import img37 from "../../assets/images/featured/37.webp";
import img38 from "../../assets/images/featured/38.webp";
import img39 from "../../assets/images/featured/39.webp";
import img40 from "../../assets/images/featured/40.webp";
import img41 from "../../assets/images/featured/41.webp";
import img42 from "../../assets/images/featured/42.webp";
import img43 from "../../assets/images/featured/43.webp";
import img44 from "../../assets/images/featured/44.webp";
import img45 from "../../assets/images/featured/45.png";
import img46 from "../../assets/images/featured/46.webp";
import img47 from "../../assets/images/featured/47.webp";
import img48 from "../../assets/images/featured/48.png";
import img49 from "../../assets/images/featured/49.png";
import img50 from "../../assets/images/featured/50.webp";
import img51 from "../../assets/images/featured/51.webp";

import { Button } from "@material-tailwind/react";
import { Link, ScrollRestoration } from "react-router-dom";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Featured = () => {
  const data = [
    {
      name: "Soccer",
      Win: 863,
      Predict: 1146,
      amt: 2400,
    },
    {
      name: "CS:GO",
      Win: 720,
      Predict: 1040,
      amt: 2210,
    },
    {
      name: "Valorant",
      Win: 58,
      Predict: 94,
      amt: 2290,
    },
  ];

  return (
    <div className="mb-20">
      <div>
        <p className="uppercase tracking-widest text-[#064dfa] text-center text-lg font-semibold ">
          featured leages
        </p>
      </div>
      <p className="text-[#8f99a6] text-xs text-center mt-10">Soccer</p>
      <div className="w-full max-w-screen-lg mx-auto opacity-50 grayscale">
        <div className="flex flex-wrap justify-center gap-5 my-16 mx-auto items-center">
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img1} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img3} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img4} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img5} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img6} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img7} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center ">
            <img className="h-full " src={img6} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img8} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img9} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img10} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img11} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img12} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img14} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center ">
            <img className="h-full " src={img15} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img16} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img17} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img18} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img19} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img20} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img21} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center ">
            <img className="h-full " src={img22} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img23} alt="" />
          </div>
          <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
            <img className="h-full " src={img24} alt="" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#8f99a6] text-xs text-center mt-10">CS:GO</p>
        <div className=" max-w-screen-lg mx-auto opacity-50 grayscale">
          <div className="flex flex-wrap justify-center gap-5 my-16 mx-auto items-center">
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img25} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img26} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img27} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img28} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img29} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img30} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img31} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center ">
              <img className="h-full " src={img32} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img33} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img34} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img35} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img36} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img37} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img38} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center ">
              <img className="h-full " src={img39} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img40} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img41} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img42} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img43} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#8f99a6] text-xs text-center mt-10">Valorant</p>
        <div className=" max-w-screen-lg mx-auto opacity-50 grayscale">
          <div className="flex flex-wrap justify-center gap-5 my-16 mx-auto items-center">
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img44} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img45} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img46} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img47} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img48} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img49} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center">
              <img className="h-full " src={img50} alt="" />
            </div>
            <div className="w-[65px] lg:w-[118px] h-[48px] flex justify-center items-center ">
              <img className="h-full " src={img51} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero"
        className="bg-[url('https://img.freepik.com/free-photo/blue-abstract-gradient-wave-wallpaper_53876-108364.jpg?w=1060&t=st=1695104455~exp=1695105055~hmac=c893a878ff426dc921e9e1729c9ee5ce48692a11479164aaa4d122075ba3bda8')] bg-no-repeat bg-right lg:h-screen bg-cover  rounded-3xl border flex lg:flex-row flex-col justify-center "
      >
        <div className="lg:w-[712px] lg:h-[900px] w-[300px] h-[400px] mx-auto mt-20 lg:mt-0">
          <img className="object-cover w-full h-full" src={img13} alt="" />
        </div>
        <div className="lg:w-1/2 w-full p-5">
          <h1 className="text-[10vw] font-bold text-[#14253c] lg:leading-[170px] w-1/2 lg:w-full leading-[60px]">
            AI driven.{" "}
            <span className="text-[10vw] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1271ff] to-[#1afff1]">
              Forecasts.
            </span>
          </h1>

          <div className="lg:mt-16 mt-5 lg:ml-32 ml-0">
            <p className="tracking-widest text-[#6b7787]">
              Bet:terReturn is an AI-driven prediction platform. It serves as a
              robust analytical tool, harnessing the power of artificial
              intelligence to offer invaluable insights to sports enthusiasts
              and investors. By leveraging these insights, individuals can make
              well-informed decisions and strive for sustained growth in their
              investments over the long term.{" "}
            </p>
            <Link to="/roi">
              <Button className="bg-[#064cfa] rounded-none text-xs lg:px-10 lg:py-5 px-7 py-3 mt-5 mb-20 lg:mb-0">
                Explore our total roi
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" border-dashed border py-10 border-blue-600 my-10 rounded-2xl">
        <p className="uppercase tracking-widest text-[#0a4dfa] text-center text-sm font-bold">
          our results
        </p>
        <div>
          <div className="text-[#333333] text-center">
            <div className="mt-20 mb-10">
              <p className=" font-semibold text-7xl">1,358</p>
              <p className=" mt-2 text-lg">Won matches</p>
            </div>

            <div className="px-4 lg:px-0">
              <div className="bg-white px-4 py-4 lg:px-10 lg:py-10 max-w-min mx-auto rounded-xl border-2 border-blue-300">
                <p className="mb-10">Our Results</p>
                <div className="overflow-x-scroll lg:overflow-hidden">
                  <BarChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                    className=""
                  >
                    <CartesianGrid strokeDasharray="0 0" />

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar
                      dataKey="Predict"
                      fill="#004c8f"
                      activeBar={<Rectangle fill="pink" stroke="blue" />}
                    />

                    <Bar
                      dataKey="Win"
                      fill="#0084d1"
                      activeBar={<Rectangle fill="gold" stroke="purple" />}
                    />
                  </BarChart>
                </div>
              </div>
            </div>

            <div>
              <p className=" font-semibold text-7xl mt-10">1,883</p>
              <p className=" mt-2 text-lg">Predicted</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Featured;
