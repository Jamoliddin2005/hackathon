import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="AdminNavbar">
      <ul>
        <li>
          <Link to={"/teams"}>Teams</Link>
        </li>
        <li>
          <Link to={"/category"}>Category</Link>
        </li>
        <li>
          <Link to={"/news"}>News</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
