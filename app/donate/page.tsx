import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Heart } from 'lucide-react';

export default function Donate() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:pt-48 flex items-center justify-center">
        <div className="max-w-xl w-full text-center">
          
          {/* Donation card removed as requested */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
