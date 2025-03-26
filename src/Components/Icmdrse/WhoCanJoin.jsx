import React from "react";
import { Container, Row } from "react-bootstrap";

const WhoCanJoin = ({ children }) => {
  return (
    <div className="bg-image-who">
      <Container className="py-5">
        <div className="widget-content row">
          <div className="col-lg-4">
            <div className="post d-flex">
              <div className="thumb">
                <img src="assets/img/1000.png" alt="" />
              </div>
              <h6 className="d-flex align-items-center">Research Scholars</h6>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="post d-flex">
              <div className="thumb">
                <img src="assets/img/1001.png" alt="" />
              </div>
              <h6 className="d-flex align-items-center">Technology Experts</h6>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="post d-flex">
              <div className="thumb">
                <img src="assets/img/1002.png" alt="" />
              </div>
              <h6 className="d-flex align-items-center">
                Students &amp; Alumini’s
              </h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post d-flex">
              <div className="thumb">
                <img src="assets/img/1003.png" alt="" />
              </div>
              <h6 className="d-flex align-items-center">
                Editorial Board Members of Journals
              </h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post d-flex">
              <div className="thumb">
                <img src="assets/img/1004.png" alt="" />
              </div>
              <h6 className="d-flex align-items-center">
                Government Officials
              </h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="post d-flex">
              <div className="thumb">
                <img src="assets/img/1005.png" alt="" />
              </div>
              <h6 className="d-flex align-items-center">
                Industry Professionals
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          {children}
        </div>
      </Container>
    </div>
  );
};

export default WhoCanJoin;
