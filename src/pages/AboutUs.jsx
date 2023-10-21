import React from "react";
import img from "../assets/images/about/1.webp";
import img2 from "../assets/images/about/2.webp";
import { ScrollRestoration } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="">
      <div className="bg-[url('https://media.istockphoto.com/id/1433155192/photo/navy-blue-abstract-watercolor-pattern-background-dark-art-background-for-design.jpg?s=170667a&w=0&k=20&c=X3tRdaWK7ntbecjOwRbEYfXWPgQSopRkwg5_CLBWv6M=')] text-white mt-[31px] lg:mt-16 flex justify-center flex-col items-center  bg-no-repeat bg-cover gap-5 py-60">
        <p className="text-5xl font-bold tracking-widest text-center">
          Unlock your winning with Our AI-based prediction Platform
        </p>
        <p className="text-xl">The mission of Bet:terReturn</p>
      </div>
      <div className="max-w-screen-2xl mx-auto my-32 px-5 lg:px-0">
        <div className="flex gap-20 items-center flex-col-reverse lg:flex-row ">
          <div className="flex-1">
            <p className="text-blue-500 tracking-widest">
              UNDERSTANDING THE SCENE
            </p>
            <p className="text-6xl font-bold my-5">
              Made by <br /> Enthusiasts
            </p>
            <p className="text-[#8b98b0] text-[17px]">
              Introducing Bet:ter Return, a team of dedicated specialists in CS:
              GO winning predictions who are passionate about providing the
              finest AI-based forecasts in the market. Our system is
              exceptionally accurate,leading us to proudly refer to our
              predictions as forecasts, which we have now available to the
              public. <br /> <br /> We fully grasp the ever-expanding landscape
              of sports and e-sports winning prediction, and our team is
              constantly striving to enhance our AI-based knowledge in order to
              identify the winners of the matches. <br /> <br />
              We are committed to staying at the forefront of technological
              advancements to ensure our predictions remain cutting-edge and
              reliable.{" "}
            </p>
          </div>
          <div className="flex-1">
            <img className="w-[587px] h-[500px] rounded-xl" src={img} alt="" />
          </div>
        </div>
        <div className="flex gap-20  flex-col-reverse lg:flex-row-reverse items-center my-32">
          <div className="flex-1">
            <p className="text-blue-500 tracking-widest">
              AI DRIVEN PREDICTIONS
            </p>
            <p className="text-6xl font-bold my-5">
              Cut out the <br /> human factors
            </p>
            <p className="text-[#8b98b0] text-[17px]">
              Curious to know how we achieve exceptional results and outperform
              bookmakers? Our success stems from years of valuable betting
              experience and meticulous analysis for each match, which has
              allowed us to develop an adaptive algorithm. By eliminating the
              human element from betting, we have eradicated detrimental factors
              such as impulsive decisions and emotional betting. <br /> <br />{" "}
              While our algorithm alone has delivered remarkable outcomes, we
              have further enhanced it through the power of AI. The synergy
              between our optimized algorithm and AI has yielded truly
              astounding results. <br /> <br />
              We cordially invite you to examine our AI-based prediction results
              from our results page.
            </p>
          </div>
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/yT_sBiLBitI?si=PM1l6APiop8yk_fE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="h-[315px] lg:w-[560px] rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className="flex gap-20 items-center  flex-col-reverse lg:flex-row">
          <div className="flex-1">
            <p className="text-blue-500 tracking-widest">SUPPORT AN EFFORT</p>
            <p className="text-6xl font-bold my-5">
              Win Big While <br />
              Making a Difference
            </p>
            <p className="text-[#8b98b0] text-[17px]">
              You might question our motivation for sharing our successful
              system. As fellow betting/winning prediction enthusiasts, we have
              personally encountered the downsides of betting, whether through
              our own mistakes or due to issues with betting websites. <br />{" "}
              <br />
              Our ultimate objective is to empower users to profit more from
              betting than the betting companies themselves, while
              simultaneously combating gambling addiction. By joining our cause,
              not only can you earn money, but you also contribute to a noble
              mission of promoting responsible gambling and supporting efforts
              to curb addiction. <br /> <br />
              Together, we can create a world where betting is both lucrative
              and safe, ensuring that individuals can enjoy the benefits of this
              pastime while minimizing the associated risks.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="w-[587px] h-[500px] rounded-xl object-cover object-top"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AboutUs;
