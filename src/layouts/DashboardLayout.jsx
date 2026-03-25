// import React from 'react'
// import { Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   return (
//     <div>
//         <Outlet /> {/* This renders the nested routes */}
//     </div>
//   )
// }

// export default DashboardLayout




// import React from "react";
// import { Outlet } from "react-router-dom";

// // Optional: import icons if needed
// // import { FaHome, FaUsers, FaFolder, FaPlus, FaChartBar, FaCog, FaBell, FaSearch } from "react-icons/fa";

// const DashboardLayout = () => {
//   return (
//     <div className="dashboard-container" style={{ display: "flex", height: "100vh" }}>
      
//       {/* Sidebar */}
//       <aside
//         className="sidebar"
//         style={{
//           width: "220px",
//           backgroundColor: "#1a1a1a",
//           color: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           padding: "1rem",
//         }}
//       >
//         {/* Logo */}
//         <div style={{ marginBottom: "2rem", fontWeight: "bold", fontSize: "1.2rem", color: "#4A148C" }}>
//           Dev Connect
//         </div>

//         {/* Navigation Links */}
//         <nav style={{ flex: 1 }}>
//           <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//             <li style={{ marginBottom: "1rem" }}>Dashboard</li>
//             <li style={{ marginBottom: "1rem" }}>Developer Network</li>
//             <li style={{ marginBottom: "1rem" }}>My Projects</li>
//             <li style={{ marginBottom: "1rem" }}>Post a Project</li>
//             <li style={{ marginBottom: "1rem" }}>Collaboration Boards</li>
//             <li style={{ marginBottom: "1rem" }}>Messages</li>
//             <li style={{ marginBottom: "1rem" }}>Settings</li>
//           </ul>
//         </nav>

//         {/* Profile Section */}
//         <div style={{ marginTop: "auto", display: "flex", alignItems: "center" }}>
//           <div
//             style={{
//               width: "35px",
//               height: "35px",
//               borderRadius: "50%",
//               backgroundColor: "#555",
//               marginRight: "0.5rem",
//             }}
//           ></div>
//           <span>Alex Carter</span>
//         </div>
//       </aside>

//       {/* Main Area */}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
//         {/* Top Bar */}
//         <header
//           style={{
//             height: "60px",
//             backgroundColor: "#fff",
//             borderBottom: "1px solid #ddd",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "0 1rem",
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Search for Developers, Projects, or Skills..."
//             style={{
//               flex: 1,
//               maxWidth: "400px",
//               padding: "0.5rem 1rem",
//               borderRadius: "6px",
//               border: "1px solid #ccc",
//               marginRight: "1rem",
//             }}
//           />
//           <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//             <div style={{ position: "relative" }}>
//               🔔{/* Bell icon placeholder */}
//               <span
//                 style={{
//                   position: "absolute",
//                   top: "-5px",
//                   right: "-5px",
//                   backgroundColor: "#4A148C",
//                   color: "#fff",
//                   borderRadius: "50%",
//                   padding: "2px 6px",
//                   fontSize: "10px",
//                 }}
//               >
//                 3
//               </span>
//             </div>
//             <div
//               style={{
//                 width: "35px",
//                 height: "35px",
//                 borderRadius: "50%",
//                 backgroundColor: "#555",
//               }}
//             ></div>
//           </div>
//         </header>

//         {/* Content */}
//         <main style={{ flex: 1, backgroundColor: "#f9f9f9", overflowY: "auto", padding: "1rem" }}>
//           <Outlet /> {/* Your pages will render here */}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;






import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/DashboardSidebar";
import TopBar from "../components/common/DashboardTopbar";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar activeItem="Dashboard" />

      {/* Main area */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TopBar />

        <main style={{ flex: 1, backgroundColor: "#f9f9f9", overflowY: "auto", padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;