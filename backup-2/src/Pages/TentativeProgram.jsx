import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import SessionAbstract from "../Components/Icmdrse/SessionAbstract";
import ConferenceAgenda from "../Components/Icmdrse/ConferenceAgenda";

const TentativeProgram = () => {
  return (
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
  );
};

export default TentativeProgram;
