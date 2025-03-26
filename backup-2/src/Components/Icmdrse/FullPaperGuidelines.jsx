import React from "react";
import { Link } from "react-router-dom";

const FullPaperGuidelines = () => {
  return (
    <section
      className="testimonial-section py-3"
      style={{ background: "#e8efff" }}
    >
      <div className="container">
        <div className="row clearfix">
          <div className="mt-3">
            <h4 className=" mb-2">Guidelines for Full Paper Submission</h4>
            <p className="text">
              If your abstract has been accepted and the registration fee for
              ICMDRSE-2025 has been paid, you are invited to submit the full
              paper. Please adhere to the following guidelines for the
              submission:
            </p>
          </div>

          {/* Left Column */}
          <div className="col-lg-5">
            <div className="inner-column tex-container">
              <img src="assets/img/bg-2.png" alt="Guidelines Background" />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="inner-column h-100">
              <div className="skewed-element h-100 d-flex justify-content-center align-items-center">
                <div className="content-topic">
                  <ul className="ul-style">
                    <li>
                      <b>Total number of pages:</b> 6-8 in double-column format
                    </li>
                    <li>
                      <b>Language:</b> English (checked for grammar and language
                      errors)
                    </li>
                    <li>
                      Tables, figures, and images should be properly named and
                      of high quality.
                    </li>
                    <li>
                      Keywords should be written in lowercase letters (except
                      for names/scientific names) and separated by commas.
                    </li>
                    <li>
                      Affiliation names, including the country, must be
                      provided.
                    </li>
                    <li>
                      Each paper should be structured into the following
                      sections:
                    </li>
                    <li>Background, Motivation, and Objective</li>
                    <li>Statement of Contribution/Methods</li>
                    <li>Results, Discussions, and Conclusions</li>
                  </ul>
                  <p>
                    Once your full paper is prepared according to the above
                    instructions, please proceed to submit it through the
                    provided link.{" "}
                    <Link style={{ color: "blue" }} to="/abstract-submission">
                      Submit your Full paper Here.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullPaperGuidelines;
