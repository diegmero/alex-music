"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';
import Image from 'next/image';
import '../app/globals.css';

interface Event {
  date: string;
  venue: string;
  location: string;
  ticketLink: string;
}

const events: Event[] = [
  {
    date: "15 Ago 2024",
    venue: "Teatro Metropolitan",
    location: "Ciudad de México, México",
    ticketLink: "https://example.com/tickets1"
  },
  {
    date: "22 Sep 2024",
    venue: "Luna Park",
    location: "Buenos Aires, Argentina",
    ticketLink: "https://example.com/tickets2"
  },
  {
    date: "5 Oct 2024",
    venue: "Movistar Arena",
    location: "Bogotá, Colombia",
    ticketLink: "https://example.com/tickets3"
  },
  {
    date: "5 Oct 2024",
    venue: "Movistar Arena",
    location: "Bogotá, Colombia",
    ticketLink: "https://example.com/tickets3"
  },
  // Añade más eventos aquí si es necesario
];

const images = [
  '/images/alex3.jpg',
  '/images/alex4.jpg',
  '/images/alex4.jpg',
  '/images/alex3.jpg',
  '/images/alex4.jpg',
];

const UpcomingEvents: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-950 to-gray-950 pt-[100px]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          id='eventos'
        >
          Próximas Presentaciones
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 h-[600px] pt-[50px]">
          {/* Columna de eventos */}
          <div className="w-full lg:w-1/2 overflow-y-auto pr-2 lg:pr-4 custom-scrollbar max-h-[600px] lg:max-h-none">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-black to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-500 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 0.98 }}
              >
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <div className="flex items-center mb-2">
                      <FaCalendar className="text-yellow-500 mr-2 text-lg sm:text-xl" />
                      <span className="text-xl sm:text-2xl font-bold text-yellow-400">{event.date}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{event.venue}</h3>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-pink-500 mr-2 text-lg" />
                      <span className="text-gray-300 text-base sm:text-lg">{event.location}</span>
                    </div>
                  </div>
                  <motion.a
                    href={event.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-sm sm:text-lg font-bold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-colors duration-300 mt-4 sm:mt-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTicketAlt className="mr-2" />
                    Comprar Entradas
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Columna de imágenes */}
          <div className="md:w-1/2 relative h-[600px] rounded-xl overflow-hidden hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  className="imagevento"
                  src={images[currentImage]}
                  alt={`Event image ${currentImage + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>

  );
};

export default UpcomingEvents;