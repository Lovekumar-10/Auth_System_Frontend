import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Check } from "lucide-react"; 
import confetti from "canvas-confetti";
import axios from "../../utils/axiosInstance";

const EmailVerified = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading"); // loading | success | error
  const [message, setMessage] = useState("");

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#22c55e', '#16a34a', '#ffffff']
    });
  };

  useEffect(() => {
    let timer;

    const verifyEmail = async () => {
      try {
        const res = await axios.get(`/auth/verify-email/${token}`, { hideToast: true });

        setStatus("success");
        setMessage(res.data.message);
        triggerConfetti();

        timer = setTimeout(() => {
          navigate("/login");
        }, 5000);
      } catch (err) {
        setStatus("error");
        setMessage(err.response?.data?.message || "Verification failed");
      }
    };

    if (token) {
      verifyEmail();
    }

    return () => clearTimeout(timer);
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm p-10 text-center border border-gray-100 rounded-[2.5rem] shadow-2xl bg-white"
      >
        <div className="flex justify-center mb-8">
          <AnimatePresence mode="wait">
            {/* 🔵 LOADING STATE */}
            {status === "loading" && (
              <motion.div
                key="loading"
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative w-24 h-24"
              >
                <motion.div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
                <motion.div
                  className="absolute inset-0 border-4 border-black rounded-full border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />
              </motion.div>
            )}

            {/* ✅ SUCCESS STATE (Apple Pay style pop) */}
            {status === "success" && (
              <motion.div
                key="success"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20,
                    delay: 0.2 
                }}
                className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Check className="w-12 h-12 text-white stroke-[4px]" />
                </motion.div>
              </motion.div>
            )}

            {/* ❌ ERROR STATE */}
            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center"
              >
                <ShieldAlert className="w-12 h-12 text-red-500" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
            animate={status === "success" ? { y: [0, -5, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
            {status === "loading" && "Verifying..."}
            {status === "success" && "Verified!"}
            {status === "error" && "Verification Failed"}
            </h2>

            <p className="text-sm text-gray-500 mb-8 px-4">
            {status === "loading"
                ? "Checking your credentials..."
                : message}
            </p>
        </motion.div>

        {status === "success" && (
          <Link
            to="/login"
            className="block w-full bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95"
          >
            Continue to Login
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default EmailVerified;