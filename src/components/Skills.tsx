import { motion } from "framer-motion";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white text-gray-900">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], categoryIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-800"
              >
                <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500/30 dark:bg-indigo-400/30 group-hover:bg-indigo-500 dark:group-hover:bg-indigo-400 transition-colors duration-200" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
