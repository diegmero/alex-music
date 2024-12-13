"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify, FaYoutube, FaDeezer, FaPlay, FaPause } from "react-icons/fa";
import { SiTidal } from "react-icons/si";
import AudioWaveform from "./AudioWaveForm";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverArt: string;
  audioSrc: string;
  duration: number;
  spotifyUrl: string;
  youtubeUrl: string;
  tidalUrl: string;
  deezerUrl: string;
}

const MusicPlayer: React.FC<{ songs: Song[] }> = ({ songs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = (song: Song) => {
    if (audioRef.current) {
      if (currentSong?.id !== song.id) {
        setCurrentSong(song);
        audioRef.current.src = song.audioSrc;
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  return (
    <section className="bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-6xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="canciones"
        >
          Mis canciones
        </motion.h2>

        <div className="mb-8">
          <AudioWaveform isPlaying={isPlaying} current={currentSong} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-[50px]">
          <AnimatePresence>
            {songs.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={song.coverArt}
                    alt={song.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <motion.div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      onClick={() => togglePlay(song)}
                      className="text-white text-3xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying && currentSong?.id === song.id ? (
                        <FaPause size={24} />
                      ) : (
                        <FaPlay size={24} />
                      )}
                    </motion.button>
                  </motion.div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-semibold truncate">{song.title}</h3>
                      <p className="text-sm text-gray-300 truncate">
                        {song.artist || "Alex Garzon"}
                      </p>
                    </div>
                    <div className="flex space-x-3 items-end">
                      <motion.a
                        href={song.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaSpotify size={20} />
                      </motion.a>
                      <motion.a
                        href={song.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaYoutube size={20} />
                      </motion.a>
                      <motion.a
                        href={song.tidalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <SiTidal size={20} />
                      </motion.a>
                      <motion.a
                        href={song.deezerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaDeezer size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <audio ref={audioRef} />
      </div>
    </section>
  );
};

export default MusicPlayer;