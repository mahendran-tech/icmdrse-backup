import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import CommonContent from "../Components/Common/CommonContent";
import { aboutImg } from "../assets/assets";
import Objectives from "../Components/Icmdrse/Objectives";

const AboutIferp = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="About IFERP" />

      <CommonContent
        img1={aboutImg.about_3}
        title="About IFERP"
        content="The IFERP Academy is a committed professional organization that advances engineering, science, and technology. IFERP anticipates a global scientific community brought together by digital innovation. This organization puts a great emphasis on promoting research activities, communicating the newest insights, and driving industrial trends. IFERP has built strong networks throughout Asia, the Middle East, Europe, and nations like Iraq, Malaysia, Australia, and more. They have incorporated networking, research support, publications, and other worked in other scientific areas."
        content2="IFERP excels in organizing International Conferences that connect researchers worldwide. It holds important international webinars, publishes journals and publications that are indexed by Web of Science and SCOPUS, and provides thorough research assistance and guidance. Engaging in Youth Empowerment projects and encouraging Industry-Institute Interaction are key components of IFERP's goal. The organization is committed to enabling professionals using faculty advancement, skill development, and persistent research and publication initiatives."
        height="400px"
      />

      <div className="d-flex justify-content-center aligin-items-center">
        <img
          src="https://www.iferp.in/assets/images/fdsfds.jpg"
          alt=""
          width={"70%"}
        />
      </div>

      <Objectives
        title="WHAT IFERP DO"
        description="TIFERP is committed to improving the professional experience by providing a world-class platform to professionals. Their dedication extends to the following activities:"
        objectives={[
          {
            title: "Academic Resource Accessibility:",
            description:
              "They make academic resources and support available to aspiring scholars in rural as well as urban locations."
          },
          {
            title: "Diverse Educational Programs:",
            description:
              "They organize a wide range of educational events such as workshops, conferences, webinars, seminars, guest lectures, short-term training programs, and faculty development programs."
          },
          {
            title: "Drive Innovation:",
            description:
              "They work hard to foster curiosity and creativity, and stay up to date on the newest trends and advancements in the dynamic field of Engineering, Science, and Technology Knowledge Sharing and Collaboration: They believe in the strength of the exchange of knowledge and actively collaborate with institutions, organizations, and associations to contribute to our shared objective of a better future."
          },
          {
            title: "Publication & Recognition:",
            description:
              "They also provide opportunities for research articles to be published in reputable journals and actively promote and encourage transdisciplinary research activities."
          }
        ]}
        showImage={false}
      />
      <div className="my-3">
        <Objectives
          title="Mission & Vision"
          description=""
          objectives={[
            {
              title: "Mission :",
              description:
                "Upskilling the knowledge hub through technological innovation and excellence for the benefit of humanity"
            },

            {
              title: "Vision :",
              description:
                "A Digitally equipped robust, dynamic & swift professional community integrating academics & industry for upgraded technical knowledge implementation."
            }
          ]}
          showImage={false}
        />
      </div>
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-12 ">
            <p>
              <b>Website :</b>
              <a
                href="https://www.iferp.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}https://www.iferp.in/
              </a>
            </p>
            <p>
              <b>Membership :</b>
              <a
                href="https://dashboard.iferpmembership.in/signup.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dashboard.iferpmembership.in/signup.php
              </a>
            </p>
            <p>
              <b>Premium Membership :</b>
              <a
                href="https://premium.iferpmembership.in/signin.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://premium.iferpmembership.in/signin.php
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutIferp;
