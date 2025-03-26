import React, {useContext} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import {DataContext} from "../../Appcontext/DataContext";

const SessionAbstract = () => {
  const {papers} = useContext(DataContext);

  if (!papers) {
    <p>Loading papers...</p>;
  }

  return (
    <section className="cs_tabs cs_style_1 position-relative">
      <div className="cs_height_60 cs_height_lg_60" />
      <Container>
        <div className="cs_section_heading cs_style_1 cs_mb_10 text-center">
          <SectionTitle2 Title="Scientific Session" isCenter="true" />
        </div>
        {papers.map((items, index) => (
          <div
            key={index}
            className="border border-2 shadow p-3 rounded-5 mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-12 mt-3  d-flex justify-content-center aligin-items-center mb-4">
                <h6 className="p-2 mx-1 title-border w-100">
                  <span
                    className="fw-bold "
                    style={{
                      fontSize: "18px",
                      color: "#f60339",
                      lineHeight: "30px",
                    }}>
                    Paper Title :
                  </span>{" "}
                  {items.paperTitle}
                </h6>
              </div>
              <Col lg={3} sm={12}>
                <Card border="primary" style={{width: "100%"}}>
                  <Card.Header>
                    <div className="d-flex justify-content-center align-content-center">
                      <img
                        className="rounded"
                        src={items.imgUrl}
                        alt=""
                        style={{width: "150px"}}
                      />
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title
                      className="text-center"
                      style={{fontSize: "16px", color: "#f60339"}}>
                      {items.authorName}
                      <p
                        className="text-center"
                        style={{fontSize: "14px", color: "#333"}}>
                        {items.country}
                      </p>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={9} sm={12}>
                <h5
                  className="mb-1"
                  style={{fontSize: "18px", color: "#f60339"}}>
                  Abstract :
                </h5>
                <div
                  className="mt-2 "
                  style={{
                    textAlign: "justify",
                    fontSize: "15px",
                    lineHeight: "25px",
                  }}>
                  {items.abstract}
                  {items.keywords && (
                    <>
                      <hr />{" "}
                      <p>
                        {" "}
                        <span className="fw-bold ">keywords </span>{" "}
                        {items.keywords}
                      </p>{" "}
                    </>
                  )}
                  {items.indexitem && (
                    <>
                      <hr />{" "}
                      <p>
                        {" "}
                        <span className="fw-bold ">Index Terms: </span>{" "}
                        {items.indexitem}
                      </p>{" "}
                    </>
                  )}
                </div>
              </Col>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default SessionAbstract;
