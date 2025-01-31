"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Programming and Databases",
    icon: "💻",
    items: ["Java", "Javascript", "Typescript", "HTML", "CSS", "MongoDB", "MySQL", "PostgreSQL", "Python"],
  },
  {
    category: "Frameworks and Libraries",
    icon: "🛠️",
    items: ["React", "Nextjs", "Redux", "Node.js", "Express.js", "TailwindCSS", "FastAPI", "Vue.js", "Nuxt.js"],
  },
  {
    category: "Personal",
    icon: "🧠",
    items: [
      "Communication",
      "Leadership",
      "Documentation",
      "Attention to detail",
      "Empathy",
      "Problem-Solving",
      "Adaptability",
    ],
  },
  {
    category: "Other",
    icon: "🔧",
    items: ["API integration", "UI/UX", "Bash", "Figma", "Taiga", "Microsoft Teams", "Clickup", "Git"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{skillCategory.icon}</span>
                <h3 className="text-2xl font-semibold text-blue-400">{skillCategory.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-gray-700 text-sm rounded-full px-4 py-2 hover:bg-blue-500 transition duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

