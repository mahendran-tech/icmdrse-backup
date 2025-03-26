import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";

const GlimpsesOfConferences = () => {
  const images = [
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set1.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set3.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set4.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set5.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set6.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set7.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set8.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set9.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set10.jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(1).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(2).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(3).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(4).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(5).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(6).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(7).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(8).jpg",
    "https://cdn.iferp.in/conf-img/2025/Glimpses-image/Set2-(9).jpg",
  ];

  // Duplicate images for seamless loop effect
  const doubledImages = [...images, ...images];

  return (
    <section>
      <div className="container">
        <div className="cs_height_80 cs_height_lg_80" />
        <div className="cs_newsletter cs_style_1 mb-5">
          {/* Section Title */}
          <div className="cs_section_heading cs_style_1 text-center cs_mb_10 h-100 p-4 ">
            <SectionTitle2 Title="Glimpses of Our Conferences" />
          </div>

          {/* Image Marquee (Continuous Scroll) */}
          <div className="section-padding">
            <div className="scroll-container">
              <div className="scroll-content">
                {doubledImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="scroll-image"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Continuous Scroll Animation */}
    </section>
  );
};

export default GlimpsesOfConferences;
