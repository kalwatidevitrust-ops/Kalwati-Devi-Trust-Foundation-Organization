'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D5C4A] text-white flex items-center justify-center min-h-screen">
        <div className="text-center p-6">
          <h2 className="text-3xl font-bold mb-4 font-serif italic">Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className="mt-4 px-8 py-4 bg-lime-cta text-brand-900 rounded-full font-bold shadow-lg"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
