import { influencers } from '@/lib/data';
export const metadata = { title:'Community — Charleston Playgrounds' };

export default function CommunityPage() {
  return (<>
    <section className="bg-gradient-to-br from-coral-50 via-sand-50 to-ocean-100 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">Follow the locals</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">👥 Charleston Family Community</h1>
        <p className="text-marsh-500 max-w-xl">Influencers, bloggers, and creators sharing the best of family life in the Lowcountry.</p>
      </div>
    </section>
    <section className="py-10 px-5 bg-sand-50"><div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {influencers.map(inf=>(
          <div key={inf.handle} className="bg-white rounded-2xl border border-sand-200 p-5">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-display text-lg text-marsh-800">{inf.name}</h3>
              <span className="text-xs font-bold text-ocean-600">{inf.followers}</span>
            </div>
            <p className="text-sm font-bold text-coral-500 mb-1">{inf.handle}</p>
            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-marsh-50 text-marsh-600 mb-3">{inf.category}</span>
            <p className="text-sm text-marsh-500 leading-relaxed mb-3">{inf.desc}</p>
            <a href={inf.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-ocean-600 hover:underline">Follow on {inf.platform} →</a>
          </div>
        ))}
      </div>
    </div></section>
  </>);
}
