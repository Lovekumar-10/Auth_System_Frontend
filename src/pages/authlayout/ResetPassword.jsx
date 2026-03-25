
import React, { useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  ArrowLeft,
  Loader2,
  Check,
  X,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import { useAuth } from "../../context/authContext";
import { validatePassword } from "../../utils/passwordValidator";
import { toast } from "react-toastify"; // Ensure toast is imported

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const passData = useMemo(() => validatePassword(password), [password]);
  const passwordsMatch =
    password === confirmPassword && confirmPassword.length > 0;

    const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔹 Log token and passwords for debugging
  const trimmedToken = token.trim();
  console.log("Token from URL:", trimmedToken);
  console.log("New password:", password);
  console.log("Confirm password:", confirmPassword);

  // 1. Frontend Validation Check
  if (!passData.isValid) {
    console.error("Password validation failed:", passData);
    return toast.error("Please satisfy all password requirements.");
  }
  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return toast.error("Passwords do not match.");
  }

  setLoading(true);
  try {
    // ✅ Make sure the payload keys match backend exactly
    const payload = {
      newPassword: password,
      confirmPassword: confirmPassword,
    };

    console.log("Payload being sent:", payload);

    const res = await resetPassword(trimmedToken, password, confirmPassword);

    console.log("Backend response:", res);

    toast.success("Password updated successfully! Redirecting to login...");
    
    setTimeout(() => navigate("/login"), 2000);
  } catch (err) {
    // Detailed error logging
    const errorMsg = err?.response?.data?.message || "Password reset failed. Please try again.";
    console.error("Reset Password Error:", err.response?.data || err);
    toast.error(errorMsg);
  } finally {
    setLoading(false);
  }
};



  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-white p-6 sm:p-12"
      style={{ fontFamily: "var(--ff-secondary), sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] py-10"
      >
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-xl">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <h2
            style={{
              fontSize: "var(--fs-h3)",
              fontWeight: "900",
              letterSpacing: "-0.025em",
              color: "var(--color-dark-purple, #290024)",
            }}
          >
            Set New Password
          </h2>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "8px",
              color: "var(--color-gray, #7a7a7a)",
            }}
          >
            Choose a strong password to secure your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              New Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-black outline-none transition-all"
                style={{ fontSize: "14px", fontWeight: "500" }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black transition-colors"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Checklist */}
            <AnimatePresence>
              {password.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mb-2 px-1">
                    <span className=" text-sm text-(--color-lighter-gray)  tracking-widest">
                      Must contain:
                    </span>
                  </div>
                  <ul className="space-y-2 px-1">
                    {passData.requirements.map((req) => (
                      <li key={req.label} className="flex items-center gap-3">
                        {req.met ? (
                          <Check
                            size={13}
                            style={{ color: "var(--success, #22c55e)" }}
                            strokeWidth={3}
                          />
                        ) : (
                          <X
                            size={13}
                            className="text-[var(--error)]"
                            strokeWidth={3}
                          />
                        )}
                        <span
                          className={`text-xs font-medium transition-colors duration-300 ${req.met ? "text-[var(--success)]" : "text-[var(--error)]"}`}
                        >
                          {req.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">
              Confirm New Password
            </label>
            <div className="relative">
              <CheckCircle2
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300"
                size={18}
              />
              <input
                type={showConfirmPass ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-black outline-none transition-all"
                style={{ fontSize: "14px", fontWeight: "500" }}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black transition-colors"
              >
                {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {confirmPassword.length > 0 && (
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: "900",
                  marginTop: "8px",
                  marginLeft: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  color: passwordsMatch
                    ? "var(--success, #22c55e)"
                    : "var(--error, #ef4444)",
                }}
              >
                {passwordsMatch
                  ? "✓ Passwords match"
                  : "✗ Passwords do not match"}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={
              passData.isValid && passwordsMatch ? { scale: 1.01 } : {}
            }
            whileTap={passData.isValid && passwordsMatch ? { scale: 0.99 } : {}}
            type="submit"
            disabled={loading || !passData.isValid || !passwordsMatch}
            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 mt-6 transition-all 
              ${
                passData.isValid && passwordsMatch
                  ? "bg-black text-white hover:bg-slate-900 shadow-xl shadow-black/10 cursor-pointer"
                  : "bg-slate-100 text-slate-300 cursor-not-allowed shadow-none"
              }`}
            style={{ fontSize: "14px", fontWeight: "900" }}
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Update Password"
            )}
          </motion.button>
        </form>

        <div className="mt-10 text-center">
          <Link
            to="/login"
            className="inline-flex text-[var(--fs-caption)] items-center gap-2 transition-colors hover:text-black"
            style={{
              color: "var(--color-gray, #7a7a7a)",
            }}
          >
            <ArrowLeft size={15} /> Back to log in
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;





