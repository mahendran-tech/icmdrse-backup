import React from "react";
import {Link} from "react-router-dom";

const Event = () => {
  return (
    <section className="bg-attach">
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-12 py-5">
            <div className="cs_section_title text-center">
              <div>
                <img src="assets/img/com-logo.png" alt="Sample Image" />
              </div>
              <h5 className="text-center text-white mt-4">
                8th International Conference on Multi-Disciplinary Research{" "}
                <br />
                Studies and Education (ICMDRSE-2025)
              </h5>

              <p className="cs_font_16 text-center text-white">
                Enhance Your Conference Experience with an Exclusive Visit to
                SEGi University
              </p>

              <div>
                <h5 className="text-white">Program Highlights</h5>
                <ul className="cs_fs_14 text-white d-flex justify-content-center ">
                  <li className="ms-5">
                    Exclusive Workshop at to SEGi University
                  </li>
                  <li className="ms-5">Research Lab Tour</li>
                  <li className="ms-5">Certificates of Achievement</li>
                </ul>
              </div>
              <div>
                <div className="cs_hero_btns mt-3">
                  <Link
                    class="cs_btn cs_style_1 wow fadeInLeft"
                    to="/mobility-exchange-program">
                    <span>click to know more</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
