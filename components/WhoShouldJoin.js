function WhoShouldJoin() {
  const roles = [
    { title: 'Tech Professionals', desc: 'Enhance expertise, embrace tech, drive innovation.', icon: 'monitor-check' },
    { title: 'Non-Tech Professionals', desc: 'Adapt digitally, collaborate in tech environments.', icon: 'monitor-x' },
    { title: 'Emerging Professionals', desc: 'Develop powerful skills for rapid career growth.', icon: 'graduation-cap' },
    { title: 'Senior Professionals', desc: 'Strengthen leadership, enhance strategic decisions.', icon: 'briefcase' }
  ];

  return (
    <section className="bg-[var(--primary)] py-16 md:py-24 px-4 overflow-hidden" data-name="who-should-join" data-file="components/WhoShouldJoin.js">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">
        
        {/* Left Side: Text and Image */}
        <div className="md:w-5/12 text-white z-10 flex flex-col h-full relative mb-12 md:mb-0">
          <div className="mb-8 md:mb-16">
            <p className="text-sm font-medium mb-2 tracking-wide text-blue-100">Who Should Join?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Strategic Skill Enhancement</h2>
          </div>
          
          {/* Using a suitable transparent representation or an overlay image to fit the design */}
          <div className="relative w-full max-w-[360px] mx-auto md:mx-0 mt-8 md:mt-auto">
             <img 
               src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Professionals" 
               className="w-[90%] h-[200px] md:h-[260px] rounded-xl shadow-2xl object-cover"
             />
          </div>
        </div>

        {/* Right Side: Grid */}
        <div className="md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-white z-10 md:pl-12">
          {roles.map((role, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center border-2 border-white bg-white/10 shrink-0">
                <div className={`icon-${role.icon} text-3xl`}></div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{role.title}</h4>
                <p className="text-sm text-blue-100 leading-relaxed pr-4">{role.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}