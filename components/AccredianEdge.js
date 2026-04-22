function AccredianEdge() {
  const steps = [
    { title: 'Tailored Solutions', desc: 'Programs customized to your organization\'s goals and challenges.', icon: 'lightbulb' },
    { title: 'Expert Guidance', desc: 'Learn from industry leaders with real-world success.', icon: 'message-square-text' },
    { title: 'Innovative Framework', desc: 'Proprietary methods for impactful, application-driven results.', icon: 'settings' },
    { title: 'Advanced Technology', desc: 'State-of-the-art LMS for seamless learning experiences.', icon: 'globe' },
    { title: 'Diverse Offerings', desc: 'Courses across industries, skill levels, and emerging fields.', icon: 'move-diagonal' },
    { title: 'Proven Impact', desc: 'Trusted by leading organizations for measurable ROI.', icon: 'target' },
    { title: 'Flexible Delivery', desc: 'Online and offline options tailored to your needs.', icon: 'package' }
  ];

  return (
    <section id="edge" className="section-padding bg-white overflow-hidden" data-name="accredian-edge" data-file="components/AccredianEdge.js">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        The <span className="text-[var(--primary)]">Accredian Edge</span>
      </h2>
      <p className="text-gray-500 text-center mb-24">
        Key Aspects of <span className="text-[var(--primary)] font-medium">Our Strategic Training</span>
      </p>

      <div className="relative max-w-6xl mx-auto px-4 hidden lg:block pb-32">
        {/* Horizontal Dotted Line */}
        <div className="absolute top-[80px] left-[5%] right-[5%] h-0 border-t-2 border-dashed border-gray-300 z-0 flex justify-evenly items-center px-8">
            {/* Adding subtle right arrows along the line */}
            {[...Array(6)].map((_, i) => (
               <div key={i} className="icon-chevrons-right text-gray-300 text-xl bg-white px-1"></div>
            ))}
        </div>

        <div className="flex justify-between items-start relative z-10">
          {steps.map((step, idx) => {
            const isTop = idx % 2 === 0;
            return (
              <div key={idx} className="flex flex-col items-center relative w-[130px]">
                
                {/* Top Content */}
                <div className={`w-40 text-center mb-6 transition-opacity ${isTop ? 'opacity-100' : 'opacity-0 invisible'}`}>
                  <h4 className="font-bold text-sm mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-[11px] text-gray-600 leading-snug">{step.desc}</p>
                  <div className="absolute top-[100px] left-1/2 w-px h-6 bg-[var(--primary)] -ml-px"></div>
                </div>

                {/* Circle Icon */}
                <div className="w-[80px] h-[80px] bg-white rounded-full shadow-[0_4px_15px_rgba(24,119,242,0.15)] flex items-center justify-center border-[6px] border-blue-50 relative z-10 shrink-0">
                  <div className="w-[56px] h-[56px] bg-[var(--primary)] rounded-full flex items-center justify-center text-white shadow-inner">
                    <div className={`icon-${step.icon} text-2xl`}></div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className={`w-40 text-center mt-6 absolute top-[160px] transition-opacity ${!isTop ? 'opacity-100' : 'opacity-0 invisible'}`}>
                  <div className="absolute -top-[30px] left-1/2 w-px h-6 bg-[var(--primary)] -ml-px"></div>
                  <h4 className="font-bold text-sm mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-[11px] text-gray-600 leading-snug">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Mobile/Tablet view */}
      <div className="lg:hidden mt-8 grid sm:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl">
             <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white shadow-md mb-4 ring-4 ring-blue-100">
                <div className={`icon-${step.icon} text-2xl`}></div>
             </div>
             <h4 className="font-bold text-base mb-2">{step.title}</h4>
             <p className="text-sm text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}