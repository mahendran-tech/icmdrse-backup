import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";

const Research = ({img1}) => {
  return (
    <section>
      <div className="container">
        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-4 wow fadeInLeft">
            <div className="cs_features_thumbnail_1 position-relative">
              <img src={img1} alt="Feature Image" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cs_section_heading cs_style_1 cs_mb_10">
              <SectionTitle2 Title="Research Journey" />
              <p className="mt-2">
                Embark on a path of discovery, turning questions into knowledge.
                We guide you through every stage of your research process with
                precision and care.
              </p>
            </div>
            <div className="cs_accordians_wrapper cs_style_1">
              <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check" />
                  </span>
                  <span>
                    <b className="cs_heading_color cs_semibold">
                      Read, Present, and Learn
                    </b>
                    <br />
                    Gain insights, share ideas, and expand your expertise.
                    Access reliable resources, create compelling presentations,
                    and stay informed on the latest advancements.
                  </span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check" />
                  </span>
                  <span>
                    <b className="cs_heading_color cs_semibold">
                      Edit and Proofread
                    </b>{" "}
                    <br />
                    Polish your work to perfection. Ensure clarity, consistency,
                    and quality with professional editing and proofreading
                    services tailored to your research needs.
                  </span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check" />
                  </span>
                  <span>
                    <b className="cs_heading_color cs_semibold">
                      Review and Publish
                    </b>
                    <br />
                    Navigate the publication process with ease. From peer
                    reviews to journal submissions, we help you refine and share
                    your findings with the world.
                  </span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                    <i className="bi bi-check" />
                  </span>
                  <span>
                    <b className="cs_heading_color cs_semibold">
                      Refer and Cite
                    </b>
                    <br />
                    Acknowledge your sources accurately. Simplify referencing
                    and citation with tools and guidance that save you time and
                    effort.
                  </span>
                </li>

                <li>
                  <span>
                    {" "}
                    <b className="cs_heading_color cs_semibold">
                      Let us support you at every step of your research journey!
                    </b>
                  </span>
                </li>
              </ul>
            </div>
            <div className="cs_height_60 cs_height_lg_0" />
          </div>
        </div>
      </div>
      <div className="cs_height_60 cs_height_lg_60" />
    </section>
  );
};

export default Research;
