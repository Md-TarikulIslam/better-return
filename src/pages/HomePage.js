import React from "react";
import Hero from "../components/Home/Hero";
import Featured from "../components/Home/Featured";
import Why from "../components/Home/Why";
import { ScrollRestoration } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Why />
      <ScrollRestoration />
    </div>
  );
};

export default HomePage;
