import React from "react";
import { Container } from "react-bootstrap";
import OurAssociates from "../Testimonial/OurAssociates";
import SectionTitle2 from "../Common/SectionTitle2";

const AssociateSlider = () => {
  return (
    <section className="cs_tabs cs_style_1 position-relative">
      <div className="cs_height_40 cs_height_lg_40" />
      <Container className="mt-5">
        <div className="cs_section_heading cs_style_1 cs_mb_10 text-center">
          <SectionTitle2 Title="Our Associates" />
        </div>
        <OurAssociates />
      </Container>

      <div className="cs_height_70 cs_height_lg_80" />
    </section>
  );
};

export default AssociateSlider;
