function Programs() {
  const programs = [
    {
      title: 'Executive Program in Data Science & AI',
      duration: '6 Months',
      level: 'Advanced',
      description: 'Equip your senior leaders and technical teams with advanced AI and ML capabilities to drive strategic initiatives.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Product Management Certification',
      duration: '4 Months',
      level: 'Intermediate',
      description: 'Train your product teams to build user-centric, data-informed products that capture market share.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Data Analytics for Business',
      duration: '3 Months',
      level: 'Beginner',
      description: 'Empower non-technical teams to make data-driven decisions and leverage analytics tools effectively.',
      image: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="programs" className="section-padding bg-[var(--bg-light)]" data-name="programs" data-file="components/Programs.js">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformative Programs</h2>
          <p className="text-lg text-gray-600">
            Comprehensive curriculum designed by industry experts to address the most critical skill gaps in modern enterprises.
          </p>
        </div>
        <a href="#contact" className="text-[var(--primary)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          View all programs <div className="icon-arrow-right"></div>
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={program.image} 
                alt={program.title} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[var(--primary)]">
                {program.level}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <div className="icon-clock text-gray-400"></div>
                {program.duration}
              </div>
              <h3 className="text-xl font-bold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {program.description}
              </p>
              <button className="w-full py-2 border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                View Syllabus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}