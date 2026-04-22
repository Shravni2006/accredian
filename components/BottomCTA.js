function BottomCTA({ onEnquire }) {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto" data-name="bottom-cta" data-file="components/BottomCTA.js">
      <div className="bg-[var(--primary)] rounded-2xl overflow-hidden relative shadow-lg px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Background decorative circles */}
        <div className="absolute -bottom-24 -right-12 w-64 h-64 border-[40px] border-white/10 rounded-full"></div>
        <div className="absolute -top-12 left-1/2 w-32 h-32 border-[20px] border-white/10 rounded-full"></div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0">
            <div className="icon-headphones text-3xl text-[var(--primary)]"></div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to Learn More About Our Training Solutions?</h3>
            <p className="text-blue-100 text-sm md:text-base">Get Expert Guidance for Your Team's Success!</p>
          </div>
        </div>

        <div className="relative z-10">
          <button 
            onClick={onEnquire}
            className="bg-white text-[var(--primary)] font-bold px-8 py-3 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            Contact Us
            <div className="icon-chevron-right text-lg"></div>
          </button>
        </div>
        
      </div>
    </section>
  );
}