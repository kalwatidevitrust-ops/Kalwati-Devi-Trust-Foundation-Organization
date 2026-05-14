import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D5C4A] text-white p-6">
      <div className="text-center">
        <h1 className="font-serif italic text-6xl md:text-8xl font-bold mb-4 text-lime-cta">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8 uppercase tracking-widest">Page Not Found</h2>
        <p className="text-white/60 mb-12 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-8 py-4 rounded-full bg-lime-cta text-brand-900 font-bold hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
