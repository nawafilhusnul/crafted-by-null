import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {`Hi, I'm Husnul Nawafil`}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-400 mb-6">
            Backend Engineer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            Passionate Backend Engineer with expertise in Go and cloud
            technologies. Experienced in building scalable systems and
            optimizing application performance. Currently based in Jakarta,
            Indonesia.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <motion.a
              href="https://github.com/nawafilhusnul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/husnulnawafil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://medium.com/@nawafil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaMedium className="w-8 h-8" />
            </motion.a>
          </div>

          <motion.a
            href="mailto:nawafilhusnul@gmail.com"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
