'use client';
import { useState } from 'react';
import { activities } from '@/lib/data';

export default function ActivitiesPage() {
  const [cat, setCat] = useState('all');
  const cats = ['all',...[...new Set(activities.map(a=>a.category))]];
  const filtered = cat==='all'?activities:activities.filter(a=>a.category===cat);
  return (<>
    <section className="bg-gradient-to-br from-coral-50 via-sand-50 to-ocean-100 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">Beyond the playground</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">🎯 Activities</h1>
        <p className="text-marsh-500">{activities.length} family-friendly things to do in Charleston.</p>
      </div>
    </section>
    <section className="py-8 px-5 bg-sand-50"><div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map(c=><button key={c} onClick={()=>setCat(c)} className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 transition-all ${cat===c?'bg-coral-500 text-white border-coral-500':'bg-white text-marsh-600 border-sand-200'}`}>{c==='all'?'All':c}</button>)}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(a=>(
          <div key={a.slug} className="bg-white rounded-2xl border border-sand-200 overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-coral-50 via-ocean-50 to-sand-100 flex items-center justify-center">
              <span className="text-5xl">{a.emoji}</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-baseline gap-2 mb-1">
                <h3 className="font-display text-base text-marsh-800">{a.name}</h3>
                <span className="text-xs font-bold text-coral-500 whitespace-nowrap">{a.price}</span>
              </div>
              <p className="text-xs font-bold text-ocean-600 uppercase mb-2">{a.category} · Ages {a.ages}</p>
              <p className="text-sm text-marsh-500 mb-3">{a.desc}</p>
              <div className="bg-coral-50 rounded-lg p-2.5 mb-3"><p className="text-xs text-coral-600">💡 {a.tip}</p></div>
              {a.url && <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-ocean-600">Visit Website →</a>}
            </div>
          </div>
        ))}
      </div>
    </div></section>
  </>);
}
