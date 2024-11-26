import { motion } from "framer-motion";
import { FC } from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types";

const Projects: FC = () => {
  const projects: Project[] = [
    {
      title: "FIT HUB Gym Management System",
      description: "A comprehensive gym management system with features for class scheduling, membership management, and workout tracking.",
      image: "/images/projects/fithub.png",
      technologies: ["Go", "PostgreSQL", "Redis", "Docker", "AWS"],
      githubUrl: "https://github.com/nawafilhusnul/fithub-api",
      features: [
        "API rate limiting for OTP optimization",
        "Class scheduling system",
        "Lead management system",
        "JWT authentication",
        "RDBMS implementation"
      ]
    },
    {
      title: "Financial Application",
      description: "A scalable financial application built for TainoSystems Inc., featuring high-performance API endpoints and secure transaction processing.",
      image: "/images/projects/finance.png",
      technologies: ["Go", "AWS", "DynamoDB", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/nawafilhusnul/finance-api",
      features: [
        "Concurrent processing with Go routines",
        "Microservices architecture",
        "Real-time transaction processing",
        "Scalable infrastructure",
        "Comprehensive API documentation"
      ]
    },
    {
      title: "HumaHire Recruitment Platform",
      description: "A recruitment platform with integrated authentication and notification systems, optimized for high performance.",
      image: "/images/projects/humahire.png",
      technologies: ["Go", "Firebase", "AWS SES", "Redis"],
      githubUrl: "https://github.com/nawafilhusnul/humahire-api",
      features: [
        "Firebase Authentication integration",
        "Email delivery system with AWS SES",
        "Push notification system",
        "RESTful API optimization",
        "Concurrent programming implementation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-300 mt-4">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
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
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-7 h-7" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm text-blue-400 bg-blue-400/10 rounded-full"
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
