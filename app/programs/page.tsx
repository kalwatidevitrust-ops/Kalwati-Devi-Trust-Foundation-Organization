'use client'

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scissors, Briefcase, Laptop } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import prog1Img from '@/src/assets/images/regenerated_image_1778686695277.png';
import prog2Img from '@/src/assets/images/regenerated_image_1778686698625.png';
import prog3Img from '@/src/assets/images/regenerated_image_1778686701978.png';
import gallery1 from '@/src/assets/images/regenerated_image_1778753929204.png';
import gallery2 from '@/src/assets/images/regenerated_image_1778753933655.png';
import gallery3 from '@/src/assets/images/regenerated_image_1778753938127.png';
import gallery4 from '@/src/assets/images/regenerated_image_1778753941977.png';
import gallery5 from '@/src/assets/images/regenerated_image_1778753945120.png';
import gallery6 from '@/src/assets/images/regenerated_image_1778754302052.png';
import featuredImpactImg from '@/src/assets/images/regenerated_image_1778755373272.png';

export default function Programs() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:pt-48">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-serif italic text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Focused initiatives designed to provide practical skills and sustainable livelihood opportunities.
            </p>
          </div>
          <div className="grid gap-12">
            {[
              {
                title: 'Silai & Handicraft Training',
                desc: 'Comprehensive tailoring and embroidery classes. Women are taught everything from basic stitching to advanced garment creation, empowering them to take local orders and earn from home.',
                icon: Scissors,
                image: prog1Img,
                alt: 'Tailoring class'
              },
              {
                title: 'Rozgaar (Self Employment) Support',
                desc: 'Providing subsidized or free tools like sewing machines, raw materials, and market connections so trainees can instantly start their small businesses without upfront capital.',
                icon: Briefcase,
                image: prog2Img,
                alt: 'Handicraft production'
              },
              {
                title: 'Digital Learning for Girls',
                desc: 'Equipping the next generation with basic computer literacy, internet navigation skills, and digital communication tools to bridge the tech divide in rural areas.',
                icon: Laptop,
                image: prog3Img,
                alt: 'Digital literacy'
              }
            ].map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[48px] overflow-hidden flex flex-col items-stretch group hover:bg-white/10 transition-colors"
              >
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 shrink-0 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-lime-cta transition-colors">
                    <prog.icon className="w-10 h-10 text-lime-cta group-hover:text-brand-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif italic text-3xl font-bold mb-4">{prog.title}</h2>
                    <p className="text-white/60 mb-8 leading-relaxed text-lg">{prog.desc}</p>
                    <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10">
                      <Image 
                        src={prog.image}
                        alt={prog.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Gallery Section */}
          <div className="mt-40">
            <div className="text-center mb-16">
              <span className="text-lime-cta font-mono text-sm tracking-widest uppercase mb-4 block">Our Journey</span>
              <h2 className="font-serif italic text-4xl md:text-5xl font-bold mb-6">Impact Gallery</h2>
              <p className="text-lg text-white/50 max-w-xl mx-auto">
                Capturing moments of growth, resilience, and community empowerment from our field operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
              {[
                {
                  src: gallery1,
                  alt: "Community registration camp",
                  span: "md:col-span-2 md:row-span-2"
                },
                {
                  src: gallery2,
                  alt: "Happy children support",
                  span: "md:col-span-1 md:row-span-1"
                },
                {
                  src: gallery3,
                  alt: "Indian handicraft detail",
                  span: "md:col-span-1 md:row-span-1"
                },
                {
                  src: gallery4,
                  alt: "Vocational skills",
                  span: "md:col-span-1 md:row-span-2"
                },
                {
                  src: gallery5,
                  alt: "Team collaboration",
                  span: "md:col-span-1 md:row-span-1"
                },
                {
                  src: gallery6,
                  alt: "Tree plantation drive",
                  span: "md:col-span-1 md:row-span-1"
                }
              ].map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-[32px] overflow-hidden border border-white/10 ${img.span}`}
                >
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* New Featured Impact Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mt-40 relative rounded-[48px] overflow-hidden group min-h-[500px] flex items-center justify-center text-center p-8 border border-white/10 shadow-2xl"
          >
            <Image 
              src={featuredImpactImg}
              alt="Community building and impact"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-lime-cta/15 mix-blend-color z-[5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent z-[6]" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-lime-cta text-brand-900 font-bold text-xs uppercase tracking-widest mb-6">
                Featured Impact
              </span>
              <h2 className="font-serif italic text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                "Hamara lakshya hai har mahila ko aatmanirbhar banana."
              </h2>
              <p className="text-xl text-white/80 font-medium">
                Our mission is to make every woman self-reliant through skill-building and unwavering support.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

