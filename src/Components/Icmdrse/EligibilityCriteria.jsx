import React from "react";
import {Container} from "react-bootstrap";
import TopContent from "./TopContent";
import {aboutImg} from "../../assets/assets";
import Supporting from "./Supporting";

const EligibilityCriteria = ({setActive}) => {
  const supportingData = {
    imgSrc: aboutImg.roles,
    sectionTitle: "Roles & Responsibilities",

    listItems: [
      {
        title: "Conference Management:",
        description:
          "Oversee conference tasks and committee operations to ensure the successful execution of the program and scientific agenda.",
      },
      {
        title: "Academic Enhancement:",
        description:
          "Identify and invite experts in relevant research areas to elevate the conference’s academic value.",
      },
      {
        title: "Sponsorship & Exhibitions:",
        description:
          "Secure sponsors and exhibitors, and develop B2B opportunities to ensure financial support and engagement",
      },
      {
        title: "Program Planning:",
        description:
          "Ensure the program adheres to the planned dates and topics, and facilitate the inclusion of special guests and keynote speakers.",
      },
      {
        title: "Session Organization:",
        description:
          "Coordinate interactive sessions and introduce moderators and speakers to foster engagement.",
      },
      {
        title: "Keynote Speaker Coordination: ",
        description:
          "Identify and invite prominent keynote speakers from relevant industries.",
      },
    ],
  };

  return (
    <Container>
      <div>
        <TopContent
          title={""}
          content="We appreciate your interest in volunteering! However, to maintain a cohesive and impactful committee, we seek individuals with a passion for our mission and the relevant expertise. Below are the eligibility criteria for joining our committee"
        />
        <div className="row">
          <h5> Eligibility criteria</h5>
          <div className="col-lg-6 col-sm-12">
            <ul className="list-group list-edit">
              <li className="list-group-item">
                Professors/Deans/Heads of Departments
              </li>
              <li className="list-group-item">
                Associate Professors/Academicians with 8+ years of experience
              </li>
              <li className="list-group-item">
                Assistant Professors with 10+ years of experience
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12">
            <ul className="list-group list-edit ">
              <li className="list-group-item">
                Editorial Board Members of prestigious journals
              </li>
              <li className="list-group-item">Journal Reviewers</li>
              <li className="list-group-item">
                Industry Experts with 8+ years of experience
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <Supporting {...supportingData} />

          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-sm-12">
              <div className="cs_post_details">
                <blockquote>
                  <div className="d-flex gap-3 justify-content-center align-item-center">
                    Are you ready to join our team and make an impact?
                    <div>
                      {" "}
                      <a
                        className="cs_btn cs_style_1 wow fadeInLeft"
                        onClick={() => {
                          setActive("monthly");
                          window.scrollTo({top: 300, behavior: "smooth"});
                        }}>
                        <span>Apply Now</span>
                        <i className="bi bi-arrow-right" />
                      </a>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div />
    </Container>
  );
};

export default EligibilityCriteria;
