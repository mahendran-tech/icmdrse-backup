import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";

const ReuseCom = ({
  imgSrc,
  Title,
  sectionTitle,
  description,
  listItems,
  conclusion
}) => {
  return (
    <section>
      <div className="container">
        <div className="cs_height_80 cs_height_lg_60" />
        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-12">
            <h4>
              {Title}
            </h4>
          </div>
          <div className="col-xl-4 wow fadeInLeft">
            <div className="cs_features_thumbnail_1 position-relative">
              <img src={imgSrc} alt="Feature Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cs_section_heading cs_style_1 cs_mb_10">
              <SectionTitle2 Title={sectionTitle} />
              {description &&
                <p className="mt-2">
                  {description}
                </p>}
            </div>
            <div className="cs_accordians_wrapper cs_style_1">
              <ul className="cs_list cs_style_1 cs_fs_16 cs_heading_font cs_mb_10 p-0">
                {listItems.map((item, index) =>
                  <li key={index}>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        {item.title}
                      </b>
                      <br />
                      {item.description}
                    </span>
                  </li>
                )}
                {conclusion &&
                  <li>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        {conclusion}
                      </b>
                    </span>
                  </li>}
              </ul>
            </div>
            <div className="cs_height_108 cs_height_lg_0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReuseCom;
