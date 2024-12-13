import React from 'react';
import { motion } from 'framer-motion';

export interface Song {
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


interface AudioWaveFormProps {
    isPlaying: boolean;
    current: Song | null;  
}

const AudioWaveform: React.FC<AudioWaveFormProps> = ({ isPlaying, current }) => {
    const numberOfBars = 300;
  const minHeight = 5;
  const maxHeight = 30;

  const generateBars = () => {
    return Array.from({ length: numberOfBars }, (_, i) => ({
      id: i,
      height: Math.random() * (maxHeight - minHeight) + minHeight,
    }));
  };

  const bars = generateBars();

  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center">
        {/* Línea horizontal */}
        <div className="absolute w-full h-[2px] bg-gray-600"></div>

        {/* Barras de frecuencia */}
        {bars.map((bar) => (
          <motion.div
            key={bar.id}
            className="w-1 bg-yellow-400 mx-[1px]"
            initial={{ height: minHeight }}
            animate={{ 
              height: [minHeight, bar.height, minHeight],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: bar.id * 0.05
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AudioWaveform;