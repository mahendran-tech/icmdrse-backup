import React, {useState} from "react";
import {Form, Button, Col, Row} from "react-bootstrap";

const AbstractForm = () => {
  const [coAuthors, setCoAuthors] = useState([{name: "", email: ""}]);
  const [attachment, setAttachment] = useState(null);
  const [formData, setFormData] = useState({
    conference_name:
      "8th International Conference on Multi-Disciplinary Research Studies and Education (ICMDRSE-2025)",
    paperid: "12345",
    cdate: "22nd - 23rd May 2025",
    city: "Kuala Lumpur, Malaysia",
    sub_type: "",
    ptitle: "",
    fname: "",
    lname: "",
    email: "",
    abstract: "",
    indusmentor: "",
    attachment: null,
  });

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2097152) {
      alert("File is too big!");
      e.target.value = "";
    } else {
      setAttachment(file);
      setFormData((prevState) => ({
        ...prevState,
        attachment: file,
      }));
    }
  };

  const handleCoAuthorChange = (index, field, value) => {
    const updatedCoAuthors = [...coAuthors];
    updatedCoAuthors[index][field] = value;
    setCoAuthors(updatedCoAuthors);
  };

  const addCoAuthor = () => {
    setCoAuthors([...coAuthors, {name: "", email: ""}]);
  };

  const removeCoAuthor = (index) => {
    const updatedCoAuthors = coAuthors.filter((_, i) => i !== index);
    setCoAuthors(updatedCoAuthors);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "attachment") {
        form.append(key, formData[key]);
      }
    });

    if (attachment) {
      form.append("attachment", attachment);
    }

    coAuthors.forEach((coAuthor, index) => {
      form.append(`coauthor[${index}][name]`, coAuthor.name);
      form.append(`coauthor[${index}][email]`, coAuthor.email);
    });

    try {
      const response = await fetch("/your-server-endpoint", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          conference_name:
            "8th International Conference on Multi-Disciplinary Research Studies and Education (ICMDRSE-2025)",
          paperid: "12345",
          cdate: "22nd - 23rd May 2025",
          city: "Kuala Lumpur, Malaysia",
          sub_type: "",
          ptitle: "",
          fname: "",
          lname: "",
          email: "",
          abstract: "",
          indusmentor: "",
          attachment: null,
        });
        setCoAuthors([{name: "", email: ""}]);
        setAttachment(null);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <Form
      className="conference-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data">
      <Row>
        {/* Non-editable Auto-filled Fields */}
        <Col sm={12}>
          <Form.Group className="mb-3">
            <Form.Label>Conference Name</Form.Label>
            <Form.Control
              type="text"
              value={formData.conference_name}
              readOnly
              tabIndex="-1"
            />
          </Form.Group>
        </Col>

        {/* <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Paper ID</Form.Label>
            <Form.Control
              type="text"
              value={formData.paperid}
              readOnly
              hidden={true}
              tabIndex="-1"
            />
          </Form.Group>
        </Col> */}

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Conference Date</Form.Label>
            <Form.Control
              type="text"
              value={formData.cdate}
              readOnly
              tabIndex="-1"
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={formData.city}
              readOnly
              tabIndex="-1"
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="spk">
        <h5 className="mt-5 mb-4"> Personal Details </h5>
      </div>

      <Row>
        {/* Editable Fields */}
        <Col sm={12}>
          <Form.Group controlId="submissionType" className="mb-3">
            <Form.Label>Submission Type*</Form.Label>
            <Form.Select
              name="sub_type"
              value={formData.sub_type}
              onChange={handleChange}
              required>
              <option value="">-- Select Any One --</option>
              <option value="Abstract Submission">Abstract Submission</option>
              <option value="Full Paper Submission">
                Full Paper Submission
              </option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Paper Title*</Form.Label>
            <Form.Control
              type="text"
              name="ptitle"
              value={formData.ptitle}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>First Name*</Form.Label>
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
            <Form.Label>Last Name*</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={formData.lname}
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
            <Form.Label>Author Name*</Form.Label>
            <Form.Control
              type="text"
              name="Aname"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email id*</Form.Label>
            <Form.Control
              type="email"
              name="Aemail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>

        {/* Co-author Fields */}
        {coAuthors.map((coAuthor, index) => (
          <Row key={index} className="align-items-center">
            <Col sm={6}>
              <Form.Group className="mb-3">
                <Form.Label>Co-author Name</Form.Label>
                <Form.Control
                  type="text"
                  value={coAuthor.name}
                  onChange={(e) =>
                    handleCoAuthorChange(index, "name", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col sm={5}>
              <Form.Group className="mb-3">
                <Form.Label>Co-author Email</Form.Label>
                <Form.Control
                  type="email"
                  value={coAuthor.email}
                  onChange={(e) =>
                    handleCoAuthorChange(index, "email", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              {index > 0 && (
                <Button
                  variant="danger"
                  onClick={() => removeCoAuthor(index)}
                  className="mb-3 mt-4"
                  block>
                  <i class="bi bi-trash" />
                </Button>
              )}
            </Col>
          </Row>
        ))}

        <Col sm={12}>
          <Button variant="primary" onClick={addCoAuthor} className="mb-3">
            Add Co-author
          </Button>
        </Col>

        <Col sm={6}>
          <Form.Group className="mb-3">
            <Form.Label>Attach File*</Form.Label>
            <Form.Control
              type="file"
              onChange={handleAttachmentChange}
              required
            />
          </Form.Group>
        </Col>

        <Col sm={12}>
          <Button variant="success" type="submit">
            Submit Your Paper
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AbstractForm;
