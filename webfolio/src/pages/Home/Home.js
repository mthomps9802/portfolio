import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import htmlLogo from "../../assets/html5_logo.png";  // Replace with actual paths
import cssLogo from "../../assets/css3_logo.png";
import jsLogo from "../../assets/javascript_logo.png";
import reactLogo from "../../assets/react_logo.png";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-10">
      {/* Left Side - Name & Description */}
      <div className="w-1/2 text-left">
        <h1 className="text-6xl font-extrabold">Mark A. Thompson,</h1>
        <p className="text-lg mt-4 max-w-lg">
          Software Engineer | Cybersecurity Enthusiast | Passionate about building innovative solutions
        </p>
        {/* Social Icons Placeholder (Replace with actual icons) */}
        <div className="mt-4 flex space-x-4">
          <span className="text-2xl">🔗</span>
          <span className="text-2xl">🐦</span>
          <span className="text-2xl">💻</span>
        </div>
      </div>

      {/* Right Side - Carousel */}
      <div className="w-1/3 flex justify-center">
        <Slider {...settings} className="w-48 h-48">
          <div className="flex justify-center">
            <img src={htmlLogo} alt="HTML" className="w-32 h-32 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={cssLogo} alt="CSS" className="w-32 h-32 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={jsLogo} alt="JavaScript" className="w-32 h-32 object-contain" />
          </div>
          <div className="flex justify-center">
            <img src={reactLogo} alt="React" className="w-32 h-32 object-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
