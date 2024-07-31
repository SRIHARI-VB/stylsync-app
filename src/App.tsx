import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ChooseDomain from "./pages/ChooseDomain";
import CustomerHome from "./pages/customer/CustomerHome";
import DesignerHome from "./pages/designer/DesignerHome";
import CompanyHome from "./pages/company/CompanyHome";
import SearchPage from "./pages/customer/SearchPage";
import BagPage from "./pages/customer/BagPage";
import ShopPage from "./pages/customer/ShopPage";
import ProfilePage from "./pages/customer/ProfilePage";
import DesignerProfilePage from "./pages/DesignerProfilePage";
import ProductDetails from "./pages/customer/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/chooseDomain" replace />} />
      <Route path="/chooseDomain" element={<ChooseDomain />} />
      <Route path="/customerHome" element={<CustomerHome />} />
      <Route path="/designerHome" element={<DesignerHome />} />
      <Route path="/companyHome" element={<CompanyHome />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/designer/:designerId" element={<DesignerProfilePage />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  );
}
