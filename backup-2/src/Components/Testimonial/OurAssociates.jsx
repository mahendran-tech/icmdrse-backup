import React from "react";
import Slider from "react-slick";

const OurAssociates = () => {
  const images = [
    "https://www.icmdrse.com/images/clients/4.png",
    "https://www.icmdrse.com/images/clients/5.png",
    "https://www.icmdrse.com/images/clients/6.png",
    "https://www.icmdrse.com/images/clients/2.png",
    "https://www.icmdrse.com/images/clients/3.png",
    "https://www.icmdrse.com/images/clients/1.png",
    "https://www.icmdrse.com/images/clients/7.png",
    "https://www.icmdrse.com/images/clients/8.png",
    "https://cdn.iferp.in/conf-img/2024/upcoming-conference-img/logo-2.jpg",
    "https://www.icmdrse.com/images/clients/3.png"
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Default: Show 7 images on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto-play every 2 seconds
    arrows: true, // Show navigation arrows
    nextArrow: <div className="slick-next">Next</div>,
    prevArrow: <div className="slick-prev">Previous</div>,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px (mobile devices)
        settings: {
          slidesToShow: 3, // Show 3 images on mobile screens
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // For screens between 768px and 1024px (tablet devices)
        settings: {
          slidesToShow: 5, // Show 5 images on tablet screens
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) =>
          <div
            key={index}
            className="slider-item d-flex justify-content-center"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="slider-image"
            />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default OurAssociates;
