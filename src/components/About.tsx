import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { FC } from "react";

interface ExperienceItem {
  title: string;
  place: string;
  date: string;
  achievements?: string[];
}

interface ExperienceSection {
  title: string;
  icon: any;
  items: ExperienceItem[];
}

const About: FC = () => {
  const experiences: ExperienceSection[] = [
    {
      title: "Education",
      icon: FaGraduationCap,
      items: [
        {
          title: "Bachelor of Ocean Engineering",
          place: "Bandung Institute of Technology",
          date: "2017",
        },
        {
          title: "Backend Engineering",
          place: "Alterra Academy (Coding Bootcamp)",
          date: "2022",
        },
      ],
    },
    {
      title: "Work Experience",
      icon: FaLaptopCode,
      items: [
        {
          title: "Backend Engineer",
          place: "FIT HUB",
          date: "July 2022 - Present",
          achievements: [
            "Developed gym management system backend",
            "Implemented personal trainers scheduling and booking features",
            "Optimized API performance and security",
            "Developed gym workout tutorial features",
          ],
        },
        {
          title: "Backend Engineer",
          place: "TainoSystems Inc.",
          date: " Jan 2024 - Dec 2024",
          achievements: [
            "Built money exchange platform backend",
            "Developed and maintained high-performance APIs",
            "Optimized database queries and performance",
            "Collaborated with cross-country teams",
            "Set up the monolithic deployment on Linux",
          ],
        },
        {
          title: "Backend Engineer",
          place: "HumaHire",
          date: "May 2023 - Aug 2023",
          achievements: [
            "Built recruitment platform backend services",
            "Integrated third-party APIs and services",
            "Implemented authentication and notification systems",
          ],
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My journey from Ocean Engineering to Backend Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-6">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="border-l-2 border-indigo-500 pl-4"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.place}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {item.date}
                    </p>
                    {item.achievements && (
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {item.achievements.map((achievement, achIdx) => (
                          <li key={achIdx}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
