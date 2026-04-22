function CourseSegmentation() {
  const segments = [
    {
      title: 'Program Specific',
      desc: 'Certificate, Executive, Post Graduate Certificate',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Industry Specific',
      desc: 'IT, Healthcare, Retail, Finance, Education, Manufacturing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Topic Specific',
      desc: 'Machine Learning, Design, Analytics, Cybersecurity, Cloud',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Level Specific',
      desc: 'Senior Leadership, Mid-Career Professionals, Freshers',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="section-padding bg-white" data-name="course-segmentation" data-file="components/CourseSegmentation.js">
      <h2 className="section-title">
        Tailored <span className="blue-text">Course Segmentation</span>
      </h2>
      <p className="section-subtitle">
        Explore <span className="blue-text font-medium">Custom-fit Courses</span> Designed to Address Every Professional Focus
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
        {segments.map((seg, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col text-center">
            <div className="h-40 overflow-hidden">
              <img src={seg.image} alt={seg.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{seg.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">{seg.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}