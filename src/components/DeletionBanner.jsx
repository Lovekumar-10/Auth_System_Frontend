import React from "react";
import { useAuth } from "../context/authContext";

const DeletionBanner = () => {
  const { user, cancelDeletion } = useAuth();

  if (!user?.pendingDeletion) return null;

  return (
    <div style={{
      background: "#ff4d4f",
      color: "white",
      padding: "10px",
      textAlign: "center"
    }}>
      ⚠️ Your account is scheduled for deletion.

      <button
        onClick={cancelDeletion}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          background: "white",
          color: "black",
          border: "none",
          cursor: "pointer"
        }}
      >
        Cancel Deletion
      </button>
    </div>
  );
};

export default DeletionBanner;