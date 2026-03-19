'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { playgrounds } from '@/lib/data';

export default function PlaygroundsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filters = [{k:'all',l:'All',e:'🗺️'},{k:'free',l:'Free',e:'🆓'},{k:'splash',l:'Splash',e:'💦'},{k:'fenced',l:'Fenced',e:'🔒'},{k:'accessible',l:'Accessible',e:'♿'},{k:'shade',l:'Shaded',e:'🌳'}];
  const results = useMemo(()=>{
    let r = playgrounds;
    if(search){const q=search.toLowerCase();r=r.filter(p=>p.name.toLowerCase().includes(q)||p.hood.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q));}
    if(filter==='free')r=r.filter(p=>p.cost==='Free');
    if(filter==='splash')r=r.filter(p=>p.splash);
    if(filter==='fenced')r=r.filter(p=>p.fenced);
    if(filter==='accessible')r=r.filter(p=>p.accessible);
    if(filter==='shade')r=r.filter(p=>p.shade);
    return r;
  },[search,filter]);
  return (<>
    <section className="bg-gradient-to-br from-palmetto-100 via-sand-50 to-ocean-100 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">Find your new favorite</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">🛝 All Playgrounds</h1>
        <p className="text-marsh-500">{playgrounds.length} parks across the Charleston area.</p>
      </div>
    </section>
    <section className="py-8 px-5 bg-sand-50"><div className="max-w-6xl mx-auto">
      <div className="relative max-w-md mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">🔍</span>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search playgrounds..." className="w-full pl-10 pr-4 py-2.5 border-2 border-sand-200 rounded-xl text-sm font-medium outline-none focus:border-coral-400 transition-colors" />
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(f=><button key={f.k} onClick={()=>setFilter(f.k)} className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${filter===f.k?'bg-marsh-700 text-white border-marsh-700':'bg-white text-marsh-600 border-sand-200 hover:border-marsh-300'}`}>{f.e} {f.l}</button>)}
      </div>
      <p className="text-sm text-marsh-500 mb-4">{results.length} playground{results.length!==1?'s':''}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {results.map(p=>(
          <Link key={p.slug} href={`/playgrounds/${p.slug}`} className="bg-white rounded-2xl border border-sand-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all block group">
            <div className="h-36 bg-gradient-to-br from-marsh-100 via-ocean-100 to-sand-100 flex items-center justify-center relative">
              <span className="text-5xl group-hover:scale-110 transition-transform">{p.emoji}</span>
              <span className="absolute top-2 right-2 px-2 py-0.5 bg-white/80 rounded-full text-xs font-bold text-marsh-700">{p.cost}</span>
              <div className="absolute top-2 left-2 flex gap-0.5">{Array.from({length:5}).map((_,i)=><span key={i} className={`text-xs ${i<p.rating?'text-sand-500':'text-sand-200'}`}>★</span>)}</div>
            </div>
            <div className="p-4">
              <h3 className="font-display text-base text-marsh-800 mb-0.5 group-hover:text-coral-600 transition-colors">{p.name}</h3>
              <p className="text-xs font-bold text-ocean-600 uppercase tracking-wide mb-2">{p.hood}</p>
              <p className="text-sm text-marsh-500 line-clamp-2 mb-3">{p.desc}</p>
              <div className="flex gap-1.5 text-base mb-2">
                {p.shade&&<span title="Shade">🌳</span>}{p.restrooms&&<span title="Restrooms">🚻</span>}{p.fenced&&<span title="Fenced">🔒</span>}{p.splash&&<span title="Splash">💦</span>}{p.accessible&&<span title="Accessible">♿</span>}{p.parking&&<span title="Parking">🅿️</span>}
              </div>
              <div className="flex flex-wrap gap-1">{p.tags.slice(0,3).map(t=><span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-marsh-50 text-marsh-600 uppercase">{t}</span>)}</div>
              <div className="mt-3 pt-2 border-t border-sand-100 flex justify-between items-center"><span className="text-xs text-marsh-500">Ages {p.ages}</span><span className="text-xs font-bold text-coral-500">Explore →</span></div>
            </div>
          </Link>
        ))}
      </div>
    </div></section>
  </>);
}
