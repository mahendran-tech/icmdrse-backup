import {useEffect, useState} from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitleWhite from "../Common/SectionTitleWhite";

const Testimonial2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Slider settings
  const settings = {
    dots: false, // Disable dot navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Enable arrows for navigation
    nextArrow: <div className="slick-next">Next</div>, // Custom next arrow
    prevArrow: <div className="slick-prev">Previous</div>, // Custom previous arrow
    appendArrows: ".slick-arrow-container",
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000,
  };

  return (
    <section
      className="cs_tabs cs_style_2 cs_bg_filed position-relative"
      data-background="assets/img/testimonial_bg_2.jpg">
      <div className="cs_tabs_overlay cs_heading_bg position-absolute" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="cs_section_heading cs_style_1 text-left mb-4 ">
            <SectionTitleWhite
              Title="ICMDRSE-2025 Features"
              content="When you attend ICMDRSE-2025, you can expect many events like
(but not limited to)"
            />
          </div>
        </div>
        <div className="row cs_gap_y_40 align-items-center">
          <div className="col-lg-12">
            <div className="cs_tab_body p-0">
              <Slider {...settings}>
                <div>
                  <TestimonialCard
                    img="assets/img/201.png"
                    title="Research Paper Presentations"
                    content="Signs include unexplained increases in water bills, the sound of running water when no fixtures are in use, or anything damp or moldy on walls or ceilings."
                  />
                </div>
                <div>
                  <TestimonialCard
                    img="assets/img/204.png"
                    title=" Keynote Addresses"
                    content=" Listen to
                                        distinguished speakers delivering engaging speeches, providing insights into the
                                        latest trends and perspectives in multi-disciplinary research and education
                                    "
                  />
                </div>
                <div>
                  <TestimonialCard
                    img="assets/img/203.png"
                    title="Panel Discussions"
                    content="  Engage in interactive
                                        sessions led by experts and delve into current challenges, future prospects, and
                                        interdisciplinary collaborations in education and research."
                  />
                </div>
                <div>
                  <TestimonialCard
                    img="assets/img/202.png"
                    title="Publication Opportunities"
                    content=" Publish your research papers in reputable journals or conference proceedings, and share your valuable insights with the wider academic community."
                  />
                </div>
                <div>
                  <TestimonialCard
                    img="assets/img/205.png"
                    title="Workshops and Seminars"
                    content="  Participate in
                                        specialized sessions for hands-on experiences, practical knowledge, and
                                        skill-building in multidisciplinary studies."
                  />
                </div>
              </Slider>
            </div>
            <div className="slick-arrow-container" />
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default Testimonial2;
