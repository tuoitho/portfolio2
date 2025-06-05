import { useState } from 'react';

const Navbar = ({ setActiveTab, activeTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { id: 'about', label: 'Giới thiệu' },
    { id: 'projects', label: 'Dự án' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'contact', label: 'Liên hệ' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        activeTab === 'about' 
          ? 'bg-transparent text-white' 
          : 'bg-white shadow-lg text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <button 
            onClick={() => handleNavClick('about')} 
            className={`transition-colors ${
              activeTab === 'about' 
                ? 'hover:text-blue-300' 
                : 'hover:text-blue-500'
            }`}
          >
            Portfolio
          </button>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors ${
                activeTab === item.id 
                  ? 'text-blue-500' 
                  : (activeTab === 'about' ? 'hover:text-blue-300' : 'hover:text-blue-500')
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full shadow-lg transform transition-transform duration-300 ${
          activeTab === 'about' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                activeTab === item.id
                  ? (activeTab === 'about' ? 'bg-blue-800 text-white' : 'bg-blue-50 text-blue-600')
                  : (activeTab === 'about' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100')
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
