import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column nav-pills-1">
            <Nav.Item>
              <Nav.Link eventKey="first">Editing & Revision</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Formatting </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="thirt">Review </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content style={{ minHeight: "250px" }}>
            <Tab.Pane eventKey="first">
              <div className="row">
                <h5>Editing & Revision</h5>
                <div className="col-4">
                  <ul>
                    <li> Grammatical Corrections</li>
                    <li> Language Editing </li>
                    <li> Plagiarism correction.</li>
                    <li> Proofreading</li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <li> Grammatical Corrections</li>
                    <li> Language Editing </li>
                    <li> Plagiarism correction.</li>
                    <li> Proofreading</li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="row">
                <h5>Formatting</h5>
                <div className="col-4">
                  <ul>
                    <li> Journal Format</li>
                    <li> Research Paper Format </li>
                    <li> Cover Letter</li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="thirt">
              <div className="row">
                <h5>Review</h5>
                <div className="col-4">
                  <ul>
                    <li> Reviewer suggestion</li>
                    <li> Reviewer Comments Support </li>
                    <li> Thesis Review</li>
                  </ul>
                </div>
                <div className="col-4">
                  <ul>
                    <li> Book Review</li>
                    <li> Research Paper Review </li>
                  </ul>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
