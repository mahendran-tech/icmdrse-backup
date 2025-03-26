import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import {assets} from "../../assets/assets";

export default function Header2({variant}) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div className="header-area2 header_nav_02">
      <header
        className={`cs_site_header cs_style_1 cs_type_1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}>
        <div className="cs_top_header">
          <div className="container-fluid">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_header_contact_list cs_mp_0">
                  <li>
                    <i className="bi bi-telephone-fill"></i>
                    <a href="tel:+1 (626) 649-4484">+1 (626) 649-4484</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill"></i>
                    <a href="mailto:info@icmdrse.com">info@icmdrse.com</a>
                  </li>
                  <li>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>Kuala Lumpur, Malaysia</span>
                  </li>
                </ul>
              </div>

              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links">
                    <a
                      href="https://www.linkedin.com/company/30196291/admin/"
                      target="_blank"
                      className="cs_social_btn cs_center">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      href="https://twitter.com/i/flow/login?redirect_after_login=%2Fiferpconnectin1"
                      target="_blank"
                      className="cs_social_btn cs_center">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/iferp_in/?igshid=YmMyMTA2M2Y%3D"
                      target="_blank"
                      className="cs_social_btn cs_center">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/iferp.in/"
                      target="_blank"
                      className="cs_social_btn cs_center">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_main_header">
          <div className="container-fluid">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <div className="cs_logo_wrap">
                  <Link className="cs_site_branding" to="/">
                    <img src={assets.logo_icmdrse} alt="Logo" />
                  </Link>
                </div>
              </div>

              <div className="cs_main_header_center">
                <div className="cs_nav cs_fs_18 cs_semibold cs_heading_color cs_heading_font">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              {/* <div className="cs_main_header_right">
            <div className="solutek-btn2">
            <Link to="/contact" className="cs_btn cs_style_1">
                <span>Get a Quote</span>
                <i className="bi bi-arrow-right"></i>
                </Link>             
					  </div>
            </div> */}
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_140"></div>
    </div>
  );
}
