import React from 'react';
import Navbar from './Navbar.jsx';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function SignupForm({
}) {
  return (
    <div>
        <Navbar />
         <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat mt-20" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,water')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our World
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl max-w-xl mb-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover beautiful experiences, build meaningful connections, and start something extraordinary.
        </motion.p>

        <motion.a
          className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link to="/login">Get Started</Link>
        </motion.a>
      </div>
    </div>
    </div>
  );
}
