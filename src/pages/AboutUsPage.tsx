import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Users, Award, Shield, ArrowRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-gray-light font-sans text-[#2f3c4e]">
      {/* Hero Section */}
      <div className="bg-brand-blue-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
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
              <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Overview</span>
              <div className="h-px w-8 bg-brand-orange"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Jupiter Consulting Services is an IT (Information Technology) services company focused on providing project and outsourcing solutions and services for clients worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-24">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team meeting" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-brand-orange text-white p-6 rounded-tr-2xl">
                <span className="text-4xl font-bold block mb-1">1998</span>
                <span className="text-sm font-medium tracking-wider uppercase">Founded In</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark leading-tight">
              Delivering Value & Competitive Advantage
            </h2>
            <div className="w-20 h-1 bg-brand-orange"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Headquartered in St. Louis MO, Jupiter provides total solutions that deliver value while providing a competitive advantage for its clients. Since beginning operations in late 1998, Jupiter has developed a client base numbering several Fortune 100 firms, with whom we have signed multi-year contracts for a wide range of IT services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jupiter works with its clients on-site, off-site, and offshore or in any combination that meets its clients’ needs. Offshore support is provided through a sister company. We are among the fastest growing consulting companies in the country. We specialize in working with large client environments.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-semibold">
              We believe in providing quality services. All of our consultants are highly qualified and our goal is to provide top-level services to our clients at any cost. We excel in obtaining repeat business through strong client relationship building.
            </p>
          </motion.div>
        </div>

        {/* Industries Row */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-brand-blue-dark mb-4 text-center">Industries We Serve</h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-12"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Automotive", "Brokerage", "Consulting", "Food/Beverage",
            "Pharmaceuticals", "Travel", "Banking/Finance", "Chemical/Petroleum",
            "Distribution", "Insurance", "Retail", "Biomedical",
            "Computers", "Education", "Manufacturing", "Telecommunications"
          ].map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md hover:border-brand-orange/30 transition-all group"
            >
              <div className="w-2 h-2 rounded-full bg-brand-orange group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-700 font-medium">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-brand-blue-dark text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Want to know more about how we can help?</h2>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-4 font-bold tracking-wide transition-colors rounded-lg shadow-lg shadow-brand-orange/20">
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
