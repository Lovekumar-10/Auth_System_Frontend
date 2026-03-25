// src/layouts/PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)]">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default PublicLayout;




// import React from "react";
// import { Outlet } from "react-router-dom";

// const AuthLayout = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--bg-main)] text-[var(--text-primary)]">
//       <div className="w-full max-w-md p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;