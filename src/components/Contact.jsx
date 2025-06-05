import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = (data) => {
    // Simulate form submission
    try {
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      setIsError(false);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsError(true);
      setIsSubmitted(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          Liên hệ
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Họ tên
                </label>
                <input
                  id="name"
                  type="text"                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập họ tên của bạn"
                  {...register('name', { required: 'Vui lòng nhập họ tên' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="example@gmail.com"
                  {...register('email', { 
                    required: 'Vui lòng nhập email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email không hợp lệ"
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <textarea
                  id="message"
                  rows="5"                  className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập nội dung tin nhắn..."
                  {...register('message', { required: 'Vui lòng nhập nội dung' })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Gửi tin nhắn
              </button>
              
              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  Tin nhắn đã được gửi thành công! Cảm ơn bạn.
                </div>
              )}
              
              {isError && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  Đã có lỗi xảy ra. Vui lòng thử lại sau.
                </div>
              )}
            </form>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h3>
            <p className="text-gray-600 mb-8">
              Hãy liên hệ với tôi qua form bên cạnh hoặc thông qua các kênh xã hội dưới đây. 
              Tôi sẽ phản hồi lại bạn trong vòng 24 giờ.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>                  <a href="mailto:example@gmail.com" className="text-gray-600 hover:text-blue-500">
                    example@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaLinkedinIn className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                    linkedin.com/in/yourname
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaGithub className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                    github.com/yourusername
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
