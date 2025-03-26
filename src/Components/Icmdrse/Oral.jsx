import React from "react";
import CommenContent from "../Common/CommonContent";
import { aboutImg } from "../../assets/assets";
import Objectives from "./Objectives";

const Oral = () => {
  return (
    <div>
      <CommenContent
        title="Oral Presentation"
        img1={aboutImg.oralImg}
        hltext="Present Your Ideas with Passion and Impact!"
        content="Take the stage at our conference and share your research through an engaging oral presentation. Use dynamic slides to bring your insights to life and captivate the audience. This is your opportunity to showcase your work and inspire others with your enthusiasm!"
        height="50%"
      />
      <Objectives
        title="Presentation Tips:"
        description=""
        objectives={[
          {
            title: "Maintain Clear Flow:",
            description:
              "Ensure a smooth transition from one slide to the next."
          },

          {
            title: "Use Visuals:",
            description:
              " Incorporate charts and graphs to highlight key points for better audience comprehension."
          },
          {
            title: "Keep It Simple:",
            description:
              "Avoid excessive text. Follow the 6-6-6 rule—max 6 words per bullet, 6 bullets per slide, and 6 text slides in a row."
          },
          {
            title: "Limit Flashy Effects:",
            description:
              "Avoid gifs, bright colors, and complex visuals that may distract or confuse the audience."
          },
          {
            title: "Choose Readable Fonts:",
            description:
              "Use high-contrast, easy-to-read fonts (around 30-point size). Avoid font variations, all caps, or italics."
          },
          {
            title: "Respect Time:",
            description: "Keep your presentation within 8-10 minutes."
          }
        ]}
        showImage={false}
      />
    </div>
  );
};

export default Oral;
