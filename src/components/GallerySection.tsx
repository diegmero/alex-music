"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: '/images/alex2.jpg', alt: 'Alex en concierto 1' },
  { src: '/images/ale2.jpg', alt: 'Alex en el estudio 1' },
  { src: '/images/alex3.jpg', alt: 'Alex backstage 1' },
  { src: '/images/alex4.jpg', alt: 'Alex en concierto 2' },
  { src: '/images/alex3.jpg', alt: 'Alex en el estudio 2' },
  { src: '/images/alex4.jpg', alt: 'Alex backstage 2' },
  { src: '/images/alex2.jpg', alt: 'Alex en concierto 3' },
  { src: '/images/ale2.jpg', alt: 'Alex en el estudio 3' },
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 to-gray-950 pt-[100px]" id="galeria">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galería de Momentos
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-bold text-center px-2">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl max-h-[90vh] aspect-video"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;