function FAQ({ onEnquire }) {
  const [activeTab, setActiveTab] = React.useState('About the Course');
  const [openQ, setOpenQ] = React.useState(null);

  const tabs = ['About the Course', 'About the Delivery', 'Miscellaneous'];
  
  const faqData = {
    'About the Course': [
      { q: 'What types of corporate training programs does Accredian offer?', a: 'Accredian provides comprehensive training in Data Science, AI, Product Management, and Business Analytics tailored for enterprise teams.' },
      { q: 'What domain specializations are available?', a: 'We cover major domains including Healthcare, Finance, Retail, IT, Manufacturing, and Supply Chain.' }
    ],
    'About the Delivery': [
      { q: 'Can the courses be customized for specific industries or teams?', a: 'Yes, we begin with a skill gap analysis and tailor our curriculum to align perfectly with your organizational goals.' },
      { q: 'Who are the instructors for these programs?', a: 'Learn from seasoned professionals who bring real-world experience and practical insights to the classroom.' },
      { q: 'What formats are the programs delivered in?', a: 'Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team\'s preferences and requirements.' }
    ],
    'Miscellaneous': [
      { q: 'What is the ideal team size for corporate training?', a: 'We cater to teams of all sizes, from small focused groups of 5-10 up to large-scale enterprise deployments of 500+.' },
      { q: 'How do we get started with Accredian?', a: 'Simply reach out via our Enquire Now form, and our enterprise team will schedule a consultation within 24 hours.' }
    ]
  };

  // Reset open question when switching tabs
  React.useEffect(() => {
    setOpenQ(null);
  }, [activeTab]);

  return (
    <section id="faqs" className="section-padding bg-white" data-name="faq" data-file="components/FAQ.js">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
        Frequently Asked <span className="text-[var(--primary)]">Questions</span>
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Left Tabs */}
        <div className="md:w-1/3 flex flex-col gap-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-6 rounded-md text-center font-semibold transition-all border shadow-sm ${
                activeTab === tab 
                  ? 'border-transparent text-[var(--primary)] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]' 
                  : 'border-gray-200 text-gray-500 hover:border-blue-200 bg-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Accordion */}
        <div className="md:w-2/3 flex flex-col">
          <div className="space-y-2 flex-grow">
            {faqData[activeTab].map((item, idx) => (
              <div key={idx} className="pb-4">
                <button 
                  onClick={() => setOpenQ(openQ === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-3 hover:text-[var(--primary)] transition-colors group"
                >
                  <span className={`font-semibold ${openQ === idx ? 'text-[var(--primary)]' : 'text-gray-900'}`}>
                    {item.q}
                  </span>
                  <div className={`icon-chevron-${openQ === idx ? 'up' : 'down'} text-gray-400 group-hover:text-[var(--primary)] ml-4 shrink-0`}></div>
                </button>
                {openQ === idx && (
                  <div className="pt-1 pb-4 text-gray-600 text-sm leading-relaxed pr-8">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button onClick={onEnquire} className="bg-[var(--primary)] text-white px-8 py-3 rounded-md font-medium hover:bg-[var(--primary-dark)] transition-colors">
              Enquire Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}