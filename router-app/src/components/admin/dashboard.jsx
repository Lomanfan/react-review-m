import React from "react";
import Sidebar from "./sidebar";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
