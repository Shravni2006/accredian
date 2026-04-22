function DeliveryResults() {
  const steps = [
    { num: '1', title: 'Skill Gap Analysis', desc: 'Assess team skill gaps and developmental needs.', icon: 'chart-bar' },
    { num: '2', title: 'Customized Training Plan', desc: 'Create a tailored roadmap addressing organizational goals.', icon: 'monitor' },
    { num: '3', title: 'Flexible Program Delivery', desc: 'Deliver adaptable programs aligned with industry and organizational requirements.', icon: 'monitor-play' }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white" data-name="delivery-results" data-file="components/DeliveryResults.js">
      <h2 className="section-title">
        How We <span className="blue-text">Deliver Results</span> That Matter?
      </h2>
      <p className="section-subtitle">
        A Structured Three-Step Approach to <span className="blue-text font-medium">Skill Development</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative bg-white border-2 border-transparent hover:border-blue-100 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all group">
            {/* Number Badge */}
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-blue-50 text-[var(--primary)] text-xs font-bold flex items-center justify-center border border-blue-100">
              {step.num}
            </div>
            
            {/* Blue Left Border Decoration */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-[var(--primary)] rounded-r-md group-hover:h-3/4 transition-all"></div>

            <div className="w-16 h-16 mx-auto bg-[var(--primary)] rounded-full flex items-center justify-center text-white mb-6">
              <div className={`icon-${step.icon} text-2xl`}></div>
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}