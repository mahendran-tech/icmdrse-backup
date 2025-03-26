import React, {useEffect, useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {countries, countriesWithPhoneCodes} from "../../assets/assets";
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
  Grid2,
  OutlinedInput,
} from "@mui/material";

const Link1 = ({id, children, title}) => (
  <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
    <a href="#">{children}</a>
  </OverlayTrigger>
);

const RegistrationForm = ({selected}) => {
  const [formData, setFormData] = useState({
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

  const [orderData, setOrderData] = useState({
    selectedFee: {category: "Student", amount: 100},
    membershipSelected: false,
    membershipFee: 15,
    addons: [],
    total: 100,
  });

  const [popover, setPopover] = useState({
    anchorEl: null,
    content: "",
  });

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

  const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
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

  const countryOptions = Object.keys(countriesWithPhoneCodes).map(
    (country) => ({
      value: countriesWithPhoneCodes[country],
      label: `${country} (${countriesWithPhoneCodes[country]})`,
    })
  );

  const open = Boolean(popover.anchorEl);

  return (
    <Grid container spacing={4} sx={{padding: 4}}>
      {/* Left Side: Form */}
      <Grid item xs={12} md={7}>
        <Typography variant="h5" gutterBottom>
          Participant Information
        </Typography>
        <Box component="form">
          <Grid container spacing={2}>
            {/* Title Dropdown */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="title-label">Title</InputLabel>
                <Select
                  labelId="title-label"
                  id="title"
                  name="title"
                  defaultValue=""
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
                onChange={handleFormChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="country-code-label">
                      Country Code
                    </InputLabel>
                    <Select
                      labelId="country-code-label"
                      onChange={handleFormChange}
                      required
                      input={<OutlinedInput label="Country Code" />}>
                      <MenuItem value="">
                        {" "}
                        <em>-+91-</em>{" "}
                      </MenuItem>

                      {countryOptions.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                          {" "}
                          {option.label}
                        </MenuItem>
                      ))}

                      {/* Add other options here */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="mobile"
                    label="Phone Number"
                    type="text"
                    onChange={handleFormChange}
                    fullWidth
                    placeholder="Phone Number *"
                    required
                    inputProps={{
                      pattern: "[0-9+ ]*",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="Country-label">Country</InputLabel>
                <Select
                  labelId="Country-label"
                  id="Country"
                  name="Country"
                  defaultValue=""
                  input={<OutlinedInput label="Country" />}>
                  <MenuItem value="">
                    <em>-- Select Title --</em>
                  </MenuItem>
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country.name}>
                      {" "}
                      {country.name}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
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
                  {/* <td
              style={{
                padding: '8px',
                fontWeight: 'bold',
                textAlign: 'left',
              }}
            >
              Selected Fee:
            </td> */}
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
              fullWidth
              variant="contained"
              color="primary"
              sx={{marginTop: 2}}>
              Checkout
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

export default RegistrationForm;
