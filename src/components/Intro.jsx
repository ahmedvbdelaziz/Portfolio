import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Intro = ({ onComplete, name = "Ahmed Abdelaziz", duration = 3500 }) => {
  const [showText, setShowText] = useState(false);
  const [showSplit, setShowSplit] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 500);
    const splitTimer = setTimeout(() => setShowSplit(true), duration - 1200);
    const completeTimer = setTimeout(onComplete, duration);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(splitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, duration]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.28, 1, 0.36, 1] }}
    >
      {/* Top Split Panel */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}
        initial={{ y: 0 }}
        animate={showSplit ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 1.2, ease: [0.28, 1, 0.36, 1] }}
      />

      {/* Bottom Split Panel */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}
        initial={{ y: 0 }}
        animate={showSplit ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 3.5, ease: [0.28, 1, 0.36, 1] }}
      />

      <div className="text-center space-y-6 sm:space-y-8 relative z-10 px-4 w-full max-w-2xl">

        {showText && (
          <motion.h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.18, 1, 0.36, 1] }}
          >
            {name}
          </motion.h1>
        )}

        {/* Animated progress bar - responsive */}
        <div className="relative w-full max-w-md mx-auto">
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative">
            {/* White progress fill */}
            <motion.div
              className="h-full bg-white absolute left-0 top-0"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 0.1, ease: "linear" }}
            />
          </div>

         
        </div>

      </div>
    </motion.div>
  );
};

export default Intro;
