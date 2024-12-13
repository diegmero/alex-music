import VideoBanner from '../components/VideoBanner';
import MusicPlayer from '../components/MusicPlayer';
import UpcomingEvents from '@/components/UpComingEvents';
import ContactSection from '../components/ContactSection';
import GallerySection from '@/components/GallerySection';

const songs = [
  {
    title: "No Me Ruegues Amor",
    coverArt: "https://i.ytimg.com/vi/D4yudtWQH3g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdYR27dFt2epVdSA04lqXkhtyYDg",
    audioSrc: "https://ejemplo.com/ruta/a/audio.mp3",
    spotifyUrl: "https://open.spotify.com/track/...",
    youtubeUrl: "https://www.youtube.com/watch?v=...",
    tidalUrl: "https://tidal.com/browse/track/...",
    deezerUrl: "https://www.deezer.com/track/..."
  },
  {
    title: "No Me Ruegues Amor",
    coverArt: "https://i.ytimg.com/vi/D4yudtWQH3g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdYR27dFt2epVdSA04lqXkhtyYDg",
    audioSrc: "https://ejemplo.com/ruta/a/audio.mp3",
    spotifyUrl: "https://open.spotify.com/track/...",
    youtubeUrl: "https://www.youtube.com/watch?v=...",
    tidalUrl: "https://tidal.com/browse/track/...",
    deezerUrl: "https://www.deezer.com/track/..."
  },
  {
    title: "No Me Ruegues Amor",
    coverArt: "https://i.ytimg.com/vi/D4yudtWQH3g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdYR27dFt2epVdSA04lqXkhtyYDg",
    audioSrc: "https://ejemplo.com/ruta/a/audio.mp3",
    spotifyUrl: "https://open.spotify.com/track/...",
    youtubeUrl: "https://www.youtube.com/watch?v=...",
    tidalUrl: "https://tidal.com/browse/track/...",
    deezerUrl: "https://www.deezer.com/track/..."
  },
  {
    title: "No Me Ruegues Amor",
    coverArt: "https://i.ytimg.com/vi/D4yudtWQH3g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdYR27dFt2epVdSA04lqXkhtyYDg",
    audioSrc: "https://ejemplo.com/ruta/a/audio.mp3",
    spotifyUrl: "https://open.spotify.com/track/...",
    youtubeUrl: "https://www.youtube.com/watch?v=...",
    tidalUrl: "https://tidal.com/browse/track/...",
    deezerUrl: "https://www.deezer.com/track/..."
  },
  // Añade más canciones aquí
];

export default function Home() {
  const songsWithArtist = songs.map(song => ({
    ...song,
    id: Math.random().toString(36).substr(2, 9),
    artist: "Alex Garzon",
    album: "Unknown Album",
    duration: 0
  }));

  return (
    <main>
      <VideoBanner />
      <MusicPlayer songs={songsWithArtist} />
      <UpcomingEvents />
      <GallerySection />
      <ContactSection />
    </main>
  );
}