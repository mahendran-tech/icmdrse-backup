import React from "react";
import BreadCumb from "../Components/Common/BreadCumb2";
import TopContent2 from "../Components/Icmdrse/TopContent2";
import {Link} from "react-router-dom";
import Team1 from "../Components/Team/Team1";
import FAQItem from "../Components/Faq/FAQItem";

const CpdBenefits = () => {
  const cpdBenefits = [
    {
      question: "Q.1: What is CPD?",
      answer:
        "CPD stands for Continuing Professional Development and refers to the process of maintaining and enhancing your skills, knowledge, and expertise throughout your career.",
    },
    {
      question: "Q.2: Why is CPD important?",
      answer:
        "CPD helps professionals stay up-to-date with industry trends, improve skills, and maintain competency, ensuring they meet professional and organizational standards.",
    },
    {
      question: "Q.3: How are CPD points or hours calculated?",
      answer:
        "CPD points or hours are typically calculated based on the time spent on learning activities. For example, one hour of active learning might equal one CPD point.",
    },
    {
      question: "Q.4: What are CPD-accredited activities?",
      answer:
        "These are learning activities (such as courses, workshops, or webinars) that have been evaluated and approved by a CPD accreditation body to meet industry standards.",
    },
    {
      question: "Q.5: Who needs CPD?",
      answer:
        "CPD is often required by professionals in regulated industries like healthcare, education, engineering, or law. However, it benefits anyone aiming for career growth.",
    },
    {
      question: "Q.6: How do I track my CPD progress?",
      answer:
        "Most professionals maintain a CPD log or portfolio to record completed activities, points earned, and reflections on how the learning has contributed to their career.",
    },
    {
      question: "Q.7: What does it mean if a course is CPD-accredited?",
      answer:
        "A CPD-accredited course meets the standards set by a CPD certification body and ensures that the content is relevant, structured, and beneficial for professional development.",
    },
    {
      question: "Q.8: How do I earn CPD hours?",
      answer:
        "You can earn CPD hours by participating in IFERP Conferences accredited by CPD.",
    },
  ];

  return (
    <div>
      <BreadCumb
        bgImg="assets/img/page_heading_1.jpg"
        Title="Multi-Disciplinary Research Studies and Education"
        Theme="Applications in Multi-Disciplinary Research Studies : Technology and Innovation for Sustainable Learning"
        btnurl="/abstract-submission"
        btnurlReg="/conference-registration"
        btnname="Abstract Submission"
        btnname1="Registration"
      />

      <TopContent2
        title="EARN 12.2 CPD CREDIT HOURS"
        content="Participate in our conference and receive an official CPD Certificate accredited by the CPD Standards Office (Provider Number: 41182). Enhance your professional development with 12.2 CPD credit hours, in addition to your conference certificate.">
        <div className="cs_hero_btns d-flex justify-content-center gap-3 mt-3">
          <Link
            to="/abstract-submission"
            className="cs_btn cs_style_1 wow fadeInLeft">
            <span> Submit Your Research </span>
            {/* <i className="bi bi-arrow-right" /> */}
          </Link>
        </div>
      </TopContent2>

      <section>
        <div className="container">
          <div className="row cs_row_gap_40 d-flex justify-content-center  align-items-center">
            <div className="col-xl-6 wow fadeInLeft">
              <div className=" position-relative">
                <img
                  src="https://cdn.iferp.in/iferp-upcomming-banner/2025/cpd-certificate-1.webp"
                  alt="Feature"
                  className="boxshawdow-img"
                  style={{width: "100%"}}
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-content-center">
              <div className="cs_section_heading cs_style_1 mt-4 cs_mb_10">
                <h3>Benefits of the CPD :</h3>
              </div>

              <div className="cs_accordians_wrapper cs_style_1">
                <ul className="cs_list cs_style_1 cs_fs_16 cs_heading_font cs_mb_10 p-0">
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        Enhance Your Skills & Knowledge
                      </b>
                      – Stay up-to-date with the latest industry trends and best
                      practices.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        Career Growth & Opportunities
                      </b>
                      – Boost your resume and stand out in your profession with
                      certified CPD hours.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        Meet Industry Standards
                      </b>
                      – Many professional bodies require CPD to maintain
                      memberships and certifications.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        Boost Confidence & Credibility
                      </b>
                      – Gain recognition for your expertise and commitment to
                      learning.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        Networking & Collaboration
                      </b>
                      – Engage with professionals, exchange ideas, and expand
                      your professional network.
                    </span>
                  </li>
                  <li>
                    <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                      <i className="bi bi-check" />
                    </span>
                    <span>
                      <b className="cs_heading_color cs_semibold">
                        Increase Earning Potential
                      </b>
                      – Upskilling can lead to promotions, better job
                      opportunities, and higher salaries.
                    </span>
                  </li>

                  {/* {additionalContent && (
                      <li>
                        <span>
                          <b className="cs_heading_color cs_semibold">
                            {additionalContent}
                          </b>
                        </span>
                      </li>
                    )} */}
                </ul>
              </div>

              <div className="cs_height_47 cs_height_lg_0" />
            </div>
          </div>
        </div>
      </section>
      <Team1 />
      <section>
        <div className="container">
          <h4 className="text-center">FAQ </h4>
          <div className="row">
            <div className="col-lg-12">
              <ul className="col-lg-12 col-sm-12 list-group">
                {cpdBenefits.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CpdBenefits;
