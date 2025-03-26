import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: true,
    // verticalSwiping: true,
    arrows: false,
  };

  const images = [
    "https://cdn.iferp.in/iferp-speaker/Nov-24/img-5.png", // Replace with your image paths
    "https://cdn.iferp.in/iferp-speaker/Nov-24/img-6.png",
    "https://cdn.iferp.in/conf-img/2025/icmdrse/ban-6.jpg", // Replace with your image paths
    "https://cdn.iferp.in/conf-img/2025/icmdrse/ban-5.jpg",
    "https://cdn.iferp.in/conf-img/2025/icmdrse/ban-4.jpg", // Replace with your image paths
    "https://cdn.iferp.in/conf-img/2025/icmdrse/ban-3.jpg",
    "https://cdn.iferp.in/conf-img/2025/icmdrse/ban-2.jpg",
    "https://cdn.iferp.in/conf-img/2025/icmdrse/ban-1.jpg",
  ];

  return (
    <div
      style={{
        width: "810px",
        margin: "auto",
        position: "absolute",
        zIndex: -1,
        top: "-3%",
        right: "-5px",
      }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                margin: "10px auto",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
