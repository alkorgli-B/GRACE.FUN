'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Rocket, Copy, Check, Star, Code2 } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const contractAddress = "0xf05bAbB8172beA20E974B458C593399bE11250DD"; 

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // قائمة جميع الصور الخاصة بك بالكامل دون نقصان
  const memes = [
    { src: '/image.png.PNG', title: 'Grace the Boss' },
    { src: '/image_2.png.JPG', title: 'Grace on the Yacht' },
    { src: '/image_3.png.JPG', title: 'Grace Watching TV' },
    { src: '/image_4.png.PNG', title: 'Grace the Warrior' },
    { src: '/image_5.png.PNG', title: 'Grace on Fire' },
    { src: '/image_6.png.PNG', title: 'Grace Straw Hat' },
    { src: '/image_7.png.PNG', title: 'Grace the Chef' },
    { src: '/image_8.png.PNG', title: 'Grace Close-up' },
    { src: '/image_10.png.JPG', title: 'Grace & Friends' },
  ];

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-green-500 selection:text-black overflow-x-hidden font-sans">
      <audio ref={audioRef} src="/music.mp3" loop />
      
      {/* خلفية ديناميكية فاخرة */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* شريط التنقل العلوي */}
        <nav className="flex justify-between items-center py-8">
          <div className="text-2xl font-black italic tracking-tighter text-green-400">
            $GRACE
          </div>
          <button 
            onClick={toggleMusic} 
            className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            {isPlaying ? <Volume2 size={18} className="text-green-400" /> : <VolumeX size={18} />}
            <span className="text-xs uppercase font-bold tracking-wider">{isPlaying ? "Sound On" : "Play Music"}</span>
          </button>
        </nav>

        {/* القسم الرئيسي (Hero Section) */}
        <header className="flex flex-col items-center text-center py-12">
          <div className="w-full max-w-2xl mb-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_-20px_rgba(34,197,94,0.4)]">
            <img src="/image_9.png.JPG" alt="GRACE Banner" className="w-full h-auto object-cover" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase mb-3 tracking-tighter">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              $GRACE
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl font-medium italic text-gray-300 mb-8">
            The GOATest black cat on the internet
          </p>

          {/* زر الشراء */}
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            href="https://pons.link/launchpad" 
            target="_blank"
            className="flex items-center gap-3 bg-white text-black font-black px-8 py-4 rounded-2xl text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-8"
          >
            <Rocket size={20} /> Buy on Pons Launchpad
          </motion.a>

          {/* صندوق نسخ عنوان العقد (CA) */}
          <div 
            className="flex items-center justify-between gap-4 bg-[#0a0a0a] border border-white/10 p-3 rounded-2xl max-w-md w-full cursor-pointer hover:border-green-500 transition-colors" 
            onClick={() => {
              navigator.clipboard.writeText(contractAddress); 
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <span className="font-mono text-xs text-gray-400 truncate px-2">{contractAddress}</span>
            <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1">
              {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy CA</>}
            </button>
          </div>
        </header>

        {/* معرض الصور بالكامل (Memes Gallery) */}
        <section className="py-12 border-t border-white/5">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-10 uppercase tracking-wider text-green-400">
            The Grace Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {memes.map((m, i) => (
              <motion.div 
                whileHover={{ y: -8 }} 
                key={i} 
                className="bg-[#111] border border-white/5 rounded-2xl p-3 shadow-xl overflow-hidden group"
              >
                <div className="overflow-hidden rounded-xl aspect-square mb-3">
                  <img src={m.src} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-center py-2 text-sm font-bold text-gray-300">{m.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* التوقيع الاحترافي وخاتمة الموقع */}
        <footer className="py-16 border-t border-white/5 mt-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-yellow-500" size={16} fill="currentColor" />
            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">2026 $GRACE CLAN. BUILT FOR THE PONS FAMILY.</span>
          </div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Code2 size={16} className="text-green-500" />
            <span className="text-xs uppercase tracking-tighter text-gray-400">
              Designed & Developed with precision by <span className="text-white font-black italic">Bader</span>
            </span>
          </motion.div>
        </footer>

      </div>
    </main>
  );
}
