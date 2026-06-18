import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart, Users, Star, ShieldCheck } from 'lucide-react';

export function JupiterFuturePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveInfo: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        comment: '',
        name: '',
        email: '',
        website: '',
        saveInfo: false
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col font-sans text-[#2f3c4e]">
      {/* Hero Section */}
      <div className="bg-brand-blue-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-brand-blue-dark/80 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-orange"></div>
              <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Careers</span>
              <div className="h-px w-8 bg-brand-orange"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">The Jupiter Future</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Fostering an environment conducive to stability, security, and growth.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          {/* Content Section */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="space-y-8 max-w-4xl mx-auto text-center"
          >
             <div className="flex justify-center mb-8">
               <div className="p-4 bg-white shadow-sm border border-brand-orange/20 rounded-2xl inline-flex">
                 <Heart className="w-10 h-10 text-brand-orange" />
               </div>
             </div>

            <p className="text-gray-600 text-xl font-medium leading-relaxed border-b border-gray-200 pb-8">
              Our mission is to build long term win-win partnerships and alliances with each of our employees and customers.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed text-left">
              We at Jupiter are proud that we have a low turnover of employees, primarily due to our commitment towards fostering an environment conducive to stability and growth. Our team is an extended family of like-minded professionals, and we work towards providing the security, stability, and encouragement that is to be expected from a family. 
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand-orange relative overflow-hidden mt-8 text-left">
               <div className="absolute -right-4 -bottom-4 opacity-5">
                 <Users className="w-32 h-32 text-brand-blue-dark" />
               </div>
              <p className="text-brand-blue-dark font-semibold text-lg italic relative z-10 leading-relaxed">
                "We can assure our prospective employees that their decision to join this family will reap them many rewards in their future."
              </p>
            </div>
            
          </motion.div>

        </div>

        {/* Reply Form Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, delay: 0.2 }}
           className="max-w-3xl mx-auto mt-24 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">Leave a Reply</h3>
            <p className="text-gray-500 text-sm">
              Your email address will not be published. Required fields are marked *
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                Comment <span className="text-red-500">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                required
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors resize-none"
                placeholder="Write your comment here..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-colors"
                placeholder="https://your-website.com"
              />
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center h-5">
                <input
                  id="saveInfo"
                  name="saveInfo"
                  type="checkbox"
                  checked={formData.saveInfo}
                  onChange={handleChange}
                  className="w-4 h-4 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
                />
              </div>
              <label htmlFor="saveInfo" className="text-sm text-gray-600">
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full sm:w-auto px-8 py-4 rounded-lg font-bold tracking-wide transition-all ${
                isSubmitted 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-brand-orange hover:bg-brand-orange-light text-white shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5'
              }`}
            >
              {isSubmitted ? 'Comment Posted!' : 'Post Comment'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
