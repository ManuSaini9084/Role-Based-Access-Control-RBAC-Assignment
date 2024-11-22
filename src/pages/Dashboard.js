import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="dashboard-nav flex justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 py-4 shadow-lg">
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "users"
              ? "bg-white text-indigo-600 shadow-md"
              : "bg-indigo-700 text-white hover:bg-indigo-600"
          }`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTab === "roles"
              ? "bg-white text-purple-600 shadow-md"
              : "bg-purple-700 text-white hover:bg-purple-600"
          }`}
          onClick={() => setActiveTab("roles")}
        >
          Role Management
        </button>
      </nav>

      {/* Content */}
      <div className="dashboard-content p-6">
        {activeTab === "users" ? (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <UserTable />
          </div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <RoleTable />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
