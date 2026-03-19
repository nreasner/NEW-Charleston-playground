import Link from 'next/link';
import { playgrounds, beaches, activities, passes } from '@/lib/data';

export default function Home() {
  const featured = playgrounds.filter(p=>p.rating===5);
  return (<>
    <section className="relative bg-gradient-to-br from-ocean-100 via-sand-50 to-marsh-100 py-16 sm:py-24 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="font-accent text-2xl sm:text-3xl text-coral-500 mb-2">Your family's guide to</p>
        <h1 className="font-display text-5xl sm:text-7xl text-marsh-900 leading-[0.95] mb-4">Charleston<br/><span className="text-ocean-600">Playgrounds</span></h1>
        <p className="text-lg text-marsh-600 max-w-xl mb-8 leading-relaxed">{playgrounds.length} playgrounds, {beaches.length} beaches, {activities.length}+ activities, park passes, library resources & more — curated by local parents.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/playgrounds" className="px-7 py-3.5 bg-coral-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all">Explore Parks 🗺️</Link>
          <Link href="/beaches" className="px-7 py-3.5 bg-white/70 text-marsh-700 font-bold text-lg rounded-2xl border-2 border-marsh-200 hover:-translate-y-0.5 transition-all">Beaches 🏖️</Link>
          <Link href="/passes" className="px-7 py-3.5 bg-white/70 text-marsh-700 font-bold text-lg rounded-2xl border-2 border-marsh-200 hover:-translate-y-0.5 transition-all">Free Passes 🏅</Link>
        </div>
        <div className="flex flex-wrap gap-8 mt-12">
          {[{n:playgrounds.length,l:'Playgrounds',e:'🛝'},{n:beaches.length,l:'Beaches',e:'🏖️'},{n:activities.length,l:'Activities',e:'🎯'},{n:passes.length,l:'Passes',e:'🏅'}].map(s=>(
            <div key={s.l} className="flex items-center gap-3"><span className="text-2xl">{s.e}</span><div><p className="font-display text-2xl text-marsh-800">{s.n}</p><p className="text-xs font-bold text-marsh-500 uppercase tracking-wider">{s.l}</p></div></div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 px-5 bg-sand-50">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1 text-center">Quick links</p>
        <h2 className="font-display text-3xl text-marsh-800 text-center mb-8">What Are You Looking For?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[{e:'🛝',l:'Playgrounds',h:'/playgrounds',bg:'from-marsh-50 to-palmetto-100'},{e:'🏖️',l:'Beaches',h:'/beaches',bg:'from-ocean-50 to-ocean-100'},{e:'🎯',l:'Activities',h:'/activities',bg:'from-coral-50 to-sand-100'},{e:'🏅',l:'Passes',h:'/passes',bg:'from-sand-100 to-sand-200'},{e:'📚',l:'Libraries',h:'/libraries',bg:'from-ocean-50 to-marsh-50'},{e:'👥',l:'Community',h:'/community',bg:'from-coral-50 to-coral-100'}].map(q=>(
            <Link key={q.l} href={q.h} className={`bg-gradient-to-br ${q.bg} border border-sand-200 rounded-xl p-5 text-center hover:-translate-y-1 transition-all block`}>
              <span className="text-3xl block mb-2">{q.e}</span><span className="font-display text-sm text-marsh-800">{q.l}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 px-5 bg-sand-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl text-marsh-800 mb-6">⭐ Top-Rated Playgrounds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map(p=>(
            <Link key={p.slug} href={`/playgrounds/${p.slug}`} className="bg-white rounded-2xl border border-sand-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all block">
              <div className="h-32 bg-gradient-to-br from-marsh-100 via-ocean-100 to-sand-100 flex items-center justify-center"><span className="text-5xl">{p.emoji}</span></div>
              <div className="p-4"><h3 className="font-display text-base text-marsh-800 mb-1">{p.name}</h3><p className="text-xs font-bold text-ocean-600 uppercase mb-2">{p.hood}</p><p className="text-sm text-marsh-500 line-clamp-2">{p.desc}</p></div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8"><Link href="/playgrounds" className="px-6 py-3 bg-marsh-700 text-white font-bold rounded-xl inline-block hover:-translate-y-0.5 transition-all">View All {playgrounds.length} Playgrounds →</Link></div>
      </div>
    </section>
    <section className="py-16 px-5 bg-gradient-to-r from-coral-400 via-coral-500 to-coral-600 text-center">
      <span className="text-5xl block mb-4">🏅</span>
      <h2 className="font-display text-3xl text-white mb-3">Free Park Passes at the Library!</h2>
      <p className="text-coral-100 max-w-lg mx-auto mb-6">Charleston County Library lets you check out Gold Passes and State Parks Passes for free. Your whole family gets into county parks and beaches.</p>
      <Link href="/passes" className="px-8 py-4 bg-white text-coral-600 font-bold text-lg rounded-2xl inline-block hover:-translate-y-0.5 transition-all">Learn About Passes 🏅</Link>
    </section>
  </>);
}
