'use client'
// components/CareerTrajectory.tsx

import { motion } from "framer-motion";
import { FaUserGraduate, FaUsers, FaVideo, FaBookOpen } from "react-icons/fa";

const features = [
  {
    title: "Beginner friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: <FaUserGraduate size={48} className="text-purple-500" />,
  },
  {
    title: "Amazing community",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: <FaUsers size={48} className="text-purple-500" />,
  },
  {
    title: "Weekly Q&A live streams",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: <FaVideo size={48} className="text-purple-500" />,
  },
  {
    title: "1,000+ free resources",
    description:
      "Lorem ipsum dolor sit amet consectetur placerat ut nisl maecenas massa sem tristique vitae sed sed aliquet augue egestas pellentesque felis diame get id id sapien viverra nulla turpis magna ut pellentesque mi pulvina.",
    icon: <FaBookOpen size={48} className="text-purple-500" />,
  },
];

const CareerTrajectory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">
      <div className="flex flex-col items-start gap-4 lg:w-1/3">
        <h2 className="text-3xl font-bold">Transform Your Career Trajectory</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-6 py-3 rounded-full font-semibold"
        >
          Start learning →
        </motion.button>
      </div>
      <div className="flex flex-col gap-6 lg:w-2/3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-lg"
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
