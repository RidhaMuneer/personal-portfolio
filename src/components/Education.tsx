"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaMedal, FaBook } from "react-icons/fa"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <motion.div
              className="w-28 h-28 md:w-32 md:h-32 bg-blue-500 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGraduationCap className="text-4xl md:text-5xl text-white" />
            </motion.div>

            <div className="w-full text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2 md:mb-0">
                  American University of Iraq, Sulaimani
                </h3>

                <motion.span
                  className="text-gray-400 text-sm md:text-base italic bg-gray-800/60 px-3 py-1 rounded-full border border-gray-700 self-center md:self-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  2021 – 2024
                </motion.span>
              </div>

              <p className="text-lg md:text-xl mt-3 mb-1 text-gray-200">
                Bachelor&apos;s Degree in Software Engineering
              </p>
              <p className="text-gray-400 mb-4">Cumulative GPA: 3.3 / 4.00</p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <FaMedal className="text-2xl text-yellow-500 mr-3" />
                <h4 className="text-lg font-semibold">Awards</h4>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>One President&apos;s Award</li>
                <li>Two Dean&apos;s Awards</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <FaBook className="text-2xl text-green-500 mr-3" />
                <h4 className="text-lg font-semibold">Key Coursework</h4>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>System Analysis & Design</li>
                <li>Software Design & Models</li>
                <li>Advanced Programming</li>
                <li>Data Structures & Algorithms</li>
                <li>Software Testing</li>
                <li>Enterprise Software Architecture</li>
                <li>Distributed Computing</li>
                <li>Concurrent & Parallel Programming</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
