
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useAuth } from "../context/authContext";

// // Layouts
// import PublicLayout from "../layouts/PublicLayout";
// import AuthLayout from "../layouts/AuthLayout";
// import DashboardLayout from "../layouts/DashboardLayout";

// // Pages
// import Home from "../pages/publicPages/Home";
// import About from "../pages/publicPages/About";
// import Login from "../pages/authlayout/Login";
// import Register from "../pages/authlayout/Register";
// import VerifyEmail from "../pages/authlayout/VerifyEmail";
// import EmailVerified from "../pages/authlayout/EmailVerified";
// import DashboardHome from "../pages/dashboard/DashboardHome";

// const AppRoutes = () => {
//   const { user, loading } = useAuth();

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center font-semibold text-purple-900">
//         Loading...
//       </div>
//     );

//   const PrivateRoute = ({ children }) => (user ? children : <Navigate to="/login" replace />);
//   const PublicRoute = ({ children }) => (!user ? children : <Navigate to="/dashboard" replace />);

//   return (
//     <Router>
//       <Routes>
//         {/* Public Pages */}
//         <Route element={<PublicLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Route>

//         {/* Auth Pages */}
//         <Route element={<AuthLayout />}>
//           <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
//           <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
//           <Route path="/verify-email" element={<PublicRoute><VerifyEmail /></PublicRoute>} />
//           <Route path="/verify-email/:token" element={<PublicRoute><EmailVerified /></PublicRoute>} />
//         </Route>

//         {/* Dashboard */}
//         <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
//           <Route index element={<DashboardHome />} />
//         </Route>

//         {/* Catch-all */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;







import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import PublicRoutes from "./publicRoutes";
import AuthRoutes from "./auth/AuthRoutes";
import DashboardRoutes from "./dashboardRoutes";


const AppRoutes = () => {

  return (
    <Router>
      <Routes>

        {PublicRoutes()}
        {AuthRoutes()}
        {DashboardRoutes()}

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
