import { motion } from 'motion/react';
import { useEffect } from 'react';

export function FeedbackPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[70vh] w-full bg-brand-gray-light">
      {/* Header Banner */}
      <div className="bg-brand-blue-dark py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Feedback</h1>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-10 md:p-12 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-bold text-brand-orange tracking-widest uppercase">We Value Your Opinion</span>
            <div className="h-px w-16 bg-brand-orange"></div>
          </div>
          <h2 className="text-3xl font-bold text-brand-blue-dark mb-8">
            Tell us how we are doing
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your feedback helps us understand what we do well and where we can improve. Please take a moment to share your experience with Jupiter Consulting Services.
          </p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">How would you rate your experience? (1-5)</label>
              <select className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all">
                <option value="">Select a rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Fair</option>
                <option value="1">1 - Poor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
              <textarea 
                rows={6}
                placeholder="Please share your thoughts..." 
                className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 font-medium transition-colors w-full md:w-auto"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
