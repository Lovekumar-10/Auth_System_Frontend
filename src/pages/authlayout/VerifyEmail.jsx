
// import React, { useState, useEffect } from "react";

// import { useLocation, Link, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, ShieldAlert, Loader2, Send } from "lucide-react";
// import axios from "../../utils/axiosInstance";

// const VerifyEmail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email;

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   // Poll verification status every 3 seconds
//   useEffect(() => {
//     if (!email) return;

//     const interval = setInterval(async () => {
//       try {
//         const res = await axios.get(`/auth/check-verification?email=${email}`);
//         if (res.data.verified) {
//           clearInterval(interval);
//           navigate("/login");
//         }
//       } catch (err) {
//         console.error("Verification check failed:", err.response?.data?.message || err.message);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [email, navigate]);

//   const handleResend = async () => {
//     if (!email) {
//       setIsError(true);
//       setMessage("Email not found. Please register again.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setIsError(false);
//       const res = await axios.post("/auth/resend-verification", { email });
//       setMessage(res.data.message || "Verification email sent again.");
//     } catch (error) {
//       setIsError(true);
//       setMessage(error.response?.data?.message || "Failed to resend email.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div 
//       className="min-h-screen w-full flex items-center justify-center bg-white px-4" 
//       style={{ fontFamily: "var(--ff-secondary), sans-serif" }}
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-md p-10 text-center border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50"
//       >
//         {/* Animated Icon Container */}
//         <div className="flex justify-center mb-8">
//           <motion.div 
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//             className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-100 shadow-inner"
//           >
//             <Mail style={{ color: "var(--color-dark-purple, #290024)" }} size={36} />
//           </motion.div>
//         </div>

//         <h2 
//           style={{ 
//             fontSize: "var(--fs-h3, 28px)", 
//             fontWeight: "900", 
//             letterSpacing: "-0.025em",
//             marginBottom: "16px",
//             color: "var(--color-dark-purple, #290024)" 
//           }}
//         >
//           Verify your email
//         </h2>

//         <p 
//           style={{ 
//             fontSize: "14px", 
//             fontWeight: "500", 
//             lineHeight: "1.6",
//             marginBottom: "24px",
//             color: "var(--color-gray, #7a7a7a)" 
//           }}
//         >
//           We've sent a magic link to your inbox. Please click it to activate your account.
//         </p>

//         {email ? (
//           <div 
//             className="inline-block px-6 py-2 rounded-full mb-8"
//             style={{ backgroundColor: "var(--color-lighter-pink, #ffc4fe)", opacity: 0.8 }}
//           >
//             <p 
//               style={{ 
//                 fontWeight: "900", 
//                 fontSize: "13px",
//                 color: "var(--color-dark-purple, #290024)",
//                 wordBreak: "break-all"
//               }}
//             >
//               {email}
//             </p>
//           </div>
//         ) : (
//           <p style={{ fontSize: "13px", color: "var(--error, #ef4444)", marginBottom: "32px", fontWeight: "700", fontStyle: "italic" }}>
//             Email context missing. Please try signing up again.
//           </p>
//         )}

//         <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 text-left mb-8">
//           <ShieldAlert className="text-slate-400 shrink-0" size={20} />
//           <p 
//             style={{ 
//               fontSize: "12px", 
//               fontWeight: "600", 
//               lineHeight: "1.5",
//               color: "var(--color-gray, #7a7a7a)" 
//             }}
//           >
//             Keep this tab open. We will automatically redirect you once your email is confirmed.
//           </p>
//         </div>

