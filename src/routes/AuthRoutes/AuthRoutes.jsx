import { Route } from "react-router-dom";

import AuthLayout from "../../layouts/AuthLayout";
import PublicRoute from "../guards/PublicRoute";

import Login from "../../pages/authlayout/Login";
import Register from "../../pages/authlayout/Register";
import VerifyEmail from "../../pages/authlayout/VerifyEmail";
import EmailVerified from "../../pages/authlayout/EmailVerified";
import ForgotPassword from "../../pages/authlayout/ForgotPassword";
import ResetPassword from "../../pages/authlayout/ResetPassword";


const AuthRoutes = () => (
  <Route element={<AuthLayout />}>
    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
    <Route path="/verify-email" element={<PublicRoute><VerifyEmail /></PublicRoute>} />
    <Route path="/verify-email/:token" element={<PublicRoute><EmailVerified /></PublicRoute>} />
    <Route path="/forgot-password" element={<PublicRoute> < ForgotPassword/></PublicRoute>} />
    <Route path="/reset-password/:token" element={<PublicRoute> <ResetPassword/> </PublicRoute>} />
   
  </Route>
);

export default AuthRoutes;