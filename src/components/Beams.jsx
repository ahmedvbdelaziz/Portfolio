import React from 'react';
import { motion } from 'framer-motion';

const Beams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,300 Q250,100 500,300 T1000,300"
          stroke="url(#beam1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        />
        
        <motion.path
          d="M0,700 Q250,500 500,700 T1000,700"
          stroke="url(#beam2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2.5,
            delay: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.5
          }}
        />
        
        <motion.circle
          cx="200"
          cy="200"
          r="3"
          fill="rgb(59, 130, 246)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2
          }}
        />
        
        <motion.circle
          cx="800"
          cy="800"
          r="2"
          fill="rgb(147, 51, 234)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5,
            delay: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      </svg>
    </div>
  );
};

export default Beams;