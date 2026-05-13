'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:pt-48">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center">
            <h1 className="font-serif italic text-5xl md:text-6xl font-bold mb-6">Judiye Hamare Saath</h1>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Have questions or want to support our mission? We’d love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-colors">
                <Phone className="w-10 h-10 text-lime-cta" />
                <div>
                  <span className="block text-sm text-white/50 mb-1">Call Us</span>
                  <span className="text-xl font-bold font-serif">+91 7017193523</span>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-colors">
                <Mail className="w-10 h-10 text-lime-cta" />
                <div>
                  <span className="block text-sm text-white/50 mb-1">Email Us</span>
                  <span className="text-xl font-bold font-serif break-all">kalwatidevitrust@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-colors">
                <MapPin className="w-10 h-10 shrink-0 text-lime-cta" />
                <div>
                  <span className="block text-sm text-white/50 mb-1">Head Office Address</span>
                  <span className="text-lg font-medium">R-47, A VANI VIHAR UTTAM NAGAR<br/>DELHI-110059</span>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-colors">
                <MapPin className="w-10 h-10 shrink-0 text-lime-cta" />
                <div>
                  <span className="block text-sm text-white/50 mb-1">Sub Office Address</span>
                  <span className="text-lg font-medium leading-relaxed">Thapa Colony, Near Khatu Shyam Mandir<br/>Selaqui, Dehradun – 248197<br/>Uttarakhand, India</span>
                </div>
              </div>
            </div>
          </div>



        </div>
      </main>

      <Footer />
    </div>
  );
}
