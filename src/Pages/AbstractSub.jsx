import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
// import AbstractForm from "../Components/Form/AbstractForm";
import ConferenceForm from "../Components/Form/ConferenceForm";
import {Helmet} from "react-helmet-async";
const AbstractSub = () => {
  return (
    <>
      <Helmet>
        <title>Abstract Submission |Call For Paper | ICMDRSE 2025</title>
        <meta
          name="description"
          content="Submit abstracts to ICMDRSE 2025 and present innovative research in Education, Engineering, and Technology field"
        />
      </Helmet>
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
    </>
  );
};

export default AbstractSub;
