import axios from "axios";
import React, { useState, useEffect } from "react";

const CarHistory = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This effect runs whenever apiData changes
    console.log(apiData);
  }, [apiData]); // Only run the effect when apiData changes

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://data.gov.il/api/3/action/datastore_search?resource_id=56063a99-8a3e-4ff4-912e-5966c0279bad&q=76485501"
      );
      setApiData(response.data.result.records[0]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    fetchData();
  };

  return (
    <div className="text-center">
      <h2>API Data</h2>
      <button onClick={handleButtonClick}>Fetch Data</button>

      {/* <p>מספר רכב : {apiData.mispar_rechev}</p>
      <p>מספר מנוע : {apiData.mispar_manoa}</p>
      <p>קילומטר במבחן אחרון: {apiData.kilometer_test_aharon}</p>
      <p>
        האם היה שינוי מבנה ברכב: {apiData.shinui_mivne_ind == 0 ? "לא" : "כן"}
      </p>
      <p>מותנע בגפ"מ: {apiData.gapam_ind == 0 ? "לא" : "כן"}</p>
      <p>
        האם היה שינוי צבע מקור : {apiData.shnui_zeva_ind == 0 ? "לא" : "כן"}
      </p>
      <p>
        האם היה שינוי בצמיגי הרכב : {apiData.shinui_zmig_ind == 0 ? "לא" : "כן"}
      </p>
      <p>תאריך רישום ראשון: {apiData.rishum_rishon_dt}</p> */}
    </div>
  );
};

export default CarHistory;
