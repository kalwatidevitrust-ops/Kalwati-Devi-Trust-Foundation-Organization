import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import logoImage from '@/src/assets/images/regenerated_image_1778676211432.png';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 px-6 pb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
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
          <p className="text-white/70 max-w-sm mb-6 leading-relaxed">
            Empowering women across India through skill development, self-employment, and resource support. Parivartan ki shuruaat aapse.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 text-lime-cta tracking-wide uppercase text-sm">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/about" className="text-white/70 hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/programs" className="text-white/70 hover:text-white transition-colors">Programs</Link></li>
            <li><Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 text-lime-cta tracking-wide uppercase text-sm">Reach Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-lime-cta opacity-80" />
              <span>Head Office Address<br />R-47, A VANI VIHAR UTTAM NAGAR<br />DELHI-110059</span>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-lime-cta opacity-80" />
              <span>Sub Office Address<br />Thapa Colony, Near Khatu Shyam Mandir<br />Selaqui, Dehradun – 248197<br />Uttarakhand, India</span>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Phone className="w-5 h-5 shrink-0 text-lime-cta opacity-80" />
              <span>+91 7017193523</span>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="w-5 h-5 shrink-0 text-lime-cta opacity-80" />
              <span>kalwatidevitrust@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
