import React, {useContext} from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import {DataContext} from "../../Appcontext/DataContext";

const CommitteeMembers = () => {
  const {committeeData} = useContext(DataContext);

  if (!committeeData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <Container className="my-5">
      {Object.entries(committeeData).map(([sectionTitle, members]) => (
        <div key={sectionTitle} className="mb-5">
          <h4 className="text-center mb-4">{sectionTitle}</h4>

          {sectionTitle === "ORGANIZING COMMITTEE MEMBERS" ? (
            // Organizing Committee Members - Titles included, all members in the same row
            <>
              <Row className="justify-content-center">
                {Object.entries(members).map(([subTitle, subMembers]) =>
                  subMembers.map((member, idx) => (
                    <Col
                      key={idx}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-4">
                      <h5 className="text-center">{subTitle}</h5>
                      <Card className="text-center shadow h-100">
                        <Card.Img
                          variant="top"
                          src={member.image_path}
                          alt={member.name}
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            margin: "auto",
                            padding: "10px",
                          }}
                        />
                        <Card.Body>
                          <Card.Title className="h6 fw-bold ">
                            {member.name}
                          </Card.Title>
                          <Card.Text
                            className="text-primary"
                            style={{lineHeight: "15px"}}>
                            {member.designation}
                          </Card.Text>
                          <Card.Text
                            className="small"
                            style={{lineHeight: "20px"}}>
                            {member.department}, {member.college}, {member.city}
                            , {member.country}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                )}
              </Row>
            </>
          ) : typeof members === "object" && !Array.isArray(members) ? (
            // Other Sections - Keep existing structure with subcategories
            Object.entries(members).map(([subTitle, subMembers], index) => (
              <div key={index} className="mb-4">
                <h4 className="text-center">{subTitle}</h4>
                <Row className="justify-content-center">
                  {subMembers.map((member, idx) => (
                    <Col
                      key={idx}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      className="mb-4">
                      <Card className="text-center shadow h-100">
                        <Card.Img
                          variant="top"
                          src={member.image_path}
                          alt={member.name}
                          style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            margin: "auto",
                            padding: "10px",
                          }}
                        />
                        <Card.Body>
                          <Card.Title className="h6 fw-bold ">
                            {member.name}
                          </Card.Title>
                          <Card.Text
                            className="text-primary"
                            style={{lineHeight: "15px"}}>
                            {member.designation}
                          </Card.Text>
                          <Card.Text
                            className="small"
                            style={{lineHeight: "20px"}}>
                            {member.department}, {member.college}, {member.city}
                            , {member.country}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))
          ) : (
            // Other Sections - Keep normal display structure
            <Row className="justify-content-center">
              {members.map((member, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="text-center shadow h-100">
                    <Card.Img
                      variant="top"
                      src={member.image_path}
                      alt={member.name}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        margin: "auto",
                        padding: "10px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="h6 fw-bold ">
                        {member.name}
                      </Card.Title>
                      <Card.Text
                        className="text-primary"
                        style={{lineHeight: "15px"}}>
                        {member.designation}
                      </Card.Text>
                      <Card.Text className="small" style={{lineHeight: "20px"}}>
                        {member.department}, {member.college}, {member.city},{" "}
                        {member.country}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      ))}
    </Container>
  );
};

export default CommitteeMembers;
