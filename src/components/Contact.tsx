"use client"

import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-3xl text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:ridhamuner@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    ridhamuner@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="text-3xl text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">GitHub</h3>
                  <a
                    href="https://github.com/RidhaMuneer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    github.com/RidhaMuneer
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-3xl text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/ridhamuneer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    linkedin.com/in/ridhamuneer
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

