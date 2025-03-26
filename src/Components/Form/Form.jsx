import React, {useState} from "react";
import {Form, Button, Container, Row, Col, Spinner} from "react-bootstrap";

const ContactForm = () => {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbyuhwe_OxZ56tT71PE-FvPUTjeqFzdA9fZ-tDonTG-tWOVYFo35BWIjVMfUjnPTPmNWQA/exec";

  // Form State Management
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    email: "",

    // Automatically set today's date
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formBody = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    fetch(scriptUrl, {
      method: "POST",
      body: formBody,
    })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: new Date().toISOString().split("T")[0], // Reset date
        });
      })
      .catch((err) => {
        console.error("Submission Error:", err);
        setLoading(false);
      });
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Contact Form</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} name="google-sheet">
            {/* Name Field */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
              />
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
              />
            </Form.Group>

            {/* Phone Field */}
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone *"
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
