"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaSpotify, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection: React.FC = () => {
    const [activeIcon, setActiveIcon] = useState<string | null>(null);

    const socialIcons = [
        { name: 'Instagram', icon: <FaInstagram />, color: 'from-red-500 to-red-800', link: 'https://instagram.com/alexgarzon' },
        { name: 'Facebook', icon: <FaFacebookF />, color: 'from-blue-600 to-blue-800', link: 'https://facebook.com/alexgarzon' },
        { name: 'Twitter', icon: <FaTwitter />, color: 'from-blue-400 to-blue-700', link: 'https://twitter.com/alexgarzon' },
        { name: 'YouTube', icon: <FaYoutube />, color: 'from-red-600 to-red-800', link: 'https://youtube.com/alexgarzon' },
        { name: 'Spotify', icon: <FaSpotify />, color: 'from-green-500 to-green-800', link: 'https://open.spotify.com/artist/alexgarzon' },
    ];

    return (
        <section className="pt-0 bg-gradient-to-br from-gray-950 to-gray-950 pt-[100px] pb-8" id="contacto">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-7xl font-extrabold  text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Conéctate con Alex
                </motion.h2>

                <div className="flex flex-wrap justify-center p-4 md:p-8 lg:p-16">
                    {socialIcons.map((social) => (
                        <motion.div
                            key={social.name}
                            className="m-2 md:m-3 lg:m-4"
                            whileHover={{ scale: 1.2 }}
                            onHoverStart={() => setActiveIcon(social.name)}
                            onHoverEnd={() => setActiveIcon(null)}
                        >
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block p-3 md:p-4 rounded-full text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                {social.icon}
                            </a>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {activeIcon && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center text-white text-2xl mb-12"
                        >
                            Sígueme en {activeIcon}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 max-w-2xl mx-auto shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-4xl font-bold text-white mb-8 text-center">Información de Contacto</h3>
                    <div className="space-y-3">
                        <ContactInfo icon={<FaEnvelope />} text="contacto@alexgarzon.com" />
                        <ContactInfo icon={<FaPhone />} text="+1 (123) 456-7890" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ContactInfo: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <motion.div
        className="flex items-center space-x-4 text-white"
        whileHover={{ x: 10 }}
    >
        <div className="text-2xl text-yellow-400">{icon}</div>
        <span className="text-xl">{text}</span>
    </motion.div>
);

export default ContactSection;