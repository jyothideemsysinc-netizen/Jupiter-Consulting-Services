import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Printer } from 'lucide-react';
import { useEffect } from 'react';

export function ContactUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[70vh] w-full bg-brand-gray-light">
      {/* Header Banner */}
      <div className="bg-brand-blue-dark py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578574577884-a15d78701047?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="w-16 h-1 bg-brand-orange mx-auto"></div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-10 md:p-12 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold text-brand-orange tracking-widest uppercase">Get in touch</span>
              <div className="h-px w-16 bg-brand-orange"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-10">
              Corporate Head Quarters
            </h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-brand-gray-light flex flex-shrink-0 items-center justify-center text-brand-blue-dark rounded-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2f3c4e] mb-2">USA</h3>
                  <p className="text-gray-600 leading-relaxed">
                    16024 Manchester Road, Suite 262<br />
                    St. Louis, MO 63011
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-brand-gray-light flex flex-shrink-0 items-center justify-center text-brand-blue-dark rounded-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2f3c4e] mb-2">Telephone</h3>
                  <p className="text-gray-600 leading-relaxed">(636)-343-5801</p>
                </div>
              </div>

              {/* Fax */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-brand-gray-light flex flex-shrink-0 items-center justify-center text-brand-blue-dark rounded-sm">
                  <Printer className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2f3c4e] mb-2">Fax</h3>
                  <p className="text-gray-600 leading-relaxed">(636)-343-5894</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-brand-gray-light flex flex-shrink-0 items-center justify-center text-brand-blue-dark rounded-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2f3c4e] mb-2">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="mailto:jcs@jupiterconsulting.com" className="hover:text-brand-orange transition-colors">
                      jcs@jupiterconsulting.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side - Simple Form Layout */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-10 md:p-12 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-brand-blue-dark mb-6">Send us a message</h3>
            <p className="text-gray-600 mb-8">Feel free to drop us a message below and we will get back to you as soon as possible.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 bg-brand-gray-light border-none focus:ring-2 focus:ring-brand-orange outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 font-medium transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>                
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-white p-4 shadow-lg h-96 w-full max-w-5xl mx-auto"
          >
            <iframe 
              title="Jupiter Consulting Services Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.1585246237697!2d-90.54018312443048!3d38.63293816550731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d4c9d9d9d9d9%3A0x9d9d9d9d9d9d9d9d!2s16024+Manchester+Rd%2C+Ellisville%2C+MO+63011!5e0!3m2!1sen!2sus!4v1689123456789!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
      </div>
    </div>
  );
}
