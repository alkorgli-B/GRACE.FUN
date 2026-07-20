'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Copy, Check, ExternalLink, Rocket } from 'lucide-react';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0xf05bAbB8172beA20E974B458C593399bE11250DD"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // مصفوفة الصور الخاصة بـ Grace التي قمت برفعها
  const memes = [
    { src: '/image.png', title: 'Grace the Boss' },
    { src: '/image_2.png', title: 'Grace on the Yacht' },
    { src: '/image_3.png', title: 'Grace Watching TV' },
    { src: '/image_4.png', title: 'Grace the Warrior' },
    { src: '/image_5.png', title: 'Grace on Fire' },
    { src: '/image_6.png', title: 'Grace Straw Hat' },
    { src: '/image_7.png', title: 'Grace the Chef' },
    { src: '/image_8.png', title: 'Grace Close-up' },
    { src: '/image_10.png', title: 'Grace & Friends' },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto border-b border-white/5">
        <div className="text-2xl font-black italic tracking-tighter text-green-500">$GRACE</div>
        <a 
          href="https://x.com/graceonpons" 
          target="_blank" 
          rel="noreferrer" 
          className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition text-sm"
        >
          <Twitter size={14} className="fill-current" /> @graceonpons
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 max-w-4xl mx-auto">
        {/* البانر الرئيسي (الصورة رقم 9) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl overflow-hidden border border-white/10 mb-8 shadow-2xl shadow-green-500/5"
        >
          <img 
            src="/image_9.png" 
            alt="Grace Banner" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tight leading-none">
            The <span className="text-green-500">GOATest</span> <br />Black Cat On Pons
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8">
            Not everyone will clap when you win. But $GRACE is leading the family.
          </p>

          {/* CA Box */}
          <div className="flex items-center justify-between bg-[#111] border border-white/10 rounded-2xl p-2 max-w-lg mx-auto mb-8 hover:border-green-500/40 transition">
            <span className="text-xs md:text-sm font-mono text-gray-400 px-3 truncate">{contractAddress}</span>
            <button 
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-400 text-black font-extrabold px-4 py-2.5 rounded-xl flex items-center gap-2 transition text-sm"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          {/* Action Button */}
          <a 
            href="https://ponsfamily.com/launchpad/0xf05bAbB8172beA20E974B458C593399bE11250DD" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-black px-8 py-4 rounded-xl text-lg hover:bg-green-400 transition transform hover:scale-102 active:scale-98 shadow-xl"
          >
            <Rocket size={20} /> Buy on Pons Launchpad <ExternalLink size={16} />
          </a>
        </motion.div>
      </section>

      {/* Memes Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-white/5">
        <h2 className="text-2xl md:text-4xl font-black text-center mb-12 uppercase tracking-tight">
          <span className="text-green-500">Grace</span> Multiverse Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <motion.div 
              key={index}
              className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden group hover:border-green-500/30 transition"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-square w-full overflow-hidden bg-neutral-900 relative">
                <img 
                  src={meme.src} 
                  alt={meme.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center border-t border-white/5">
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition">{meme.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-600 text-xs border-t border-white/5 tracking-wider uppercase">
        © 2026 $GRACE Clan. Built for the Pons Family.
      </footer>

    </main>
  );
}
