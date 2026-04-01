import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Monitor,
  Trash2,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import ConfirmActionModal from "../../components/ConfirmActionModal";

const Settings = () => {
  const { logout, logoutAll, deleteAccount, cancelDeletion, user } = useAuth();
  const navigate = useNavigate();

  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState(null);

  const handleAction = async () => {
    try {
      if (actionType === "single") {
        await logout();
        navigate("/login");
      } else if (actionType === "all") {
        await logoutAll();
        navigate("/login");
      } else if (actionType === "delete") {
        await deleteAccount();

        // 🔥 IMPORTANT: logout after delete request
        await logout();

        navigate("/login");
      } else if (actionType === "cancel") {
        await cancelDeletion();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setShowConfirm(false);
    }
  };
  const openConfirm = (type) => {
    setActionType(type);
    setShowConfirm(true);
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 border-b border-gray-100 pb-6">
          <h1 className="text-3xl font-bold text-[#290024] tracking-tight">
            Settings
          </h1>
          <p className="text-[#7a7a7a] mt-2 text-sm md:text-base font-medium">
            Manage your DevConnect account security and preferences.
          </p>
        </div>

        <div className="space-y-8">
          {/* 🔐 Security Section */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="text-[#290024]" size={20} />
              <h2 className="text-lg font-bold text-[#290024] uppercase tracking-wider text-sm">
                Security & Sessions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Logout Current */}
              <button
                onClick={() => openConfirm("single")}
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white hover:bg-[#ffc4fe]/20 hover:border-[#ffc4fe] transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-[#3b82f6]">
                    <LogOut size={22} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#290024] font-bold text-sm">
                      Active Session
                    </h3>
                    <p className="text-[#9f9f9f] text-xs mt-0.5">
                      Logout from this device
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-[#9f9f9f] group-hover:text-[#290024] transition-colors"
                />
              </button>

              {/* Logout All */}
              <button
                onClick={() => openConfirm("all")}
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-100 bg-white hover:bg-[#ffc4fe]/20 hover:border-[#ffc4fe] transition-all cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-amber-50 text-[#f59e0b]">
                    <Monitor size={22} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[#290024] font-bold text-sm">
                      Global Logout
                    </h3>
                    <p className="text-[#9f9f9f] text-xs mt-0.5">
                      Sign out from everywhere
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={18}
                  className="text-[#9f9f9f] group-hover:text-[#290024] transition-colors"
                />
              </button>
            </div>
          </section>

          {/* ⚠️ Danger Zone */}
          <section className="pt-6 border-t border-gray-50">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle className="text-[#ef4444]" size={20} />
              <h2 className="text-lg font-bold text-[#ef4444] uppercase tracking-wider text-sm">
                Danger Zone
              </h2>
            </div>

            <div
              className={`p-6 rounded-3xl border ${user?.pendingDeletion ? "border-[#22c55e]/20 bg-[#22c55e]/5" : "border-[#ef4444]/10 bg-[#ef4444]/5"} flex flex-col md:flex-row items-center justify-between gap-6`}
            >
              <div className="text-center md:text-left">
                <h3 className="text-[#290024] font-bold">
                  {user?.pendingDeletion
                    ? "Deletion is Pending"
                    : "Delete Account"}
                </h3>
                <p className="text-[#7a7a7a] text-sm mt-1 max-w-sm">
                  {user?.pendingDeletion
                    ? "Your account is safe for now, but scheduled for removal in 15 days."
                    : "Once deleted, your projects and developer profile cannot be recovered."}
                </p>
              </div>

              {!user?.pendingDeletion ? (
                <button
                  onClick={() => openConfirm("delete")}
                  className="w-full md:w-auto px-8 py-3 rounded-xl bg-[#ef4444] text-white hover:bg-[#b91c1c] shadow-lg shadow-red-200 transition-all cursor-pointer font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Trash2 size={18} />
                  Delete Permanently
                </button>
              ) : (
                <button
                  onClick={() => openConfirm("cancel")}
                  className="w-full md:w-auto px-8 py-3 rounded-xl bg-[#22c55e] text-white hover:bg-[#16a34a] shadow-lg shadow-green-200 transition-all cursor-pointer font-bold text-sm flex items-center justify-center gap-2"
                >
                  <RefreshCw size={18} />
                  Keep My Account
                </button>
              )}
            </div>
          </section>
        </div>
      </div>

      <ConfirmActionModal
        show={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleAction}
        // These colors would be handled inside your Modal component
        title={
          actionType === "delete"
            ? "Are you absolutely sure?"
            : "Confirm Action"
        }
        description={"Please confirm this action to proceed with your request."}
      />
    </div>
  );
};

export default Settings;
