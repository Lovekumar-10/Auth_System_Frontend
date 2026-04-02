
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import {
//   HiOutlineMail,
//   HiOutlinePhone,
//   HiOutlineLocationMarker,
// } from "react-icons/hi";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <FaFacebookF />, url: "#" },
//     { icon: <FaTwitter />, url: "#" },
//     { icon: <FaInstagram />, url: "#" },
//     { icon: <FaLinkedinIn />, url: "#" },
//   ];

//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "Projects", path: "/projects" },
//     { name: "Developers", path: "/developers" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <footer className="w-full bg-white border-t border-gray-100">
//       <div className="max-w-7xl mx-auto px-6 py-16">
        
//         {/* TOP */}
//         <div className="grid md:grid-cols-4 gap-12">

//           {/* BRAND */}
//           <div>
//             <h2 className="text-2xl font-bold text-[#290024]">
//               DevConnect
//             </h2>

//             <p className="mt-4 text-[#7a7a7a] text-sm leading-relaxed">
//               Connect with developers, build real-world projects, and grow your
//               career — all in one platform.
//             </p>
//           </div>

//           {/* LINKS */}
//           <div>
//             <h4 className="font-semibold mb-6 text-[#290024]">
//               Quick Links
//             </h4>

//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-[#7a7a7a] hover:text-[#290024] transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* CONTACT */}
//           <div>
//             <h4 className="font-semibold mb-6 text-[#290024]">
//               Contact
//             </h4>

//             <ul className="space-y-4 text-sm text-[#7a7a7a]">
//               <li className="flex items-center gap-3">
//                 <HiOutlineMail className="text-[#290024]" />
//                 support@devconnect.com
//               </li>

//               <li className="flex items-center gap-3">
//                 <HiOutlinePhone className="text-[#290024]" />
//                 +91 98765 43210
//               </li>

//               <li className="flex items-center gap-3">
//                 <HiOutlineLocationMarker className="text-[#290024]" />
//                 New Delhi, India
//               </li>
//             </ul>
//           </div>

//           {/* SOCIAL + NEWSLETTER */}
//           <div>
//             <h4 className="font-semibold mb-6 text-[#290024]">
//               Stay Connected
//             </h4>

//             <div className="flex gap-3">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffc4fe] text-[#290024] hover:bg-[#290024] hover:text-white transition"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>

//             {/* Newsletter */}
//             <div className="mt-6">
//               <div className="flex border border-gray-200 rounded-xl overflow-hidden">
//                 <input
//                   type="text"
//                   placeholder="Enter email"
//                   className="w-full px-4 py-2 outline-none text-sm"
//                 />
//                 <button className="bg-[#290024] text-white px-4 text-sm">
//                   Join
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-[#7a7a7a]">
          
//           <p>© {currentYear} DevConnect. All rights reserved.</p>

//           <div className="flex gap-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-[#290024] transition">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-[#290024] transition">
//               Terms of Service
//             </a>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;









import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Developers", path: "/developers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#290024] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* TOP */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              DevConnect
            </h2>

            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Connect with developers, build real-world projects, and grow your
              career — all in one platform.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-6">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <HiOutlineMail className="text-[#ffc4fe]" />
                support@devconnect.com
              </li>

              <li className="flex items-center gap-3">
                <HiOutlinePhone className="text-[#ffc4fe]" />
                +91 98765 43210
              </li>

              <li className="flex items-center gap-3">
                <HiOutlineLocationMarker className="text-[#ffc4fe]" />
                New Delhi, India
              </li>
            </ul>
          </div>

          {/* SOCIAL + NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-6">
              Stay Connected
            </h4>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffc4fe] hover:text-[#290024] transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <div className="flex rounded-xl overflow-hidden bg-white/10">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="w-full px-4 py-2 bg-transparent text-sm outline-none placeholder:text-white/50"
                />
                <button className="bg-[#ffc4fe] text-[#290024] px-4 text-sm font-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          
          <p>© {currentYear} DevConnect. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;