import { motion } from 'framer-motion';

const SkillCard = ({ skillCategory, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        {skillCategory.category}
      </h3>
      
      <div className="space-y-4">
        {skillCategory.skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500">
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className={`h-full ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  delay: 0.5 + (index * 0.1) + (skillIndex * 0.1),
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PaginatedSkills = ({ skills }) => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Kỹ năng chuyên môn
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Các công nghệ và kỹ năng tôi thành thạo trong quá trình phát triển phần mềm
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, index) => (
            <SkillCard
              key={skillCategory.id}
              skillCategory={skillCategory}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaginatedSkills;
