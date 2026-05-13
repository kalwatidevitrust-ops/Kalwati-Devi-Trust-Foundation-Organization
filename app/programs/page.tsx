import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Scissors, Briefcase, Laptop } from 'lucide-react';
import Image from 'next/image';
import prog1Img from '@/src/assets/images/regenerated_image_1778686695277.png';
import prog2Img from '@/src/assets/images/regenerated_image_1778686698625.png';
import prog3Img from '@/src/assets/images/regenerated_image_1778686701978.png';

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
              <div key={i} className="bg-white/5 border border-white/10 rounded-[48px] overflow-hidden flex flex-col items-stretch group hover:bg-white/10 transition-colors">
                <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 shrink-0 rounded-3xl bg-white/10 flex items-center justify-center group-hover:bg-lime-cta transition-colors">
                    <prog.icon className="w-10 h-10 text-lime-cta group-hover:text-brand-900" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif italic text-3xl font-bold mb-4">{prog.title}</h2>
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
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
