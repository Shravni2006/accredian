function EnquireModal({ onClose }) {
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const company = form.company.value;
    const domain = form.domain.value;
    const candidates = parseInt(form.candidates.value) || 0;
    const delivery = form.delivery.value;
    const location = form.location.value;

    try {
      await trickleCreateObject('lead_submission', {
        FirstName: name,
        Email: email,
        Phone: `+91${phone}`,
        Company: company,
        Domain: domain,
        CandidatesCount: candidates,
        DeliveryMode: delivery,
        Location: location,
        FormSource: 'Modal Form'
      });
      
      setStatus('success');
      setTimeout(() => onClose(), 2500);
    } catch (error) {
      console.error('Modal form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300" data-name="enquire-modal" data-file="components/EnquireModal.js">
      {/* Modal Container */}
      <div 
        className="bg-white rounded-lg shadow-2xl flex w-full max-w-[900px] h-[650px] max-h-[90vh] overflow-hidden relative transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2 relative bg-gray-100">
          <img 
            src="https://app.trickle.so/storage/public/images/usr_1bede7f328000001/ea0652e0-704f-4f7c-9782-bf73acf91958.png?w=667&h=1000" 
            alt="Professionals" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col relative overflow-y-auto bg-white">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close modal"
          >
            <div className="icon-x text-2xl"></div>
          </button>
          
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                <div className="icon-check text-3xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
              <p className="text-gray-600">
                Thank you for your interest. Our enterprise team will contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Enquire Now</h2>
              
              <form className="flex-grow flex flex-col space-y-6" onSubmit={handleSubmit}>
                
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter Name" 
                    className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-800 placeholder-gray-400 text-[15px] transition-colors bg-transparent" 
                    required
                  />
                </div>

                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email" 
                    className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-800 placeholder-gray-400 text-[15px] transition-colors bg-transparent" 
                    required
                  />
                </div>

                <div className="flex items-center border-b border-gray-300 pb-2 focus-within:border-[var(--primary)] transition-colors">
                  <div className="flex items-center shrink-0 cursor-pointer">
                    <img src="https://flagcdn.com/w20/in.png" alt="India flag" className="w-5 h-auto mr-1" />
                    <div className="icon-chevron-down text-gray-400 text-[10px]"></div>
                    <span className="mx-2 text-gray-800 text-[15px]">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full outline-none text-gray-800 text-[15px] bg-transparent" 
                    required
                  />
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Enter company name" 
                    className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-800 placeholder-gray-400 text-[15px] transition-colors bg-transparent" 
                  />
                </div>

                <div className="relative">
                  <select name="domain" defaultValue="" className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-400 focus:text-gray-800 appearance-none bg-transparent text-[15px] transition-colors cursor-pointer">
                    <option value="" disabled hidden>Select Domain</option>
                    <option value="data-science" className="text-gray-800">Data Science</option>
                    <option value="product-management" className="text-gray-800">Product Management</option>
                    <option value="ai" className="text-gray-800">Artificial Intelligence</option>
                    <option value="other" className="text-gray-800">Other</option>
                  </select>
                  <div className="icon-chevron-down absolute right-0 top-1 text-gray-400 pointer-events-none text-sm"></div>
                </div>

                <div className="relative">
                  <input 
                    type="number" 
                    name="candidates"
                    placeholder="Enter No. of candidates" 
                    className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-800 placeholder-gray-400 text-[15px] transition-colors bg-transparent" 
                  />
                </div>

                <div className="relative">
                  <select name="delivery" defaultValue="" className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-400 focus:text-gray-800 appearance-none bg-transparent text-[15px] transition-colors cursor-pointer" required>
                    <option value="" disabled hidden>Select Mode of Delivery *</option>
                    <option value="online" className="text-gray-800">Online</option>
                    <option value="offline" className="text-gray-800">Offline</option>
                    <option value="hybrid" className="text-gray-800">Hybrid</option>
                  </select>
                  <div className="icon-chevron-down absolute right-0 top-1 text-gray-400 pointer-events-none text-sm"></div>
                </div>

                <div className="relative mb-6">
                  <input 
                    type="text" 
                    name="location"
                    placeholder="Eg: Gurgoan, Delhi, India" 
                    className="w-full pb-2 border-b border-gray-300 focus:border-[var(--primary)] outline-none text-gray-800 placeholder-gray-400 text-[15px] transition-colors bg-transparent" 
                  />
                </div>

                <div className="mt-auto pt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting' || status === 'error'}
                    className={`w-full text-white font-medium py-3 rounded transition-colors shadow-sm flex justify-center items-center gap-2 ${status === 'error' ? 'bg-red-500' : 'bg-[#1877F2] hover:bg-blue-700'}`}
                  >
                    {status === 'submitting' && <div className="icon-loader animate-spin"></div>}
                    {status === 'error' ? 'Failed. Try Again.' : status === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
                
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}