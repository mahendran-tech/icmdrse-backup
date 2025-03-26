import React from "react";
import parser from "html-react-parser";

const SectionTitle2 = ({ Title }) => {
  return (
    <div>
      <h2 className="cs_section_title text-center cs_fs_30 mb-2 wow pulse">
        {Title}
      </h2>
    </div>
  );
};
const TopContent2 = ({ title, content, content2, image, hltext, children }) => {
  return (
    <div className="container">
      <div className="cs_height_50 cs_height_lg_50" />
      <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
        <div className="col-lg-12">
          <div className="cs_section_heading cs_style_1 cs_mb_10">
            <SectionTitle2 Title={title} />
            {hltext &&
              <h5
                className="mt-4 text-center"
                style={{ color: "red", fontWeight: "600" }}
              >
                {hltext}{" "}
              </h5>}
            {content &&
              <p className="mt-3 ">
                {parser(content)}
              </p>}
            {content2 &&
              <p className="mt-2 fw-bold">
                {content2}
              </p>}
            {image &&
              <div className="my-2">
                <img src={image} alt="" />
              </div>}
          </div>
        </div>
      </div>

      {children &&
        <div className="row">
          {children}
        </div>}

      <div className="cs_height_50 cs_height_lg_0" />
    </div>
  );
};

export default TopContent2;
