import React from "react";

const VehicleDetails = ({ vehicleDetails }) => {
  return (
    <div>
      <h2>Vehicle Details</h2>
      {vehicleDetails && vehicleDetails.length > 0 ? (
        <ol>
          <li>
            <strong>Mispar Rechev:</strong> {vehicleDetails[0].mispar_rechev}
          </li>
          <li>
            <strong>baalut:</strong> {vehicleDetails[0].baalut}
          </li>
          <li>
            <strong>Tozeret Name:</strong> {vehicleDetails[0].tozeret_nm}
          </li>
          <li>
            <strong>kinuy mishari:</strong> {vehicleDetails[0].kinuy_mishari}
          </li>
          <li>
            <strong>Tzeva rechev:</strong> {vehicleDetails[0].tzeva_rechev}
          </li>
        </ol>
      ) : (
        <p>No details available.</p>
      )}
    </div>
  );
};

export default VehicleDetails;

// {vehicleDetails.map((detail) => (
//     <li className="" key={detail._id}>
//       <strong>Mispar Rechev:</strong> {detail.mispar_rechev}
//       <br />
//       <strong>baalut:</strong> {detail.baalut}
//       <br />
//       <strong>Tzeva rechev:</strong> {detail.tzeva_rechev}
//       <br />
//       <strong>Tozeret Name:</strong> {detail.tozeret_nm}
//       <br />
//       <strong>kinuy mishari:</strong> {detail.kinuy_mishari}
//       <br />
//       {/* Add more details as needed */}
//     </li>
//   ))}
