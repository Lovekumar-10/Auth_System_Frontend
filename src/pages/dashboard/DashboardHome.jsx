// import React, { useState } from "react";

// import { useAuth } from "../../context/authContext";
// import { useNavigate } from "react-router-dom";


// const DashboardHome = () => {
//   const { logout, logoutAll, user } = useAuth();
//   const navigate = useNavigate();

//   const [showConfirm, setShowConfirm] = useState(false);
//   const [actionType, setActionType] = useState(null); // "single" | "all"

//   // 🔹 Logout current device
//   const handleLogout = async () => {
//     try {
//       await logout();
//     } finally {
//       navigate("/login");
//     }
//   };

//   // 🔹 Logout all devices
//   const handleLogoutAll = async () => {
//     try {
//       await logoutAll();
//     } finally {
//       navigate("/login");
//     }
//   };

//   // 🔹 Open confirmation modal
//   const openConfirm = (type) => {
//     setActionType(type);
//     setShowConfirm(true);
//   };

//   // 🔹 Confirm action
//   const confirmAction = async () => {
//     if (actionType === "single") {
//       await handleLogout();
//     } else if (actionType === "all") {
//       await handleLogoutAll();
//     }
//   };

//   return (
//     <div className="relative flex h-screen items-center justify-center bg-gray-100 p-4">
      
//       {/* 👤 Center User */}
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-gray-800">
//           Welcome, <span className="text-blue-600">{user?.name || "User"}</span>
//         </h2>
//         <p className="mt-2 text-gray-500">You are successfully logged in.</p>
//       </div>

//       {/* 🔴 Buttons (bottom-right) */}
//       <div className="absolute bottom-6 right-6 flex gap-3">
//         <button
//           onClick={() => openConfirm("single")}
//           className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
//         >
//           Logout
//         </button>

//         <button
//           onClick={() => openConfirm("all")}
//           className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300"
//         >
//           Logout All
//         </button>
//       </div>

//       {/* ⚠️ Confirmation Modal */}
//       {showConfirm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl animate-in fade-in zoom-in duration-200">
//             <h3 className="text-xl font-semibold text-gray-900">Are you sure?</h3>
//             <p className="mt-3 text-gray-600">
//               {actionType === "all"
//                 ? "This will log you out from all active devices and sessions."
//                 : "You will be logged out from this device."}
//             </p>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 onClick={() => setShowConfirm(false)}
//                 className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
//               >
//                 Cancel
//               </button>
              
//               <button
//                 onClick={confirmAction}
//                 className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
//               >
//                 Yes, Log out
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashboardHome;






import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import ConfirmActionModal from "../../components/ConfirmActionModal"; // import new component

const DashboardHome = () => {
  const { logout, logoutAll, deleteAccount, cancelDeletion, user } = useAuth();
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState(null); // "single" | "all" | "delete" | "cancel"

  const handleAction = async () => {
    try {
      if (actionType === "single") await logout();
      else if (actionType === "all") await logoutAll();
      else if (actionType === "delete") await deleteAccount();
      else if (actionType === "cancel") await cancelDeletion();
    } finally {
      if (actionType === "single" || actionType === "all") navigate("/login");
      setShowConfirm(false);
    }
  };

  const openConfirm = (type) => {
    setActionType(type);
    setShowConfirm(true);
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome, <span className="text-blue-600">{user?.name || "User"}</span>
        </h2>
        <p className="mt-2 text-gray-500">You are successfully logged in.</p>
        {user?.pendingDeletion && (
          <p className="mt-1 text-sm text-red-600">
            Your account is scheduled for deletion. You have 15 days to cancel.
          </p>
        )}
      </div>

      <div className="absolute bottom-6 right-6 flex gap-3">
        <button
          onClick={() => openConfirm("single")}
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
        >
          Logout
        </button>
        <button
          onClick={() => openConfirm("all")}
          className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
        >
          Logout All
        </button>
        {!user?.pendingDeletion ? (
          <button
            onClick={() => openConfirm("delete")}
            className="rounded-lg bg-red-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-900"
          >
            Delete Account
          </button>
        ) : (
          <button
            onClick={() => openConfirm("cancel")}
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
          >
            Cancel Deletion
          </button>
        )}
      </div>

      <ConfirmActionModal
        show={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleAction}
        title={
          actionType === "delete"
            ? "Delete Account?"
            : actionType === "cancel"
            ? "Cancel Account Deletion?"
            : "Are you sure?"
        }
        description={
          actionType === "delete"
            ? "This will mark your account for deletion. You have 15 days to cancel."
            : actionType === "cancel"
            ? "This will cancel your pending account deletion."
            : actionType === "all"
            ? "This will log you out from all devices."
            : "You will be logged out from this device."
        }
        confirmText={
          actionType === "delete" ? "Yes, Delete" :
          actionType === "cancel" ? "Yes, Cancel" :
          "Yes"
        }
      />
    </div>
  );
};

export default DashboardHome;