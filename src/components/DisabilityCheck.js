import React, { useState } from "react";
import axios from "axios";
import VehicleDetails from "./VehicleDetails";

// ... (import statements)

const DisabilityCheck = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [details, setDetails] = useState("");
  const [color, setColor] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const hendelData = async () => {
    try {
      const response = await axios.get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=${inputValue}`
      );

      if (response.data.result.records.length > 0) {
        setData("disabled");
        setColor("text-success");
      } else {
        setData("non-disabled");
        setColor("text-danger");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors as needed
      // setData(false); // Set data to false in case of an error
    }
  };

  const hendelDetail = async () => {
    try {
      const detailsCar = await axios.get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${inputValue}`
      );

      setDetails(detailsCar.data.result.records);
      console.log(detailsCar.data.result.records);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDetails([]); // Set details to an empty array in case of an error
    }
  };

  const hendelClick = async () => {
    await hendelData();
    hendelDetail();
  };

  console.log(details);

  return (
    <div className="container text-center d-flex justify-content-center align-items-center flex-column p-3">
      <h2 className="text-info-emphasis">Parking ticket for the disabled</h2>
      <p className="text-info-emphasis">
        Is there a handicap parking ticket for this car?
      </p>

      <div>
        <input
          id="inputId"
          placeholder="Enter license plate number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={hendelClick}>Check</button>
      </div>
      <h2 className={color}>{data}</h2>
      <VehicleDetails vehicleDetails={details} />
    </div>
  );
};

export default DisabilityCheck;
