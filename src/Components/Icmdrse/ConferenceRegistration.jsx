import React, {useState} from "react";
import RegistrationForm from "../Common/RegistrationForm";
import RegistrationAddon from "../Common/RegistrationAddon";
import AlertMessage from "./AlertMessage";

const ConferenceRegistration = () => {
  const [selected, setSelected] = useState({
    amount: "",
    category: "",
    presentationType: "",
    mode: "",
  });

  const disableEarlyBird = false; // Set to true to disable "Early Bird"

  // Table Data Structure
  const tables = [
    {
      title: "PHYSICAL CONFERENCE PARTICIPANTS",
      categories: [
        {
          presentationType: "ORAL / LIVE PRESENTATION",
          rows: [
            {category: "Delegate", amounts: [399, 449, 499]},
            {category: "Group Delegates", amounts: [375, 425, 475]},
            {category: "Student", amounts: [329, 349, 399]},
            {category: "Group Students", amounts: [305, 325, 375]},
            {
              category: "Delegates with Scopus / WOS Publication Support",
              amounts: [749, 799, 849],
            },
            {
              category: "Students with Scopus / WOS Publication Support",
              amounts: [649, 699, 749],
            },
            {category: "Listener/Non Presenter", amounts: [199, 249]},
          ],
        },
        {
          presentationType: "POSTER PRESENTATION",
          rows: [
            {category: "Delegate", amounts: [349, 399, 499]},
            {category: "Group Delegates", amounts: [325, 375, 475]},
            {category: "Student", amounts: [269, 299, 399]},
            {category: "Group Students", amounts: [245, 275, 375]},
            {
              category: "Delegates with Scopus / WOS Publication Support",
              amounts: [699, 749, 849],
            },
            {
              category: "Students with Scopus / WOS Publication Support",
              amounts: [589, 649, 749],
            },
            {category: "Listener/Non Presenter", amounts: [199, 249]},
          ],
        },
      ],
    },
    {
      title: "VIRTUAL PRESENTATION PARTICIPANTS",
      categories: [
        {
          presentationType: "ORAL / LIVE PRESENTATION",
          rows: [
            {category: "Delegate", amounts: [349, 399]},
            {category: "Group Delegates", amounts: [325, 375]},
            {category: "Student", amounts: [269, 329]},
            {category: "Group Students", amounts: [245, 305]},
            {
              category: "Delegates with Scopus / WOS Publication Support",
              amounts: [699, 749],
            },
            {
              category: "Students with Scopus / WOS Publication Support",
              amounts: [599, 649],
            },
            {category: "Listener/Non Presenter", amounts: [99]},
          ],
        },
        {
          presentationType: "POSTER PRESENTATION",
          rows: [
            {category: "Delegate", amounts: [299, 349]},
            {category: "Group Delegates", amounts: [275, 325]},
            {category: "Student", amounts: [219, 279]},
            {category: "Group Students", amounts: [195, 255]},
            {
              category: "Delegates with Scopus / WOS Publication Support",
              amounts: [649, 699],
            },
            {
              category: "Students with Scopus / WOS Publication Support",
              amounts: [549, 599],
            },
            {category: "Listener/Non Presenter", amounts: [99]},
          ],
        },
      ],
    },
  ];

  const handleSelection = (amount, category, presentationType, mode) => {
    setSelected({
      amount,
      category,
      presentationType,
      mode,
    });
  };

  return (
    <div className="container-fluid px-4 mt-5">
      <h5 style={{color: "red"}} className="text-center">
        **Note: Additional Charges Applicable For Scopus publication (T& C
        Apply)
      </h5>
      <div className="row d-flex justify-content-center">
        {/* Physical Conference Participants - Left Side */}
        <div className="col-md-6">
          {tables[0] && (
            <div>
              <h5
                style={{
                  background: "#015451",
                  color: "white",
                }}
                className="text-center style-header mb-0">
                {tables[0].title}
              </h5>
              {tables[0].categories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h6
                    className="mb-0"
                    style={{background: "#c3f7f7", padding: "10px"}}>
                    {category.presentationType}
                  </h6>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Admittance Category</th>
                        <th>Early Bird (USD)</th>
                        <th>Final (USD)</th>
                        {category.rows[0].amounts.length > 2 && (
                          <th>Onspot (USD)</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {category.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {/* <td>
                            {row.category}
                          </td> */}
                          <td>
                            {row.category}
                            {row.category.includes("Student") && (
                              <span style={{color: "red", fontSize: "15px"}}>
                                *
                              </span>
                            )}
                          </td>
                          {row.amounts.map((amount, amtIndex) => (
                            <td
                              className={`text-center ${
                                row.category === "Listener/Non Presenter" &&
                                amount === 199
                                  ? "colspan-2"
                                  : ""
                              }  `}
                              {...(row.category === "Listener/Non Presenter" &&
                              amount === 199
                                ? {colSpan: 2}
                                : {})}
                              key={amtIndex}>
                              <input
                                type="radio"
                                id={`physical-radio-${catIndex}-${rowIndex}-${amtIndex}`}
                                name={`physical-fee-selection-${catIndex}-${rowIndex}`} // Unique name for physical
                                disabled={disableEarlyBird && amtIndex === 0}
                                checked={
                                  selected.amount === amount &&
                                  selected.category === row.category &&
                                  selected.presentationType ===
                                    category.presentationType &&
                                  selected.mode === tables[0].title
                                }
                                onChange={() =>
                                  handleSelection(
                                    amount,
                                    row.category,
                                    category.presentationType,
                                    tables[0].title
                                  )
                                }
                              />{" "}
                              <label
                                htmlFor={`physical-radio-${catIndex}-${rowIndex}-${amtIndex}`}>
                                {amount}
                              </label>
                            </td>
                          ))}
                        </tr>
                      ))}
                      {/* Add the new rows here, but only for the last category */}
                      {catIndex === tables[0].categories.length - 1 && (
                        <>
                          {/* Physical type Conference Presentation with Q2 Scopus */}
                          <tr>
                            <td
                              colSpan="4"
                              style={{
                                background: "#bff7f7",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}>
                              Physical Conference Presentation with Q2 Scopus
                            </td>
                          </tr>
                          <tr>
                            <td>Presentation with Q2 Scopus Publication</td>
                            <td colSpan="3" className="text-center">
                              <input
                                type="radio"
                                id="physical-radio-scopus"
                                name="physical-fee-selection" // Same group name for selection
                                checked={
                                  selected.amount === 1399 &&
                                  selected.category ===
                                    "Presentation with Q2 Scopus Publication" &&
                                  selected.presentationType ===
                                    category.presentationType &&
                                  selected.mode === tables[0].title
                                }
                                onChange={() =>
                                  handleSelection(
                                    1399, // Amount
                                    "Presentation with Q2 Scopus Publication", // Category
                                    category.presentationType, // Presentation Type
                                    tables[0].title // Mode
                                  )
                                }
                              />{" "}
                              <label htmlFor="physical-radio-scopus">
                                1399
                              </label>
                            </td>
                          </tr>

                          {/* Physical Plenary Speaker */}
                          <tr>
                            <td
                              colSpan="4"
                              style={{
                                background: "#bff7f7",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}>
                              Physical Plenary Speaker
                            </td>
                          </tr>
                          <tr>
                            <td>Plenary Speaker</td>
                            <td colSpan="3" className="text-center">
                              <input
                                type="radio"
                                id="physical-plenary-speaker"
                                name="physical-fee-selection" // Same group name to ensure only one can be selected
                                checked={
                                  selected.amount === 399 &&
                                  selected.category ===
                                    "Physical Plenary Speaker" &&
                                  selected.presentationType ===
                                    category.presentationType &&
                                  selected.mode === tables[0].title
                                }
                                onChange={() =>
                                  handleSelection(
                                    399, // Amount
                                    "Physical Plenary Speaker", // Category
                                    category.presentationType, // Presentation Type
                                    tables[0].title // Mode
                                  )
                                }
                              />{" "}
                              <label htmlFor="physical-plenary-speaker">
                                399
                              </label>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Virtual Presentation Participants - Right Side */}
        <div className="col-md-5">
          {tables[1] && (
            <div>
              <h5
                style={{
                  background: "#012354",
                  color: "white",
                }}
                className="text-center style-header mb-0">
                {tables[1].title}
              </h5>
              {tables[1].categories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h6
                    className="mb-0"
                    style={{background: "#c3f7f7", padding: "10px"}}>
                    {category.presentationType}
                  </h6>
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Admittance Category</th>
                        <th>Early Bird (USD)</th>
                        <th>Final (USD)</th>
                        {category.rows[0].amounts.length > 2 && (
                          <th>Onspot (USD)</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {category.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {/* <td>
                            {row.category}
                          </td> */}
                          <td>
                            {row.category}
                            {row.category.includes("Student") && (
                              <span style={{color: "red", fontSize: "15px"}}>
                                *
                              </span>
                            )}
                          </td>
                          {row.amounts.map((amount, amtIndex) => (
                            <td
                              className={`text-center ${
                                row.category === "Listener/Non Presenter" &&
                                amount === 99
                                  ? "colspan-2"
                                  : ""
                              }`}
                              {...(row.category === "Listener/Non Presenter" &&
                              amount === 99
                                ? {colSpan: 2}
                                : {})}
                              key={amtIndex}>
                              <input
                                type="radio"
                                id={`virtual-radio-${catIndex}-${rowIndex}-${amtIndex}`}
                                name={`virtual-fee-selection-${catIndex}-${rowIndex}`} // Unique name for virtual
                                disabled={disableEarlyBird && amtIndex === 0}
                                checked={
                                  selected.amount === amount &&
                                  selected.category === row.category &&
                                  selected.presentationType ===
                                    category.presentationType &&
                                  selected.mode === tables[1].title
                                }
                                onChange={() =>
                                  handleSelection(
                                    amount,
                                    row.category,
                                    category.presentationType,
                                    tables[1].title
                                  )
                                }
                              />{" "}
                              <label
                                htmlFor={`virtual-radio-${catIndex}-${rowIndex}-${amtIndex}`}>
                                {amount}
                              </label>
                            </td>
                          ))}
                        </tr>
                      ))}
                      {/* Add the new rows here, but only for the last category */}
                      {catIndex === tables[1].categories.length - 1 && (
                        <>
                          <tr>
                            <td
                              colSpan="4"
                              style={{
                                background: "#bff7f7",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}>
                              Virtual Conference Presentation with Q2 Scopus
                            </td>
                          </tr>
                          <tr>
                            <td>Presentation with Q2 Scopus Publication</td>
                            <td colSpan="3" className="text-center">
                              <input
                                type="radio"
                                id="virtual-radio-scopus"
                                name="virtual-fee-selection" // Same group name for selection
                                checked={
                                  selected.amount === 1149 &&
                                  selected.category ===
                                    "Presentation with Q2 Scopus Publication" &&
                                  selected.presentationType ===
                                    category.presentationType &&
                                  selected.mode === tables[1].title
                                }
                                onChange={() =>
                                  handleSelection(
                                    1149, // Amount
                                    "Presentation with Q2 Scopus Publication", // Category
                                    category.presentationType, // Presentation Type
                                    tables[1].title // Mode
                                  )
                                }
                              />{" "}
                              <label htmlFor="virtual-radio-scopus">1149</label>
                            </td>
                          </tr>

                          {/* Physical Plenary Speaker */}
                          <tr>
                            <td
                              colSpan="4"
                              style={{
                                background: "#bff7f7",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}>
                              Virtual Plenary Speaker
                            </td>
                          </tr>
                          <tr>
                            <td>Plenary Speaker</td>
                            <td colSpan="3" className="text-center">
                              <input
                                type="radio"
                                id="virtual-plenary-speaker"
                                name="virtual-fee-selection" // Same group name to ensure only one can be selected
                                checked={
                                  selected.amount === 299 &&
                                  selected.category ===
                                    "Virtual Plenary Speaker" &&
                                  selected.presentationType ===
                                    category.presentationType &&
                                  selected.mode === tables[1].title
                                }
                                onChange={() =>
                                  handleSelection(
                                    299, // Amount
                                    "Virtual Plenary Speaker", // Category
                                    category.presentationType, // Presentation Type
                                    tables[1].title // Mode
                                  )
                                }
                              />{" "}
                              <label htmlFor="virtual-plenary-speaker">
                                299
                              </label>
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        {/* <RegistrationForm selected={selected} />{" "} */}
        <RegistrationAddon selected={selected} /> <AlertMessage />
      </div>

      {/* <div className="mt-4 container">
        <h4>Selected Details:</h4>
        <p>
          Amount: {selected.amount || "Not selected"}
        </p>
        <p>
          Category: {selected.category || "Not selected"}
        </p>
        <p>
          Presentation Type: {selected.presentationType || "Not selected"}
        </p>
        <p>
          Mode: {selected.mode || "Not selected"}
        </p>
      </div> */}
    </div>
  );
};

export default ConferenceRegistration;
