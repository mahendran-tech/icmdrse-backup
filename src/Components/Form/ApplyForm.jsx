// import React, { useState } from "react";
// import { countries, countriesWithPhoneCodes } from "../../assets/assets";
// import {
//   Form,
//   Button,
//   Col,
//   Row,
//   InputGroup,
//   FormControl,
//   Spinner,
//   Toast
// } from "react-bootstrap";

// const ApplyForm = () => {
//   const [formData, setFormData] = useState({
//     fname: "",
//     email: "",
//     lname: "",
//     university: "",
//     department: "",
//     country: "",
//     message: "",
//     file1: null
//   });
//   const [loading, setLoading] = useState(false); // To manage loader and button disable
//   const [showToast, setShowToast] = useState(false); // To show success message

//   // Handle form field changes
//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   // Handle file input change
//   const handleFileChange = e => {
//     setFormData({
//       ...formData,
//       file1: e.target.files[0]
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async e => {
//     e.preventDefault();

//     // Form validation (you can add more validation if needed)
//     if (!formData.fname || !formData.email || !formData.country) {
//       alert("Please fill out all required fields!");
//       return;
//     }

//     // Show the loader and disable the button
//     setLoading(true);

//     try {
//       // Simulating form submission (API request here)
//       console.log("Form data submitted:", formData);

//       // Simulate a delay (e.g., API request time)
//       setTimeout(() => {
//         // Show success message
//         setShowToast(true);

//         // Reset form fields
//         setFormData({
//           fname: "",
//           email: "",
//           lname: "",
//           university: "",
//           department: "",
//           country: "",
//           message: "",
//           file1: null // Reset file input field
//         });

//         // Hide the loader and enable the button again
//         setLoading(false);
//       }, 2000); // 2 seconds delay for demonstration
//     } catch (error) {
//       // Handle error if API request fails
//       console.error("Error submitting form", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="about-section pt-1 pb-0" id="Apply">
//       <div className="auto-container">
//         <div className="row clearfix">
//           <div className="content-column col-lg-12 col-md-12 col-sm-12">
//             <div className="inner-column p-4">
//               <div className="sec-title-two mb-0">
//                 <h4>Apply Now</h4>
//                 <div className="row mt-5">
//                   {/* Form Start */}
//                   <Form className="conference-form" onSubmit={handleSubmit}>
//                     <Row>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="fname">
//                           <Form.Label>First Name</Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter first name"
//                             name="fname"
//                             value={formData.fname}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="email">
//                           <Form.Label>Email Address</Form.Label>
//                           <Form.Control
//                             type="email"
//                             placeholder="Enter email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="lname">
//                           <Form.Label>WhatsApp number</Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter WhatsApp number"
//                             name="lname"
//                             value={formData.lname}
//                             onChange={handleChange}
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="university">
//                           <Form.Label>University</Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter university"
//                             name="university"
//                             value={formData.university}
//                             onChange={handleChange}
//                             required
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="department">
//                           <Form.Label>Department</Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter department"
//                             name="department"
//                             value={formData.department}
//                             onChange={handleChange}
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="country">
//                           <Form.Label>Country</Form.Label>
//                           <Form.Control
//                             as="select"
//                             name="country"
//                             value={formData.country}
//                             onChange={handleChange}
//                             required
//                           >
//                             <option value="">-- Select Country --</option>
//                             {countries.map((country, index) =>
//                               <option key={index} value={country.name}>
//                                 {country.name}
//                               </option>
//                             )}
//                           </Form.Control>
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} className="mb-3">
//                         <Form.Group controlId="message">
//                           <Form.Label>
//                             Submit a Brief Statement of Interest
//                           </Form.Label>
//                           <Form.Control
//                             as="textarea"
//                             placeholder="Write your message here"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             rows={4}
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} sm={6} className="mb-3">
//                         <Form.Group controlId="file1">
//                           <Form.Label>Submit your CV</Form.Label>
//                           <Form.Control
//                             type="file"
//                             name="file1"
//                             onChange={handleFileChange}
//                             required
//                             accept=".doc,.docx,.pdf"
//                           />
//                         </Form.Group>
//                       </Col>
//                       <Col xs={12} className="text-center">
//                         <Button
//                           type="submit"
//                           variant="primary"
//                           style={{ width: "300px" }}
//                           disabled={loading}
//                         >
//                           {loading
//                             ? <Spinner animation="border" size="sm" />
//                             : "Submit"}
//                         </Button>
//                       </Col>
//                     </Row>
//                   </Form>
//                   {/* Form End */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toast to show success message */}
//       <Toast
//         onClose={() => setShowToast(false)}
//         show={showToast}
//         delay={3000}
//         autohide
//         style={{ position: "absolute", top: "10px", right: "10px" }}
//       >
//         <Toast.Body>Form submitted successfully!</Toast.Body>
//       </Toast>
//     </section>
//   );
// };

// export default ApplyForm;

// import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Form, Button, Col, Row, Spinner} from "react-bootstrap";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {countries} from "../../assets/assets";
import {useState} from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    lname: "",
    university: "",
    department: "",
    country: "",
    message: "",
    file1: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file1: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fname || !formData.email || !formData.country) {
      alert("Please fill out all required fields!");
      return;
    }

    setLoading(true);
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "https://www.icmdrse.com/API/volunter1.php",
        submissionData,
        {
          headers: {"Content-Type": "multipart/form-data"},
        }
      );

      // console.log("Response:", response.data);
      toast.success("Form submitted successfully!");
      setTimeout(() => navigate("/thank-you"), 1000);
      setFormData({
        fname: "",
        email: "",
        lname: "",
        university: "",
        department: "",
        country: "",
        message: "",
        file1: null,
      });
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="about-section pt-1 pb-0" id="Apply">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-column col-lg-12">
            <div className="inner-column p-4">
              <div className="sec-title-two mb-0">
                <h4>Apply Now</h4>
                <Form className="conference-form mt-4" onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="fname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="fname"
                          value={formData.fname}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="lname">
                        <Form.Label>WhatsApp number</Form.Label>
                        <Form.Control
                          type="text"
                          name="lname"
                          value={formData.lname}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="department">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="university">
                        <Form.Label>University</Form.Label>
                        <Form.Control
                          type="text"
                          name="university"
                          value={formData.university}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="country">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          as="select"
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
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="mb-3">
                      <Form.Group controlId="message">
                        <Form.Label>
                          Submit a Brief Statement of Interest
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Write your message here"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} sm={6} className="mb-3">
                      <Form.Group controlId="file1">
                        <Form.Label>Submit your CV</Form.Label>
                        <Form.Control
                          type="file"
                          name="file1"
                          onChange={handleFileChange}
                          required
                          accept=".doc,.docx,.pdf"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="text-center">
                      <Button
                        type="submit"
                        variant="primary"
                        style={{width: "300px"}}
                        disabled={loading}>
                        {loading ? (
                          <Spinner animation="border" size="sm" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </section>
  );
};

export default ApplyForm;
