"use client"

import { motion, } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "2d Game",
    description: "A sample 2d game with an AI player that acts like the philosopher Socrates by asking endless two choice questions.",
    technologies: ["Java", "Gson"],
    image: "/2d-game.png",
    github: "https://github.com/RidhaMuneer/2d-game",
    live: null,
  },
  {
    title: "Terminal-Based Discord",
    description: "A terminal-based discord clone that allows users to send and receive messages using ZooKeeper client and server.",
    technologies: ["Java", "ZooKeeper"],
    image: null,
    github: "https://github.com/RidhaMuneer/Terminal-based-discord",
    live: null,
  },
  {
    title: "Social Media API",
    description: "This RESTful API allows users to interact on a social media platform. Users can post content, like posts, follow other users, and receive follow suggestions.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS S3", "JWT"],
    image: "/social-core.png",
    github: "https://github.com/RidhaMuneer/social-core",
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Side Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={project.image || "/placeholder-image.webp"} alt={project.title} className="w-full h-48 object-cover" width={400} height={300} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 text-sm rounded-full px-3 py-1 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition duration-300"
                      >
                        <FaExternalLinkAlt className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

