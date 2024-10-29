'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '@/assets/hero.jpg';

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center py-16 px-4 bg-gray-50">
            {/* Trusted by over 10,000+ students */}
            <motion.div
                className="text-sm text-gray-500 font-medium mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Trusted by over 10,000+ students
            </motion.div>

            {/* Main Text Section */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl space-y-8">

                {/* Text Row */}
                <div className="flex flex-col lg:flex-row lg:space-x-6 items-center">
                    <motion.h1
                        className="text-2xl md:text-4xl font-bold text-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        It’s your turn to become the 1% in web dev / data scientist / ML Eng
                    </motion.h1>

                    <div className='lg:max-w-md' >

                        <motion.p
                            className="text-gray-600 "
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Whether you're starting or making a career switch, The Gyaan Sutra is your gateway to mastering the IT industry with job-ready courses, cutting-edge programs, and an engaging learning experience. Unlock your potential and advance your career today!
                        </motion.p>

                        <motion.div
                            className="mt-4 flex space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <motion.button
                                className="px-6 py-2 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Learning
                            </motion.button>
                            <motion.button
                                className="px-6 py-2 border border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-100"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Courses
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* Buttons - Now Below the Paragraph */}

            </div>

            {/* Image Section */}
            <motion.div
                className="relative mt-12 max-w-3xl w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <Image
                    src={hero}
                    alt="Hero Image"
                    layout="responsive"
                    objectFit="contain"
                    quality={100}
                    className="rounded-lg shadow-lg"
                />
            </motion.div>
        </section>
    );
};

export default HeroSection;
