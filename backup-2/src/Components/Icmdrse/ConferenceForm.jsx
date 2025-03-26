import React, {useState} from "react";
import {Form, Button, Row, Col, Spinner} from "react-bootstrap";
import {countries, countriesWithPhoneCodes} from "../../assets/assets";
import "../Icmdrse/Card.css";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const ConferenceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    fname: "",
    lname: "",
    email: "",
    exphone: "",
    mobile: "",
    MemberCategory: "",
    org: "",
    qualification: "",
    professional: "",
    industry: "",
    dep: "",
    specs: "",
    rarea: "",
    country: "",
    associate: "",
    publication: "",
    book: "",
    editor: "",
    message: "",
    file: null,
    how: "",
  });

  const [loading, setLoading] = useState(false); // Loading state for button

  const handleChange = (e) => {
    const {name, value} = e.target;

    // if (name === "fname") {
    //   const regex = /^[a-zA-Z\s.]*$/;
    //   if (!regex.test(value)) return;
    // }
    if (["fname", "lname", "org", "dep"].includes(name)) {
      const regex = /^[a-zA-Z\s.]*$/;
      if (!regex.test(value)) {
        return; // Prevent updating invalid value
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Disable the button
  //   try {
  //     console.log("Submitting Form Data:", formData);
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     console.log("Form Submitted Successfully");
  //     // Reset form if needed
  //     setFormData({
  //       title: "",
  //       fname: "",
  //       lname: "",
  //       email: "",
  //       exphone: "",
  //       mobile: "",
  //       MemberCategory: "",
  //       org: "",
  //       qualification: "",
  //       professional: "",
  //       industry: "",
  //       dep: "",
  //       specs: "",
  //       rarea: "",
  //       country: "",
  //       associate: "",
  //       publication: "",
  //       book: "",
  //       editor: "",
  //       message: "",
  //       file: null,
  //       how: "",
  //     });
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setLoading(false); // Re-enable the button
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable the button

    try {
      const formDataToSend = new FormData();

      // ✅ Append all form fields (except file)
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "file") {
          formDataToSend.append(key, value);
        }
      });

      // ✅ Append file separately (only if it exists)
      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      // ✅ Make API call (Remove Content-Type header)
      const response = await axios.post(
        "https://www.icmdrse.com/API/apply.php",
        formDataToSend
      );

      if (response.status === 200) {
        toast.success("Form submitted successfully!");

        // ✅ Reset form after successful submission
        setFormData({
          title: "",
          fname: "",
          lname: "",
          email: "",
          exphone: "",
          mobile: "",
          MemberCategory: "",
          org: "",
          qualification: "",
          professional: "",
          industry: "",
          dep: "",
          specs: "",
          rarea: "",
          country: "",
          associate: "",
          publication: "",
          book: "",
          editor: "",
          message: "",
          file: null,
          how: "",
        });

        // ✅ Redirect to Thank You page after 2 seconds
        setTimeout(() => {
          navigate("/thank-you");
        }, 500);
      } else {
        toast.error(
          response.data?.message || "Form submission failed. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );

      if (error.response && error.response.data) {
        const errors = error.response.data.data;
        if (errors) {
          Object.keys(errors).forEach((key) => {
            toast.error(errors[key]);
          });
        }
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false); // Re-enable the button
    }
  };

  const countryOptions = Object.keys(countriesWithPhoneCodes).map(
    (country) => ({
      value: countriesWithPhoneCodes[country],
      label: `${country} (${countriesWithPhoneCodes[country]})`,
    })
  );

  return (
    <div className="border border-1 rounded py-5 px-4">
      <Form
        className="conference-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>Title*</Form.Label>
          <Form.Select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required>
            <option value="">-- Select Any One --</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name*</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                // placeholder="First Name"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name*</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                // placeholder="Last Name"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // placeholder="Email"
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
                    <option value="">Country Code</option>
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
                    // onChange={handleChange}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9 +]*$/.test(value)) {
                        setFormData({...formData, mobile: value});
                      }
                    }}
                    // placeholder="9000000001"
                    required
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Member Category*</Form.Label>
              <Form.Select
                name="MemberCategory"
                value={formData.MemberCategory}
                onChange={handleChange}
                required>
                <option value="">-- Select Any One --</option>
                <option value="Advisory committee">Advisory committee</option>
                <option value="Scientific committee">
                  Scientific committee
                </option>
                <option value="Hospitality committee">
                  Hospitality committee
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name of the Organization*</Form.Label>
              <Form.Control
                type="text"
                name="org"
                value={formData.org}
                onChange={handleChange}
                // placeholder="Name of the Organization"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Qualification*</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                // placeholder="Qualification"
                required
              />
            </Form.Group>
          </Col>

          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Professional Experience*</Form.Label>
              <Form.Control
                type="text"
                name="professional"
                value={formData.professional}
                onChange={handleChange}
                // placeholder="Professional Experience"
                required
              />
            </Form.Group>
          </Col>

          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Industry Experience*</Form.Label>
              <Form.Control
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                // placeholder="Industry Experience"
                required
              />
            </Form.Group>
          </Col>

          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Department*</Form.Label>
              <Form.Control
                type="text"
                name="dep"
                value={formData.dep}
                onChange={handleChange}
                // placeholder="Department"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Specialization*</Form.Label>
              <Form.Control
                type="text"
                name="specs"
                value={formData.specs}
                onChange={handleChange}
                // placeholder="Specialization"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Research Area*</Form.Label>
              <Form.Control
                type="text"
                name="rarea"
                value={formData.rarea}
                onChange={handleChange}
                // placeholder="Research Area"
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
              <Form.Label>Associated with IFERP*</Form.Label>
              <Form.Control
                type="text"
                name="associate"
                value={formData.associate}
                onChange={handleChange}
                // placeholder="Associated with IFERP"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>No. of Publications*</Form.Label>
              <Form.Control
                type="text"
                name="publication"
                value={formData.publication}
                onChange={handleChange}
                // placeholder="No. of Publications"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Books Published*</Form.Label>
              <Form.Control
                type="text"
                name="book"
                value={formData.book}
                onChange={handleChange}
                // placeholder="Books Published"
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>Editor/Reviewer in Journals*</Form.Label>
              <Form.Control
                type="text"
                name="editor"
                value={formData.editor}
                onChange={handleChange}
                // placeholder="Editor/Reviewer in Journals"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Repeat similar patterns for other fields */}

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Type your message"
          />
        </Form.Group>
        <Row>
          <Col lg={6} sm={12}>
            <Form.Group className="mb-3">
              <Form.Label>Upload CV*</Form.Label>{" "}
              <span style={{color: "red", fontSize: "14px", paddingTop: 0}}>
                Upload CV along with your photo*
              </span>
              <Form.Control
                type="file"
                name="file"
                accept=".doc, .docx, .pdf"
                onChange={handleFileChange}
                required
              />
            </Form.Group>
          </Col>
          <Col sm={12} lg={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                How did you get to know about the Conference ?
              </Form.Label>
              <Form.Select
                name="how"
                value={formData.how}
                onChange={handleChange}
                required>
                <option value="">
                  How did you get to know about the Conference ?
                </option>
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
                <option value="Othfoot">Other</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" className="mt-3" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </Form>
    </div>
  );
};

export default ConferenceForm;
