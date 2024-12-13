"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Headphones, Mail } from 'lucide-react';

const VideoBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://res.cloudinary.com/dmrtnmeej/video/upload/v1734027553/NO_ME_RUEGUES_AMOR_-_ALEX_GARZ%C3%93N_1_i2n1cm.mp4";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  /*const pulseAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0 0 rgba(255, 255, 255, 0.7)",
      "0 0 0 10px rgba(255, 255, 255, 0)",
      "0 0 0 0 rgba(255, 255, 255, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };*/

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 filter brightness-50"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-transparent to-black/70"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation */}
        <nav className="container mx-auto flex justify-between items-center mt-1 hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-base md:text-lg lg:text-xl font-bold text-white tracking-wide"
          >
            Alex Garzón
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex space-x-6 font-semibold"
          >
            <a href="#canciones" className="text-white hover:text-yellow-400 transition-colors">Música</a>
            <a href="#eventos" className="text-white hover:text-yellow-400 transition-colors">Shows</a>
            <a href="#contacto" className="text-white hover:text-yellow-400 transition-colors">Contacto</a>
          </motion.div>
        </nav>

        {/* Main Content */}
        <div className="flex-grow container mx-auto px-6 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-red-500 mb-6"
            >
              Alex Garzón
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Una experiencia musical que rompe fronteras y conecta emociones
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                onClick={toggleVideoPlay}
                className="glow-effect-left yellow-button text-black font-bold rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="button-content">
                  <Mail size={24} className="mr-2" />
                  <span>Contáctame</span>
                </div>
              </motion.button>
              <motion.button
                className="glow-effect-right red-button text-white font-bold rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="button-content">
                  <Headphones size={24} className="mr-2" />
                  <span>Escuchar Ahora</span>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;