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
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="flex justify-between items-center px-6 py-6 max-w-6xl mx-auto border-b border-white/5">
        <div className="text-2xl font-black text-green-500">$GRACE</div>
        <a href="https://x.com/graceonpons" target="_blank" className="text-sm border border-white/10 px-4 py-2 rounded-full">@graceonpons</a>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-4 pt-12 pb-20 max-w-4xl mx-auto">
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-8">
          <img src="/image_9.png.JPG" alt="Grace Banner" className="w-full h-auto" />
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase">The <span className="text-green-500">GOATest</span> Black Cat</h1>
        
        <div className="flex items-center justify-between bg-[#111] border border-white/10 rounded-2xl p-2 max-w-lg mx-auto mb-8">
            <span className="text-xs md:text-sm font-mono text-gray-400 px-3 truncate">{contractAddress}</span>
            <button onClick={copyToClipboard} className="bg-green-500 text-black font-extrabold px-4 py-2.5 rounded-xl text-sm">
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <div key={index} className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
              <img src={meme.src} alt={meme.title} className="w-full aspect-square object-cover" />
              <p className="p-4 text-center text-sm">{meme.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
