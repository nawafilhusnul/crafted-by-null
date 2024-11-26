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
          place: "FIT HUB - Jakarta, Indonesia",
          date: "Jul 2022 - present",
          achievements: [
            "Reduced OTP costs by 30% through API rate limiting implementation",
            "Decreased bugs by 99% in class schedules feature",
            "Increased monthly active users by 30%",
            "Improved data consistency through RDBMS restructuring",
            "Enhanced security with JWT implementation",
          ],
        },
        {
          title: "Backend Developer (Freelance)",
          place: "TainoSystems Inc. - Canada (Remote)",
          date: "Jan 2024 - present",
          achievements: [
            "Enhanced API performance by 40% using Go routines",
            "Developed financial application from inception to deployment",
            "Collaborated with global team across time zones",
          ],
        },
        {
          title: "Backend Developer (Freelance)",
          place: "HumaHire - Malaysia (Remote)",
          date: "May 2023 - Aug 2023",
          achievements: [
            "Reduced API response time by 25%",
            "Improved email delivery success rate by 50%",
            "Increased notification click-through rates by 30%",
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

        {experiences.map((section, _) => (
          <div key={section.title} className="mb-12">
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
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIdx * 0.1 }}
                  className="border-l-2 border-blue-500 pl-4"
                >
                  <h4 className="text-lg font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.place}</p>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  {item.achievements && (
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      {item.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
