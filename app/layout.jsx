import './globals.css';
import Link from 'next/link';
import NavClient from '@/components/NavClient';

export const metadata = {
  title: 'Charleston Playgrounds — Parks, Beaches, Activities & Family Guide',
  description: 'Discover playgrounds, beaches, activities, park passes, libraries & more for families in Charleston, SC. Curated by local parents.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-sand-50">
        <NavClient />
        <main className="flex-1">{children}</main>
        <footer className="bg-marsh-800 text-marsh-200 py-12 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌴</span>
                <span className="font-display text-lg text-sand-100">Charleston <span className="font-accent text-coral-400">Playgrounds</span></span>
              </Link>
              <p className="text-sm text-marsh-300 leading-relaxed">A local parent's guide to play spots, beaches, activities & family resources in the Holy City.</p>
            </div>
            <div>
              <h4 className="font-display text-xs text-sand-300 uppercase tracking-widest mb-3">Explore</h4>
              {['playgrounds','beaches','activities','passes','libraries','community','tips'].map(p=>(
                <div key={p}><Link href={`/${p}`} className="text-sm text-marsh-300 hover:text-sand-100 transition-colors">{p.charAt(0).toUpperCase()+p.slice(1)}</Link></div>
              ))}
            </div>
            <div>
              <h4 className="font-display text-xs text-sand-300 uppercase tracking-widest mb-3">Stay in the Loop</h4>
              <p className="text-sm text-marsh-300 mb-3">Updates on new playgrounds, events & family fun.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="your@email.com" className="flex-1 px-3 py-2 bg-marsh-700 border border-marsh-600 rounded-lg text-sm text-sand-100 placeholder:text-marsh-400 outline-none" />
                <button className="px-4 py-2 bg-coral-500 text-white text-sm font-bold rounded-lg">Go</button>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-marsh-700 flex flex-wrap justify-between gap-2">
            <span className="text-xs text-marsh-300">© 2026 Charleston Playgrounds. Made with 🤍 in the Lowcountry.</span>
            <span className="text-xs text-marsh-500">Not affiliated with Charleston County Parks & Recreation.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
