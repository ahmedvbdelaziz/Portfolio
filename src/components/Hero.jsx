import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import TiltedCard from './TiltedCard';
import Beams from './Beams';

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center relative overflow-hidden">
      {/* Background Beams */}
      <Beams />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-3 sm:space-y-5">
              <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                creative designer
                <br />
                <span className="text-gray-900 bg-purple-600 bg-clip-text text-transparent">
                  & developer.
                </span>
              </motion.h1>
              
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 max-w-sm sm:max-w-md md:max-w-lg leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Hi I'm Ahmed Abdelaziz, a passionate Front-end Developer & 
                Designer based in Egypt.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={scrollToWorks}
                className="inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base font-bold cursor-pointer tracking-wider text-gray-900 hover:bg-gray-900
                 hover:text-white transition-all duration-300 px-5 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-900 group"
              >
                SEE MY WORKS
                <motion.span
                  className="ml-3 inline-block text-lg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://www.linkedin.com/in/ahmedabdelaziz11"
                target='_blank'
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 underline underline-offset-4 hover:line-through"
              >
                LinkedIn
              </a>
              <span className="hidden sm:inline text-gray-400">/</span>
              <a
                href="https://www.behance.net/ahmedabdelaziz180"
                target='_blank'
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 underline underline-offset-4 hover:line-through"
              >
                Behance
              </a>
              <span className="hidden sm:inline text-gray-400">/</span>
              <a
                href="https://github.com/ahmedvbdelaziz"
                target='_blank'
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 underline underline-offset-4 hover:line-through"
              >
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Right Artistic Element */}
          <motion.div
            className="relative flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tilted Card */}
            <div className="flex justify-center items-center w-full">
              <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px]">
                <TiltedCard
                  imageSrc="/img/avatar.webp"
                  altText="Ahmed's Portfolio"
                  captionText="Welcome to my portfolio!"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  scaleOnHover={1.08}
                  rotateAmplitude={14}
                  showMobileWarning={false}
                  showTooltip={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute right-4 sm:right-6 lg:right-8 bottom-8 sm:bottom-12 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleScroll}
      >
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="text-xs lg:text-sm font-medium text-gray-500 tracking-widest [writing-mode:vertical-rl] h-32 lg:h-40 flex items-center justify-center group-hover:text-gray-700 transition-colors duration-300">
            SCROLL DOWN
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 lg:h-7 lg:w-7 text-gray-500 group-hover:text-gray-700 transition-colors duration-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleScroll}
      >
        <div className="flex flex-col items-center cursor-pointer group">
          <div className="text-xs font-medium text-gray-500 tracking-wider mb-2 group-hover:text-gray-700 transition-colors duration-300">
            SCROLL DOWN
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-gray-500 group-hover:text-gray-700 transition-colors duration-300" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
