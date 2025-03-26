import SectionTitle2 from "../Common/SectionTitle2";

const ObjLinks = ({
  title,
  description,
  objectives,
  showImage = true,
  imageUrl = ""
}) => {
  return (
    <section className="position-relative">
      <div className="container">
        <div className="row cs_gap_y_40 align-items-center justify-content-center">
          <div className={`col-lg-${showImage ? "6" : "12"}`}>
            <div className="cs_section_heading cs_style_1 cs_mb_10">
              {objectives && <SectionTitle2 Title={title} />}
              <p>
                {description}
              </p>
            </div>
            <div className="cs_accordians_wrapper cs_style_1">
              <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
                {objectives.map((objective, index) =>
                  <li key={index}>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        {objective.title}
                      </b>{" "}
                      {objective.description}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div className="cs_height_49 cs_height_lg_0" />
          </div>
          {showImage &&
            <div className="col-lg-6">
              <div className="cs_half_screen_right wow fadeInRight">
                <div
                  className="cs_half_screen_thumbnail cs_bg_filed"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                />
              </div>
            </div>}
        </div>
      </div>
    </section>
  );
};

export default ObjLinks;
