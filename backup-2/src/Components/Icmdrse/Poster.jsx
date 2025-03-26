import React from "react";
import CommenContent from "../Common/CommonContent";
import { aboutImg } from "../../assets/assets";
import Objectives from "./Objectives";

const Poster = () => {
  return (
    <div>
      <CommenContent
        title="Poster Presentation"
        img1={aboutImg.oralImg}
        hltext="Present Your Ideas with Passion and Impact!"
        content="As a poster presenter, you’ll have the opportunity to showcase your research visually. In a poster session, there is no formal oral presentation—each author is given a dedicated display space to present their poster."
        content2="Your poster should effectively communicate your ideas using diagrams, graphics, data, photos, and concise text. Make sure it is self-explanatory, so attendees can understand your work at a glance."
        content3="While your poster does the talking, you should be present during specific times, such as refreshment breaks and the poster session, to engage with viewers, answer questions, and discuss your research in more detail."
        height=""
      />

      <Objectives
        title="Guidelines for Poster Presentation"
        description=""
        objectives={[
          {
            title: "Poster Size",
            description:
              " <br/> Dimensions: Posters should be 2x3 feet (Width: 2 feet, Height: 3 feet). Please ensure your poster does not exceed these dimensions. "
          },

          {
            title: "Poster Submission",
            description:
              "<br/> Please submit your poster at the registration table upon arrival."
          },
          {
            title: "Poster Viewing & Evaluation",
            description:
              "<br/> A designated time for poster viewing will be included in the conference schedule. During this session, you are expected to be present by your poster for discussions and questions. <br/> Engage with attendees by explaining your work, answering questions, sharing your contact details, and delving deeper into the topic of your presentation."
          },
          {
            title: "Time Limit",
            description:
              "<br/> The poster viewing session will have a specific time limit, which will be communicated in the schedule. Ensure you’re available during this time to engage with the audience."
          }
        ]}
        showImage={false}
      />
    </div>
  );
};

export default Poster;
