import { Link } from "react-router-dom";
import SectionTitle2 from "../Common/SectionTitle2";
import parse from "html-react-parser";
const Choose1 = ({ img1, content, btnName, btnUrl }) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_height_27 cs_height_lg_65" />
        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-4 wow fadeInLeft">
            <div className="cs_features_thumbnail_1 position-relative">
              <img src={img1} alt="Feature Image" />
            </div>
          </div>
          <div className="col-xl-8 wow fadeInDown">
            <div className="cs_section_heading cs_style_1 text-left mb-4">
              <SectionTitle2 Title="Why choose ICMDRSE? " />
            </div>
            <div>
              <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_38 p-0">
                <li>
                  <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                    <i className="fa-solid fa-check" />
                  </span>
                  <span>Engage with leading academics and researchers.</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                    <i className="fa-solid fa-check" />
                  </span>
                  <span>
                    Explore innovative ideas and cutting-edge studies.
                  </span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                    <i className="fa-solid fa-check" />
                  </span>
                  <span>
                    Build meaningful connections across various fields.
                  </span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
                    <i className="fa-solid fa-check" />
                  </span>
                  <span>
                    Contribute to the advancement of sustainable learning
                    practices.
                  </span>
                </li>
              </ul>
            </div>

            <p className="cs_feature_text cs_mb_30">
              {parse(content)}
            </p>

            <p className="cs_feature_text cs_mb_30">
              {" "}<b> Join us in Malaysia, May 22–23, 2025,</b> and be part of
              the movement transforming education worldwide. We look forward to
              welcoming you!
            </p>

            {/* <Link to={btnUrl} className="cs_btn cs_style_1">
                <span>{btnName}</span><i className="bi bi-arrow-right"></i>     
              </Link> */}
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_105" />
    </section>
  );
};

export default Choose1;
