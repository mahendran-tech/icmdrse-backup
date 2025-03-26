import {Link} from "react-router-dom";
import {BsInfoSquare} from "react-icons/bs";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const About2 = ({img1, img2, exYear, Title, Content}) => {
  const Link1 = ({id, children, title}) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  return (
    <section className="cs_about cs_style_1 cs_type_1 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_80 cs_gap_y_40 align-items-center">
          <div className="col-xl-6">
            <div className="cs_about_thumbnail_wrapper position-relative">
              <div className="cs_about_thumbnail">
                <img src={img1} alt="About Image" />
              </div>
              <div className="cs_about_thumbnail">
                <img src={img2} alt="About Image" />
              </div>
              <h2 className="cs_esperience_text cs_fs_45 position-absolute">
                {exYear}
              </h2>
              <div className="cs_servicing_year">
                <img src="assets/img/quote_1.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="cs_about_text">
              <div className="cs_section_heading cs_style_1 cs_mb_18">
                <h2
                  className="cs_section_title cs_fs_30 mb-0 wow fadeInDown"
                  data-wow-duration="1s"
                  data-wow-delay="0.3s">
                  {Title}
                </h2>
              </div>
              <p className="cs_mb_12">
                <> {Content} </>{" "}
              </p>
              <p className="cs_mb_30">
                This year, join us in <b> Malaysia </b> for an unforgettable
                journey of discovery and collaboration. Our theme for{" "}
                <b> 8th ICMDRSE</b> , Applications in Multi-Disciplinary
                Research Studies: Technology and Innovation for Sustainable
                Learning, creates an inspiring space where diverse disciplines
                unite to foster groundbreaking research and transformative
                discussions.{" "}
              </p>
              <div className=" cs_mb_38">
                {/* <div className="cs_iconbox cs_style_3 wow fadeInRight">
                    <div className="cs_iconbox_icon cs_center cs_white_bg cs_radius_50">
                      <img src="/assets/img/icons/break_icon.svg" alt="Break Icon" />
                    </div>
                    <div className="cs_iconbox_content">
                      <h3 className="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_12">{box1}</h3>
                      <p className="mb-0">{boxContent1}</p>
                    </div>
                  </div> */}
                <div className="">
                  <div className=" d-flex justify-content-center  align-items-center gap-3">
                    <div className="col-lg-4 col-sm-12">
                      <img
                        src="https://cdn.iferp.in/iferp-upcomming-banner/2025/cpd-certificate-1.webp"
                        alt=""
                        style={{width: "100%"}}
                      />
                    </div>

                    <div className="col-lg-8 col-sm-12">
                      <img
                        src="https://cdn.iferp.in/client-stories-images/2024/october/CPD-logo.svg"
                        alt=""
                        style={{width: "100%"}}
                      />
                      <div className="mt-3 d-flex gap-3">
                        <h4 className="blink-text">12.2 CPD CREDIT HOURS</h4>{" "}
                        <Link1
                          title={
                            <>
                              Continuing Professional Development (CPD) refers
                              to the structured and ongoing process of learning
                              activities undertaken by professionals to improve
                              and refine their skills, knowledge, and
                              competencies. It embodies a comprehensive approach
                              to fostering personal and professional growth,
                              ensuring continuous enhancement of expertise
                              throughout one’s career.
                            </>
                          }
                          id="100">
                          <BsInfoSquare
                            style={{
                              fontSize: "30px",
                              textAlign: "center",
                              color: "#247aff",
                            }}
                          />
                        </Link1>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="cs_hero_btns d-flex justify-content-center gap-3 mt-3">
                      <Link
                        onClick={() =>
                          window.scrollTo({top: 0, behavior: "smooth"})
                        }
                        to="/cpd-benefits"
                        className="cs_btn rounded-5 cs_style_1 wow fadeInLeft">
                        <span> Your Certificate On Completion </span>
                        {/* <i className="bi bi-arrow-right" /> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
