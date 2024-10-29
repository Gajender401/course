'use client'
import { motion } from 'framer-motion'
import { FiSend, FiMessageSquare } from 'react-icons/fi'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaDribbble 
} from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-5xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Get in touch
              </span>
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-8">with me today</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="(123) 456 - 7890"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="ex. Corp"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                More contact information
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur condimentum donec suscipit lorem sed.
              </p>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                    <FiSend className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email me</h4>
                    <p className="text-gray-600 group-hover:text-purple-600">
                      contact@course.com →
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                    <FiMessageSquare className="text-purple-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Live chat</h4>
                    <p className="text-gray-600 group-hover:text-purple-600">
                      Chat now →
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Follow our social media
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur condimentum donec suscipit lorem sed.
              </p>
              
              <div className="flex gap-4">
                <SocialIcon icon={<FaFacebookF />} />
                <SocialIcon icon={<FaTwitter />} />
                <SocialIcon icon={<FaInstagram />} />
                <SocialIcon icon={<FaLinkedinIn />} />
                <SocialIcon icon={<FaYoutube />} />
                <SocialIcon icon={<FaDribbble />} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <motion.a
    href="#"
    whileHover={{ y: -3 }}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
)