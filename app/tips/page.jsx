export const metadata = { title:'Parent Tips — Charleston Playgrounds' };
const tips = [
  {e:'☀️',t:'Beat the Heat',d:'Visit before 10 AM or after 4 PM. Metal equipment gets scorching midday — always do the touch test.'},
  {e:'🧴',t:'Sunscreen Always',d:'Even on cloudy days, SPF 30+ before you leave. Reapply every 2 hours. Keep a spare in the car.'},
  {e:'🦟',t:'Bug Spray Season',d:'Mosquitoes are fierce April–October, especially near marshes. Pack bug spray for morning and late afternoon.'},
  {e:'👗',t:'Pack Extra Clothes',d:'Between splash pads, creeks, and muddy slides, kids will get wet. Keep a spare outfit and towel in the car.'},
  {e:'🥤',t:'Hydrate Extra',d:'Bring more water than you think. Freeze bottles the night before. A cooler bag with snacks makes any trip better.'},
  {e:'🅿️',t:'Parking Strategy',d:'Downtown parks have limited parking. County parks charge $2/person. Gold Pass or library checkout saves on beach parking.'},
  {e:'🎂',t:'Birthday Parties',d:'Many parks have covered picnic shelters. Palmetto Islands and JICP are popular. Book ahead for weekends!'},
  {e:'🐕',t:'Bringing the Dog',d:'Several parks have dog areas (Ackerman, JICP, Wannamaker). Keep dogs leashed in playground zones.'},
  {e:'🌊',t:'Beach + Playground Combo',d:"Pair a morning playground with afternoon beach. Folly's Pirates Cove is steps from the sand. IOP County Park has both."},
  {e:'🗓️',t:'Weekday Advantage',d:'Parks are much less crowded weekday mornings. Tuesday/Wednesday mornings are prime time.'},
  {e:'🩹',t:'First Aid Kit',d:"Keep band-aids, antiseptic wipes, and an ice pack in the car. A 'magic band-aid' stops tears instantly."},
  {e:'📚',t:'Library Gold Pass',d:'Best-kept secret: check out a free Gold Pass from any CCPL branch. Free entry to all county parks and beaches!'},
];
export default function TipsPage() {
  return (<>
    <section className="bg-gradient-to-br from-coral-100 via-sand-50 to-ocean-100 py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <p className="font-accent text-xl text-coral-500 mb-1">From parents, for parents</p>
        <h1 className="font-display text-4xl sm:text-5xl text-marsh-800 mb-2">💡 Parent Tips</h1>
        <p className="text-marsh-500">Hard-won wisdom from Charleston moms and dads.</p>
      </div>
    </section>
    <section className="py-10 px-5 bg-sand-50"><div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
      {tips.map(tip=>(
        <div key={tip.t} className="bg-white rounded-2xl border border-sand-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all">
          <span className="text-2xl block mb-2">{tip.e}</span>
          <h2 className="font-display text-base text-marsh-800 mb-1">{tip.t}</h2>
          <p className="text-sm text-marsh-500 leading-relaxed">{tip.d}</p>
        </div>
      ))}
    </div></section>
  </>);
}
