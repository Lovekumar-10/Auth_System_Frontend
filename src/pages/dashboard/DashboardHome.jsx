
import React from "react";
import { useAuth } from "../../context/authContext";

const DashboardHome = () => {
  const { user } = useAuth();

  return (
    <div className="w-full h-full flex flex-col gap-6">

      {/* Welcome Section */}
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome back,{" "}
          <span className="text-[var(--color-dark-purple)]">
            {user?.name || "User"}
          </span>
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Here's what's happening with your account today.
        </p>

        {user?.pendingDeletion && (
          <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-600">
            ⚠️ Your account is scheduled for deletion. You can cancel it from settings.
          </div>
        )}
      </div>

      {/* Placeholder Cards (future features) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700">Projects</h3>
          <p className="text-gray-400 text-xs mt-1">Coming soon...</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700">Messages</h3>
          <p className="text-gray-400 text-xs mt-1">Coming soon...</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700">Collaborations</h3>
          <p className="text-gray-400 text-xs mt-1">Coming soon...</p>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;










// import React, { useState } from "react";
// import { useAuth } from "../../context/authContext";
// import { useNavigate } from "react-router-dom";
// import ConfirmActionModal from "../../components/ConfirmActionModal"; // import new component

// const DashboardHome = () => {
//   const { logout, logoutAll, deleteAccount, cancelDeletion, user } = useAuth();
//   const navigate = useNavigate();

//   const [showConfirm, setShowConfirm] = useState(false);
//   const [actionType, setActionType] = useState(null); // "single" | "all" | "delete" | "cancel"

//   const handleAction = async () => {
//     try {
//       if (actionType === "single") await logout();
//       else if (actionType === "all") await logoutAll();
//       else if (actionType === "delete") await deleteAccount();
//       else if (actionType === "cancel") await cancelDeletion();
//     } finally {
//       if (actionType === "single" || actionType === "all") navigate("/login");
//       setShowConfirm(false);
//     }
//   };

//   const openConfirm = (type) => {
//     setActionType(type);
//     setShowConfirm(true);
//   };

//   return (
//     <div className="relative flex h-screen items-center justify-center bg-gray-100 p-4">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-gray-800">
//           Welcome, <span className="text-blue-600">{user?.name || "User"}</span>
//         </h2>
//         <p className="mt-2 text-gray-500">You are successfully logged in.</p>
//         {user?.pendingDeletion && (
//           <p className="mt-1 text-sm text-red-600">
//             Your account is scheduled for deletion. You have 15 days to cancel.
//           </p>
//         )}
//       </div>

//       <div className="absolute bottom-6 right-6 flex gap-3">
//         <button
//           onClick={() => openConfirm("single")}
//           className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
//         >
//           Logout
//         </button>
//         <button
//           onClick={() => openConfirm("all")}
//           className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black"
//         >
//           Logout All
//         </button>
//         {!user?.pendingDeletion ? (
//           <button
//             onClick={() => openConfirm("delete")}
//             className="rounded-lg bg-red-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-900"
//           >
//             Delete Account
//           </button>
//         ) : (
//           <button
//             onClick={() => openConfirm("cancel")}
//             className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
//           >
//             Cancel Deletion
//           </button>
//         )}
//       </div>

//       <ConfirmActionModal
//         show={showConfirm}
//         onClose={() => setShowConfirm(false)}
//         onConfirm={handleAction}
//         title={
//           actionType === "delete"
//             ? "Delete Account?"
//             : actionType === "cancel"
//             ? "Cancel Account Deletion?"
//             : "Are you sure?"
//         }
//         description={
//           actionType === "delete"
//             ? "This will mark your account for deletion. You have 15 days to cancel."
//             : actionType === "cancel"
//             ? "This will cancel your pending account deletion."
//             : actionType === "all"
//             ? "This will log you out from all devices."
//             : "You will be logged out from this device."
//         }
//         confirmText={
//           actionType === "delete" ? "Yes, Delete" :
//           actionType === "cancel" ? "Yes, Cancel" :
//           "Yes"
//         }
//       />
//     </div>
//   );
// };

// export default DashboardHome;