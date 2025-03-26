import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import parser from "html-react-parser";

const TopContent = ({title, content, content2, image, hltext, children}) => {
  return (
    <div className="container">
      <div className="cs_height_50 cs_height_lg_50" />
      <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
        <div className="col-lg-12">
          <div className="cs_section_heading cs_style_1 cs_mb_10">
            <SectionTitle2 Title={title} />
            {hltext && (
              <h5 className="mt-4" style={{color: "red", fontWeight: "600"}}>
                {hltext}{" "}
              </h5>
            )}
            {/* {content &&
              <p className="mt-3 ">
                {parser(content)}
              </p>} */}
            {content && <div className="mt-3">{parser(content)}</div>}

            {content2 && <div className="mt-2 fw-bold">{content2}</div>}
            {image && (
              <div className="my-2">
                <img src={image} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
      {children && <div>{children}</div>}
      <div className="cs_height_50 cs_height_lg_0" />
    </div>
  );
};

export default TopContent;
