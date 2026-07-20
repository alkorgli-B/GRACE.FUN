'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Rocket, Twitter } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const contractAddress = "0xf05bAbB8172beA20E974B458C593399bE11250DD"; 

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

    const memes = [
    { src: '/image.png.PNG', title: 'Grace the Boss' },
    { src: '/image_2.png.JPG', title: 'Grace on the Yacht' },
    { src: '/image_3.png.JPG', title: 'Grace Watching TV' },
    { src: '/image_4.png.PNG', title: 'Grace the Warrior' },
    { src: '/image_5.png.PNG', title: 'Grace on Fire' },
    { src: '/image_6.png.PNG', title: 'Grace Straw Hat' },
    { src: '/image_7.png.JPG', title: 'Grace the Chef' }, 
    { src: '/image_8.png.PNG', title: 'Grace Close-up' },
    { src: '/image_10.png.JPG', title: 'Grace & Friends' },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      <audio ref={audioRef} src="/music.mp3" loop />
      
      <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto">
        <div className="text-2xl font-black uppercase bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 bg-clip-text text-transparent">
          $GRACE
        </div>
        <div className="flex items-center gap-4">
          <a href="https://x.com/graceonpons?s=21" target="_blank" className="p-2 border border-white/10 rounded-full hover:bg-white/10">
            <Twitter size={18} />
          </a>
          <button onClick={toggleMusic} className="p-2 border border-white/10 rounded-full hover:bg-white/10">
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 mb-8 shadow-[0_0_50px_-12px_rgba(34,197,94,0.3)]">
          <img src="/image_9.png.JPG" alt="Banner" className="w-full h-auto" />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black uppercase mb-2 tracking-tighter">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            $GRACE
          </span>
        </h1>
        <p className="text-xl md:text-3xl font-medium italic text-white/90 mb-8">The GOATest black cat on the internet</p>

        <a href="https://ponsfamily.com/launchpad/0xf05bAbB8172beA20E974B458C593399bE11250DD" target="_blank" className="flex items-center gap-2 bg-white text-black font-black px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-transform mb-6">
          <Rocket size={20} /> Buy on Pons Launchpad
        </a>

        <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-2xl p-2 max-w-md w-full">
            <span className="text-xs font-mono text-gray-400 px-3 truncate">{contractAddress}</span>
            <button onClick={() => {navigator.clipboard.writeText(contractAddress); setCopied(true);}} className="bg-green-500 text-black font-bold px-4 py-2 rounded-xl text-sm">
                {copied ? "Copied!" : "Copy CA"}
            </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {memes.map((m, i) => (
            <motion.div whileHover={{ scale: 1.05 }} key={i} className="bg-[#111] border border-white/5 rounded-2xl p-2">
              <img src={m.src} alt={m.title} className="w-full aspect-square object-cover rounded-xl" />
              <p className="text-center py-2 text-xs text-gray-400">{m.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 text-sm border-t border-white/5">
        <p>© 2026 $GRACE CLAN. BUILT FOR THE PONS FAMILY.</p>
        <p className="mt-2 text-gray-600 font-bold">Design by Bader</p>
      </footer>
    </main>
  );
}
