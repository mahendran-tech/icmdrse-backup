import {useEffect} from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import {Link} from "react-router-dom";
import {assets} from "../../assets/assets";

const Footer2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <footer
      className="cs_footer cs_style_1 cs_type_1 cs_bg_filed cs_heading_bg"
      data-background="assets/img/footer_bg_2.jpg">
      <div className="cs_main_footer cs_white_color">
        <div className="container">
          <div className="cs_footer_row">
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <div className="cs_text_widget">
                  <img
                    src={assets.logo_icmdrse}
                    alt="Logo"
                    className="wow zoomIn bg-white p-2 rounded"
                  />
                  <p>
                    8th International Conference on Multi-Disciplinary Research
                    Studies and Education (ICMDRSE-2025) to be held in Malaysia
                    on the 22nd - 23rd May 2025 is to spur unique discoveries in
                    terms of countering conventional challenges faced in
                    everyday engineering activities and technologies.
                  </p>
                </div>
                <div className="cs_social_btns cs_style_1">
                  <a
                    href="https://www.linkedin.com/company/30196291/admin/"
                    target="_blank"
                    className="cs_social_btn cs_center">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a
                    href="https://twitter.com/i/flow/login?redirect_after_login=%2Fiferpconnectin1"
                    target="_blank"
                    className="cs_social_btn cs_center">
                    <i className="bi bi-twitter" />
                  </a>
                  <a
                    href="https://www.instagram.com/iferp_in/?igshid=YmMyMTA2M2Y%3D"
                    target="_blank"
                    className="cs_social_btn cs_center">
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/iferp.in/"
                    target="_blank"
                    className="cs_social_btn cs_center">
                    <i className="bi bi-facebook" />
                  </a>
                </div>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Quick Link
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg" />
                  <span className="cs_white_bg" />
                  <span className="cs_white_bg" />
                </div>
                <ul className="cs_footer_menu">
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({top: 0, behavior: "smooth"})
                      }
                      to="/conference-registration">
                      Register{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({top: 0, behavior: "smooth"})
                      }
                      to="/about-iferp">
                      Organizers{" "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/">Membership </Link>
                  </li> */}
                  <li>
                    <Link to="/contact-us">Contact </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({top: 0, behavior: "smooth"})
                      }
                      to="/important-dates">
                      Important Dates{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({top: 0, behavior: "smooth"})
                      }
                      to="/abstract-submission">
                      Submission{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({top: 0, behavior: "smooth"})
                      }
                      to="/scientific-tracks">
                      Session and tracks{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_col">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
                  Contact Us
                </h2>
                <div className="cs_footer_widget_seperator">
                  <span className="cs_accent_bg" />
                  <span className="cs_white_bg" />
                  <span className="cs_white_bg" />
                </div>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <i className="bi bi-geo-alt-fill" />
                    Corus Hotel Kuala Lumpur,Persiaran Hampshire, Kuala Lumpur,
                    Malaysia
                  </li>
                  <li>
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:+1 (626) 649-4484">+1 (626) 649-4484</a>
                    {/* <a href="tel:+(163)-5565-07989">+(163)-5565-07989</a> */}
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />
                    <a href="mailto:info@icmdrse.com">info@icmdrse.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <div className="cs_footer_copyright">
              Copyright © 2025 <a href="#">IFERP</a>. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
