import React from "react";
import {Link} from "react-router-dom";

const Event = () => {
  return (
    <section className="bg-attach">
      <div className="container">
        <div className="row my-3">
          <div className="col-lg-12 py-5">
            <div className="cs_section_title text-center">
              <h3
                className="cs_font_700  text-center "
                style={{color: "#ef0f3a"}}>
                Pre-Conference Webinar
              </h3>
              <h5 className="text-center text-white">
                Webinar Title : Editing for Non-Native English Authors:
                Challenges & Solutions
              </h5>
              <p className="cs_font_16 text-center text-white">
                Date : 08/03/2025 | Time : 11:30 AM to 12:30 PM IST
              </p>
              <div>
                <div className="cs_hero_btns mt-3">
                  <Link
                    class="cs_btn cs_style_1 wow fadeInLeft"
                    to="/exclusive-event">
                    <span>Apply Now</span>
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
