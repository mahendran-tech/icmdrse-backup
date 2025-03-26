import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import SessionAbstract from "../Components/Icmdrse/SessionAbstract";
import ConferenceAgenda from "../Components/Icmdrse/ConferenceAgenda";
import {Helmet} from "react-helmet-async";
const TentativeProgram = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Tentative Program Schedule | ICMDRSE 2025</title>
        <meta
          name="description"
          content="Explore the tentative program for the International Conference on Multidisciplinary Research in Science and Engineering (ICMDRSE). Stay informed about session timings, keynote speakers, workshops, and networking opportunities designed to enhance your conference experience."
        />
      </Helmet>
      <div>
        <div className="serviceDetails">
          <BreadCumb
            bgImg="assets/img/page_heading_1.jpg"
            Title="PROGRAMME OVERVIEW"
          />
          <div>
            <ConferenceAgenda />
          </div>
          <SessionAbstract />
        </div>
      </div>
    </>
  );
};

export default TentativeProgram;
