import React from "react";
import PopularPlaces from "../Components/Icmdrse/PopularPlaces";
import BreadCumb from "../Components/Common/BreadCumb";
import Objectives from "../Components/Icmdrse/Objectives";
import {Col, Container, Row} from "react-bootstrap";
import {Paper} from "@mui/material";
import {ImLocation2} from "react-icons/im";

const Venue = () => {
  const countries = [
    "Australia",
    "Brunei",
    "Chile",
    "China",
    "Hong Kong",
    "Indonesia",
    "Japan",
    "South Korea",
    "Mexico",
    "New Zealand",
    "Papua New Guinea",
    "Taiwan",
    "Peru",
    "Philippines",
    "Thailand",
    "Russia",
    "Vietnam",
    "Singapore",
  ];

  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="Venue" />
      <div>
        <Container>
          <Row className="mt-5">
            <Col lg={6} sx={12}>
              <Paper elevation={3} sx={{padding: "20px"}}>
                <div>
                  <h4>
                    {" "}
                    <ImLocation2 style={{color: "#f60339"}} /> Location{" "}
                  </h4>
                  <div>
                    <h5>
                      {" "}
                      <span style={{color: "#f60339"}}> Venue :</span> Corus
                      Hotel Kuala Lumpur
                    </h5>
                    <h6>Address:</h6>
                    <p>
                      Persiaran Hampshire, Jalan Ampang, 50450 Kuala Lumpur,
                      Wilayah Persekutuan Kuala Lumpur, Malaysia +60 3-2161 8888
                    </p>
                  </div>
                </div>
              </Paper>
            </Col>
            <Col lg={6} sx={12}>
              <Paper elevation={3} sx={{padding: "10px"}}>
                <div className="google-map-code">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=%20venue:%20Corus%20Hotel%20Kuala%20Lumpur%20Persiaran%20Hampshire,%20Jalan%20Ampang,%2050450%20Kuala%20Lumpur,%20Wilayah%20Persekutuan%20Kuala%20Lumpur,%20Malaysia+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="600"
                    height="220"
                    frameborder="0"
                    style={{border: 0}}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  />
                </div>
              </Paper>
            </Col>
          </Row>
        </Container>

        <PopularPlaces />
      </div>
      <div className="container">
        <div className="row border border-1 p-4 rounded mt-4">
          <h5>Visa Information </h5>
          <div className="cs_accordians_wrapper cs_style_1">
            <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
              <li>
                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                  <i className="bi bi-check" />
                </span>
                <span>
                  <b className="cs_heading_color cs_semibold"></b> The IFERP
                  Academy will not directly contact embassies and consulates on
                  behalf of visa applicants. All delegates or invitees should
                  apply for a Business Visa only
                </span>
              </li>
              <li>
                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                  <i className="bi bi-check" />
                </span>
                <span>
                  <b className="cs_heading_color cs_semibold"></b>
                  failed visa applications, it's essential to note that visa
                  issues fall outside the purview of IFERP's cancellation
                  policy, including the inability to secure a visa.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row border border-1 p-4 rounded mt-4">
          <h5>Visa-Free Countries for APEC Business Travel Card Holders </h5>
          <div className="cs_accordians_wrapper cs_style_1">
            <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
              <li className="flex-column">
                <span>
                  <b className="cs_heading_color cs_semibold"> </b>
                  Citizens of APEC member countries holding an APEC Business
                  Travel Card (ABTC) with the "MYS" code can travel to Malaysia
                  without a visa for up to 60 days. The ABTC, valid for five
                  years, facilitates easier travel across APEC economies by
                  eliminating the visa requirement once pre-clearance is granted
                  during the application process.
                </span>
                <hr />
                <h5>Visa-Free Countries Include:</h5>
                <ul className="d-flex flex-wrap gap-2">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="border border-1 px-2 py-1 rounded-2 border-primary">
                      {country}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                For more details on visa guidelines, please refer to this
                official link:{" "}
                <a
                  href="https://www.malaysia.gov.my/portal/content/28905"
                  target="_blank"
                  className="text-primary">
                  {" "}
                  Malaysia Visa Guidelines.{" "}
                </a>
              </li>
              <li>
                For additional information on visa-free travel, kindly check
                this link:{" "}
                <a
                  href="https://blog.wego.com/malaysia-visa-free-travel/  "
                  target="_blank"
                  className="text-primary">
                  {" "}
                  Wego Malaysia Visa-Free Travel.{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row  p-4 rounded mt-4">
          <div
            className=" d-flex align-items-center align-content-center flex-row justify-content-center cs_accordians_wrapper cs_style_1 ps-0"
            style={{backgroundColor: "#e7e7e7"}}>
            <div className="w-25 align-self-stretch flex-shrink-0">
              <img src="assets/img/visa.jpg" alt="" />
            </div>
            <ul className=" w-75 align-content-center cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
              <h4>How to Apply for an E-Visa </h4>
              <li className="flex-column">
                <span>
                  <b className="cs_heading_color cs_semibold"> </b>
                  To apply for an eVisa for the 8th International Conference on
                  Medical and Dental Research in Southeast Asia (ICMDRSE) in
                  Malaysia, please follow these steps:
                </span>

                <ul className=" gap-2">
                  <li>
                    {" "}
                    <i className="bi bi-check" /> Visit the official eVisa
                    application page: Apply for E-Visa{" "}
                  </li>
                  <li>
                    {" "}
                    <i className="bi bi-check" /> Fill out the online
                    application form.{" "}
                  </li>
                  <li className="flex-column">
                    <div>
                      {" "}
                      <i className="bi bi-check" /> Ensure that you have the
                      necessary documents, including:{" "}
                    </div>
                    <ul>
                      <li>
                        {" "}
                        <i className="bi bi-dot"></i>Your passport{" "}
                      </li>
                      <li>
                        <i className="bi bi-dot"></i> Conference invitation
                        letter
                      </li>
                      <li>
                        <i className="bi bi-dot"></i> Travel itinerary
                      </li>
                    </ul>
                  </li>
                  <li className="mt-3">
                    The eVisa simplifies the entry process, making it easier for
                    conference attendees to travel to Malaysia and participate
                    in the event. If you encounter any issues receiving your
                    invitation, we encourage you to contact us promptly. Our
                    dedicated team is here to assist you in ensuring a smooth
                    visa application process, providing any necessary support or
                    documentation to facilitate your travel to Malaysia for the
                    event.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="row border border-1 p-4 rounded mt-4">
          <h4>Nearby Airports </h4>
          <p>Kuala Lumpur is served by two main airports:</p>
          <Objectives
            title=""
            description=""
            objectives={[
              {
                title: "Sultan Abdul Aziz Shah Airport (Subang Airport) (SZB)",
                description:
                  "<br/> Located just 15.4 kilometers from the city center, this is the nearest airport to Kuala Lumpur.",
              },
              {
                title: "Kuala Lumpur International Airport (KLIA)",
                description:
                  "<br/> Situated 43.4 kilometers from Kuala Lumpur, KLIA is another major airport option for travelers.",
              },
            ]}
            additionalContent="Both airports are well-connected, providing convenient travel options for visitors to Kuala Lumpur."
            showImage={false}
          />
        </div>

        <div className="row border border-1 p-4 rounded mt-4">
          <Objectives
            title="Book Your Accommodation with Ease"
            description="We showcase accommodation information to help make your stay in Kuala Lumpur comfortable and convenient. Whether you're looking for luxurious hotels or budget-friendly options, you'll find a range of accommodations that suit your needs."
            objectives={[
              {
                title: "Recommended Options:",
                description:
                  "<br/> <a href='https://www.agoda.com/corus-hotel/hotel/kuala-lumpur-my.html?site_id=1922866&tag=aa97546f-fb9d-43c3-a45e-92208d5aa8c1&gad_source=1&device=c&network=g&adid=720952538847&rand=14066960508927175795&expid=&adpos=&aud=dsa-2374298574430&gclid=CjwKCAiAgoq7BhBxEiwAVcW0LIEIyelBAZO6NHrL7FgNVWEI0aix1nY2nGbPJlOmtFhkem9Wiois3hoC6VEQAvD_BwE&pslc=1&ds=jNpLsdKwuJIEcTik' target='_blank'> Corus Hotel on Agoda </a> <br/><a href='http://booking.com' target='_blank'> Hotel on booking.com </a> ",
              },
            ]}
            additionalContent="These links offer a variety of options tailored to your preferences and budget, ensuring a seamless booking experience."
            showImage={false}
          />
        </div>

        <div className="row mt-5 py-4 px-4 rounded-3 border-dark-subtle border border-opacity-25 border-primary">
          <div className="col-lg-12">
            <h4> How to reach venue from the airport: </h4>
            <p>
              Here’s how you can reach the <b> Corus Hotel </b> (located in
              Jalan Ampang, Kuala Lumpur) from both{" "}
              <b> Sultan Abdul Aziz Shah Airport (Subang Airport, SZB)</b> and
              <b> Kuala Lumpur International Airport (KLIA): </b>
            </p>
          </div>
          <hr />
          <div className="col-lg-12 mt-4">
            <h4>From Sultan Abdul Aziz Shah Airport (SZB): </h4>
            <h5>By Taxi or Ride-Hailing (Grab):</h5>
            <ul>
              <li>
                <b>Duration: </b> ~30-40 minutes (depending on traffic).
              </li>
              <li>
                <b>Cost: </b> Approximately RM30-50 using Grab or a metered
                taxi.
              </li>
              <li>Recommended for convenience, especially with luggage.</li>
            </ul>
            <h5>By Public Transport:</h5>
            <ul>
              <li>
                <b>Step 1: </b> Take the <b> RapidKL Bus </b> from the airport
                to the Kelana Jaya LRT station (10-15 minutes).
              </li>
              <li>
                <b>Step 2 </b> Board the <b> LRT Kelana Jaya Line</b> towards
                Gombak. taxi.
              </li>
              <li>
                {" "}
                <b>Step 3: </b> Alight at the <b> KLCC Station</b> (Corus Hotel
                is a short 5-minute walk from here).
              </li>
              <li>
                {" "}
                <b>Duration: </b> 1 hour.
              </li>
              <li>
                {" "}
                <b>Cost: </b> Around RM6-8.
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5 mb-2 py-4 px-4 rounded-3 border-dark-subtle border border-opacity-25 border-primary">
          <div className="col-lg-6 col-md-12 mt-4">
            <h4>From Kuala Lumpur International Airport (KLIA): </h4>
            <h5>By Taxi or Ride-Hailing (Grab):</h5>
            <ul>
              <li>
                <b>Duration: </b> 45-60 minutes.
              </li>
              <li>
                <b>Cost: </b> RM65-100 for Grab or metered taxi
              </li>
              <li>Recommended for comfort and luggage handling.</li>
            </ul>
            <h5>By KLIA Ekspres (Train):</h5>
            <ul>
              <li>
                <b>Step 1: </b> Take the <b> KLIA Ekspres </b> from KLIA to{" "}
                <b> KL Sentral</b> (28 minutes).
              </li>
              <li>
                <b>Cost : </b> RM55 for a one-way ticket.
              </li>
              <li>
                {" "}
                <b>Step 2: </b> From KL Sentral, switch to the{" "}
                <b> LRT Kelana Jaya Line </b> towards Gombak.
              </li>
              <li>
                {" "}
                <b>Step 3: </b> Alight at the <b> KLCC Station </b> and walk to
                Corus Hotel.
              </li>
              <li>
                {" "}
                <b>Duration: </b> 1 hour.
              </li>
              <li>
                {" "}
                <b>Cost: </b> RM60-65.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 mt-4 ">
            <h5 className="mt-5">By Bus (Budget Option):</h5>
            <ul>
              <li>
                <b>Step 1: </b> Take a bus from KLIA to <b> KL Sentral</b>{" "}
                (around RM12).
              </li>

              <li>
                {" "}
                <b>Step 2: </b> From KL Sentral, switch to the{" "}
                <b> LRT Kelana Jaya Line </b> towards Gombak.
              </li>
              <li>
                {" "}
                <b>Step 3: </b> Alight at the <b> KLCC Station </b> and walk to
                Corus Hotel.
              </li>
              <li>
                {" "}
                <b>Duration: </b> 1.5 hours.
              </li>
              <li>
                {" "}
                <b>Cost: </b> RM15-20.
              </li>
            </ul>
          </div>
          <hr />
          <div className="col-lg-12">
            <h5 className="">Tips:</h5>
            <ul>
              <li>
                Ride-hailing apps like Grab are widely used and reliable in
                Malaysia.
              </li>

              <li>
                For public transport, use the MyRapid app or Google Maps for
                route guidance.
              </li>
              <li>
                If you’re arriving late at night, taxis or Grab are the best
                options as public transport has limited hours.
              </li>
              <li>
                Grab app:{" "}
                <a
                  href="https://www.grab.com/global/download/?utm_source=googleadwords_int&utm_campaign=IN_G0130_CLUSTERALL-CLUSTERALL_PAX_GT_ALL_211124_CONS-MABA-TRAF_GGR__RG23GTPAT1INTRAVH2_SEM_BRAND&utm_medium=paidsearch&utm_content=IN_G0130_CLUSTERALL-CLUSTERALL_PAX_GT_ALL_211124_CONS-MABA-TRAF_GGR__RG23GTPAT1INTRAVH2_SEM_BRAND_kw__na-1x1&utm_term=IN_G0130_CLUSTERALL-CLUSTERALL_PAX_GT_ALL_211124_CONS-MABA-TRAF_GGR__RG23GTPAT1INTRAVH2_SEM_BRAND_kw_insembrandcampaignbau&gad_source=1&gclid=EAIaIQobChMIgeOdnLuzigMVyaRmAh04YSSVEAAYASAAEgIZqPD_BwE"
                  target="_blank"
                  style={{color: "blue"}}>
                  link to download the app
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
