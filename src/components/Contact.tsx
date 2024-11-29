import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/nawafilhusnul",
      color: "hover:text-gray-900 dark:hover:text-white",
      hoverBg: "hover:bg-gray-100 dark:hover:bg-gray-700",
      description: "Check out my open source projects",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/husnul-nawafil",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      description: "Connect with me professionally",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:husnulnawafil@gmail.com",
      color: "hover:text-red-600 dark:hover:text-red-400",
      hoverBg: "hover:bg-red-50 dark:hover:bg-red-900/20",
      description: "Drop me a message",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 dark:text-white text-gray-900"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg dark:text-gray-300 text-gray-600"
            >
              Let's connect and explore opportunities together!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-800"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg
                    bg-gray-50 dark:bg-gray-800 
                    ${link.hoverBg}
                    group hover:shadow-md dark:hover:shadow-none
                    transition-all duration-300 
                    ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600`}
                >
                  <link.icon className={`w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-3 text-gray-600 dark:text-gray-400 ${link.color} transition-colors duration-300`} />
                  <span className={`font-medium text-sm sm:text-base mb-1 sm:mb-2 text-gray-800 dark:text-gray-300 ${link.color} transition-colors duration-300`}>
                    {link.name}
                  </span>
                  <span className="text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {link.description}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 sm:mt-8 text-center"
            >
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
              <div className="mt-3 sm:mt-4 inline-flex items-center justify-center">
                <span className="relative flex h-2 w-2 sm:h-3 sm:w-3 mr-2 sm:mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-green-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
