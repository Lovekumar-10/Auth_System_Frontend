import React, { useState } from "react";

import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const DashboardHome = () => {
  const { logout, logoutAll, user } = useAuth();
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState(null); // "single" | "all"

  // 🔹 Logout current device
  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      navigate("/login");
    }
  };

  // 🔹 Logout all devices
  const handleLogoutAll = async () => {
    try {
      await logoutAll();
    } finally {
      navigate("/login");
    }
  };

  // 🔹 Open confirmation modal
  const openConfirm = (type) => {
    setActionType(type);
    setShowConfirm(true);
  };

  // 🔹 Confirm action
  const confirmAction = async () => {
    if (actionType === "single") {
      await handleLogout();
    } else if (actionType === "all") {
      await handleLogoutAll();
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-100 p-4">
      
      {/* 👤 Center User */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome, <span className="text-blue-600">{user?.name || "User"}</span>
        </h2>
        <p className="mt-2 text-gray-500">You are successfully logged in.</p>
      </div>

      {/* 🔴 Buttons (bottom-right) */}
      <div className="absolute bottom-6 right-6 flex gap-3">
        <button
          onClick={() => openConfirm("single")}
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Logout
        </button>

        <button
          onClick={() => openConfirm("all")}
          className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Logout All
        </button>
      </div>

      {/* ⚠️ Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-semibold text-gray-900">Are you sure?</h3>
            <p className="mt-3 text-gray-600">
              {actionType === "all"
                ? "This will log you out from all active devices and sessions."
                : "You will be logged out from this device."}
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              
              <button
                onClick={confirmAction}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
              >
                Yes, Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;




















// import React from "react";
// import { useAuth } from "../../context/authContext";
// import { useNavigate } from "react-router-dom";

// const DashboardHome = () => {
//   const { logout, user } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();           // backend call + clear user
//     navigate("/login");       // redirect
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Welcome {user?.name}</h2>

//       <button
//         onClick={handleLogout}
//         style={{
//           padding: "10px 20px",
//           background: "red",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//           marginTop: "20px",
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default DashboardHome;