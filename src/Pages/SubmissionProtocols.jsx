import React, {useContext} from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
import Objectives from "../Components/Icmdrse/Objectives";
import {Link} from "react-router-dom";
import ObjLinks from "../Components/Icmdrse/ObjLinks";
import {DataContext} from "../Appcontext/DataContext";
import {Helmet} from "react-helmet-async";
const SubmissionProtocols = () => {
  const {abstractLink} = useContext(DataContext);
  return (
    <>
      <Helmet>
        <title>
          How to Submit Abstract Submission | Guidelines| ICMDRSE 2025
        </title>
        <meta
          name="description"
          content="Follow the guidelines for submitting your research abstract for ICMDRSE 2025 and Showcase your work in multidisciplinary areas like Education, Engineering, and Technology"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Submission Protocols"
        />
        <TopContent title="Submission Protocols" />
        <div className="container">
          <div className="row border border-1 p-4 rounded">
            <h5>Guidelines for Abstract Submission: Template download </h5>
            <Objectives
              title=""
              description=""
              objectives={[
                {
                  title: "Language:",
                  description: "Abstracts must be written in English.",
                },

                {
                  title: "Length:",
                  description:
                    "The abstract should be limited to one paragraph, with a word count of 200-250 words.",
                },
                {
                  title: "Format:",
                  description:
                    "Submit your abstract as a Microsoft Word (.doc or .docx) document.",
                },
                {
                  title: "Content:",
                  description:
                    "The abstract should provide a concise and informative summary of the original work. <br> - Include a brief biography of the presenting author, following the example provided in the submission template.",
                },
                {
                  title: "Formatting:",
                  description:
                    "<br/> - Center-align the title, author's names, and affiliations. <br/> - The presenting author's name should be underlined.",
                },
                {
                  title: "Submission:",
                  description:
                    "Submit your abstract through the designated submission portal.",
                },
                {
                  title: "Acknowledgment:",
                  description:
                    "After submission, you will receive an acknowledgment email within three working days.",
                },
              ]}
              showImage={false}
            />
            <h6>
              Please ensure that your abstract follows these guidelines for
              successful submission.
            </h6>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-sm-12">
                <div className="cs_post_details ">
                  <blockquote className="d-flex  justify-content-center align-item-center">
                    <div className="d-flex gap-1 flex-column justify-content-center align-item-center">
                      <div className="d-flex  justify-content-center align-item-center">
                        {" "}
                        <a
                          href={abstractLink}
                          className="cs_btn cs_style_1 wow fadeInLeft "
                          style={{cursorPointer: "pointer"}}
                          // onClick={() => {
                          //   setActive("monthly");
                          //   window.scrollTo({top: 300, behavior: "smooth"});
                          // }}
                        >
                          <span>Sample Abstract template </span>
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="row border border-1 p-4 rounded mt-4">
            <h5>Process of Evaluation </h5>
            <Objectives
              title=""
              description=""
              objectives={[
                {
                  title: "Submission",
                  description:
                    "Authors submit their manuscript or abstract for evaluation.",
                },

                {
                  title: "Rapid Double-Blind Peer Evaluation",
                  description:
                    "The submission undergoes a rigorous double-blind peer review process within 2-3 days.",
                },
                {
                  title: "Results Notification",
                  description:
                    "Evaluation results are provided within 2-4 days of abstract submission.",
                },
                {
                  title: "Amended Abstract Submission (If Needed)",
                  description:
                    "Authors have a one-week window to revise and resubmit their abstract if amendments are required.",
                },
                {
                  title: "Reviewer Suggestions for Improvement",
                  description:
                    "Rejected manuscripts are returned with detailed reviewer suggestions to guide improvements",
                },
              ]}
              showImage={false}
            />
          </div>

          <div className="row border border-1 p-4 rounded mt-4">
            <h5>Full Paper Submission Guidelines </h5>
            <ObjLinks
              title=""
              description=""
              objectives={[
                {
                  title: "Length",
                  description:
                    "The manuscript should be 6-8 pages long in a double-column format.",
                },

                {
                  title: "Language",
                  description:
                    "Ensure the manuscript is written in error-free English.",
                },
                {
                  title: "Visuals",
                  description:
                    "Include high-quality tables, figures, and images, properly named and labeled.",
                },
                {
                  title: "Keywords",
                  description:
                    "Provide keywords in lowercase, separated by commas (except for proper nouns and scientific names).",
                },
                {
                  title: "Affiliations",
                  description:
                    "Mention the country as part of the affiliation names.",
                },
                {
                  title: "Content Sections",
                  description: (
                    <>
                      The manuscript should include the following sections:
                      <br />
                      <div className="d-flex gap-40 mt-3 ">
                        {" "}
                        <ul>
                          <li>
                            <i className="bi bi-dot text-primary"></i>{" "}
                            Background
                          </li>
                          <li>
                            <i className="bi bi-dot text-primary"></i>{" "}
                            Motivation
                          </li>
                          <li>
                            <i className="bi bi-dot text-primary"></i> Objective
                          </li>
                          <li>
                            <i className="bi bi-dot text-primary"></i> Statement
                            of Contribution
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <i className="bi bi-dot text-primary"></i> Methods
                          </li>
                          <li>
                            <i className="bi bi-dot text-primary"></i> Results
                          </li>
                          <li>
                            <i className="bi bi-dot text-primary"></i>{" "}
                            Discussions
                          </li>
                          <li>
                            <i className="bi bi-dot text-primary"></i>{" "}
                            Conclusions
                          </li>
                        </ul>{" "}
                      </div>
                    </>
                  ),
                },
                {
                  title: "Submission",
                  description: (
                    <>
                      After preparing your full paper as per the above
                      instructions,{" "}
                      <Link className="text-primary" to="/abstract-submission">
                        Submit your Full Paper Here.
                      </Link>
                    </>
                  ),
                },
              ]}
              showImage={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionProtocols;
