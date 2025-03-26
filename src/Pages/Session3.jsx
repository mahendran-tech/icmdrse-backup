import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent2 from "../Components/Icmdrse/TopContent2";
import WhoCanJoin from "../Components/Icmdrse/WhoCanJoin";
import SustainableGoalsSection from "../Components/Icmdrse/SustainableGoalsSection";
import Objectives from "../Components/Icmdrse/Objectives";
import ConferenceBenefitsSection from "../Components/Icmdrse/ConferenceBenefitsSection";
import AuthorGuidelines from "../Components/Icmdrse/AuthorGuidelines";
import FullPaperGuidelines from "../Components/Icmdrse/FullPaperGuidelines";
import SessionLists from "../Components/Icmdrse/SessionLists";
import TracksSection from "../Components/Icmdrse/TracksSectio";
import SessionSpk from "../Components/Icmdrse/SessionSpk";
import {Helmet} from "react-helmet-async";
const goals = [
  {
    title: "Goal 4: Quality Education",
    image: "assets/img/goal-4.jpg",
    details: [
      "Ensuring inclusive, equitable, and accessible education to empower individuals and foster lifelong learning.",
    ],
  },
  {
    title: "Goal 8: Decent Work and Economic Growth",
    image: "assets/img/goal-8.jpg",
    details: [
      "Creating inclusive job opportunities, fair wages, and sustainable economic growth for global prosperity.",
    ],
  },
  {
    title: "Goal 9: Industry, Innovation, and Infrastructure",
    image: "assets/img/goal-9.jpg",
    details: [
      "Building resilient infrastructure, fostering innovation, and promoting sustainable industrial growth.",
    ],
  },
  {
    title: "Goal 10: Reduced Inequalities",
    image: "assets/img/goal-10.jpg",
    details: [
      "Bridging economic, social, and political disparities to promote equity and inclusion worldwide.",
    ],
  },
];

const Session3 = () => {
  const tracks = [
    "Internet of Things",
    "Blockchain",
    "Big Data",
    "Cloud Computing",
    "Edge Computing",
    "Machine to Machine",
    "Neuromorphic Systems",
    "Data Analytics",
    "Mobile Applications",
    "Digital Transformation",
    "Software Engineering and Quality",
    "Nanotechnology",
    "Analytics",
    "Distance Education",
    "Emerging Technologies",
    "E-learning",
    "Language Education",
    "ICT Education",
    "Special Education, Learning Difficulties and Learner Diversity",
    "Imaginative Education",
  ];

  return (
    <>
      <Helmet>
        <title>
          Education & Technology Conference | Call For Paper | ICMDRSE 2025
        </title>
        <meta
          name="description"
          content="Join ICMDRSE 2025 to explore the latest developments and research in engineering, social science and humanities conference. Discover key insights on Innovative In Education & Technology Trends is contribution to the Sustainable Development Goals from leading experts"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Physical and Life science"
        />
        <TopContent2
          title="Session Overview"
          content=" The forthcoming <b> Engineering, Social Science, and Humanities Conference (ICMDRSE-2025)</b>  is designed to serve as a premier platform for esteemed Research Experts worldwide. Attendees can anticipate unparalleled opportunities to network, gain invaluable insights, showcase their hidden potential, present significant research findings, and receive due credit and recognition for their diligent work. With an overarching theme centred on preparing for a sustainable future, the conference aims to pave the way for a healthier and brighter tomorrow for generations to come."
          content2="Prepare to embark on an extraordinary journey of research innovation, collaboration, and enlightenment as we collectively strive to shape the future and redefine the very essence of scholarly achievement. ICMDRSE-2025 cordially invites submissions of full papers and abstracts across a spectrum of sessions, including (but not limited to) the following:"
        />

        <SustainableGoalsSection
          title="Education & Technology Trends is contribution"
          goals={goals}
        />
        <WhoCanJoin>
          <TracksSection tracks={tracks} />
        </WhoCanJoin>

        <SessionSpk />

        <div className="container">
          <div className="row border border-1 p-4 rounded mt-4">
            {/* <h5>Key Themes </h5> */}
            <Objectives
              title="Key Themes"
              description=""
              objectives={[
                {
                  title: "Interdisciplinary Insights:",
                  description:
                    "<br/> The session covering both sustainability and physical/life sciences offer researchers valuable interdisciplinary perspectives, fostering a deeper understanding of the complex interactions between environmental factors, biological systems, and human activities. This interdisciplinary approach can lead to innovative solutions for addressing sustainability challenges.",
                },

                {
                  title: "Holistic Understanding:",
                  description:
                    "<br/> Researchers attending this session would gain a holistic understanding of the interconnectedness between natural processes, ecosystems, and human societies. This comprehensive perspective enables them to develop more effective strategies for promoting sustainability and mitigating environmental impacts.",
                },
                {
                  title: "Collaborative Opportunities:",
                  description:
                    "<br/> The conference provides a platform for researchers from diverse backgrounds to collaborate on multidisciplinary projects that integrate concepts from sustainability and physical/life sciences. Collaborative efforts can lead to synergistic outcomes, such as novel research findings, innovative technologies, and sustainable practices that benefit both the environment and society.",
                },
                {
                  title: "Practical Applications:",
                  description:
                    "<br/> Sessions offer insights into practical applications of scientific research in addressing real-world sustainability challenges. Researchers can learn about case studies, best practices, and success stories that demonstrate how scientific knowledge and technological innovations can be leveraged to achieve sustainability goals, informing their own research and project implementation strategies.",
                },
              ]}
              showImage={false}
            />
          </div>
        </div>

        <ConferenceBenefitsSection />

        <AuthorGuidelines />
        <FullPaperGuidelines />
        <SessionLists />
      </div>
    </>
  );
};

export default Session3;
