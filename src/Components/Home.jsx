import React from "react";
import Header from "./Header";
import PopularProduct from "./PopularProduct";
import RecommendedProducts from "./RecommendedProducts";
import Footer from "./Footer";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PopularProduct />
      <RecommendedProducts />
      <Footer />
    </div>
  );
};

export default Home;
