import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Eye, Target } from 'lucide-react';

export function VisionGoalsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#2f3c4e]">
      {/* Hero Section */}
      <div className="bg-brand-gray-light py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-orange"></div>
              <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Future Outlook</span>
              <div className="h-px w-8 bg-brand-orange"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-blue-dark mb-6">Our Vision & Goals</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
              Together we create an Enterprise for tomorrow and beyond.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-24">
        {/* Vision Statement */}
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
             <div className="absolute -inset-4 bg-gray-100 rounded-[2rem] transform rotate-3"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Vision outlook" className="w-full h-full object-cover" />
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-brand-orange mb-4">
                  <Eye className="w-8 h-8" />
                  <h2 className="text-3xl font-bold text-brand-blue-dark">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-xl leading-relaxed italic border-l-4 border-brand-orange pl-6 font-medium">
                  "To be a globally respected organization delivering innovative solutions and services that help shape the digital age."
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-brand-orange mb-4">
                  <Target className="w-8 h-8" />
                  <h2 className="text-3xl font-bold text-brand-blue-dark">Our Goals</h2>
                </div>
                <div className="bg-brand-gray-light p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To combine international; professional management expertise with a global technology workforce and work centers to provide IT project and outsourcing support responsively and cost-effectively.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
