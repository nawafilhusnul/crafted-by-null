import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FC, FormEvent } from "react";
import { SocialLink } from "../types";

const Contact: FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "Email",
      icon: FaEnvelope,
      href: "mailto:nawafilhusnul@gmail.com",
      label: "nawafilhusnul@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/husnulnawafil",
      label: "linkedin.com/in/husnulnawafil",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/nawafilhusnul",
      label: "github.com/nawafilhusnul",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/nawafil_",
      label: "@nawafil_",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const contactLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/nawafilhusnul",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/husnul-nawafil",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:husnulnawafil@gmail.com",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 dark:text-white text-gray-900"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg mb-8 dark:text-gray-300 text-gray-600"
            >
              Let's connect and explore opportunities together!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`flex items-center justify-center space-x-3 p-4 rounded-lg
                    bg-gray-50 dark:bg-gray-800 
                    group hover:bg-gray-100 dark:hover:bg-gray-700/50
                    transition-all duration-200 
                    ring-1 ring-gray-200 dark:ring-gray-700`}
                >
                  <link.icon className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${link.color} transition-colors duration-200`} />
                  <span className={`text-gray-800 dark:text-gray-300 font-medium ${link.color} transition-colors duration-200`}>
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                I'm always open to discussing new projects, opportunities, or partnerships.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
