import { motion } from 'framer-motion';

const Hero = ({ onNavigateToTab }) => {
  const handleProjectsClick = () => {
    if (onNavigateToTab) {
      onNavigateToTab('projects');
    }
  };

  const handleContactClick = () => {
    if (onNavigateToTab) {
      onNavigateToTab('contact');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Xin chào, tôi là <span className="text-blue-500">Nguyễn Văn A</span>
            <br />Full Stack Developer
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Tạo trải nghiệm web ấn tượng với sự sáng tạo và công nghệ hiện đại
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={handleProjectsClick}
              className="btn-primary"
            >
              Xem dự án
            </button>
            <button 
              onClick={handleContactClick}
              className="btn-secondary"
            >
              Liên hệ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
