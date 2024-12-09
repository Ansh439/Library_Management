import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import VendorLogin from "./components/VendorLogin.jsx";
import UserLogin from "./components/UserLogin.jsx";
import UserPortal from "./components/UserPortal.jsx";
import UserSignup from "./components/UserSignup.jsx";
import MaintainUser from "./components/MaintainUser.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-portal" element={<UserPortal />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/user-maintainuser" element={<MaintainUser />} />


      </Routes>
    </Router>
  );
}

export default App;