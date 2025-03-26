import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { assets } from "../../assets/assets";
import SectionTitle2 from "../Common/SectionTitle2";

const Brand1 = ({ isClass, title }) => {
  const { public_1, public_2, public_3, public_4, public_5 } = assets;

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="cs_brands_area">
      <div className="container">
        <div
          className={`${isClass
            ? "cs_brands_wrapper1 cs_white_bg cs_heading_color cs_bg_filed"
            : " cs_brands_wrapper cs_white_bg cs_heading_color cs_bg_filed"}`}
          data-background="assets/img/brand_bg_1.svg"
        >
          <div className="cs_section_heading cs_style_1 text-left mb-4">
            <SectionTitle2
              Title={title ? title : "Proceedings & Publications"}
            />
          </div>
          <div className="d-flex justify-content-center align-items-center gap-4">
            <div className="cs_brand wow zoomIn">
              <img src={public_1} alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
              <img src={public_2} alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
              <img src={public_3} alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
              <img src={public_4} alt="icon" />
            </div>
            <div className="cs_brand wow zoomIn">
              <img src={public_5} alt="icon" />
            </div>
          </div>
          <div>
            {isClass
              ? <p className="text-center mt-3">
                  Note : 8th International Conference on Multi-Disciplinary
                  Research Studies and Education (ICMDRSE-2025) proceedings
                  series will be submitted to the Web of Science Book Citation
                  Index (BkCI) and to SCOPUS for evaluation and indexing(T&C)*.
                </p>
              : <p className="text-center mt-3">
                  Note : ICMDRSE-2025 proceedings series will be submitted to
                  the Web of Science Book Citation Index (BkCI) and to SCOPUS
                  for evaluation and indexing (T&C)*.
                </p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;
