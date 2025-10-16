"use client"

import { motion } from "framer-motion"
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa"

const experiences = [
  {
    company: "White Label Solutions",
    position: "Frontend Engineer",
    duration: "03/2025 - Present",
    location: "Erbil",
    responsibilities: [
      "Developed and maintained React.js and Next.js applications with TypeScript, focusing on dashboards and showcase websites (e.g., Foton, Jac).",
      "Implemented Algolia Analytics and Firebase push notifications in an e-commerce dashboard, improving search analysis and user engagement.",
      "Designed and developed a generic, reusable page component with dynamic columns, filters, and action buttons – similar to Laravel’s Filament – to accelerate feature delivery across multiple projects.",
      "Enhanced the e-commerce API in Laravel by helping design modules and database tables, implementing models, migrations, and controllers, and fixing critical bugs to ensure a scalable backend architecture.",
      "Developed a custom CRM dashboard with Apollo search integration, enabling fast, flexible, and eﬃcient data retrieval across complex datasets, and improving overall search performance and user experience.",
      "Integrated Spatie packages for role-based permissions and image uploads, ensuring secure and scalable content management.",
      "Worked on a Filament-based admin dashboard, extending and customizing resources, forms, and tables to meet project requirements.",
    ],
  },
  {
    company: "Zinzo – Ecommerce Performance Optimisation",
    position: "Junior Developer - Internship",
    duration: "12/2023 - 07/2024",
    location: "Remote",
    responsibilities: [
      "Documented UI components using Storybook to ensure writing well-designed components’ states and styles while having a great experience using those components.",
      "Developed a client-facing web app to address the challenge of slow e-commerce, successfully migrating the app from Shopify to a headless application while prioritizing performance, application load times, and Search Engine Optimisation by hitting a score of more than 90% on Google Lighthouse Analytics using React.js. ",
      "Collaborated with product managers by creating user stories that fulfill user requirements to help better understand the problem, ensured testing of the user stories alongside implemented features, and the acquisition of continuous reviews from the clients and product manager.",
      "Implemented Redux data stores to facilitate data sharing between components.",
      "Participated in daily stand-ups with the remote team to keep the team updated and in contact with the client and product manager.",
      "Worked with backend developers to maintain and document the created endpoints using Postman.",
      "Collaborated with a remote team of 6 to implement an interactive map for an internal project using LeafLet to help users find car shops more easily in Duhok, Iraq."
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 rounded-full"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex ${index % 2 === 0 ? "justify-end md:justify-start" : "justify-start md:justify-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 shadow-lg max-w-xl ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
              >
                <div className="absolute top-6 -left-3 md:-left-4 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-800 z-10"></div>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{exp.company}</h3>
                <div className="flex items-center text-gray-400 mb-2">
                  <FaBriefcase className="mr-2" />
                  <span>{exp.position}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-2">
                  <FaCalendar className="mr-2" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{exp.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

