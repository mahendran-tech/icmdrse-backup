import React from "react";
import {Card} from "react-bootstrap";

const SessionSpk = () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center ">
            <h4 className="text-center mb-3"> Session Speaker</h4>
            <Card border="primary" style={{width: "18em"}}>
              <Card.Header>
                <div className="d-flex justify-content-center align-content-center">
                  <img
                    className="rounded"
                    src="assets/img/icmdrse-2.png"
                    alt=""
                    style={{width: "150px"}}
                  />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title
                  className="text-center"
                  style={{fontSize: "16px", color: "#f60339"}}>
                  {"Dr. Diana Teresa Parra-Sanchez"}
                  <p
                    className="text-center"
                    style={{fontSize: "14px", color: "#333"}}>
                    <strong>Scientific Director</strong>
                    Centro de Innovación y Productividad InnovaCTIon <br />{" "}
                    Colombia.
                  </p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionSpk;
