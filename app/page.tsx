'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, CheckCircle2, HeartHandshake, Scissors, GraduationCap, Users, Heart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import aboutImage from '@/src/assets/images/regenerated_image_1778677918564.png';
import heroImage from '@/src/assets/images/regenerated_image_1778677325264.png';
import storiesImage from '@/src/assets/images/regenerated_image_1778677922006.png';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-transparent selection:bg-lime-cta selection:text-brand-900">
      <Navbar />

      {/* 🌟 HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Abstract shapes for background depth */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#146e5a] to-transparent opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-lime-cta animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-white/90">Kalwati Devi Trust Foundation</span>
            </div>
            
            <h1 className="font-serif italic text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Empowering Women <br className="hidden lg:block"/>Through <span className="text-lime-cta underline underline-offset-8">Skills</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl pr-12">
              KDTF supports women across rural India by providing skill training, financial resources, and sustainable opportunities to grow independently.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 w-full">
              <Link 
                href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-cta hover:bg-lime-cta-hover text-brand-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:-translate-y-1 flex items-center gap-2"
              >
                <HeartHandshake className="w-5 h-5" />
                Donate Now
              </Link>
              <Link 
                href="/about" 
                className="bg-white/5 hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-medium text-lg transition-all flex items-center gap-2"
              >
                Join the Mission
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8 flex items-center opacity-60 italic text-sm">
              <p>“Every woman deserves the chance to stand on her own feet.”</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full"
          >
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-[48px] overflow-hidden border border-white/10 shadow-2xl bg-brand-dark">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent z-10" />
              <motion.div style={{ y: heroY }} className="absolute inset-0 h-[120%] -top-[10%]">
                <Image 
                  src={heroImage}
                  alt="Indian women learning stitching and working together"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-4 border-white/5 rounded-full z-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💡 ABOUT US SECTION */}
      <section className="py-32 px-6 relative z-20 border-y border-white/5 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[48px] overflow-hidden border border-white/10"
          >
            <Image 
              src={aboutImage}
              alt="Portrait of an Indian woman"
              fill
              className="object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lime-cta uppercase tracking-widest text-sm font-bold mb-4">About Us</p>
            <h2 className="font-serif italic text-4xl md:text-5xl font-bold mb-8">Seva se Sashaktikaran tak</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light mb-10">
              <p>
                Founded on the belief that empowering a woman empowers an entire community, Kalwati Devi Trust Foundation is dedicated to bringing real change at the grassroots level.
              </p>
              <p>
                We believe that true empowerment begins with financial independence. By teaching skills, providing materials, and supporting grassroots enterprises, we are helping women across rural India build their own sustainable futures.
              </p>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-lime-cta font-bold text-lg hover:text-white transition-colors group"
            >
              Hamari Kahani
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🧩 WHAT WE DO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif italic text-4xl md:text-5xl font-bold mb-4">How We Help</h2>
            <p className="text-lg text-white/60 max-w-2xl">Practical, structured, and community-driven initiatives designed to generate real rural and semi-urban employment.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Skill Training',
                desc: 'Silai, Kadai, and traditional handicraft techniques.',
                icon: Scissors,
              },
              {
                title: 'Rozgaar Support',
                desc: 'Connecting trained women with active markets.',
                icon: CheckCircle2,
              },
              {
                title: 'Samagri Sahayata',
                desc: 'Providing sewing machines and essential toolkits.',
                icon: HeartHandshake,
              },
              {
                title: 'Vikas Programs',
                desc: 'Financial literacy and leadership for Mahilayein.',
                icon: Users,
              }
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white/5 border border-white/10 rounded-[32px] p-6 hover:bg-white/10 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-brand-800 flex items-center justify-center mb-6 opacity-80">
                  <item.icon className="w-5 h-5 text-lime-cta" />
                </div>
                <h4 className="text-lime-cta text-sm font-bold uppercase mb-2">0{i + 1}. {item.title}</h4>
                <p className="text-sm opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ❤️ STORIES SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-[48px] overflow-hidden border border-white/10">
            <Image 
              src={storiesImage}
              alt="Confident Indian woman running her own business"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent pointer-events-none" />
          </div>
          <div>
            <Heart className="w-12 h-12 text-lime-cta mb-8" />
            <blockquote className="font-serif italic text-4xl lg:text-5xl leading-tight mb-8">
              &quot;Pehle ghar tak seemit thi, aaj apna kaam chala rahi hoon.&quot;
            </blockquote>
            <p className="text-xl text-white/70 mb-8 font-light">
              &quot;Before joining KDTF, I didn&apos;t know I could earn for my family. The silai training gave me a skill, and the machine they provided gave me a business. Now, my daughters go to school because of my income.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 📣 CTA SECTION */}
      <section className="py-32 px-6 relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif italic text-5xl md:text-6xl font-bold mb-8">Aapka sahyog kisi ki zindagi badal sakta hai</h2>
          <p className="text-2xl text-white/80 mb-12 font-light">
            Whether you donate materials, funds, or your time, your contribution directly empowers a woman to stand on her own feet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-cta hover:bg-lime-cta-hover text-brand-900 px-10 py-5 rounded-full font-bold text-xl transition-all hover:shadow-[0_0_40px_rgba(163,230,53,0.5)] flex items-center justify-center w-full sm:w-auto"
            >
              Donate Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/5 border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full font-medium text-xl transition-all w-full sm:w-auto flex items-center justify-center"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
