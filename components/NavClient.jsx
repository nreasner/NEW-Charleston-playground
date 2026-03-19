'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  {href:'/playgrounds',label:'Playgrounds',emoji:'🛝'},
  {href:'/beaches',label:'Beaches',emoji:'🏖️'},
  {href:'/activities',label:'Activities',emoji:'🎯'},
  {href:'/passes',label:'Passes',emoji:'🏅'},
  {href:'/libraries',label:'Libraries',emoji:'📚'},
  {href:'/community',label:'Community',emoji:'👥'},
  {href:'/tips',label:'Tips',emoji:'💡'},
];

export default function NavClient() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-200/60">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl group-hover:rotate-12 transition-transform">🌴</span>
          <div><span className="font-display text-lg text-marsh-800 leading-none">Charleston</span><br/><span className="font-accent text-sm text-coral-500 leading-none">Playgrounds</span></div>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l=>(
            <Link key={l.href} href={l.href} className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${path.startsWith(l.href)?'bg-marsh-700 text-white':'text-marsh-700 hover:bg-marsh-50'}`}>{l.label}</Link>
          ))}
        </div>
        <button onClick={()=>setOpen(!open)} className="md:hidden text-2xl">{open?'✕':'☰'}</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-sand-200/60 flex flex-col gap-1 pt-2">
          {links.map(l=>(
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-marsh-700 hover:bg-marsh-50">
              <span>{l.emoji}</span>{l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
