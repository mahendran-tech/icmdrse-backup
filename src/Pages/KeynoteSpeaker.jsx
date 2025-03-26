import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Team1 from "../Components/Team/Team1";
import {Helmet} from "react-helmet-async";
const KeynoteSpeaker = () => {
  return (
    <>
      <Helmet>
        <title>
          Keynote Speakers | ICMDRSE 2025 - Industrial Leaders in Technology
        </title>
        <meta
          name="description"
          content="Explore the expertise of ICMDRSE 2025 keynote speakers, top professionals in engineering and technology fields, presenting their latest findings and breakthroughs"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Keynote Speakers"
        />
        <Team1 isShow={false} />
      </div>
    </>
  );
};

export default KeynoteSpeaker;
