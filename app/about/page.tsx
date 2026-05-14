'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CheckCircle2, Award, Users, Target } from 'lucide-react';
import Image from 'next/image';
import cert12A from '@/src/assets/images/regenerated_image_1778682831298.png';
import cert80G from '@/src/assets/images/regenerated_image_1778683725128.png';
import darpanCert from '@/src/assets/images/regenerated_image_1778683408039.jpg';
import csrCert from '@/src/assets/images/regenerated_image_1778684037119.png';
import missionImg from '@/src/assets/images/regenerated_image_1778690949754.png';
import memberManjeet from '@/src/assets/images/regenerated_image_1778756456008.png';

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'certificates' | 'members'>('mission');

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:pt-48">
        <div className="max-w-5xl mx-auto">
          <div className="text-center border-b border-white/10 pb-16 mb-16">
            <h1 className="font-serif italic text-5xl md:text-6xl font-bold mb-6">Our Kahani</h1>
            <p className="text-xl text-white/70 leading-relaxed font-light">
              Founded on the belief that empowering a woman empowers an entire community. <br className="hidden md:block"/> Kalwati Devi Trust Foundation is dedicated to bringing real change at the grassroots level.
            </p>
          </div>

          {/* Subtabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all flex items-center gap-2 ${
                activeTab === 'mission'
                  ? 'bg-lime-cta text-brand-900 shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Target className="w-4 h-4" />
              Mission & Vision
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all flex items-center gap-2 ${
                activeTab === 'certificates'
                  ? 'bg-lime-cta text-brand-900 shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Award className="w-4 h-4" />
              Certificates
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all flex items-center gap-2 ${
                activeTab === 'members'
                  ? 'bg-lime-cta text-brand-900 shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              Members
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'mission' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-2 gap-16 mb-24">
                  <div className="space-y-8">
                    <div className="relative aspect-video w-full rounded-[32px] overflow-hidden border border-white/10 group shadow-2xl">
                      <Image 
                        src={missionImg}
                        alt="Empowered Woman Working"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h2 className="font-serif italic text-3xl font-bold text-lime-cta mb-4">Our Mission</h2>
                      <p className="text-lg text-white/80 leading-relaxed">
                        To provide rural and semi-urban Indian women with the skills, resources, and confidence needed to become self-reliant. Hamara lakshya hai har mahila ko aatmanirbhar banana.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif italic text-3xl font-bold text-lime-cta mb-4">Our Vision</h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                      A society where every woman has equal access to livelihood opportunities, education, and the power to make her own financial decisions. 
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-[48px] p-10 md:p-16 border border-white/10">
                  <h2 className="font-serif italic text-4xl font-bold mb-10 text-center">Core Values</h2>
                  <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { title: 'Sashaktikaran (Empowerment)', desc: 'Not just help, but the tools to grow independently.' },
                      { title: 'Samanta (Equality)', desc: 'Equal access to resources and opportunities for every woman.' },
                      { title: 'Nishtha (Dedication)', desc: 'Unwavering commitment to community development.' },
                      { title: 'Sahyog (Collaboration)', desc: 'Working together with society to create lasting impact.' },
                    ].map((val, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="w-8 h-8 text-lime-cta shrink-0" />
                        <div>
                          <h3 className="font-bold text-xl mb-2">{val.title}</h3>
                          <p className="text-white/60">{val.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                <h2 className="font-serif italic text-4xl font-bold mb-10">Our Accreditations</h2>
                <div className="grid md:grid-cols-2 gap-8 lg:px-12">
                  <div className="bg-white/5 rounded-[32px] p-8 border border-white/10 flex flex-col items-center text-center">
                    <a 
                      href="https://drive.google.com/drive/folders/1D58qwm2Lp7fRsZ9rEzCWyG6BDonvSDtc?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10 hover:border-lime-cta/50 transition-colors cursor-pointer block group"
                    >
                      <Image 
                        src={cert80G}
                        alt="80G Certificate Document"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                    <Award className="w-12 h-12 text-lime-cta mb-4 flex-shrink-0" />
                    <h3 className="text-2xl font-bold mb-4">80G Certified</h3>
                  </div>
                  <div className="bg-white/5 rounded-[32px] p-8 border border-white/10 flex flex-col items-center text-center">
                    <a 
                      href="https://drive.google.com/drive/folders/1D58qwm2Lp7fRsZ9rEzCWyG6BDonvSDtc?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10 hover:border-lime-cta/50 transition-colors cursor-pointer block group"
                    >
                      <Image 
                        src={cert12A}
                        alt="12A Certificate Document"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                    <Award className="w-12 h-12 text-lime-cta mb-4 flex-shrink-0" />
                    <h3 className="text-2xl font-bold mb-4">12A Registered</h3>
                  </div>
                  <div className="bg-white/5 rounded-[32px] p-8 border border-white/10 flex flex-col items-center text-center">
                    <a 
                      href="https://drive.google.com/drive/folders/1-etnPPppBcZyLY7JQPHKlb0wk_coaFYE?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10 hover:border-lime-cta/50 transition-colors cursor-pointer block group"
                    >
                      <Image 
                        src={csrCert}
                        alt="CSR Registration Document"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                    <Award className="w-12 h-12 text-lime-cta mb-4 flex-shrink-0" />
                    <h3 className="text-2xl font-bold mb-4">Society Registration Certificate</h3>
                  </div>
                  <div className="bg-white/5 rounded-[32px] p-8 border border-white/10 flex flex-col items-center text-center">
                    <a 
                      href={darpanCert.src} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-white/10 hover:border-lime-cta/50 transition-colors cursor-pointer block group"
                    >
                      <Image 
                        src={darpanCert}
                        alt="NGO Darpan Certificate"
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                    <Award className="w-12 h-12 text-lime-cta mb-4 flex-shrink-0" />
                    <h3 className="text-2xl font-bold mb-4">KDTF PAN registration</h3>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'members' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                <h2 className="font-serif italic text-4xl font-bold mb-10">Our Core Team</h2>
                <p className="text-lg text-white/70 mb-16 max-w-2xl mx-auto">
                  A dedicated group of individuals working tirelessly towards the upliftment of women in rural areas.
                </p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "MR. MANJEET PAL", role: "Social Worker & Chairman", desc: "S/o: Shri. SURESH PAL, R/o: Shaheed Bhagat Singh Colony, Dehradun, Raipur, Chakrata Dehradun, Uttarakhand-248008." },
                    { name: "MR. BALWANT CHAUHAN", role: "Social Worker & Treasurer", desc: "S/o: Sh. MURTI CHAUHAN, R/o: House No. 58/4, Village Kistud, Tehsil Tyuni, Post Kirad, Kirsali, Dehradun, Uttarakhand-248001." },
                    { name: "MR. ARUN PAL", role: "Social Worker & Gen. Secretary", desc: "S/o: Sh. SURESH PAL, R/o: Shaheed Bhagat Singh Colony, Tapovan, Adhoiwala, Dehradun, Uttarakhand-248001." },
                  ].map((member, i) => (
                    <div key={i} className="bg-white/5 rounded-[32px] p-8 border border-white/10 text-left">
                      {member.name === "MR. MANJEET PAL" ? (
                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-lime-cta/30 mb-8 relative shadow-xl">
                        <Image 
                          src={memberManjeet}
                          alt={member.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center mb-6">
                        <Users className="w-8 h-8 text-white/50" />
                      </div>
                    )}
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-lime-cta font-medium text-sm uppercase tracking-wide mb-4">{member.role}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{member.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
