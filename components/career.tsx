'use client'
// components/CareerTrajectory.tsx

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserGraduate, FaUsers, FaVideo, FaBookOpen } from "react-icons/fa";

const features = [
  {
    title: "Beginner Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diam get id id sapien viverra nulla turpis magna ut pellentesque mi pulvinar.",
    icon: (
      <Image
        width={100}
        height={100}
        src="/b1.png"
        className="text-purple-500 w-full"
        alt="Beginner friendly icon"
      />
    ),
  },

  {
    title: "Amazing community",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: (
      <Image
        width={100}
        height={100}
        src="/b2.png"
        className="text-purple-500 w-full"
        alt="Beginner friendly icon"
      />
    ),
  },
  {
    title: "Weekly Q&A live streams",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: (
      <Image
        width={100}
        height={100}
        src="/b3.png"
        className="text-purple-500 w-full"
        alt="Beginner friendly icon"
      />
    ),
  },
  {
    title: "1,000+ free resources",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: (
      <Image
        width={100}
        height={100}
        src="/b4.png"
        className="text-purple-500 w-full"
        alt="Beginner friendly icon"
      />
    ),
  },
];

const CareerTrajectory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8  lg:max-w-[1280px] mx-auto justify-between">
      <div className="flex flex-col items-start gap-4 ">
        <h2 className="text-5xl font-bold">Transform Your Career<br /> Trajectory</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold mt-10"
        >
          Start learning →
        </motion.button>
      </div>
      <div className="flex flex-col gap-6 max-w-[700px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start gap-4 p-10 bg-white rounded-lg shadow-lg"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerTrajectory;
