"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Hero() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hours = new Date().getHours()
    const newGreeting = hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening"
    setGreeting(newGreeting)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 mx-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {greeting}, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Ridha Al-Furaiji</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer | Full Stack Web Developer
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="https://github.com/RidhaMuneer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ridhamuneer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:ridhamuner@gmail.com" className="text-3xl hover:text-blue-400 transition duration-300">
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a href="#skills" className="text-lg font-semibold flex items-center">
          Explore My Skills
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  )
}

