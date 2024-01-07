import axios from "axios";
import React, { useState } from "react";

const CarHistory = () => {
  const [apiData, setApiData] = useState(null);
  const [inputValue, setInputvalu] = useState("");

  const hendelInputValue = (event) => {
    setInputvalu(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=56063a99-8a3e-4ff4-912e-5966c0279bad&q=${inputValue}`
      );
      setApiData(response.data.result.records[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
    console.log(inputValue);
  };

  return (
    <div className="text-center">
      <h2>API Data</h2>
      <input
        placeholder="Enter license plate number"
        onChange={hendelInputValue}
        value={inputValue}
      ></input>
      <button onClick={handleButtonClick}>Fetch Data</button>
      {/* Display object properties dynamically */}
      {apiData && (
        <>
          {" "}
          <p>מספר רכב : {apiData.mispar_rechev}</p>
          <p>{apiData.mispar_manoa} : מספר מנוע </p>
          <p>קילומטר במבחן אחרון: {apiData.kilometer_test_aharon}</p>
          <p>
            האם היה שינוי מבנה ברכב:{" "}
            {apiData.shinui_mivne_ind == 0 ? "לא" : "כן"}
          </p>
          <p>מותנע בגפ"מ: {apiData.gapam_ind == 0 ? "לא" : "כן"}</p>
          <p>
            האם היה שינוי צבע מקור : {apiData.shnui_zeva_ind == 0 ? "לא" : "כן"}
          </p>
          <p>
            האם היה שינוי בצמיגי הרכב :{" "}
            {apiData.shinui_zmig_ind == 0 ? "לא" : "כן"}
          </p>
          <p>תאריך רישום ראשון: {apiData.rishum_rishon_dt}</p>{" "}
        </>
      )}
    </div>
  );
};

export default CarHistory;
