import { libraries } from '@/lib/data';
export const metadata = { title:'Libraries — Charleston Playgrounds' };

export default function LibrariesPage() {
  return (<>
    <section className="bg-gradient-to-br from-ocean-50 via-sand-50 to-marsh-50 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">More than just books</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">📚 Libraries</h1>
        <p className="text-marsh-500 max-w-xl">Charleston County Public Library — 18 branches with free programs, storytimes, Gold Pass checkouts & more.</p>
      </div>
    </section>
    <section className="py-10 px-5 bg-sand-50"><div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-marsh-100 to-palmetto-100 rounded-2xl p-6 mb-8 border border-marsh-200">
        <h3 className="font-display text-lg text-marsh-800 mb-2">🎟️ Free Passes at the Library</h3>
        <p className="text-sm text-marsh-600 leading-relaxed">Every CCPL branch has <strong>Gold Passes</strong> (free entry to all county parks & beaches) and <strong>State Parks Passes</strong> for checkout with your library card. Best-kept secret for Charleston families!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {libraries.map(l=>(
          <div key={l.slug} className="bg-white rounded-2xl border border-sand-200 p-5">
            <h3 className="font-display text-base text-marsh-800 mb-1">{l.name}</h3>
            <p className="text-xs text-ocean-600 mb-0.5">{l.addr}</p>
            <p className="text-xs text-marsh-400 mb-3">📞 {l.phone}</p>
            <p className="text-sm text-marsh-500 leading-relaxed mb-3">{l.desc}</p>
            <div className="flex flex-wrap gap-1">{l.features.map(f=><span key={f} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-ocean-50 text-ocean-600">{f}</span>)}</div>
          </div>
        ))}
      </div>
    </div></section>
  </>);
}
