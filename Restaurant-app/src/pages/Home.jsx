import React from "react";
import Hero from "../components/Hero";
import Pages from "../components/Pages";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      <Hero />
      <Pages></Pages>
      <Menu></Menu>
    </div>
  );
};

export default Home;
