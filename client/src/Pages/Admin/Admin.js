import React from "react";
import "./Admin.css";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  return (
    <div className="Admin">
      <div className="Admin__left">
        <AdminNavbar />
      </div>
      <div className="Admin__right"></div>
    </div>
  );
}

export default Admin;
