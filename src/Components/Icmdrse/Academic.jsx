import React, {useEffect, useState} from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import { Col, Container, Row } from "react-bootstrap";
import parse from "html-react-parser";

const Academic = () => {
  const [data, setData] = useState([]); // Initial state as empty array

  const fetchData = async () => {
    try {
      const response = await fetch("assets/academic.json");
      const result = await response.json();
      setData(result); // Set state with fetched JSON data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <SectionTitle2 Title={`Academic partners`} isCenter={true} />
      <Row className="d-flex justify-content-center">
        {data.map((result, index) => (
          <Col key={index} lg={4} sm={12} className="mt-3">
            <div className="shadow-lg h-100 p-3 text-center">
              <img src={result.img} alt="" style={{maxWidth: "300px"}} />
              <h6
                className="text-center mt-4"
                style={{color: "#5004a1", fontWeight: 500}}>
                {parse(result.title)}
              </h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Academic;
