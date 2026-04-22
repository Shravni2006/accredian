function LeadForm() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    employees: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await trickleCreateObject('lead_submission', {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Company: formData.company,
        CompanySize: formData.employees,
        Message: formData.message,
        FormSource: 'Main Page Form'
      });
      
      setStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', company: '', employees: '', message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden" data-name="lead-form" data-file="components/LeadForm.js">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row z-10">
        
        {/* Left Side - Info */}
        <div className="lg:w-2/5 bg-[var(--primary)] p-6 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Let's transform your workforce</h3>
            <p className="text-blue-100 mb-8">
              Fill out the form and our enterprise team will get back to you within 24 hours to discuss your custom requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="icon-mail text-2xl text-blue-200 mt-1"></div>
                <div>
                  <p className="font-medium text-white">Email Us</p>
                  <p className="text-blue-200 text-sm">enterprise@accredian.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-phone text-2xl text-blue-200 mt-1"></div>
                <div>
                  <p className="font-medium text-white">Call Us</p>
                  <p className="text-blue-200 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-sm text-blue-200 italic">
              "Accredian's enterprise training completely transformed our product team's approach to data."
            </p>
            <p className="text-sm font-semibold mt-2 text-white">— VP of Product, TechCorp</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-3/5 p-6 md:p-10">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                <div className="icon-check text-3xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
              <p className="text-gray-600">
                Thank you for your interest. Our enterprise team will contact you shortly.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-[var(--primary)] font-medium hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                  <select 
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all bg-white"
                  >
                    <option value="">Select size...</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1000+">1,000+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How can we help? (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition-all resize-none"
                  placeholder="Tell us about your training needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'error'}
                className={`w-full flex justify-center items-center gap-2 ${status === 'error' ? 'bg-red-500 text-white py-2.5 rounded-md' : 'btn-primary'}`}
              >
                {status === 'submitting' && (
                  <>
                    <div className="icon-loader animate-spin"></div>
                    Submitting...
                  </>
                )}
                {status === 'error' && 'Submission Failed. Try again.'}
                {status === 'idle' && 'Contact Sales'}
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}