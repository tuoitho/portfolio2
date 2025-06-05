import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray rounded-full text-xs text-gray-700">{tech}</span>
          ))}
        </div>
        
        <div className="flex justify-between mt-4">          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
          >
            <FaExternalLinkAlt /> Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'Website thương mại điện tử với đầy đủ tính năng mua sắm và thanh toán',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'TailwindCSS', 'Node.js', 'MongoDB'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc với drag-and-drop UI và thông báo thời gian thực',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio cá nhân với hiệu ứng mượt mà và thiết kế responsive',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Framer Motion', 'TailwindCSS', 'Vite'],
      github: '#',
      liveDemo: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Bảng điều khiển phân tích dữ liệu mạng xã hội với biểu đồ trực quan',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['Vue.js', 'D3.js', 'Firebase', 'Pinia'],
      github: '#',
      liveDemo: '#'
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dự án
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
