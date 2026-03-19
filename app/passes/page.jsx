import { passes } from '@/lib/data';
export const metadata = { title:'Passes & Savings — Charleston Playgrounds' };

export default function PassesPage() {
  return (<>
    <section className="bg-gradient-to-br from-sand-100 via-sand-50 to-marsh-50 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">Save money, play more</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">🏅 Passes & Savings</h1>
        <p className="text-marsh-500 max-w-xl">Park passes, library checkouts, and ways to save on family fun.</p>
      </div>
    </section>
    <section className="py-10 px-5 bg-sand-50"><div className="max-w-4xl mx-auto space-y-6">
      {passes.map(p=>(
        <div key={p.slug} className="bg-white rounded-2xl border border-sand-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{p.emoji}</span>
            <div><h2 className="font-display text-xl text-marsh-800">{p.name}</h2><p className="text-sm font-bold text-coral-500">{p.price}</p></div>
          </div>
          <p className="text-marsh-600 leading-relaxed mb-4">{p.desc}</p>
          <h3 className="text-xs font-bold text-marsh-700 uppercase mb-2">What's Included</h3>
          <div className="space-y-1 mb-4">{p.includes.map((item,i)=><p key={i} className="text-sm text-marsh-600 pl-5 relative"><span className="absolute left-0 text-palmetto-500">✓</span>{item}</p>)}</div>
          <p className="text-sm text-marsh-600 mb-3"><strong>How to get it:</strong> {p.howTo}</p>
          <div className="bg-coral-50 rounded-xl p-3"><p className="text-sm text-coral-600">💡 <strong>Pro tip:</strong> {p.proTip}</p></div>
        </div>
      ))}
    </div></section>
  </>);
}
