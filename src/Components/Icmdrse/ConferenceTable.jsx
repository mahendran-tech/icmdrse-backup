import React, { useState } from "react";

const ConferenceTable = () => {
  const [selectedValues, setSelectedValues] = useState({
    amount: "",
    category: "",
    presentationType: "",
    mode: ""
  });

  const handleSelection = (value, category, presentationType, mode) => {
    setSelectedValues({
      amount: value,
      category: category,
      presentationType: presentationType,
      mode: mode
    });
  };

  return (
    <div>
      <h2 className="text-center">Conference Registration</h2>

      {/* Physical Table */}
      <div className="table-container">
        <h3 className="text-center" style={{ color: "#015451" }}>
          Physical Conference Participants
        </h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Admittance Category</th>
              <th>Early Bird (USD)</th>
              <th>Final (USD)</th>
              <th>Onspot (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Delegate</td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("399", "Delegate", "Oral", "Physical")}
                />
                399
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("449", "Delegate", "Oral", "Physical")}
                />
                449
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("499", "Delegate", "Oral", "Physical")}
                />
                499
              </td>
            </tr>
            <tr>
              <td>Group Student</td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("305", "Group Student", "Oral", "Physical")}
                />
                305
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("325", "Group Student", "Oral", "Physical")}
                />
                325
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("375", "Group Student", "Oral", "Physical")}
                />
                375
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Virtual Table */}
      <div className="table-container">
        <h3 className="text-center" style={{ color: "#015451" }}>
          Virtual Conference Participants
        </h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Admittance Category</th>
              <th>Early Bird (USD)</th>
              <th>Final (USD)</th>
              <th>Onspot (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Delegate</td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("299", "Delegate", "Oral", "Virtual")}
                />
                299
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("349", "Delegate", "Oral", "Virtual")}
                />
                349
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("399", "Delegate", "Oral", "Virtual")}
                />
                399
              </td>
            </tr>
            <tr>
              <td>Group Student</td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("205", "Group Student", "Oral", "Virtual")}
                />
                205
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("225", "Group Student", "Oral", "Virtual")}
                />
                225
              </td>
              <td>
                <input
                  type="radio"
                  name="amount"
                  onClick={() =>
                    handleSelection("275", "Group Student", "Oral", "Virtual")}
                />
                275
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Selected Details */}
      <div className="selected-details mt-3">
        <h4>Selected Details:</h4>
        <p>
          Amount: {selectedValues.amount || "Not selected"}
        </p>
        <p>
          Category: {selectedValues.category || "Not selected"}
        </p>
        <p>
          Presentation Type: {selectedValues.presentationType || "Not selected"}
        </p>
        <p>
          Mode: {selectedValues.mode || "Not selected"}
        </p>
      </div>
    </div>
  );
};

export default ConferenceTable;
