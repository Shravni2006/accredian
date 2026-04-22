function Hero({ onEnquire }) {
  return (
    <section className="px-4 md:px-8 max-w-[1400px] mx-auto pt-8 pb-16" data-name="hero" data-file="components/Hero.js">
      <div className="bg-[#f4f7fb] rounded-[2.5rem] overflow-hidden relative shadow-sm border border-gray-100">
        <div className="grid md:grid-cols-2 items-center min-h-[500px]">
          
          {/* Left Content */}
          <div className="p-6 sm:p-10 md:p-16 lg:pl-20 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] mb-6 text-[#1A202C] tracking-tight">
              Next-Gen <br/>
              <span className="text-[var(--primary)]">Expertise</span> For <br/>
              Your <span className="text-[var(--primary)]">Enterprise</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 font-medium mb-10 max-w-md">
              Cultivate high-performance teams through expert learning.
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <div className="icon-circle-check text-[#10b981] text-xl"></div>
                Tailored Solutions
              </div>
              <div className="flex items-center gap-2">
                <div className="icon-circle-check text-[#10b981] text-xl"></div>
                Industry Insights
              </div>
              <div className="flex items-center gap-2">
                <div className="icon-circle-check text-[#10b981] text-xl"></div>
                Expert Guidance
              </div>
            </div>
            
            <div>
              <button 
                onClick={onEnquire}
                className="bg-[var(--primary)] text-white px-8 py-3 text-lg font-medium rounded-lg hover:bg-[var(--primary-dark)] transition-colors duration-300"
              >
                Enquire Now
              </button>
            </div>
          </div>
          
          {/* Right Image Container */}
          <div className="relative h-full hidden md:block w-full">
            <div className="absolute inset-0 z-0"></div>
            {/* Provided Image */}
            <img 
              src="https://app.trickle.so/storage/public/images/usr_1bede7f328000001/d7d5af50-630a-441c-a46a-5c30edaee7be.jpeg?w=1600&h=1293" 
              alt="Professional Team" 
              className="absolute right-0 bottom-0 h-[120%] object-contain object-right-bottom mix-blend-multiply"
              style={{ maxHeight: '120%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}