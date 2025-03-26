import {useEffect, useState} from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from "../../Data/sdg.json";
import parse from "html-react-parser";
import SectionTitle2 from "../Common/SectionTitle2";

const SdgGoal = () => {
  // Open first accordion in each column by default
  const [openItemIndexLeft, setOpenItemIndexLeft] = useState(0);
  const [openItemIndexRight, setOpenItemIndexRight] = useState(
    Math.ceil(data.length / 2)
  );

  const handleItemClick = (index, column) => {
    if (column === "left") {
      setOpenItemIndexLeft((prev) => (prev === index ? null : index));
    } else {
      setOpenItemIndexRight((prev) => (prev === index ? null : index));
    }
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="position-relative">
      <div className="container">
        <div className="cs_height_60 cs_height_lg_50" />
        <div className="cs_section_heading cs_style_1 cs_mb_50 text-center">
          <SectionTitle2
            isCenter={true}
            Title="ICMDRSE-2025 will actively contribute to the SDGs:"
          />
          <p className="text-center">
            By aligning with the United Nations' Sustainable Development Goals
            (SDGs), we affirm our dedication to global sustainability and
            societal well-being. Here are several ways in which ICMDRSE-2025
            will contribute to advancing the SDGs:
          </p>
        </div>
        <div className="row cs_gap_y_40 justify-content-center align-items-start">
          {[0, 1].map((col) => {
            const isLeft = col === 0;
            const columnData = data.slice(
              col * Math.ceil(data.length / 2),
              (col + 1) * Math.ceil(data.length / 2)
            );
            return (
              <div key={col} className="col-lg-6">
                <div className="cs_accordians_wrapper cs_style_1">
                  {columnData.map((item, index) => {
                    const itemIndex = col * Math.ceil(data.length / 2) + index;
                    const isOpen = isLeft
                      ? openItemIndexLeft === itemIndex
                      : openItemIndexRight === itemIndex;
                    return (
                      <div
                        key={itemIndex}
                        className={`cs_accordian cs_style_1 cs_gray_bg wow fadeInDown ${
                          isOpen ? "active" : ""
                        }`}>
                        <div
                          className="cs_accordian_head"
                          onClick={() =>
                            handleItemClick(
                              itemIndex,
                              isLeft ? "left" : "right"
                            )
                          }>
                          <h2 className="cs_fs_18 cs_semibold mb-0">
                            {item.title}
                          </h2>
                          <span className="cs_accordian_toggle">
                            <i
                              className={`bi ${
                                isOpen ? "bi-eye-slash" : "bi-eye"
                              }`}
                            />
                          </span>
                        </div>
                        {isOpen && (
                          <div className="cs_accordian_body">
                            <div className="d-flex gap-3 align-items-center">
                              <div>
                                <div
                                  className="cs_card_info cs_bg_filed "
                                  data-src="assets/img/card_bg_1.svg">
                                  <div className="d-flex justify-content-start gap-2">
                                    <div className="cs_card_icon cs_mb_20">
                                      <img src={item.icon} alt="Wheel Icon" />
                                    </div>
                                    <div>
                                      <h3 className="cs_fs_20 cs_semibold cs_mb_10">
                                        {item.title}
                                      </h3>
                                      <p className="cs_mb_30">
                                        {parse(item.desc)}
                                      </p>
                                    </div>
                                  </div>
                                  <h6> {parse(item.desheading)} </h6>
                                  <ul>
                                    <li> {parse(item.session1)} </li>
                                    {item.session2 && (
                                      <li> {parse(item.session2)} </li>
                                    )}
                                    {item.session3 && (
                                      <li> {parse(item.session3)} </li>
                                    )}
                                    {item.objective && (
                                      <li> {parse(item.objective)} </li>
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="cs_height_60 cs_height_lg_50" />
      </div>
    </section>
  );
};

export default SdgGoal;
