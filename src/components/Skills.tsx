import { motion } from "framer-motion";
import {
  FaAws,
  FaServer,
  FaDocker,
  FaPython,
  FaCode,
  FaBrain,
  FaUsers,
  FaCogs,
  FaVial,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiRedis,
  SiGo,
  SiMysql,
  SiGooglecloud,
  SiFirebase,
  SiAmazondynamodb,
  SiNodedotjs,
} from "react-icons/si";
import { FC } from "react";
import { SkillCategory } from "../types";

const Skills: FC = () => {
  const skills: SkillCategory[] = [
    {
      category: "Programming Languages & Backend",
      items: [
        { name: "Go", icon: SiGo, level: 95 },
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "Python", icon: FaPython, level: 70 },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: SiMysql, level: 95 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 85 },
        { name: "DynamoDB", icon: SiAmazondynamodb, level: 85 },
        { name: "Firestore", icon: SiFirebase, level: 85 },
        { name: "Redis", icon: SiRedis, level: 80 },
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        { name: "Docker", icon: FaDocker, level: 80 },
        { name: "GCP", icon: SiGooglecloud, level: 75 },
        { name: "AWS", icon: FaAws, level: 70 },
      ],
    },
    {
      category: "Others",
      items: [
        { name: "Team Work", icon: FaUsers, level: 95 },
        { name: "Agile Development", icon: FaCogs, level: 95 },
        { name: "Unit Testing", icon: FaVial, level: 90 },
        { name: "Clean Architecture", icon: FaServer, level: 80 },
        { name: "Data Structure and Algorithm", icon: FaBrain, level: 80 },
        { name: "System Design", icon: FaCode, level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="section-title text-center">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {skills.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="card">
                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
