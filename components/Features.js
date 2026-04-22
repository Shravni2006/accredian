function Features() {
  const features = [
    {
      title: 'Customized Learning Paths',
      description: 'Tailored curriculum aligned with your organization\'s specific goals, tech stack, and skill gaps.',
      icon: 'map',
      color: 'blue'
    },
    {
      title: 'Industry-Expert Instructors',
      description: 'Learn from seasoned professionals who bring real-world experience and practical insights to the classroom.',
      icon: 'users',
      color: 'indigo'
    },
    {
      title: 'Project-Based Learning',
      description: 'Hands-on projects using your company\'s actual data and scenarios to ensure immediate applicability.',
      icon: 'briefcase',
      color: 'amber'
    },
    {
      title: 'Measurable ROI & Tracking',
      description: 'Comprehensive dashboards to track employee progress, engagement, and skill acquisition.',
      icon: 'chart-bar',
      color: 'green'
    },
    {
      title: 'Flexible Delivery Modes',
      description: 'Choose from live online, in-person, or hybrid learning models to suit your team\'s schedule.',
      icon: 'monitor-play',
      color: 'purple'
    },
    {
      title: 'Dedicated Customer Success',
      description: 'A dedicated account manager to ensure smooth execution and maximum program impact.',
      icon: 'heart-handshake',
      color: 'rose'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white" data-name="features" data-file="components/Features.js">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Accredian Enterprise?</h2>
        <p className="text-lg text-gray-600">
          We go beyond traditional training. We partner with you to build a culture of continuous learning and data-driven decision making.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 bg-gray-50 hover:bg-white group">
            <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`icon-${feature.icon} text-2xl`}></div>
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}