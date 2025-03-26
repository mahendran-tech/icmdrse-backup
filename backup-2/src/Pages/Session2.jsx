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

const goals = [
  {
    title: "Goal 3: Good Health and Well-being",
    image: "assets/img/goal-3.jpg",
    details: [
      "Promoting universal healthcare, disease prevention, and mental well-being to ensure healthy lives for all ages.",
    ],
  },
  {
    title: "Goal 6: Clean Water and Sanitation",
    image: "assets/img/goal-6.jpg",
    details: [
      "Securing safe drinking water, sanitation, and sustainable water management for global health and ecosystems.",
    ],
  },
  {
    title: "Goal 13: Climate Action",
    image: "assets/img/goal-13.jpg",
    details: [
      "Urging urgent measures to mitigate climate change, enhance resilience, and protect ecosystems.",
    ],
  },
  {
    title: "Goal 14: Life Below Water",
    image: "assets/img/goal-14.jpg",
    details: [
      "Preserving marine biodiversity, reducing ocean pollution, and ensuring sustainable aquatic ecosystems.",
    ],
  },
  {
    title: "Goal 15: Life on Land",
    image: "assets/img/goal-15.jpg",
    details: [
      "Conserving forests, preventing land degradation, and protecting biodiversity for ecological balance.",
    ],
  },
];

const Session2 = () => {
  const tracks = [
    "Evolution",
    "Neuroscience",
    "Agriculture",
    "Aquaculture",
    "Archaeology",
    "Astronomy",
    "Biodiversity",
    "Chemistry",
    "Earth Sciences",
    "Ecology",
    "Environment",
    "Forestry",
    "GIS",
    "Genetics",
    "Meteorology",
    "Oceanography",
    "Physics",
    "Waste Management",
    "Biology",
  ];

  return (
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
        title="Physical and Life science"
        goals={goals}
      />
      <WhoCanJoin>
        <TracksSection tracks={tracks} />
      </WhoCanJoin>

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
  );
};

export default Session2;
