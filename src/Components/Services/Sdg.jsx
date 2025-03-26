import {useEffect, useRef, useState} from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from "../../Data/services2.json";
import parse from "html-react-parser";
import SectionTitle2 from "../Common/SectionTitle2";

const Sdg = () => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(0);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

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
        <div className="row cs_gap_y_40 justify-content-center align-items-center">
          <div className="col-lg-10">
            <div className="cs_accordians_wrapper cs_style_1">
              {data.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className={`cs_accordian cs_style_1 cs_gray_bg wow fadeInDown ${
                    index === openItemIndex ? "active" : ""
                  }`}>
                  <div
                    className="cs_accordian_head"
                    onClick={() => handleItemClick(index)}>
                    <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye" />
                      <i className="bi bi-eye-slash" />
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <div className="d-flex gap-3 align-items-center">
                      <div className="sdg_img">
                        <img src={item.img} alt="" />
                      </div>
                      <div>
                        <div
                          className="cs_card_info cs_bg_filed "
                          data-src="assets/img/card_bg_1.svg">
                          <div class="cs_card_icon cs_mb_20">
                            <img src="assets/img/gol-3.png" alt="Wheel Icon" />
                          </div>
                          <h3 className="cs_fs_24 cs_semibold cs_mb_14">
                            {item.title}
                          </h3>
                          <p className="cs_mb_38">{parse(item.desc)}</p>
                          <h6> {parse(item.desheading)} </h6>
                          <ul>
                            <li> {parse(item.session1)} </li>
                            {item.session2 && <li> {parse(item.session2)} </li>}
                            {item.session3 && <li> {parse(item.session3)} </li>}
                            {item.objective && (
                              <li> {parse(item.objective)} </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cs_height_108 cs_height_lg_0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sdg;
