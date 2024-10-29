'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "@/public/banner.png"

const WhatWillYouLearn: React.FC = () => {
  return (
    <section className="py-16 lg:max-w-[1280px] mx-auto">
      {/* Header Section */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center text-center max-w-[1280px]">
          <h2 className="text-6xl font-bold">What will you learn?</h2>
          <p className="mt-4 text-gray-600 text-xl">
            We offer a unique blend of university and job-oriented courses, designed to equip you with both academic knowledge and practical skills, ensuring you're prepared for the real world.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-between gap-8 mb-16 text-2xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className=" border-gray-300 border-[2px] p-8 rounded-lg text-center cursor-pointer h-[300px] w-[450px] flex items-center justify-center hover:shadow-xl"
        >
          <div className="text-center">
            <h3 className="font-semibold text-4xl">University Courses</h3>
            <a href="#" className="text-blue-500 mt-4 inline-block">Link</a>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="border-[2px] border-gray-300 p-8 rounded-lg text-center cursor-pointer h-[300px] w-[450px] flex items-center justify-center hover:shadow-xl"
        >
          <div className="text-center">
            <h3 className="font-semibold text-4xl">Job Oriented Courses</h3>
            <a href="#" className="text-blue-500 mt-4 inline-block">Link</a>
          </div>
        </motion.div>
      </div>


      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-lg overflow-hidden bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white text-center p-16 h-[500px] flex flex-col justify-center items-center" // Added flex and centering classes
      >
        <Image
          src={hero}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-20"
        />
        <div className="relative z-10 text-center">
          <h3 className="text-3xl font-bold mb-4">It's your turn to stand as a <span className="text-blue-300">web designer</span></h3>
          <p className="mb-8 text-gray-300">
            Lorem ipsum dolor amet consectetur pellentesque scelerisque fermentum bibendum ipsum massa cursus aliquet feugiat.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">Start learning →</button>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold">Watch video</button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWillYouLearn;
