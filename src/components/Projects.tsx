import { motion } from "framer-motion";
import { FC } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types";
import ImageCarousel from "./ImageCarousel";

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: "FIT HUB Gym Management System",
      description:
        "A comprehensive gym management system with features for class scheduling, membership management, and workout tracking.",
      images: [
        "/images/projects/fithub.png",
        "/images/projects/fithub-2.png",
        "/images/projects/fithub-3.png",
      ],
      technologies: [
        "Go",
        "MySQL",
        "Redis",
        "Firestore",
        "AWS DynamoDB",
        "Google Pub/Sub",
        "Github",
      ],
      githubUrl: "https://fithub.id",
      features: [
        "API rate limiting for OTP optimization",
        "Class scheduling system",
        "Lead management system",
        "JWT authentication",
        "RDBMS implementation",
      ],
    },
    {
      title: "Financial Application",
      description:
        "A scalable financial application built for TainoSystems Inc., featuring high-performance API endpoints and secure transaction processing.",
      images: [
        "/images/projects/finance.png",
        "/images/projects/finance-2.png",
        "/images/projects/finance-3.png",
      ],
      technologies: ["Go", "Linux", "PostgreSQL", "Git"],
      githubUrl: "https://tainosystems.com/",
      features: [
        "Concurrent processing with Go routines",
        "Microservices architecture",
        "Real-time transaction processing",
        "Scalable infrastructure",
        "Comprehensive API documentation",
      ],
    },
    {
      title: "HumaHire Recruitment Platform",
      description:
        "A recruitment platform with integrated authentication and notification systems, optimized for high performance.",
      images: [
        "/images/projects/humahire.png",
        "/images/projects/humahire-2.png",
        "/images/projects/humahire-3.png",
      ],
      technologies: [
        "Go",
        "PostgreSQL",
        "Firebase",
        "AWS SES",
        "Redis",
        "Docker",
        "Github Actions",
      ],
      githubUrl: "https://www.humahire.com/",
      features: [
        "Firebase Authentication integration",
        "Email delivery system with AWS SES",
        "Push notification system",
        "RESTful API optimization",
        "Concurrent programming implementation",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my technical
            skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card overflow-hidden group bg-white dark:bg-gray-800/50 rounded-xl shadow-sm dark:shadow-none transform hover:scale-[1.02] transition-all duration-300 ring-1 ring-gray-200 dark:ring-gray-800"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <ImageCarousel
                  images={project.images}
                  title={project.title}
                  autoPlayInterval={4000}
                />
                <div
                  className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4 pointer-events-none"
                  style={{ zIndex: 40 }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors pointer-events-auto p-2 hover:bg-white/10 rounded-full"
                  >
                    <FaGithub className="w-7 h-7" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors pointer-events-auto p-2 hover:bg-white/10 rounded-full"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold dark:text-white text-gray-900 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm dark:text-gray-300 text-gray-600">
                  {project.description}
                </p>

                {project.features && project.features.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2 dark:text-gray-200 text-gray-800">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside space-y-1.5">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm dark:text-gray-300 text-gray-600 pl-1"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-full
                        dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-1 dark:ring-indigo-400/30 dark:hover:bg-indigo-400/20
                        bg-indigo-50 text-indigo-600 hover:bg-indigo-100
                        transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
