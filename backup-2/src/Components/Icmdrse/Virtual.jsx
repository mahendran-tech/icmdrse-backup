import React from "react";
import { aboutImg } from "../../assets/assets";
import CommenContent from "../Common/CommonContent";
import Objectives from "./Objectives";

const Virtual = () => {

    const content3 = (
        <>
          <b>
            <i className="bi bi-brightness-low-fill"></i> Live Video Presentation
          </b>
          <br />
          Join the conference remotely and present your research live via video.
        </>
      );
      const content2 =(
        <>
        <b>
          <i className="bi bi-brightness-low-fill"></i> PowerPoint Virtual Presentation
        </b>
        <br />
        Present your research via pre-recorded PowerPoint slides.
      </>
      )
      const content4 = (<>
      <b>Time Limit:</b> Your presentation should last between <b> 8-10 minutes.</b>
      </>)
  return (
    <div className="">
      <CommenContent
        title="Virtual presentation"
        img1={aboutImg.virtualImg}
       
        content="If you’re unable to attend the conference in person but still want your work to be presented and published, we offer convenient virtual presentation options for the 7th ICMDRSE. You can choose from two formats:"
        content2={content2}
        content3={content3}
        height="50%"
      />
      <div> 
       <Objectives
        title="Live Video Presentation Tips"
        description=""
        additionalContent={content4 }
        objectives={[
          {
            title: "Set the Scene:",
            description:
              "Choose a clean, professional background and ensure good lighting that highlights your face."
          },

          {
            title: "Stable Connection:",
            description:
              "Connect directly to the modem or use a reliable and strong Wi-Fi connection for the best internet experience."
          },
          {
            title: "Test and Rehearse:",
            description:
              "Practice your presentation multiple times with the same equipment and internet connection you’ll use during the live session."
          },
          {
            title: "Webcam Position: ",
            description:
              "Adjust your webcam so it captures your face, neck, and shoulders clearly."
          },
          {
            title: "Clear Audio:",
            description:
              "Ensure your voice is clear and easy to understand. Consider using external microphones or headphones for better sound quality."
          },
          {
            title: "Be Yourself:",
            description: "Authenticity matters, so let your personality shine through. Enjoy the process and have fun presenting!"
          }
        ]}
        showImage={false}
      />
      </div>
    </div>
  );
};

export default Virtual;
