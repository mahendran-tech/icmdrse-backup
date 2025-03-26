import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import parse from "html-react-parser";

const ScopeConf = ({ img1, content }) => {
  return (
    <section>
      <div className="container">
        <div className="cs_height_27 cs_height_lg_65" />
        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-8 wow fadeInDown">
            <div className="cs_section_heading cs_style_1 text-left mb-4">
              <SectionTitle2 Title="SCOPE OF THE CONFERENCE" />
            </div>
            <div className="cs_post_details">
              <blockquote>
                <img src="assets/img/quote_1.svg" alt="Quote Image" />
                Applications in Multi-Disciplinary Research Studies: Technology
                and Innovation for Sustainable Learning
              </blockquote>
            </div>

            <p className="cs_feature_text cs_mb_30">
              {parse(content)}
            </p>

            <p className="cs_feature_text cs_mb_30">
              Organized by IFERP Academy, the event will promote lively debates,
              new research approaches, and excellence in multidisciplinary
              education. It offers a unique opportunity for intellectual growth,
              fostering collaboration across fields to advance innovative
              solutions in education and research.
            </p>
            <p className="cs_feature_text cs_mb_30">
              Don’t miss the chance to be part of this dynamic forum for
              academic and professional development!
            </p>
          </div>
          <div className="col-xl-4 wow fadeInLeft">
            <div className="cs_features_thumbnail_2 position-relative">
              <img src={img1} alt="Feature Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_105" />
    </section>
  );
};

export default ScopeConf;
