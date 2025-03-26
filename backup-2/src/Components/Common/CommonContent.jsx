import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";

const Research = ({
  img1,
  content,
  title,
  content2 = "",
  hltext,
  height,
  content3
}) => {
  return (
    <section>
      <div className="cs_height_108 cs_height_lg_0" />
      <div className="container">
        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-4 wow fadeInLeft">
            <div className="cs_features_thumbnail_1 position-relative">
              <img src={img1} alt="Feature Image" style={{ height: height }} />
            </div>
          </div>
          <div className="col-lg-8 d-flex align-content-center">
            <div className="cs_section_heading cs_style_1 cs_mb_10">
              <SectionTitle2 Title={title} />
              {hltext &&
                <h5
                  className="mt-4"
                  style={{ color: "red", fontWeight: "600" }}
                >
                  {hltext}{" "}
                </h5>}
              <p className="mt-2">
                {content}
              </p>
              {content2 &&
                <p className="mt-2">
                  {content2}
                </p>}
              {content3 &&
                <p className="mt-2">
                  {content3}
                </p>}
            </div>

            <div className="cs_height_108 cs_height_lg_0" />
          </div>
        </div>
      </div>
      <div className="cs_height_60 cs_height_lg_60" />
    </section>
  );
};

export default Research;
