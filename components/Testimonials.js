function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const testimonials = [
    {
      logo: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/393c2b7f-cd64-43f6-aebc-36f8d87726cb.png?w=500&h=250',
      quote: '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."'
    },
    {
      logo: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/89c13efe-fb42-42b5-bdd4-af3f9ec1a2fd.png?w=500&h=498',
      quote: '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."'
    },
    {
      logo: 'https://app.trickle.so/storage/public/images/usr_1bede7f328000001/07e78189-a277-4e6b-95ab-3fd5ceeefd00.png?w=500&h=313',
      quote: '"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."'
    }
  ];

  const visibleTestimonials = testimonials.slice(activeIndex, activeIndex + 2);

  return (
    <section id="testimonials" className="section-padding bg-white" data-name="testimonials" data-file="components/Testimonials.js">
      <h2 className="section-title">
        Testimonials from <span className="blue-text">Our Partners</span>
      </h2>
      <p className="section-subtitle">
        What <span className="blue-text font-medium">Our Clients</span> Are Saying
      </p>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[220px]">
        {visibleTestimonials.map((test, idx) => (
          <div 
            key={`${activeIndex}-${idx}`} 
            className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)] transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img src={test.logo} alt="Client Logo" className="h-8 object-contain mb-6" />
            <p className="text-gray-600 text-sm leading-relaxed">
              {test.quote}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-10 gap-2">
        <button 
          onClick={() => setActiveIndex(0)} 
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === 0 ? 'bg-[var(--primary)] w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
          aria-label="View first set"
        ></button>
        <button 
          onClick={() => setActiveIndex(1)} 
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === 1 ? 'bg-[var(--primary)] w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
          aria-label="View second set"
        ></button>
      </div>
    </section>
  );
}