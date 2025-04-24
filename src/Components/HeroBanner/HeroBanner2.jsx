import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";
// import VideoModal from "../VideoModal/VideoModal";
import HeroSlider from "../Testimonial/HeroSlider";
import {MdLocationPin} from "react-icons/md";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import parse from "html-react-parser";

const HeroBanner2 = ({
  bgimg,
  subtitle,
  title,
  conetnt,
  btnname,
  btnurl,
  btnurlReg,
  btnname1,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const Link1 = ({id, children, title}) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  return (
    <section
      className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center cs_ripple_activate overflow-hidden"
      data-background={bgimg}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-sm-12">
            <div
              className="cs_hero_text bg-white_sm"
              data-wow-duration="0.9s"
              data-wow-delay="0.25s">
              <h3 className="cs_hero_mini_title cs_accent_color cs_fs_18 cs_medium cs_mb_8 text-uppercase">
                {subtitle}
              </h3>
              {/* <h1 className="cs_hero_title  cs_fs_70 cs_mb_18 wow fadeInUp" >{title}</h1> */}
              <h1
                className="cs_hero_title cs_fs_30 cs_mb_15 wow fadeInUp fw-bold"
                dangerouslySetInnerHTML={{__html: title}}
              />
              <h5 className="cs_accent_color fw-sm border d-inline p-2 cs_fs_16 mb-cs_fs_16 ">
                {" "}
                <i className="bi bi-calendar-check text_color" /> 22nd-23rd May,
                2025 <span className="mx-2"> | </span>{" "}
                <i className="bi bi-geo-alt text_color" /> Kuala Lumpur,
                Malaysia
              </h5>{" "}
              <span className="animate">
                {" "}
                <Link1
                  title={
                    <>
                      <b style={{color: "green", fontSize: "16px"}}>
                        {" "}
                        Corus Hotel Kuala Lumpur{" "}
                      </b>{" "}
                      <br />
                      Persiaran Hampshire, Jalan Ampang, 50450 Kuala Lumpur,
                      Wilayah Persekutuan Kuala Lumpur, Malaysia
                    </>
                  }
                  id="100">
                  <MdLocationPin className="heartbeat-icon" />
                </Link1>
              </span>
              <h4
                className="cs_hero_title cs_fs_18 cs_mb_18 wow fadeInUp fw-bold mt-3"
                style={{lineHeight: "18px"}}>
                {" "}
                Hybrid conference (Inperson+Virtual) <br />
                <span className="cs_fs_14">
                  {" "}
                  You can participate in person at Kuala Lumpur, Malaysia or
                  Virtually from your home or work.
                </span>{" "}
              </h4>
              <p
                className="cs_hero_subtitle  mb-2 mt-2"
                style={{lineHeight: "18px"}}>
                {" "}
                <span className="cs_fs_16 " style={{color: "#ef0f3a"}}>
                  {" "}
                  Theme :{" "}
                </span>{" "}
                Applications in Multi-Disciplinary Research Studies : Technology
                and Innovation for Sustainable Learning
              </p>
              <h4 className="cs_hero_title cs_fs_16 mb-2 wow fadeInUp fw-bold mt-3">
                {" "}
                <b>ISBN : </b> 978-93-92104-81-7
              </h4>
              <p
                className="cs_hero_subtitle  cs_mb_20 mt-2"
                style={{lineHeight: "18px", fontSize: "13px"}}>
                {" "}
                <span
                  className="cs_fs_16 "
                  style={{
                    color: "#ef0f3a",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}>
                  {" "}
                  Organized by :{" "}
                </span>{" "}
                {parse(conetnt)}
              </p>
              <div className="cs_mb_20">
                <img src="assets/img/acc-logo.png" alt="" />
              </div>
              <div className="cs_hero_btns">
                <Link to={btnurl} className="cs_btn cs_style_1 wow fadeInLeft">
                  <span>{btnname}</span>
                  <i className="bi bi-arrow-right" />
                </Link>
                <Link
                  to={btnurlReg}
                  className="cs_btn cs_style_2 wow fadeInLeft">
                  <span>{btnname1}</span>
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <HeroSlider />
          </div>
        </div>
      </div>
      {/* <VideoModal
          isTrue={toggle}
          iframeSrc={iframeSrc}
          handelClose={handelClose}        
        ></VideoModal> */}
    </section>
  );
};

export default HeroBanner2;
