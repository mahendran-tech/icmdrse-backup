import React from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import {Link} from "react-router-dom";

const VolunteerScholarship = () => {
  return (
    <div className="cs_newsletter cs_style_1 mb-5">
      <div className="cs_height_60 cs_height_lg_0" />
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div
            className="col-lg-6 col-sm-12 cs_newsletter.cs_style_1  bg-white  "
            style={{position: "relative"}}>
            <div className="cs_section_heading cs_style_1 cs_mb_10 h-100  p-4 bg-white border bg-img-white ">
              <SectionTitle2 Title="BE A VOLUNTEER" />
              <p>
                Are you passionate about learning and making a difference? Join
                us as a volunteer at 8th ICMDRSE and help shape an exceptional
                conference experience! Collaborate with our dynamic team, gain
                valuable hands-on experience, and expand your network by
                connecting with like-minded professionals.
              </p>
              <p>
                Your contribution will play a vital role in creating an engaging
                and impactful event. Be part of building a vibrant community of
                learners and innovators while leaving a meaningful mark on this
                prestigious gathering. Together, let’s make this a conference to
                remember! Sign up today and be the change!
              </p>

              {/* <div className="cs_accordians_wrapper cs_style_1">
                <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      {" "}<b className="cs_heading_color cs_semibold">
                        {" "}Precise content :
                      </b>{" "}
                      Passionate about learning and making an impact? Volunteer
                      at the 8th ICMDRSE and help create an extraordinary
                      conference experience! Gain hands-on experience, expand
                      your network, and contribute to a vibrant community of
                      learners and innovators. Join us today and be part of
                      something remarkable!
                    </span>
                  </li>
                </ul>
              </div> */}
              <div className="d-flex justify-content-center align-content-center">
                <div className="cs_hero_btns">
                  <Link
                    className="cs_btn cs_style_1 wow fadeInLeft"
                    to="/call-for-volunteers"
                    onClick={() =>
                      window.scrollTo({top: 0, behavior: "smooth"})
                    }>
                    <span>Apply Now</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="cs_height_49 cs_height_lg_0" />
          </div>
          <div
            className="col-lg-6 col-sm-12 cs_newsletter.cs_style_1  bg-white "
            style={{position: "relative"}}>
            <div className="cs_section_heading cs_style_1 cs_mb_10 p-4 border  h-100  bg-white bg-img-white2 ">
              <SectionTitle2 Title="IFERP Scholarship Program" />
              <h6>Empowering Scholars Through Equity and Excellence</h6>
              <p>
                At IFERP Academy, our mission is to advance knowledge, promote
                scholarly excellence, and support the professional development
                of our members. We are deeply committed to inclusivity, ensuring
                equitable access to our conferences and fostering global
                academic engagement.
              </p>
              <p>
                To uphold this commitment, we have launched a Scholarship
                Program aimed at easing financial constraints for scholars,
                researchers, and students worldwide. This initiative covers
                conference registration fees, making our vision of accessible
                and inclusive academic opportunities a reality
              </p>
              <div className="d-flex justify-content-center align-content-center">
                <div className="cs_hero_btns">
                  <a
                    target="_blank"
                    className="cs_btn cs_style_1 wow fadeInLeft"
                    href="https://www.iferp.in/scholarship-program.php">
                    <span>Apply Now</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="cs_height_49 cs_height_lg_0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerScholarship;
