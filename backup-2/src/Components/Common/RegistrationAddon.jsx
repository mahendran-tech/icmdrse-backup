import React, {useEffect, useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {countries, CountCode} from "../../assets/assets";
import axios from "axios";
import {toast} from "react-toastify";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Card,
  CardContent,
  Divider,
  Popover,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
  CircularProgress,
} from "@mui/material";

const Link1 = ({id, children, title}) => (
  <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
    <a href="#">{children}</a>
  </OverlayTrigger>
);

const RegistrationAddon = ({selected}) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    lastName: "",
    NameCertificate: "",
    dob: "",
    nationality: "",
    department: "",
    institution: "",
    address: "",
    email: "",
    zipCode: "",
    Countrycode: "",
    mobile: "",
    country: "",
    participantCategory: selected.category,
    presentationCategory: selected.presentationType,
  });

  const newAmount = 0;

  const [orderData, setOrderData] = useState({
    selectedFee: {category: "Student", amount: newAmount},
    membershipSelected: false,
    membershipFee: 15,
    addons: [],
    total: newAmount,
  });

  const [popover, setPopover] = useState({
    anchorEl: null,
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission loading

  const [addonsList] = useState([
    {
      id: "t-1",
      name: "Re-Editing, Proofreading revisions  $90",
      price: 90,
      description:
        "Making the necessary improvements based on journal guidelines and providing revisions to help increase your chances of getting accepted in high-impact journals.",
    },
    {
      id: "t-2",
      name: "Research Paper Formatting $119",
      price: 119,
      description:
        "Professional formatting of graphs and tables to make sure they are clear, well-organized, and follow the journal's guidelines.",
    },
    {
      id: "t-3",
      name: "Preparation of Journal cover letter $53",
      price: 53,
      description:
        "Writing a strong cover letter that shows why your research is important and matches the scope of the journal.",
    },
    {
      id: "t-4",
      name: "Conference PPT formatting & illustration $99",
      price: 99,
      description:
        "Create engaging content with creative visuals to ensure your presentation is clear, captivating, and well-received by both attendees and conference chairs.",
    },
    {
      id: "t-5",
      name: "Graphical Abstract $24",
      price: 24,
      description:
        "Make your research stand out with a striking graphical abstract that visually summarizes your key findings in a way that grabs attention.",
    },
  ]);

  // Update the order data when the `selected` prop changes
  useEffect(() => {
    setOrderData((prevState) => ({
      ...prevState,
      selectedFee: {
        category: selected.category,
        amount: Number(selected.amount) || 0, // Ensure amount is valid
      },
    }));
    setFormData((prev) => ({
      ...prev,
      participantCategory: selected.category,
      presentationCategory: selected.presentationType,
    }));
  }, [selected]);

  // Recalculate the total whenever orderData changes
  useEffect(() => {
    const addonsTotal = orderData.addons.reduce(
      (sum, addon) => sum + addon.price,
      0
    );
    const membershipFee = orderData.membershipSelected
      ? orderData.membershipFee
      : 0;
    const membershipDiscount = orderData.membershipSelected
      ? orderData.selectedFee.amount * 0.1
      : 0;

    setOrderData((prevState) => ({
      ...prevState,
      total:
        orderData.selectedFee.amount +
        addonsTotal +
        membershipFee -
        membershipDiscount,
    }));
  }, [orderData.selectedFee, orderData.addons, orderData.membershipSelected]);

  // const handleFormChange = (e) => {
  //   setFormData({...formData, [e.target.name]: e.target.value});
  // };
  const handleFormChange = ({target: {name, value}}) => {
    if (
      [
        "name",
        "lastName",
        "NameCertificate",
        "department",
        "institution",
      ].includes(name)
    ) {
      const regex = /^[a-zA-Z\s.]*$/;
      if (!regex.test(value)) {
        return; // Stop updating state for invalid input
      }
    }

    // Update state
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleAddonChange = (addon) => {
    const newAddons = orderData.addons.includes(addon)
      ? orderData.addons.filter((a) => a !== addon)
      : [...orderData.addons, addon];

    setOrderData({
      ...orderData,
      addons: newAddons,
    });
  };

  const handleMembershipChange = () => {
    setOrderData((prevState) => ({
      ...prevState,
      membershipSelected: !prevState.membershipSelected,
    }));
  };

  const handlePopoverOpen = (event, content) => {
    setPopover({
      anchorEl: event.currentTarget,
      content: content,
    });
  };

  const handlePopoverClose = () => {
    setPopover({
      anchorEl: null,
      content: "",
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true); // Disable the button and show loader

  //   // Simulate form submission (e.g., API call)
  //   try {
  //     // Replace this with your actual API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     console.log("Form submitted successfully:", formData, orderData);

  //     // Reset form after submission
  //     setFormData({
  //       lastName: "",
  //       NameCertificate: "",
  //       dob: "",
  //       nationality: "",
  //       department: "",
  //       institution: "",
  //       address: "",
  //       email: "",
  //       zipCode: "",
  //       Countrycode: "",
  //       mobile: "",
  //       country: "",
  //       participantCategory: selected.category,
  //       presentationCategory: selected.presentationType,
  //     });
  //     setOrderData({
  //       selectedFee: {category: "Student", amount: newAmount},
  //       membershipSelected: false,
  //       membershipFee: 15,
  //       addons: [],
  //       total: newAmount,
  //     });
  //   } catch (error) {
  //     console.error("Form submission failed:", error);
  //   } finally {
  //     setIsSubmitting(false); // Re-enable the button and hide loader
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true); // Disable the button and show loader
  //   if (orderData.selectedFee.amount == 0) {
  //     toast.error("Please select a fee category.");
  //     setIsSubmitting(false); // Re-enable the button and hide loader
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://www.icmdrse.com/API/conf-reg.php",
  //       JSON.stringify({
  //         ...formData,
  //         participantCategory: selected.category,
  //         presentationCategory: selected.presentationType,
  //         selectedFee: orderData.selectedFee,
  //         total: orderData.total,
  //         addons: orderData.addons,
  //       }),
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.data.success) {
  //       toast.success("Form submitted successfully!");

  //       // Reset form
  //       setFormData({
  //         lastName: "",
  //         NameCertificate: "",
  //         dob: "",
  //         nationality: "",
  //         department: "",
  //         institution: "",
  //         address: "",
  //         email: "",
  //         zipCode: "",
  //         Countrycode: "",
  //         mobile: "",
  //         country: "",
  //         participantCategory: selected.category,
  //         presentationCategory: selected.presentationType,
  //       });

  //       setOrderData({
  //         selectedFee: {category: "Student", amount: newAmount},
  //         membershipSelected: false,
  //         membershipFee: 15,
  //         addons: [],
  //         total: newAmount,
  //       });

  //       // Redirect to payment page received from backend response
  //       // if (response.data.payment_url) {
  //       //   window.location.href = response.data.payment_url;
  //       // }
  //     } else {
  //       toast.error("Form submission failed. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Form submission failed:", error);
  //     toast.error("An error occurred. Please try again.");
  //   } finally {
  //     setIsSubmitting(false); // Re-enable the button and hide loader
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true); // Disable the button and show loader

  //   if (orderData.selectedFee.amount === 0) {
  //     toast.error("Please select a fee category.");
  //     setIsSubmitting(false); // Re-enable the button and hide loader
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       "https://www.icmdrse.com/API/conf-reg.php",
  //       {
  //         ...formData,
  //         participantCategory: selected?.category || "Not Selected",
  //         presentationCategory: selected?.presentationType || "Not Selected",
  //         selectedFee: orderData.selectedFee,
  //         total: orderData.total,
  //         addons: orderData.addons,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (response.status === 200 && response.data?.success) {
  //       toast.success("Form submitted successfully!");

  //       // Reset form fields
  //       setFormData({
  //         lastName: "",
  //         NameCertificate: "",
  //         dob: "",
  //         nationality: "",
  //         department: "",
  //         institution: "",
  //         address: "",
  //         email: "",
  //         zipCode: "",
  //         Countrycode: "",
  //         mobile: "",
  //         country: "",
  //         participantCategory: selected?.category || "",
  //         presentationCategory: selected?.presentationType || "",
  //       });

  //       setOrderData({
  //         selectedFee: {category: "Student", amount: newAmount},
  //         membershipSelected: false,
  //         membershipFee: 15,
  //         addons: [],
  //         total: newAmount,
  //       });

  //       // Redirect to payment page if provided
  //       if (response.data?.payment_url) {
  //         window.location.href = response.data.payment_url;
  //       }
  //     } else {
  //       toast.error(
  //         response.data?.message || "Form submission failed. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Form submission failed:", error);

  //     if (error.response) {
  //       // Handle server response errors
  //       toast.error(
  //         error.response.data?.message || "An error occurred. Please try again."
  //       );
  //     } else if (error.request) {
  //       // Handle network errors
  //       toast.error("Network error. Please check your internet connection.");
  //     } else {
  //       // Handle other errors
  //       toast.error("Unexpected error occurred.");
  //     }
  //   } finally {
  //     setIsSubmitting(false); // Re-enable the button and hide loader
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true); // Disable the button and show loader

  //   if (!orderData.selectedFee || orderData.selectedFee.amount === 0) {
  //     toast.error("Please select a fee category.");
  //     setIsSubmitting(false);
  //     return;
  //   }

  //   // Prepare form data
  //   const payload = {
  //     ...formData,
  //     participantCategory: selected?.category || "Not Selected",
  //     presentationCategory: selected?.presentationType || "Not Selected",
  //     selectedFee: orderData.selectedFee,
  //     total: orderData.total,
  //     addons: orderData.addons,
  //   };

  //   console.log("Submitting Form Data:", payload); // Debugging

  //   try {
  //     const response = await axios.post(
  //       "https://www.icmdrse.com/API/conf-reg.php",
  //       payload,
  //       {
  //         headers: {"Content-Type": "application/json"},
  //       }
  //     );

  //     if (response.status === 200 && response.data?.success) {
  //       toast.success("Form submitted successfully!");

  //       // Reset form fields
  //       setFormData({
  //         name: "",
  //         title: "",
  //         lastName: "",
  //         NameCertificate: "",
  //         dob: "",
  //         nationality: "",
  //         department: "",
  //         institution: "",
  //         address: "",
  //         email: "",
  //         zipCode: "",
  //         Countrycode: "",
  //         mobile: "",
  //         country: "",
  //         participantCategory: "",
  //         presentationCategory: "",
  //       });

  //       setOrderData({
  //         selectedFee: {category: "Student", amount: newAmount},
  //         membershipSelected: false,
  //         membershipFee: 15,
  //         addons: [],
  //         total: newAmount,
  //       });

  //       console.log("Headers:", response.headers); // Get headers
  //       console.log("Data:", response.data);
  //       // Redirect if payment URL is provided
  //       // if (response.data?.payment_url) {
  //       //   window.location.href = response.data.payment_url;
  //       // }
  //     } else {
  //       toast.error(response.data?.message || "Form submission failed.");
  //     }
  //   } catch (error) {
  //     console.error("Form submission failed:", error);

  //     if (error.response) {
  //       console.log("Server Response:", error.response.data);
  //       toast.error(error.response.data?.message || "Error submitting form.");
  //     } else if (error.request) {
  //       toast.error("Network error. Please check your internet connection.");
  //     } else {
  //       toast.error("Unexpected error occurred.");
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!orderData.selectedFee || orderData.selectedFee.amount === 0) {
      toast.error("Please select a fee category.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      ...formData,
      participantCategory: selected?.category || "Not Selected",
      presentationCategory: selected?.presentationType || "Not Selected",
      selectedFee: orderData.selectedFee,
      total: orderData.total,
      addons: orderData.addons,
    };

    console.log("Submitting Form Data:", payload);

    try {
      const response = await axios.post(
        "https://www.icmdrse.com/API/conf-reg2.php",
        payload,
        {
          headers: {"Content-Type": "application/json"},
        }
      );

      console.log("Response:", response.data);

      if (response.status === 200 && response.data.status) {
        toast.success("Form submitted successfully!");

        // Redirect to payment page
        if (response.data.data?.redirect_url) {
          console.log("Redirecting to:", response.data.data.redirect_url);
          window.location.href = response.data.data.redirect_url;
        }

        // Reset form
        setFormData({
          name: "",
          title: "",
          lastName: "",
          NameCertificate: "",
          dob: "",
          nationality: "",
          department: "",
          institution: "",
          address: "",
          email: "",
          zipCode: "",
          Countrycode: "",
          mobile: "",
          country: "",
          participantCategory: "",
          presentationCategory: "",
        });

        setOrderData({
          selectedFee: {category: "Student", amount: newAmount},
          membershipSelected: false,
          membershipFee: 15,
          addons: [],
          total: newAmount,
        });
      } else {
        toast.error(response.data?.message || "Form submission failed.");
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
      setIsSubmitting(false);
    }
  };

  const open = Boolean(popover.anchorEl);

  return (
    <Grid
      container
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      spacing={4}
      sx={{padding: 4}}>
      {/* Left Side: Form */}
      <Grid item xs={12} md={7}>
        <Typography variant="h5" gutterBottom>
          Participant Information
        </Typography>
        <Box>
          <Grid container spacing={2}>
            {/* Title Dropdown */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="title-label">Title</InputLabel>
                <Select
                  labelId="title-label"
                  id="title"
                  name="title"
                  value={formData.title || ""} // Ensure it's controlled
                  onChange={handleFormChange}
                  input={<OutlinedInput label="Title" />}>
                  <MenuItem value="">
                    <em>-- Select Title --</em>
                  </MenuItem>
                  <MenuItem value="Dr">Dr</MenuItem>
                  <MenuItem value="Prof">Prof</MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* First Name Input */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                id="name"
                name="name"
                label="First Name"
                placeholder="First Name"
                variant="outlined"
                value={formData.name}
                onChange={handleFormChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name for Certificate"
                name="NameCertificate"
                value={formData.NameCertificate}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                InputLabelProps={{shrink: true}}
                value={formData.dob}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department"
                name="department"
                value={formData.department}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Institution"
                name="institution"
                value={formData.institution}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Zip/Postal Code"
                name="zipCode"
                value={formData.zipCode}
                // onChange={handleFormChange}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[0-9 +]*$/.test(value)) {
                    setFormData({...formData, zipCode: value});
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <FormControl fullWidth>
                    <InputLabel id="country-code-label">
                      Country Code
                    </InputLabel>
                    <Select
                      value={formData.Countrycode || ""}
                      labelId="country-code-label"
                      name="Countrycode"
                      onChange={handleFormChange}
                      required
                      input={<OutlinedInput label="Country Code" />}>
                      <MenuItem value=""> </MenuItem>

                      {CountCode.map((option, index) => (
                        <MenuItem key={index} value={option.country}>
                          {" "}
                          {`${option.country}  ${option.value}`}
                        </MenuItem>
                      ))}

                      {/* Add other options here */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={7} className="ps-0">
                  <TextField
                    id="mobile"
                    name="mobile"
                    label="Phone Number"
                    type="text"
                    value={formData.mobile || ""} // Ensure controlled component
                    // onChange={handleFormChange}
                    fullWidth
                    placeholder="Phone Number *"
                    required
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9 +]*$/.test(value)) {
                        setFormData({...formData, mobile: value});
                      }
                    }}
                    // inputProps={{
                    //   pattern: "[0-9+ ]*",
                    // }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="Country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  name="country"
                  value={formData.country || ""} // Ensure a default value
                  onChange={handleFormChange}
                  input={<OutlinedInput label="Country" />}>
                  <MenuItem value="">
                    <em>-- Select Country --</em>
                  </MenuItem>
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Presentation Category"
                name=""
                value={formData.presentationCategory}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                label="Participant Category"
                name=""
                value={formData.participantCategory}
                onChange={handleFormChange}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>

      {/* Right Side: Order Summary */}
      <Grid item xs={12} md={5} mt={4}>
        <Card
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden",
          }}>
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              sx={{fontWeight: "bold", color: "#0015a9"}}>
              Order Summary
            </Typography>
            <Divider sx={{marginBottom: 2}} />

            {/* Table Format */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "16px",
              }}>
              <tbody>
                {/* Selected Fee Row */}
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      padding: "8px",
                      textAlign: "left",
                    }}>
                    {orderData.selectedFee.category
                      ? orderData.selectedFee.category
                      : "Selected Fee"}
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      textAlign: "right",
                    }}>
                    ${orderData.selectedFee.amount.toFixed(2)}
                  </td>
                </tr>

                {/* Membership Discount Row */}
                {orderData.membershipSelected && (
                  <>
                    <tr>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "left",
                          color: "green",
                        }}>
                        Discount (10%):
                      </td>
                      <td style={{padding: "8px"}}></td>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "right",
                          color: "green",
                        }}>
                        -${(orderData.selectedFee.amount * 0.1).toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "left",
                        }}>
                        Membership Fee:
                      </td>
                      <td style={{padding: "8px"}}></td>
                      <td
                        style={{
                          padding: "8px",
                          textAlign: "right",
                        }}>
                        ${orderData.membershipFee}
                      </td>
                    </tr>
                  </>
                )}

                {/* Add-ons Section */}
                <tr>
                  <td
                    colSpan={3}
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      color: "#0015a9",
                      textAlign: "center",
                      backgroundColor: "#f0f4ff",
                    }}>
                    Add-ons
                  </td>
                </tr>
                {addonsList.map((addon, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "left",
                      }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={orderData.addons.includes(addon)}
                            onChange={() => handleAddonChange(addon)}
                          />
                        }
                        label={addon.name}
                      />
                    </td>
                    <td>
                      {" "}
                      <Link1 title={addon.description} id={addon.id}>
                        <i className="bi bi-info-circle-fill text-primary"></i>
                      </Link1>{" "}
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        textAlign: "right",
                      }}>
                      {orderData.addons.includes(addon) && `$${addon.price}`}
                    </td>
                  </tr>
                ))}

                {/* Total Row */}
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}>
                    Total:
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      fontWeight: "bold",
                      textAlign: "right",
                      fontSize: "1.2em",
                    }}>
                    ${orderData.total.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Membership Option */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={orderData.membershipSelected}
                  onChange={handleMembershipChange}
                />
              }
              label={
                <Typography variant="body1">
                  Upgrade to IFERP Premium Membership and{" "}
                  <Typography
                    component="span"
                    sx={{fontWeight: "bold", color: "green"}}>
                    Get 10% discount
                  </Typography>{" "}
                  on Registration Fee
                </Typography>
              }
              sx={{
                fontWeight: "bold",
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              fullWidth
              style={{marginTop: "10px"}}>
              {isSubmitting ? <CircularProgress size={24} /> : "Subscribe"}
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Popover */}
      <Popover
        open={open}
        anchorEl={popover.anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <Typography sx={{padding: 2}}>{popover.content}</Typography>
      </Popover>
    </Grid>
  );
};

export default RegistrationAddon;
