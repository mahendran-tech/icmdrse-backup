import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
// import AbstractForm from "../Components/Form/AbstractForm";
import ConferenceForm from "../Components/Form/ConferenceForm";

const AbstractSub = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="assets/img/page_heading_1.jpg"
        Title="Abstract/Paper Submission"
      />
      <TopContent
        title="Abstract/Paper Submission"
        content="Do you want to share your research with the world? Whether it's an abstract or a full paper, we would be thrilled to showcase your work. Join an esteemed group of contributors and present your ideas on our international platform. Be part of something exceptional—submit your research today!"
        hltext="Present Your Research to a Global Audience!"
      />

      <div className="container">
        <h4 className="text-center">Paper Submission</h4>
        <div className="border border-1 py-5 px-4 ">
          {/* <AbstractForm /> */}
          <ConferenceForm />
        </div>
      </div>
    </div>
  );
};

export default AbstractSub;
