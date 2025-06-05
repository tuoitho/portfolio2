import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: false, amount: 0.5 });
  
  return (
    <div className="mb-6" ref={skillRef}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Next.js', level: 80 },
  ];
  
  const otherSkills = [
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Responsive Design', level: 95 },
    { name: 'Performance Optimization', level: 75 },
  ];
    return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kỹ năng
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Other Skills</h3>
            {otherSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-gray-700">
            Tôi luôn không ngừng học hỏi và cập nhật các công nghệ mới để nâng cao kỹ năng của mình.
            <br />Hiện tại tôi đang tập trung vào TypeScript và AWS để hoàn thiện stack phát triển fullstack.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
