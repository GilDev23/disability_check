import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import DisabilityCheck from "../components/DisabilityCheck";
import OwnershipHistory from "../components/OwnershipHistory";
import CarHistory from "../components/CarHistory";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="disabilityCheck" element={<DisabilityCheck />} />
          <Route path="ownershiphistory" element={<OwnershipHistory />} />
          <Route path="carhistory" element={<CarHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
