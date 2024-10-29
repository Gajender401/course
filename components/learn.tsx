'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "@/assets/hero.jpg";

const WhatWillYouLearn: React.FC = () => {
  return (
    <section className="py-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">What will you learn?</h2>
        <p className="mt-4 text-gray-600">
          We offer a unique blend of university and job-oriented courses, designed to equip you with both academic knowledge and practical skills, ensuring you're prepared for the real world.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-8 mb-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-300 p-8 rounded-lg text-center cursor-pointer"
        >
          <h3 className="text-xl font-semibold">University Courses</h3>
          <a href="#" className="text-blue-500 mt-4 inline-block">Link</a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border border-gray-300 p-8 rounded-lg text-center cursor-pointer"
        >
          <h3 className="text-xl font-semibold">Job Oriented Courses</h3>
          <a href="#" className="text-blue-500 mt-4 inline-block">Link</a>
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-lg overflow-hidden bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white text-center p-16"
      >
        <Image src={hero} alt="Hero Image" layout="fill" objectFit="cover" className="absolute inset-0 opacity-20" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">It's your turn to stand as a <span className="text-blue-300">web designer</span></h3>
          <p className="mb-8 text-gray-300">
            Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">Start learning →</button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold">Watch video</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWillYouLearn;
