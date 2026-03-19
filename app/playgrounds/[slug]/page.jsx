import { notFound } from 'next/navigation';
import Link from 'next/link';
import { playgrounds, getPlaygroundBySlug } from '@/lib/data';

export function generateStaticParams() { return playgrounds.map(p=>({slug:p.slug})); }

export async function generateMetadata(props) {
  const params = await props.params;
  const pg = getPlaygroundBySlug(params.slug);
  if(!pg) return {};
  return { title: `${pg.name} — Charleston Playgrounds`, description: pg.desc };
}

export default async function PlaygroundDetail(props) {
  const params = await props.params;
  const pg = getPlaygroundBySlug(params.slug);
  if(!pg) notFound();
  return (<>
    <section className="bg-gradient-to-br from-ocean-100 via-sand-50 to-marsh-100 py-14 px-5">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-marsh-500 mb-4">
          <Link href="/" className="hover:text-marsh-700">Home</Link><span>/</span>
          <Link href="/playgrounds" className="hover:text-marsh-700">Playgrounds</Link><span>/</span>
          <span className="text-marsh-700 font-medium">{pg.name}</span>
        </nav>
        <div className="flex items-start gap-3 mb-3">
          <span className="text-5xl">{pg.emoji}</span>
          <div><h1 className="font-display text-3xl sm:text-4xl text-marsh-800 leading-tight">{pg.name}</h1><p className="text-sm font-bold text-ocean-600 uppercase">{pg.hood}</p></div>
        </div>
        <div className="flex items-center gap-2 mb-3">{Array.from({length:5}).map((_,i)=><span key={i} className={`text-lg ${i<pg.rating?'text-sand-500':'text-sand-300'}`}>★</span>)}<span className="text-sm text-marsh-500">{pg.rating}/5</span></div>
        <p className="text-lg text-marsh-600 max-w-2xl">{pg.desc}</p>
      </div>
    </section>
    <section className="py-10 px-5 bg-sand-50"><div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl border border-sand-200 p-6">
          <h2 className="font-display text-lg text-marsh-800 mb-3">About</h2>
          <p className="text-marsh-600 leading-relaxed">{pg.longDesc}</p>
        </div>
        <div className="bg-white rounded-2xl border border-sand-200 p-6">
          <h2 className="font-display text-lg text-marsh-800 mb-3">Features</h2>
          <div className="grid sm:grid-cols-2 gap-2">{pg.features.map(f=><div key={f} className="flex items-center gap-2"><span className="w-5 h-5 bg-palmetto-100 rounded-full flex items-center justify-center text-xs text-palmetto-600">✓</span><span className="text-sm text-marsh-600">{f}</span></div>)}</div>
        </div>
        <div className="bg-gradient-to-br from-coral-50 to-sand-100 rounded-2xl border border-coral-200 p-6 flex gap-3">
          <span className="text-2xl">💡</span>
          <div><h2 className="font-display text-base text-coral-600 mb-1">Parent Tip</h2><p className="text-sm text-marsh-600 leading-relaxed">{pg.tip}</p></div>
        </div>
      </div>
      <div className="space-y-5">
        <div className="bg-white rounded-2xl border border-sand-200 p-5">
          <h3 className="font-display text-base text-marsh-800 mb-3">Quick Info</h3>
          {[{l:'Address',v:pg.addr},{l:'Hours',v:'Dawn to dusk'},{l:'Cost',v:pg.cost},{l:'Ages',v:pg.ages}].map(i=><div key={i.l} className="mb-2"><dt className="text-xs font-bold text-marsh-400 uppercase">{i.l}</dt><dd className="text-sm text-marsh-700">{i.v}</dd></div>)}
        </div>
        <div className="bg-white rounded-2xl border border-sand-200 p-5">
          <h3 className="font-display text-base text-marsh-800 mb-3">At a Glance</h3>
          {[{l:'Shade',v:pg.shade,e:'🌳'},{l:'Restrooms',v:pg.restrooms,e:'🚻'},{l:'Fenced',v:pg.fenced,e:'🔒'},{l:'Splash Pad',v:pg.splash,e:'💦'},{l:'Accessible',v:pg.accessible,e:'♿'},{l:'Parking',v:pg.parking,e:'🅿️'}].map(i=><div key={i.l} className="flex justify-between items-center py-1"><span className="flex items-center gap-1.5 text-sm text-marsh-600"><span>{i.e}</span>{i.l}</span><span className={`text-sm font-bold ${i.v?'text-palmetto-600':'text-marsh-300'}`}>{i.v?'Yes':'No'}</span></div>)}
        </div>
        <a href={`https://www.google.com/maps/search/?api=1&query=${pg.lat},${pg.lng}`} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-5 py-2.5 bg-ocean-600 text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all">Open in Maps 📍</a>
      </div>
    </div>
    <div className="max-w-4xl mx-auto mt-8"><Link href="/playgrounds" className="text-sm font-bold text-marsh-600 hover:text-marsh-800">← Back to All Playgrounds</Link></div>
    </section>
  </>);
}
