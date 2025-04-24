import {useEffect} from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import {Link} from "react-router-dom";
import parse from "html-react-parser";

const BreadCumb2 = ({
  bgImg,
  Title,
  btnurl,
  btnurlReg,
  btnname,
  btnname1,
  Theme,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className=" cs_bg_filed cs_center cs_primary_bg"
      style={{height: "450px"}}
      data-background={bgImg}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <img src="assets/img/com-logo.png" alt="" />
        </div>
        <h1 className="cs_white_color cs_semibold cs_white_color text-center cs_mb_10 cs_fs_24 mt-3">
          {parse(Title)}
        </h1>

        <h5 className="my-3 text-white text-center cs_fs_16"> {Theme}</h5>

        {btnurl && (
          <div className="cs_hero_btns d-flex justify-content-center gap-3 mt-3">
            <Link to={btnurl} className="cs_btn cs_style_1 wow fadeInLeft">
              <span>{btnname}</span>
              <i className="bi bi-arrow-right" />
            </Link>
            <Link to={btnurlReg} className="cs_btn cs_style_1 wow fadeInLeft">
              <span>{btnname1}</span>
              <i className="bi bi-arrow-right" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BreadCumb2;
