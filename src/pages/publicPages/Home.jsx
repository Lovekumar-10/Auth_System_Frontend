import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiLayers, FiCpu } from "react-icons/fi";

const Home = () => {
  return (
    <div className="pt-24 pb-20 overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-caption font-bold uppercase tracking-widest border border-primary/20">
            Next-Gen Development
          </span>
          
          <h1 className="text-headline font-heading font-bold text-text dark:text-white leading-tight mt-6 mb-6">
            Building Digital <br />
            <span className="text-primary italic">Masterpieces</span> With MERN
          </h1>
          
          <p className="text-paragraph font-body text-text opacity-70 dark:opacity-80 max-w-lg mb-10">
            We transform complex ideas into high-performance web applications. 
            Focused on scalability, speed, and user experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary text-white rounded-[20px] font-bold text-paragraph shadow-lg shadow-primary/30 hover:brightness-110 transition flex items-center gap-2 group">
              Start Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-200 dark:border-slate-700 text-text dark:text-white rounded-[20px] font-bold text-paragraph hover:bg-gray-50 dark:hover:bg-slate-800 transition">
              Our Work
            </button>
          </div>
        </motion.div>

        {/* Right Visual (Floating Cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Decorative Circle */}
          <div className="absolute w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          
          {/* Floating Tech Cards */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <FeatureCard icon={<FiCode />} title="Clean Code" delay={0.2} />
            <FeatureCard icon={<FiLayers />} title="Scalable" delay={0.4} />
            <FeatureCard icon={<FiCpu />} title="Modern UI" delay={0.6} />
            <div className="bg-primary p-6 rounded-[30px] text-white flex flex-col justify-end shadow-xl">
              <p className="text-headline font-bold">99%</p>
              <p className="text-caption font-medium opacity-80">Success Rate</p>
            </div>
          </div>
        </motion.div>
      </section>


    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, delay }) => (
  <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-slate-800 p-8 rounded-[30px] border border-gray-100 dark:border-slate-700 shadow-xl flex flex-col items-start gap-4"
  >
    <div className="p-3 bg-primary/10 text-primary rounded-xl text-2xl">
      {icon}
    </div>
    <h3 className="text-subtitle font-bold text-text dark:text-white">{title}</h3>
  </motion.div>
);

export default Home;