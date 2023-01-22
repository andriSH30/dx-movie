import React from "react";
import "./Home.scss";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import logo from "../../assets/images/banner.jpg";

import Card from "../../Components/Card/Card";

const Home = () => {
  const options = {
    margin: 10,
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div className="home-container">
        <div className="banner">
          <img src={logo} alt="banner" />
        </div>
        <div className="home-content">
          {/* Trending Movie  */}
          <div className="content">
            <div className="menu-title">Trending Now</div>
            <OwlCarousel className="owl-carousel owl-theme" {...options}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </OwlCarousel>
          </div>

          {/* TV Serial */}
          <div className="content">
            <div className="menu-title">TV Serial</div>
            <OwlCarousel className="owl-carousel owl-theme" {...options}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
