import React, {useState} from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
import {Container, Nav} from "react-bootstrap";
import {red} from "@mui/material/colors";
import PersonalVideoOutlinedIcon from "@mui/icons-material/PersonalVideoOutlined";
import Oral from "../Components/Icmdrse/Oral";
import Poster from "../Components/Icmdrse/Poster";
import Virtual from "../Components/Icmdrse/Virtual";
import {Helmet} from "react-helmet-async";
const PresentationGuid = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Helmet>
        <title>Presentation Guidelines for ICMDRSE 2025</title>
        <meta
          name="description"
          content="Follow the guidelines to present your research abstract in Oral , Poster or Virtual Presentation for ICMDRSE 2025 and Showcase your work in multidisciplinary areas like Science, Engineering, and Technology"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Presentation Guidelines"
        />

        <TopContent title="Presentation Guidelines" />
        <Container>
          {/* Navigation Tabs */}
          <Nav
            variant="underline"
            activeKey={activeTab}
            onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="home">
                {" "}
                <PersonalVideoOutlinedIcon
                  sx={{fontSize: 20, color: red[500]}}
                />{" "}
                Oral Presentation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-2">Poster Presentation</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="option-3">Virtual Presentation</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === "home" && <Oral />}
            {activeTab === "option-2" && (
              <div>
                <Poster />
              </div>
            )}
            {activeTab === "option-3" && (
              <div>
                <Virtual />
              </div>
            )}
          </div>
        </Container>

        <div className="cs_height_108 cs_height_lg_0" />
      </div>
    </>
  );
};

export default PresentationGuid;
