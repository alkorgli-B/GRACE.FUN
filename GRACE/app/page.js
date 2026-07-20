'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Rocket, Copy, Check, Star, Code2 } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const contractAddress = "0xf05bAbB8172beA20E974B458C593399bE11250DD"; 

  const toggleMusic = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-green-500 selection:text-black overflow-x-hidden">
      <audio ref={audioRef} src="/music.mp3" loop />
      
      {/* Dynamic Background Effect */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Modern Header */}
        <nav className="flex justify-between items-center py-8">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-black italic tracking-tighter text-green-400">
            $GRACE
          </motion.div>
          <motion.button whileHover={{ scale: 1.1 }} onClick={toggleMusic} className="p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </motion.button>
        </nav>

        {/* Hero Section - Viral Design */}
        <header className="flex flex-col items-center text-center py-16">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-xl mb-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(34,197,94,0.4)]">
            <img src="/image_9.png.JPG" alt="GRACE" className="w-full hover:scale-105 transition-transform duration-700" />
          </motion.div>

          <motion.h1 initial={{ y: 20 }} animate={{ y: 0 }} className="text-6xl md:text-9xl font-black uppercase mb-4 tracking-tighter">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              $GRACE
            </span>
          </motion.h1>
          
          <p className="text-xl md:text-4xl font-light italic text-gray-300 mb-10">The GOATest black cat on the internet</p>

          <motion.a whileHover={{ scale: 1.05 }} href="https://pons.link/launchpad" className="flex items-center gap-3 bg-white text-black font-black px-10 py-5 rounded-full text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-8">
            <Rocket /> Buy on Pons Launchpad
          </motion.a>

          <div className="flex items-center gap-4 bg-[#0a0a0a] border border-white/10 p-3 rounded-2xl cursor-pointer hover:border-green-500 transition-colors" onClick={() => {navigator.clipboard.writeText(contractAddress); setCopied(true);}}>
            <span className="font-mono text-sm px-2 text-gray-400 truncate max-w-[200px]">{contractAddress}</span>
            {copied ? <Check className="text-green-500" /> : <Copy size={16} />}
          </div>
        </header>

        {/* Footer with Professional Dev Signature */}
        <footer className="py-20 border-t border-white/5 mt-10 text-center">
          <div className="flex justify-center gap-2 mb-6">
            <Star className="text-yellow-500" fill="currentColor" />
            <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">2026 $GRACE CLAN</span>
          </div>
          
          <motion.div whileHover={{ y: -5 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <Code2 size={16} className="text-green-500" />
            <span className="text-xs uppercase tracking-tighter text-gray-400">
              Crafted with perfection by <span className="text-white font-black italic">Bader</span>
            </span>
          </motion.div>
        </footer>
      </div>
    </main>
  );
}
