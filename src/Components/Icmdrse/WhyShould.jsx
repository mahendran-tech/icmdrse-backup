import React from "react";
import data from "../../Data/whyshould.json";
import parse from "html-react-parser";

const WhyShould = () => {
  return (
    <section
      className="cs_video cs_style_1 cs_bg_filed position-relative"
      data-background="assets/img/video_bg_1.webp">
      <div className="container cs_video.cs_style_1 ">
        <div className="cs_video_overlay cs_heading_bg position-absolute" />
        <h2 className="cs_section_title text-white cs_fs_30 text-center  mb-3 wow pulse position-relative z-1">
          Why should you attend this International Conference?
        </h2>
        <div></div>
        <div className="row cs_video_content-1 ">
          {data.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="cs_card_info cs_white_bg p-3 rounded-lg min-height-300">
                <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22" />
                <div className="d-flex justify-content-center">
                  <img src={item.img} alt="" />
                </div>

                <h3 className="cs_card_title cs_fs_20 cs_mb_10 mt-3 text-center">
                  {item.title}
                </h3>
                <p className="cs_card_subtitle text-center cs_fs_16 ">
                  {parse(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_105" />
    </section>
  );
};

export default WhyShould;
