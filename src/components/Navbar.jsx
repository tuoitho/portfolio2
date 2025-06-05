import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg text-gray-900' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-blue-500 transition-colors">
            Portfolio
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500 transition-colors">Giới thiệu</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Dự án</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Kỹ năng</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Liên hệ</a>
        </div>
        
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
