import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Globe, MapPin, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-gray-light font-sans text-[#2f3c4e]">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 xl:px-12 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-dark/5 clip-path-slant z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-orange"></div>
              <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Our Purpose</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-blue-dark mb-6 leading-tight">
              Our Mission
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 font-medium border-l-4 border-brand-orange pl-6">
              Our mission is to build long term win-win partnerships and alliances with each of our customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2"
          >
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Mission in action" className="rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-24">
        {/* Detailed Mission Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 md:p-14 rounded-3xl shadow-xl mb-24 border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-blue-dark">Client & Consultant First</h2>
              <div className="w-16 h-1 bg-brand-orange"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our clients and consultants remain our highest priority and we take pride in supporting both with honesty and respect. Their success is our success!
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jupiter Consulting is a market oriented fast growing company and our goal is to set the industry standard in customer satisfaction and professionalism.
              </p>
            </div>
            <div className="bg-brand-gray-light p-8 rounded-2xl relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-4 relative z-10">Dedication to Superior Service</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                Our dedication to providing clients superior service with competitive pricing has enabled us to grow and flourish over the past 5 years.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Global Presence */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark mb-6">Our Growing Reach</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Award, title: "5 Years", desc: "Of consistent growth and flourishing success." },
            { icon: Globe, title: "5 Countries", desc: "Global affiliates operating internationally." },
            { icon: MapPin, title: "20 States", desc: "Consultants working across the United States." },
            { icon: CheckCircle, title: "Industry Standard", desc: "Setting the bar in satisfaction & professionalism." }
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 transform rotate-3 group-hover:rotate-0">
                <value.icon className="w-10 h-10 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-dark mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-brand-blue-dark py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's build a win-win partnership and achieve success together. Contact us to learn more about our services.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 font-bold tracking-wide transition-all rounded-lg hover:bg-brand-orange-light shadow-lg shadow-brand-orange/30 hover:-translate-y-1">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