//         <AnimatePresence>
//           {message && (
//             <motion.p 
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               style={{ 
//                 fontSize: "13px", 
//                 fontWeight: "900", 
//                 marginBottom: "24px",
//                 color: isError ? "var(--error, #ef4444)" : "var(--success, #22c55e)" 
//               }}
//             >
//               {message}
//             </motion.p>
//           )}
//         </AnimatePresence>

//         <div className="space-y-6">
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={handleResend}
//             disabled={loading}
//             className="w-full bg-black text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-black/10 transition-all disabled:opacity-50 cursor-pointer"
//             style={{ fontSize: "14px", fontWeight: "900" }}
//           >
//             {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={18} />}
//             {loading ? "Sending..." : "Resend Email"}
//           </motion.button>

//           <Link
//             to="/login"
//             className="block transition-colors hover:text-black"
//             style={{ 
//               fontSize: "12px", 
//               fontWeight: "700", 
//               textTransform: "uppercase", 
//               letterSpacing: "0.15em",
//               color: "var(--color-gray, #7a7a7a)",
//               textDecoration: "none"
//             }}
//           >
//             ← Go to Login
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default VerifyEmail;






import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ShieldAlert, Loader2, Send } from "lucide-react";
import axios from "../../utils/axiosInstance";
import { toast } from "sonner";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) return;

    const interval = setInterval(async () => {
      try {
        const res = await axios.get(`/auth/check-verification?email=${email}`, {
          hideToast: true, 
        });

        if (res.data.verified) {
          clearInterval(interval);
          toast.success("Identity verified successfully! Redirecting...");
          
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      } catch (err) {
        console.debug("Waiting for verification...");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [email, navigate]);

  const handleResend = async () => {
    if (!email) {
      toast.error("Email context missing. Please register again.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/auth/resend-verification", { email });
    } catch (error) {
      // Errors handled by central interceptor
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-white px-4"
      style={{ fontFamily: "var(--ff-secondary), sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-10 text-center border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center border border-slate-100 shadow-inner"
          >
            <Mail style={{ color: "var(--color-dark-purple, #290024)" }} size={36} />
          </motion.div>
        </div>

        <h2
          style={{
            fontSize: "var(--fs-h3, 28px)",
            fontWeight: "900",
            letterSpacing: "-0.025em",
            marginBottom: "16px",
            color: "var(--color-dark-purple, #290024)",
          }}
        >
          Verify your email
        </h2>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "1.6",
            marginBottom: "24px",
            color: "var(--color-gray, #7a7a7a)",
          }}
        >
          We've sent a magic link to your inbox. Please click it to activate your account.
        </p>

        {email && (
          <div
            className="inline-block px-6 py-2 rounded-full mb-8"
            style={{ backgroundColor: "var(--color-lighter-pink, #ffc4fe)", opacity: 0.8 }}
          >
            <p
              style={{
                fontWeight: "900",
                fontSize: "13px",
                color: "var(--color-dark-purple, #290024)",
                wordBreak: "break-all",
              }}
            >
              {email}
            </p>
          </div>
        )}

        {!email && (
          <p style={{ fontSize: "13px", color: "var(--error, #ef4444)", marginBottom: "32px", fontWeight: "700", fontStyle: "italic" }}>
            Email context missing. Please try signing up again.
          </p>
        )}

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-4 text-left mb-10">
          <ShieldAlert className="text-slate-400 shrink-0" size={20} />
          <p
            style={{
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "1.5",
              color: "var(--color-gray, #7a7a7a)",
            }}
          >
            Keep this tab open. We will automatically redirect you once your email is confirmed.
          </p>
        </div>

        <div className="space-y-6">
          <motion.button
            whileHover={!loading ? { scale: 1.02 } : {}}
            whileTap={!loading ? { scale: 0.98 } : {}}
            onClick={handleResend}
            disabled={loading}
            className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all duration-300
              ${
                loading
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none opacity-80"
                  : "bg-black text-white hover:bg-slate-900 shadow-black/10 cursor-pointer"
              }`}
            style={{ fontSize: "14px", fontWeight: "900" }}
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 className="animate-spin" size={20} />
                  <span className="tracking-widest uppercase text-xs">Dispatching...</span>
                </motion.div>
              ) : (
                <motion.div
                  key="normal"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-2"
                >
                  <Send size={18} />
                  <span>Resend Magic Link</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <Link
            to="/login"
            className="block transition-colors hover:text-black uppercase tracking-[0.2em]"
            style={{
              fontSize: "12px",
              fontWeight: "800",
              color: "var(--color-gray, #7a7a7a)",
              textDecoration: "none",
            }}
          >
            ← Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;