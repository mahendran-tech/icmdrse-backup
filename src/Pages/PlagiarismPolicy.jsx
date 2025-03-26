import React from "react";
import {aboutImg} from "../assets/assets";
import Supporting from "../Components/Icmdrse/Supporting";
import BreadCumb from "../Components/Common/BreadCumb";
import Objectives from "../Components/Icmdrse/Objectives";
import {Helmet} from "react-helmet-async";
const PlagiarismPolicy = () => {
  const supportingData = {
    imgSrc: aboutImg.about_3,
    sectionTitle: "TERMS and CONDITIONS ",
    description: "",
    listItems: [
      {
        title: "Review Responses:",
        description:
          "Authors must respond accurately and professionally to reviewer comments. Any form of malpractice, including unethical behavior, will not be tolerated.",
      },
      {
        title: "Payment:",
        description:
          "The publisher may request payment prior to publication. Payment is expected promptly upon receiving the invoice.",
      },
      {
        title: "Bank Charges:",
        description:
          "Registrants are responsible for covering any bank charges or fees associated with payments.",
      },
      {
        title: "Quality Standards:",
        description:
          "Papers containing plagiarism, poor-quality figures, flawed scientific content, or inconsistencies in quality may be rejected. Ensure your submission is original, well-structured, and of high quality for a successful review process.",
      },
    ],
    additionalContent:
      "By adhering to these guidelines, you help ensure a smooth and professional submission experience.",
  };

  return (
    <>
      <Helmet>
        <title>Plagiarism Policy | Terms and Conditions| ICMDRSE 2025</title>
        <meta
          name="description"
          content="Learn about ICMDRSE 2025's strict plagiarism policy, ensuring articles contain original content. Discover guidelines on ethical publishing practices and the importance of maintaining research integrity"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Plagiarism Policy"
        />
        <div>
          <div className="cs_height_50 cs_height_lg_50" />
          <Supporting {...supportingData} />
        </div>
        <div className="container">
          <div className="row border border-1 py-3 px-2 rounded ">
            <Objectives
              title="Plagiarism Policy"
              description=""
              objectives={[
                {
                  title: "",
                  description:
                    "Articles with a plagiarism level exceeding 20%, including references, will be rejected.",
                },

                {
                  title: "",
                  description:
                    "Copying content from other sources is strictly prohibited.",
                },
                {
                  title: "",
                  description:
                    "Submitted articles must consist of at least 80% original content to be considered for publication in our conferences and journals.",
                },
                {
                  title: "",
                  description:
                    "IFERP strongly discourages plagiarism in research articles, proposals, and theses submitted to us.",
                },
                {
                  title: "",
                  description:
                    "All articles undergo a plagiarism check before being reviewed by the editorial board.",
                },
                {
                  title: "",
                  description:
                    "Articles failing the plagiarism check will be rejected.",
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

export default PlagiarismPolicy;
