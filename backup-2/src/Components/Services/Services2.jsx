import { Link } from "react-router-dom";
import SectionTitle2 from "../Common/SectionTitle2";
import data from "../../Data/services2.json";
import { useState } from "react";
import parse from "html-react-parser";

const Services2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_50 text-center">
          <SectionTitle2 Title="ICMDRSE-2025 will actively contribute to the SDGs:" />
          <p className="text-center">
            By aligning with the United Nations' Sustainable Development Goals
            (SDGs), we affirm our dedication to global sustainability and
            societal well-being. Here are several ways in which ICMDRSE-2025
            will contribute to advancing the SDGs:
          </p>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="cs_card_wrapper cs_style_1">
          {data.slice(0, 4).map((item, index) =>
            <div
              key={index}
              className={`cs_card cs_style_4 cs_hover_active ${selectedIndex ===
              index
                ? "active"
                : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="cs_card_index_wrap cs_heading_bg cs_white_color cs_fs_24 cs_semibold">
                <div className="cs_card_index">
                  {item.title}
                </div>
              </div>
              <div className="cs_card_content_wrapper cs_white_bg">
                <div className="cs_card_content">
                  <Link to={item.btnLink} className="cs_card_thumbnail">
                    <img src={item.img} alt="Service Image" />
                  </Link>
                  <div
                    className="cs_card_info cs_bg_filed "
                    data-src="assets/img/card_bg_1.svg"
                  >
                    <div className="cs_card_icon cs_mb_20">
                      <img src={item.icon} alt="Wheel Icon" />
                    </div>
                    <h3 className="cs_fs_24 cs_semibold cs_mb_14">
                      <Link to={item.btnLink}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="cs_mb_38">
                      {parse(item.desc)}
                    </p>
                    <h6>
                      {parse(item.desheading)}
                    </h6>
                    <ul>
                      <li>
                        {" "}{parse(item.session1)}{" "}
                      </li>
                      {item.session2 &&
                        <li>
                          {" "}{parse(item.session2)}{" "}
                        </li>}
                      {item.session3 &&
                        <li>
                          {" "}{parse(item.session3)}{" "}
                        </li>}
                      {item.objective &&
                        <li>
                          {" "}{parse(item.objective)}{" "}
                        </li>}
                    </ul>
                    {/* <Link to={item.btnLink} className="cs_btn cs_style_1">
                      <span>
                        {item.btnText}
                      </span>
                      <i className="bi bi-arrow-right" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services2;
