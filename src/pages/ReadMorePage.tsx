import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function ReadMorePage({ title }: { title: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="relative min-h-[60vh] w-full flex items-center justify-center bg-brand-gray-light py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 md:p-16 shadow-lg relative"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-brand-orange"></div>
            <span className="text-sm font-bold text-brand-orange-light tracking-widest uppercase">Read More</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-brand-blue-dark leading-tight mb-8">
            {title}
          </h1>
          
          <div className="prose prose-lg text-gray-600 max-w-none mb-12">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
            </p>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 text-brand-blue-dark font-medium hover:text-brand-orange transition-colors group">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
