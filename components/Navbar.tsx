'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '@/src/assets/images/regenerated_image_1778676211432.png';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(13, 92, 74, 0)', 'rgba(13, 92, 74, 0.85)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter, borderBottomColor: headerBorder }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-lime-cta flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(163,230,53,0.4)] transition-shadow">
            <Image 
              src={logoImage}
              alt="Kalwati Devi Trust Foundation Logo"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-lg md:text-xl font-semibold tracking-tight uppercase">Kalwati Devi Trust Foundation</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-sm font-medium opacity-80">
            <Link href="/about" className="hover:opacity-100 transition-opacity">About</Link>
            <Link href="/programs" className="hover:opacity-100 transition-opacity">Programs</Link>
            <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
          
          <Link 
            href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-cta text-brand-900 px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_15px_rgba(163,230,53,0.4)] transition-shadow"
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-brand-900/95 backdrop-blur-xl border-t border-white/10"
      >
        <nav className="flex flex-col p-6 gap-4">
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-lg font-medium">About</Link>
          <Link href="/programs" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Programs</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Contact</Link>
          <Link 
            href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="bg-lime-cta text-brand-900 px-6 py-3 rounded-full font-bold text-center mt-2"
          >
            Donate Now
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
