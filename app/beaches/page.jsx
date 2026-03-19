import { beaches } from '@/lib/data';
export const metadata = { title:'Beaches — Charleston Playgrounds', description:'Family guide to Charleston beaches: Isle of Palms, Sullivan\'s Island, Folly Beach, Kiawah, and Edisto.' };

export default function BeachesPage() {
  return (<>
    <section className="bg-gradient-to-br from-ocean-100 via-sand-50 to-coral-50 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">Sun, sand & family fun</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">🏖️ Beaches</h1>
        <p className="text-marsh-500 max-w-xl">Charleston's barrier islands each have their own vibe. Here's the family guide.</p>
      </div>
    </section>
    <section className="py-10 px-5 bg-sand-50"><div className="max-w-5xl mx-auto space-y-6">
      {beaches.map(b=>(
        <div key={b.slug} className="bg-white rounded-2xl border border-sand-200 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-5xl">{b.emoji}</span>
            <div className="flex-1">
              <div className="flex justify-between items-baseline flex-wrap gap-2">
                <h2 className="font-display text-2xl text-marsh-800">{b.name}</h2>
                <span className="text-xs font-bold text-ocean-600">{b.distance}</span>
              </div>
              <p className="text-sm font-bold text-coral-500 uppercase tracking-wide">{b.vibe}</p>
            </div>
          </div>
          <p className="text-marsh-600 leading-relaxed mb-4">{b.desc}</p>
          <p className="text-sm text-marsh-600 mb-4"><strong>Parking:</strong> {b.parking}</p>
          <div>
            <h3 className="text-xs font-bold text-marsh-700 uppercase mb-2">Family Tips</h3>
            <div className="space-y-1">{b.tips.map((t,i)=><p key={i} className="text-sm text-marsh-500 pl-4 relative"><span className="absolute left-0 text-palmetto-500">•</span>{t}</p>)}</div>
          </div>
        </div>
      ))}
    </div></section>
  </>);
}
