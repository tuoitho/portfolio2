import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          Giới thiệu
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://via.placeholder.com/400x500" 
              alt="Profile" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Frontend Developer với đam mê UI/UX</h3>
            <p className="mb-6 text-gray-700">
              Xin chào! Tôi là một Frontend Developer với hơn 3 năm kinh nghiệm trong việc tạo ra các ứng dụng web hiệu quả, 
              trực quan và thân thiện với người dùng. Tôi đam mê tạo ra những trải nghiệm người dùng mượt mà và thiết kế 
              web đẹp mắt, tối ưu hóa cho mọi thiết bị.
            </p>
            <p className="mb-6 text-gray-700">
              Tôi thành thạo các công nghệ hiện đại như React, Next.js và Tailwind CSS, luôn không ngừng học hỏi 
              để bắt kịp xu hướng phát triển web mới nhất. Mục tiêu của tôi là tạo ra những sản phẩm 
              không chỉ đẹp mắt mà còn mang lại giá trị thực sự cho người dùng.
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <h4 className="text-blue-500 text-3xl font-bold">3+</h4>
                <p className="text-gray-600">Năm kinh nghiệm</p>
              </div>
              <div className="text-center">
                <h4 className="text-blue-500 text-3xl font-bold">20+</h4>
                <p className="text-gray-600">Dự án hoàn thành</p>
              </div>
              <div className="text-center">
                <h4 className="text-blue-500 text-3xl font-bold">15+</h4>
                <p className="text-gray-600">Khách hàng hài lòng</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
