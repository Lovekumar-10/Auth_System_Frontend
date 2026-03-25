import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

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
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300 font-body">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section: Logo and Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img className="h-9 w-auto" src="/demo.png" alt="Logo" />
            </Link>
            <p className="text-paragraph text-text opacity-70 dark:opacity-80 mt-4 leading-relaxed font-normal">
              Creating digital experiences that matter. Your vision, our tech stack.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-subtitle font-heading font-bold text-text dark:text-white mb-6 uppercase tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-paragraph text-text opacity-70 dark:opacity-80 hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-2 group font-medium"
                  >
                    <span className="w-0 h-[2px] bg-primary group-hover:w-3 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-subtitle font-heading font-bold text-text dark:text-white mb-6 uppercase tracking-tight">Get in Touch</h4>
            <ul className="space-y-4 text-paragraph text-text opacity-70 dark:opacity-80">
              <li className="flex items-center gap-3 font-normal">
                <HiOutlineMail className="text-primary text-xl" />
                <span>support@demo.com</span>
              </li>
              <li className="flex items-center gap-3 font-normal">
                <HiOutlinePhone className="text-primary text-xl" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3 font-normal">
                <HiOutlineLocationMarker className="text-primary text-xl" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Socials Column */}
          <div>
            <h4 className="text-subtitle font-heading font-bold text-text dark:text-white mb-6 uppercase tracking-tight">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-text hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
               <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 focus:outline-none focus:border-primary transition-all text-caption font-body"
                  />
                  <button className="absolute right-2 top-1.5 bg-primary text-white px-4 py-1.5 rounded-xl text-caption font-bold hover:brightness-110 transition shadow-md">
                    Join
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption font-normal text-text opacity-50">
            © {currentYear} Demo Brand. All rights reserved.
          </p>
          <div className="flex gap-6 text-caption font-medium text-text opacity-50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;