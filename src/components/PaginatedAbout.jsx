import { motion } from 'framer-motion';
import { User, Award, Target, Heart } from 'lucide-react';

const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
    >
      <div className="text-3xl mb-2">{stat.icon}</div>
      <div className="text-2xl font-bold text-blue-600 mb-1">
        {stat.value}
      </div>
      <div className="text-sm text-gray-600">
        {stat.label}
      </div>
    </motion.div>
  );
};

const HighlightItem = ({ highlight, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
    >
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">
          {index + 1}
        </span>
      </div>
      <span className="text-gray-700">
        {highlight}
      </span>
    </motion.div>
  );
};

const PaginatedAbout = ({ aboutData }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Về tôi
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {aboutData.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="mr-3 text-blue-600" size={24} />
                  Điểm nổi bật
                </h3>
                <div className="space-y-3">
                  {aboutData.highlights.map((highlight, index) => (
                    <HighlightItem
                      key={index}
                      highlight={highlight}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Personal Touch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white"
              >
                <div className="flex items-center mb-4">
                  <Heart className="mr-3" size={24} />
                  <h3 className="text-lg font-bold">Triết lý làm việc</h3>
                </div>
                <p className="text-blue-100">
                  "Code is poetry, and every project is a story waiting to be told. 
                  Tôi tin rằng công nghệ không chỉ là công cụ, mà là cầu nối để tạo ra 
                  những trải nghiệm tuyệt vời cho người dùng."
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="mr-3 text-blue-600" size={24} />
                  Thành tựu
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {aboutData.stats.map((stat, index) => (
                    <StatCard
                      key={index}
                      stat={stat}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Skills Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="mr-3 text-blue-600" size={20} />
                  Chuyên môn chính
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700">Frontend</div>
                    <div className="text-gray-600">React, Vue, Angular</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700">Backend</div>
                    <div className="text-gray-600">Node.js, Python</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700">Mobile</div>
                    <div className="text-gray-600">React Native, Flutter</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700">Cloud</div>
                    <div className="text-gray-600">AWS, Docker, K8s</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedAbout;
