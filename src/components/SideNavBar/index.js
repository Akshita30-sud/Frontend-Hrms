import React from "react";
import {
  FaHome,
  FaUsers,
  FaTachometerAlt,
  FaCalendarAlt,
  FaChartBar,
  FaFileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  const sidebarItems = [
    { icon: <FaHome />, label: "Overview", path: "/dashboard" },
    { icon: <FaUsers />, label: "Users", path: "/dashboard/users" },
    { icon: <FaTachometerAlt />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaCalendarAlt />, label: "Attendance", path: "/attendance" },
    { icon: <FaChartBar />, label: "Reports", path: "/dashboard/reports" },
    { icon: <FaFileAlt />, label: "Templates", path: "/dashboard/templates" },
    { icon: <FaEnvelope />, label: "Request", path: "/dashboard/request" },
  ];

  return (
    <React.Fragment>
      {sidebarItems?.map((item, index) => (
        <NavLink
          key={index}
          to={item?.path}
          className={({ isActive }) =>
            `sidebar-item ${isActive ? "active" : ""}`
          }
        >
          <span className="sidebar-icon">{item?.icon}</span>
          <span className="sidebar-label">{item?.label}</span>
        </NavLink>
      ))}
    </React.Fragment>
  );
}
