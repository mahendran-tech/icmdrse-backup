import React from "react";

const SectionTitleWhite = ({ Title, content = "" }) => {
  return (
    <div>
      <h2
        className="cs_section_title text-center cs_accent_color cs_fs_30 mb-0 wow fadeInDown
         position-relative"
        style={{ zIndex: 2 }}
      >
        {Title}
      </h2>
      <p
        className="cs_fs_16 text-center  position-relative text-white"
        style={{ zIndex: 2 }}
      >
        {content}
      </p>
    </div>
  );
};

export default SectionTitleWhite;
