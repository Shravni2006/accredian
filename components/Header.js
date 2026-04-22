function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  const navLinks = [
    { name: 'Home', href: '#', id: '' },
    { name: 'Stats', href: '#stats', id: 'stats' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Accredian Edge', href: '#edge', id: 'edge' },
    { name: 'CAT', href: '#cat', id: 'cat' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (scrollPosition < 100) {
        setActiveSection('');
        return;
      }

      const sections = navLinks.map(link => link.id).filter(Boolean);
      let current = '';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 150; // offset for fixed header
          if (scrollPosition >= offsetTop) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately to set initial active state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm" data-name="header" data-file="components/Header.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="font-bold text-2xl text-[var(--primary)] tracking-tight">accredian</span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase mt-[-4px]">credentials that matter</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors pb-1 border-b-2 ${isActive ? 'text-[var(--primary)] border-[var(--primary)]' : 'text-gray-800 border-transparent hover:text-[var(--primary)]'}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 py-4 space-y-2 shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${isActive ? 'bg-blue-50 text-[var(--primary)]' : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--primary)]'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}