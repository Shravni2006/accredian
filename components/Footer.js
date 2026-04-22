function Footer({ onEnquire }) {
  return (
    <footer className="bg-white pt-12 pb-6" data-name="footer" data-file="components/Footer.js">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
          {/* Logo and Socials */}
          <div>
            <a href="#" className="flex flex-col mb-4">
              <span className="font-bold text-[28px] text-[var(--primary)] tracking-tight leading-none">accredian</span>
              <span className="text-[10px] text-gray-500 tracking-wider uppercase mt-1">credentials that matter</span>
            </a>
            <div className="flex items-center gap-4 text-gray-700">
              <a href="https://www.facebook.com/accredianlearn" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><div className="icon-facebook text-xl"></div></a>
              <a href="https://www.linkedin.com/company/accredianedu/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><div className="icon-linkedin text-xl"></div></a>
              <a href="https://x.com/accredianedu" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><div className="icon-twitter text-xl"></div></a>
              <a href="https://www.instagram.com/accredian_edu" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><div className="icon-instagram text-xl"></div></a>
              <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><div className="icon-youtube text-xl"></div></a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end">
            <button 
              onClick={onEnquire}
              className="bg-[#1877F2] text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors mb-2 text-sm"
            >
              Enquire Now
            </button>
            <span className="text-sm text-gray-600">Speak with our Advisor</span>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-[15px]">Accredian</h4>
            <ul className="space-y-3 text-[14px] text-gray-700">
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[var(--primary)] transition-colors">Why Accredian</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-[15px]">Contact Us</h4>
            <div className="space-y-3 text-[14px] text-gray-700">
              <p>Email us: <a href="mailto:enterprise@accredian.com" className="text-[#1877F2] hover:underline">enterprise@accredian.com</a></p>
              <p className="max-w-md leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,<br />
                Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-4" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-[13px] text-gray-600">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}