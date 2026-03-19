import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-sand-50 px-4">
      <div className="text-center">
        <span className="text-7xl block mb-6">🏖️</span>
        <h1 className="font-display text-4xl text-marsh-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-marsh-500 mb-8 max-w-md mx-auto">Looks like this page wandered off to the beach.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-coral-500 text-white font-bold rounded-xl">Go Home 🏠</Link>
          <Link href="/playgrounds" className="px-6 py-3 bg-white border-2 border-marsh-200 text-marsh-700 font-bold rounded-xl">Playgrounds 🗺️</Link>
        </div>
      </div>
    </section>
  );
}
