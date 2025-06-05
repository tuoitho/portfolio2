import { motion } from 'framer-motion';
import { User, FolderOpen, Award, Mail } from 'lucide-react';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'Giới thiệu', icon: User },
    { id: 'projects', label: 'Dự án', icon: FolderOpen },
    { id: 'skills', label: 'Kỹ năng', icon: Award },
    { id: 'contact', label: 'Liên hệ', icon: Mail },
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center space-x-2 py-4 px-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavigationTabs;
