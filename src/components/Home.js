import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  // State to store the input value and API response
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null); // Initialize with null

  // Event handler to update the state when the input changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler to make API request and update the state
  const hendelData = async () => {
    try {
      // Make an API request using axios
      const response = await axios.get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=${inputValue}`
      );
      // console.log(response);
      // console.log(response.data.result.records.length);
      // console.log(response.data.result.records[0]["TAARICH HAFAKAT TAG"]);
      // if (response.data.result.records.length) {
      //   setData("true");
      // } else {
      //   setData("false");
      // }
      disabilityCheck(response) ? setData("true") : setData("false");
      // Update the state with the API response data
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors as needed
    }
  };

  const disabilityCheck = (response) => {
    return response.data.result.records.length;
  };

  return (
    <div className="container text-center">
      <h2>Parking ticket for the disabled</h2>
      <p>Is there a handicap parking ticket for this?</p>

      {/* Input element with value and onChange attributes */}
      <input
        id="inputId"
        placeholder="Enter license plate number"
        value={inputValue}
        onChange={handleInputChange}
      />

      {/* Button to trigger the API request */}
      <button onClick={hendelData}>Check</button>
      <h2>{data}</h2>

      {/* Display the API response data
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
};

export default Home;
