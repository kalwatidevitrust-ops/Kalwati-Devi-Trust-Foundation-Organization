'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D5C4A] text-white p-6">
      <div className="text-center">
        <h1 className="font-serif italic text-4xl md:text-5xl font-bold mb-6">Something went wrong!</h1>
        <p className="text-white/60 mb-12 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-4 rounded-full bg-lime-cta text-brand-900 font-bold hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
