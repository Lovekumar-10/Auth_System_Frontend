import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Key, Mail, ArrowLeft, Loader2 } from "lucide-react";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await forgotPassword(email.trim());
    } catch (err) {
      // Handled by central interceptor
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 relative overflow-hidden font-[var(--ff-secondary)]">
      {/* Localized Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] z-10 text-center"
      >
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-11 h-11 bg-black rounded-lg flex items-center justify-center shadow-lg"
          >
            <Key className="text-white" size={22} />
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Forgot password?
        </h2>
        <p className="text-slate-500 mb-8 text-sm">
          No worries, we'll send you reset instructions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
              Work Email
            </label>
            <div className="relative">
              {/* Added Mail Icon exactly like Register */}
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={17}
              />
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // BG Slate 50 and Black Focus Border applied here
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-md focus:border-black focus:ring-1 focus:ring-black outline-none transition-all text-sm"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            // Button color changed to Black to match Register theme
            className="w-full bg-black text-white py-3 rounded-md font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-2 transition-all hover:bg-slate-900"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              "Reset Password"
            )}
          </motion.button>
        </form>

        <div className="mt-8 flex justify-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-black uppercase tracking-widest transition-colors"
          >
            <ArrowLeft size={16} /> Back to log in
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
