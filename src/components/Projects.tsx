"use client"

import { motion, } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "Gula Pharmaceutical Management System",
    description: "A grant-winning system for managing pharmaceutical inventory and sales.",
    longDescription:
      "Developed a comprehensive pharmaceutical management system that streamlines inventory tracking, sales processing, and reporting. The system includes features such as real-time stock updates, automated reordering, and analytics dashboard for business insights.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: null,
    github: "https://github.com/RidhaMuneer/gula-pms",
    live: "https://gula-pms.vercel.app",
  },
  {
    title: "Zinzo E-commerce Platform",
    description: "A high-performance e-commerce platform with optimized load times and SEO.",
    longDescription:
      "Built a scalable e-commerce platform focusing on performance optimization. Implemented lazy loading, image optimization, and server-side rendering to achieve high Google Lighthouse scores. Integrated with Shopify API for seamless product management and order processing.",
    technologies: ["React", "Next.js", "Shopify API", "Google Lighthouse"],
    image: null,
    github: "https://github.com/RidhaMuneer/zinzo-ecommerce",
    live: "https://zinzo-ecommerce.vercel.app",
  },
  {
    title: "Interactive Car Shop Map",
    description: "An interactive map to help users find car shops in Duhok, Iraq.",
    longDescription:
      "Created a user-friendly interactive map application to locate car shops in Duhok, Iraq. Features include geolocation, search functionality, and detailed information about each shop including services offered, ratings, and contact information.",
    technologies: ["React", "Leaflet", "Mapbox"],
    image: null,
    github: "https://github.com/RidhaMuneer/car-shop-map",
    live: "https://car-shop-map.vercel.app",
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
          Featured Projects
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
              <Image src={project.image ||"/placeholder-image.webp"} alt={project.title} className="w-full h-48 object-cover" width={400} height={300}/>
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
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition duration-300"
                    >
                      <FaExternalLinkAlt className="text-2xl" />
                    </a>
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

