import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import {Container} from "react-bootstrap";
import EventForm from "../Components/Form/EventForm";

const ExclusiveEvent = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="assets/img/page_heading_1.jpg"
        Title="Pre-Conference Webinar"
      />

      <Container>
        <div className="row my-5 d-flex justify-content-center align-content-center">
          <div className="col-lg-12 ">
            <h4 className="text-center">Pre-Conference Webinar</h4>
            <h5 className="text-center">
              Webinar Title : Grant Writing: Best Practices for Success
            </h5>
            <p
              className="text-center"
              style={{fontSize: "18px", fontWeight: "bold"}}>
              Date : 12/04/2025 | Time : 03:30 PM to 04:30 PM IST
            </p>
          </div>
        </div>
      </Container>

      <EventForm />
      <div className="cs_height_50 cs_height_lg_0" />
    </div>
  );
};

export default ExclusiveEvent;
