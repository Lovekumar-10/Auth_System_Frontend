import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="bg-white text-[#290024] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Background Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#ffc4fe] rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#290024] rounded-full blur-[140px] opacity-20" />

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: "rgba(41,0,36,0.08)",
              color: "#290024",
            }}
          >
            DevConnect • Build Together
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Where Developers <br />
            <span className="italic">Connect & Create</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[#7a7a7a] max-w-2xl mx-auto text-lg"
          >
            A platform to find teammates, build real-world projects, and grow
            your developer journey together.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <button className="bg-[#290024] text-white px-8 py-4 rounded-2xl flex items-center gap-2 text-lg hover:scale-105 transition">
              Get Started <FiArrowRight />
            </button>

            <button className="bg-[#290024] text-white px-8 py-4 rounded-2xl flex items-center gap-2 text-lg hover:scale-105 transition">
              Explore
            </button>
          </motion.div>
        </div>

        {/* Floating Cards (Depth Effect) */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingCard text="Find Teammates" top="20%" left="10%" />
          <FloatingCard text="Build Projects" top="60%" left="15%" />
          <FloatingCard text="Earn & Grow" top="30%" right="10%" />
          <FloatingCard text="Showcase Skills" top="70%" right="15%" />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-28 px-6 bg-[#ffc4fe]/30 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#290024]/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#290024]">
              Everything You Need to <br /> Build & Grow 🚀
            </h2>
            <p className="mt-4 text-[#7a7a7a]">
              DevConnect combines networking, collaboration, and opportunities —
              all in one platform.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {/* BIG CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-[#290024]">
                Find the Right Teammates
              </h3>
              <p className="mt-3 text-[#7a7a7a] max-w-lg">
                Discover developers based on skills, interests, and goals. Build
                your dream team and start creating real-world projects together.
              </p>

              {/* Fake tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-[#ffc4fe] rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-[#ffc4fe] rounded-full text-sm">
                  Node
                </span>
                <span className="px-3 py-1 bg-[#ffc4fe] rounded-full text-sm">
                  MongoDB
                </span>
              </div>
            </motion.div>

            {/* SIDE CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#290024] text-white p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">Build Real Projects</h3>
                <p className="mt-3 text-sm opacity-80">
                  Work on meaningful projects that actually matter.
                </p>
              </div>

              <span className="text-sm opacity-70 mt-6">
                Hands-on Experience
              </span>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-md border"
            >
              <h3 className="text-xl font-semibold text-[#290024]">
                Showcase Your Skills
              </h3>
              <p className="mt-3 text-[#7a7a7a] text-sm">
                Create a developer profile that stands out.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-md border"
            >
              <h3 className="text-xl font-semibold text-[#290024]">
                Get Opportunities
              </h3>
              <p className="mt-3 text-[#7a7a7a] text-sm">
                Freelance, internships, and real career growth.
              </p>
            </motion.div>

            {/* WIDE CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="lg:col-span-3 bg-gradient-to-r from-[#290024] to-[#ffc4fe] text-white p-10 rounded-3xl text-center"
            >
              <h3 className="text-2xl font-semibold">
                One Platform. Infinite Possibilities.
              </h3>
              <p className="mt-3 opacity-80">
                From learning to earning — everything starts here.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* Floating Card */
const FloatingCard = ({ text, top, left, right }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="absolute px-5 py-3 bg-white rounded-xl shadow-lg text-sm font-medium"
    style={{
      top,
      left,
      right,
      color: "#290024",
    }}
  >
    {text}
  </motion.div>
);

export default Home;
