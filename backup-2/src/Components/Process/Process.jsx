import {useEffect, useState} from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import data from "../../Data/process.json";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import {Modal, Button, Form, Spinner, Row, Col} from "react-bootstrap";
import {countries, countriesWithPhoneCodes} from "../../assets/assets";
import {toast} from "react-toastify";
import axios from "axios";

const Process = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    exphone: "",
    mobile: "",
    designation: "",
    university: "",
    country: "",
    subject: "",
    article: "",
    how: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://www.icmdrse.com/API/publication.php",
        formData
      );
      console.log(response);
      toast.success("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error(error.message);
      toast.error("Form submission failed!");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fname: "",
      email: "",
      exphone: "",
      mobile: "",
      designation: "",
      university: "",
      country: "",
      subject: "",
      article: "",
      how: "",
    });
    handleClose();
  };

  const countryOptions = Object.keys(countriesWithPhoneCodes).map(
    (country) => ({
      value: countriesWithPhoneCodes[country],
      label: `${country} (${countriesWithPhoneCodes[country]})`,
    })
  );

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="cs_bg_filed"
      data-background="/assets/img/process_bg_1.jpg">
      <div className="cs_height_60 cs_height_lg_40" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
          <SectionTitle2 Title="Publications in Journals" />
        </div>
        <div className="row d-flex justify-content-center cs_row_gap_30 cs_gap_y_30">
          {data.map((item, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className="cs_card cs_style_3 position-relative">
                <div className="cs_card_content cs_white_bg cs_radius_35 text-center">
                  <div className="cs_card_icon cs_center cs_heading_color cs_mb_22">
                    <img src={item.img} alt="icon" />
                  </div>
                  <h3 className="cs_fs_20 cs_semibold cs_mb_10">
                    {item.title}
                  </h3>
                  <p
                    className="mb-0"
                    style={{lineHeight: "20px", fontSize: "15px"}}>
                    {item.desc}
                  </p>
                  {item.tit1 && (
                    <p
                      className="mb-1 mt-2"
                      style={{
                        fontSize: "16px",
                        color: "#ff003b",
                        lineHeight: "18px",
                      }}>
                      {item.tit1}
                    </p>
                  )}
                  {item.tit2 && (
                    <p
                      className="mb-1"
                      style={{
                        fontSize: "16px",
                        color: "#ff003b",
                        lineHeight: "18px",
                      }}>
                      {item.tit2}
                    </p>
                  )}
                  <div className="cs_comment_body d-flex justify-content-center ps-0">
                    <Button
                      className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase"
                      onClick={() => handleShow(item)}>
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_60" />

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Publication Queries</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedItem?.title}</h5>
          <Form onSubmit={handleSubmit} className="conference-form p-3">
            <Row>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Your Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone / Country Code*</Form.Label>
                  <Row>
                    <Col sm={4} className="pe-0">
                      <Form.Select
                        name="exphone"
                        value={formData.exphone}
                        onChange={handleChange}
                        required>
                        <option value="+91">+91</option>
                        {countryOptions?.map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                    <Col sm={8} className="ps-0">
                      <Form.Control
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (/^[0-9 +]*$/.test(value)) {
                            setFormData({...formData, mobile: value});
                          }
                        }}
                        required
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>

              <Col sm={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>University/Institution</Form.Label>
                  <Form.Control
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Country*</Form.Label>
                  <Form.Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required>
                    <option value="">-- Select Country --</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col sm={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Research Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col sm={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Title of Research Article</Form.Label>
                  <Form.Control
                    type="text"
                    name="article"
                    value={formData.article}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col sm={12} lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    How did you get to know about the Conference?
                  </Form.Label>
                  <Form.Select
                    name="how"
                    value={formData.how}
                    onChange={handleChange}
                    required>
                    <option value="">-- Select Option --</option>
                    <option value="conference Alerts">Conference Alerts</option>
                    <option value="Referred by Committee Member">
                      Referred by Committee Member
                    </option>
                    <option value="Email">Email</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Google Advertisement">
                      Google Advertisement
                    </option>
                    <option value="Social Media">Social Media</option>
                    <option value="Through the University/ Institute or College">
                      Through the University/ Institute or College
                    </option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center mt-4">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Process;
