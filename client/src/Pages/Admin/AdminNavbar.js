import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="AdminNavbar">
      <ul>
        <li>
          <Link to={"/teams"}>Teams</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
