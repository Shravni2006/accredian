function DomainExpertise() {
  const domains = [
    { title: 'Product & Innovation Hub', icon: 'lightbulb' },
    { title: 'Gen-AI Mastery', icon: 'brain-circuit' },
    { title: 'Leadership Elevation', icon: 'users' },
    { title: 'Tech & Data Insights', icon: 'chart-bar' },
    { title: 'Operations Excellence', icon: 'settings' },
    { title: 'Digital Enterprise', icon: 'globe' },
    { title: 'Fintech Innovation Lab', icon: 'banknote' }
  ];

  return (
    <section className="section-padding bg-white" data-name="domain-expertise" data-file="components/DomainExpertise.js">
      <h2 className="section-title">
        Our <span className="blue-text">Domain Expertise</span>
      </h2>
      <p className="section-subtitle">
        <span className="blue-text font-medium">Specialized Programs</span> Designed to Fuel Innovation
      </p>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 mt-8">
        {domains.map((domain, index) => (
          <button 
            key={index} 
            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow w-[280px] h-[100px] gap-2 group"
          >
            <div className={`icon-${domain.icon} text-3xl text-[var(--primary)] group-hover:scale-110 transition-transform`}></div>
            <span className="font-bold text-gray-800 text-sm">{domain.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}