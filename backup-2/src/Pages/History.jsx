import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Nav from "react-bootstrap/Nav";
import {Tab} from "react-bootstrap";
import HistoryDetails from "../Components/BlogDetails/HistoryDetails";

const History = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="History" />

      <div className="container history-malaysia">
        <div className="cs_height_120 cs_height_lg_80" />
        <Tab.Container defaultActiveKey="home">
          <Nav variant="pills" className="mb-3 d-flex gap-2">
            <Nav.Item>
              <Nav.Link eventKey="home">
                <div className=" text-center d-flex flex-column justify-content-center">
                  {" "}
                  <img
                    src="assets/img/twin-tower.svg"
                    alt=""
                    className="time-line-img"
                  />
                  2024
                </div>{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-2">
                <div className=" text-center d-flex flex-column justify-content-center">
                  {" "}
                  <img
                    src="assets/img/tower.svg"
                    alt=""
                    className="time-line-img"
                  />
                  2023
                </div>{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-3">
                <div className=" text-center d-flex flex-column justify-content-center">
                  {" "}
                  <img
                    src="assets/img/007-mosque.svg"
                    alt=""
                    className="time-line-img"
                  />
                  2022
                </div>{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-4">
                <div className=" text-center d-flex flex-column justify-content-center">
                  {" "}
                  <img
                    src="assets/img/021-temple.svg"
                    alt=""
                    className="time-line-img"
                  />
                  2021
                </div>{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-5">
                <div className=" text-center d-flex flex-column justify-content-center">
                  {" "}
                  <img
                    src="assets/img/039-malacca.svg"
                    alt=""
                    className="time-line-img"
                  />
                  2020
                </div>{" "}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-6">
                <div className=" text-center d-flex flex-column justify-content-center">
                  {" "}
                  <img
                    src="assets/img/037-royal.svg"
                    alt=""
                    className="time-line-img"
                  />
                  2019
                </div>{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Content below the tabs */}
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <HistoryDetails />
            </Tab.Pane>
            <Tab.Pane eventKey="option-2">
              <p>This is the Option 2 content.</p>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default History;
