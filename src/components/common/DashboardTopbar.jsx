

// import React from "react";
// import { Search, Bell } from "lucide-react";

// const TopBar = () => {
//   return (
//     <header className="h-[70px] w-full bg-white border-b border-gray-100 flex items-center justify-between px-8 font-[var(--ff-primary)]">
      
//       {/* 1. Search Bar - Matching the light grey pill shape */}
//       <div className="relative flex items-center w-full max-w-[550px]">
//         <Search 
//           className="absolute left-5 text-gray-400" 
//           size={18} 
//         />
//         <input
//           type="text"
//           placeholder="Search projects, developers, or stacks..."
//           className="w-full bg-[#f3f4f6] border-none py-3 pl-14 pr-6 rounded-full text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[var(--color-dark-purple)]/20 transition-all"
//         />
//       </div>

//       {/* 2. Actions Area */}
//       <div className="flex items-center">
        
//         {/* Notification Bell with Badge */}
//         <div className="relative mr-6 cursor-pointer group">
//           <div className="p-2 rounded-full hover:bg-gray-50 transition-colors">
//             <Bell className="text-gray-600 group-hover:text-[var(--color-dark-purple)]" size={22} />
//           </div>
//           <span className="absolute top-1 right-1 bg-[#290024] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
//             3
//           </span>
//         </div>

//         {/* Vertical Divider Line */}
//         <div className="h-10 w-[1px] bg-gray-200 mr-6"></div>

//         {/* User Profile Section */}
//         <div className="flex items-center gap-4 cursor-pointer">
//           <div className="flex flex-col items-end">
//             <span className="text-[#000000] font-[var(--fw-bold)] text-[15px] leading-tight">
//               Love Kumar
//             </span>
//             <span className="text-gray-400 text-[10px] font-[var(--fw-semibold)] tracking-[0.05em] uppercase">
//               Senior Architect
//             </span>
//           </div>
          
//           {/* Circular Avatar with the thin Purple border from the image */}
//           <div className="w-11 h-11 rounded-full p-[2px] border border-[#290024]/20 shadow-sm hover:border-[#290024] transition-all">
//             <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
//               <img 
//                 src="https://api.dicebear.com/7.x/avataaars/svg?seed=Love" 
//                 alt="Love Kumar" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default TopBar;








import React, { useEffect, useState } from "react";
import { Search, Bell } from "lucide-react";
import axios from "axios"; // make sure axios is installed

const TopBar = () => {
  const [user, setUser] = useState({
    name: "Loading...",
    role: "",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Love"
  });
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    // Fetch user profile
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/user/profile");
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };

    // Fetch notifications
    const fetchNotifications = async () => {
      try {
        const res = await axios.get("/api/user/notifications");
        setNotifications(res.data.count || 0);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };

    fetchUser();
    fetchNotifications();
  }, []);

  return (
    <header className="h-[70px] w-full bg-white border-b border-gray-100 flex items-center justify-between px-8 font-[var(--ff-primary)]">
      
      {/* Search Bar */}
      <div className="relative flex items-center w-full max-w-[550px]">
        <Search className="absolute left-5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search projects, developers, or stacks..."
          className="w-full bg-[#f3f4f6] border-none py-3 pl-14 pr-6 rounded-full text-[14px] text-gray-700 placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-[var(--color-dark-purple)]/20 transition-all"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center">
        {/* Notifications */}
        <div className="relative mr-6 cursor-pointer group">
          <div className="p-2 rounded-full hover:bg-gray-50 transition-colors">
            <Bell className="text-gray-600 group-hover:text-[var(--color-dark-purple)]" size={22} />
          </div>
          {notifications > 0 && (
            <span className="absolute top-1 right-1 bg-[#290024] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
              {notifications}
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-10 w-[1px] bg-gray-200 mr-6"></div>

        {/* User Profile */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="flex flex-col items-end">
            <span className="text-[#000000] font-[var(--fw-bold)] text-[15px] leading-tight">
              {user.name}
            </span>
            <span className="text-gray-400 text-[10px] font-[var(--fw-semibold)] tracking-[0.05em] uppercase">
              {user.role}
            </span>
          </div>

          {/* Avatar */}
          <div className="w-11 h-11 rounded-full p-[2px] border border-[#290024]/20 shadow-sm hover:border-[#290024] transition-all">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;