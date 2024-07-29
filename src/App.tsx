import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ChooseDomain from "./pages/ChooseDomain";
import CustomerHome from "./pages/customer/CustomerHome";
import DesignerHome from "./pages/designer/DesignerHome";
import CompanyHome from "./pages/company/CompanyHome";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/chooseDomain" replace />} />
      <Route path="/chooseDomain" element={<ChooseDomain />} />
      <Route path="/customerHome" element={<CustomerHome />} />
      <Route path="/designerHome" element={<DesignerHome />} />
      <Route path="/companyHome" element={<CompanyHome />} />
    </Routes>
  );
}
