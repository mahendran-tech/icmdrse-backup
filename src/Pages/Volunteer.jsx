import React, {useState} from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import ReuseCom from "../Components/Icmdrse/ReuseCom";
import BlocksOuter from "../Components/Icmdrse/BlocksOuter";
import Objectives from "../Components/Icmdrse/Objectives";
import ApplyForm from "../Components/Form/ApplyForm";
import {aboutImg} from "../assets/assets";

const Volunteer = () => {
  const [isActive, setIsActive] = useState("monthly");
  const researchData = {
    imgSrc: aboutImg.volunter,
    sectionTitle: "Why Volunteer?",
    Title: "Volunteer Opportunity at ICMDRSE-2025",

    listItems: [
      {
        title: " Contribute to Knowledge Advancement:",
        description:
          " Be an integral part of an international conference that aims to advance knowledge in multidisciplinary perspectives in engineering and technology.",
      },
      {
        title: " Networking Opportunities:",
        description:
          "Connect with professionals, researchers, and experts in your field.",
      },
      {
        title: "Skill Development:",
        description:
          "Gain hands-on experience in event management, coordination, and communication.",
      },
      {
        title: "Free Access:",
        description:
          "Volunteers will have the opportunity to attend certain sessions of the conference for free.",
      },
      {
        title: "Certification:",
        description:
          "Volunteers will be provided with the certificate for their active participation as an volunteers.",
      },
    ],
    conclusion: "Let us support you at every step of your research journey!",
  };

  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="assets/img/page_heading_1.jpg"
        Title="Volunteer Guidelines"
      />
      <ReuseCom {...researchData} />;
      <section className="cs_tabs cs_style_1 position-relative">
        <div className="container">
          <div className="cs_height_120 cs_height_lg_80" />

          <ul className="cs_tab_links justify-content-start cs_style_1 cs_type_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mp_0 wow fadeInUp">
            <li
              className={`${isActive === "monthly" ? "active" : ""}`}
              onClick={() => setIsActive("monthly")}>
              <a>
                Volunteer Online <br /> Roles and Responsibilities
              </a>
            </li>
            <li
              className={`${isActive === "yearly" ? "active" : ""}`}
              onClick={() => setIsActive("yearly")}>
              <a>
                Volunteer in the Conference Hosting Country <br /> Roles and
                Responsibilities
              </a>
            </li>
          </ul>
          <div className="cs_tab_body">
            <div className={`cs_tab ${isActive === "monthly" ? "active" : ""}`}>
              <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
                <div className="col-lg-12">
                  <BlocksOuter />
                </div>
              </div>
            </div>
            <div className={`cs_tab ${isActive === "yearly" ? "active" : ""}`}>
              <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center" />
              <div className="col-lg-12">
                <BlocksOuter isProcessData={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row border border-1 py-3 px-2 rounded ">
          <Objectives
            title="Volunteer Requirements"
            description=""
            objectives={[
              {
                title: "Enthusiasm and Commitment:",
                description:
                  "A passion for contributing to the success of the conference and a commitment to fulfilling assigned duties.",
              },

              {
                title: "Good Communication Skills: ",
                description:
                  "Ability to interact with participants, speakers, and organizers effectively.",
              },
              {
                title: "Team Player:",
                description:
                  "Willingness to collaborate with other volunteers and conference organizers.",
              },
              {
                title: "Availability:",
                description:
                  "Commitment to being available on the conference dates (22nd - 23rd of May 2025) and possibly for pre-conference briefings.",
              },
            ]}
            showImage={false}
          />
        </div>
      </div>
      <div className="container">
        <div className="row border border-1 py-3 px-2 rounded ">
          <Objectives
            title="How to Apply"
            description="If you are interested in volunteering for ICMDRSE-2025, please follow these steps:"
            objectives={[
              {
                title: "Fill Out the Volunteer Application Form:",
                description: "Apply Now",
              },

              {
                title: "Good Communication Skills: ",
                description:
                  "Ability to interact with participants, speakers, and organizers effectively.",
              },
              {
                title: "Submit a Brief Statement of Interest: ",
                description:
                  "Tell us why you want to volunteer and what skills you can bring to the team.",
              },
              {
                title: " Resume or CV Submission:",
                description:
                  "Attach your resume or curriculum vitae to showcase your relevant experience.",
              },
              {
                title: "Application Deadline:",
                description:
                  "Applications must be submitted by 26th April 2025",
              },
            ]}
            showImage={false}
          />
        </div>
      </div>
      <div className="container">
        <ApplyForm />
      </div>
    </div>
  );
};

export default Volunteer;
