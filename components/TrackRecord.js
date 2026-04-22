function TrackRecord() {
  return (
    <section id="stats" className="section-padding" data-name="track-record" data-file="components/TrackRecord.js">
      <h2 className="section-title">
        Our <span className="blue-text">Track Record</span>
      </h2>
      <p className="section-subtitle">
        The Numbers Behind <span className="blue-text font-medium">Our Success</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-16 max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
          <div className="bg-blue-50 text-[var(--primary)] font-bold text-2xl py-2 px-8 rounded-full mb-6">
            10K+
          </div>
          <p className="text-sm font-medium text-gray-700 max-w-[220px]">
            Professionals Trained For Exceptional Career Success
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
          <div className="bg-blue-50 text-[var(--primary)] font-bold text-2xl py-2 px-8 rounded-full mb-6">
            200+
          </div>
          <p className="text-sm font-medium text-gray-700 max-w-[220px]">
            Sessions Delivered With Unmatched Learning Excellence
          </p>
        </div>

        <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
          <div className="bg-blue-50 text-[var(--primary)] font-bold text-2xl py-2 px-8 rounded-full mb-6">
            5K+
          </div>
          <p className="text-sm font-medium text-gray-700 max-w-[220px]">
            Active Learners Engaged In Dynamic Courses
          </p>
        </div>
      </div>
    </section>
  );
}