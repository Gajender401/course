'use client'
import React from 'react';
import { motion, useInView } from 'framer-motion';

const WhyThisCourse: React.FC = () => {
  const headerRef = React.useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const cardsRef = React.useRef(null);
  const cardsInView = useInView(cardsRef, { once: true });

  const videoRef = React.useRef(null);
  const videoInView = useInView(videoRef, { once: true });

  return (
    <section className="container mx-auto py-12 px-4 lg:px-0">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-4">
          Why this <span className="text-purple-500">course?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Card Section */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, x: -50 }}
          animate={cardsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 lg:w-1/2"
        >
          {[
            { delay: 0.1, value: '80+', label: 'Lessons' },
            { delay: 0.2, value: '2,000+', label: 'Critic videos' },
            { delay: 0.3, value: '3,500+', label: 'Community members' },
            { delay: 0.4, value: '40+', label: 'Hours of content' },
          ].map(({ delay, value, label }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay }}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <h3 className="text-2xl font-bold text-purple-600">{value}</h3>
              <p>{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, x: 50 }}
          animate={videoInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-64 lg:h-80"
              src="https://www.youtube.com/embed/-HAbDt_DuBE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisCourse;