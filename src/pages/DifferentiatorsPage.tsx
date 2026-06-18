import { motion } from 'motion/react';
import { useEffect } from 'react';
import { TrendingUp, Globe, Building2, Signal, Database, Target, Network, Layers } from 'lucide-react';

const differentiators = [
  {
    title: "Global Sourcing Capabilities",
    text: "Strong self sourcing capabilities from both the United States and India",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-blue-600",
    bgIcon: "bg-blue-100"
  },
  {
    title: "Blue-Chip Client Base",
    text: "Blue-chip US client base: multi-year contracts, multi-level projects",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-orange-600",
    bgIcon: "bg-orange-100"
  },
  {
    title: "Telecom Expertise",
    text: "Strong Telecom Service Provider",
    icon: Signal,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-purple-600",
    bgIcon: "bg-purple-100"
  },
  {
    title: "Data Warehousing",
    text: "Strong Data Warehousing technology",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-teal-600",
    bgIcon: "bg-teal-100"
  },
  {
    title: "Results-Focused Culture",
    text: "Effective resource management in a results-focused culture",
    icon: Target,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-red-600",
    bgIcon: "bg-red-100"
  },
  {
    title: "Flat Management Structure",
    text: "Flat, Field-oriented management structure",
    icon: Network,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-indigo-600",
    bgIcon: "bg-indigo-100"
  },
  {
    title: "Systems Integration",
    text: "In-depth knowledge of systems integration and systems outsourcing",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "text-green-600",
    bgIcon: "bg-green-100"
  }
];

export function DifferentiatorsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-gray-light font-sans text-[#2f3c4e]">
      {/* Header Banner */}
      <div className="bg-brand-blue-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark to-brand-blue-dark/80 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-orange"></div>
              <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Why Choose Us</span>
              <div className="h-px w-8 bg-brand-orange"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Differentiators</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed flex items-center justify-center gap-3">
              <TrendingUp className="text-brand-orange w-8 h-8 flex-shrink-0" />
              We are among the fastest growing consulting companies in the country.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid Content with Images */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-24">
        <div className="space-y-24">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-gray-200 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <div className="absolute inset-0 bg-brand-blue-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6 lg:px-8">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-sm ${item.bgIcon}`}>
                    <Icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark leading-tight">
                    {item.title}
                  </h2>
                  
                  <div className="h-1 w-16 bg-brand-orange rounded-full"></div>
                  
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-white border-t border-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-blue-dark rounded-[2rem] p-12 md:p-16 relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 w-full flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Experience the Jupiter Difference</h2>
              <p className="text-gray-300 mb-10 text-lg md:text-xl max-w-2xl">
                Partner with us to leverage our unique strengths and accelerate your business growth.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-4 font-bold tracking-wide transition-colors rounded-lg text-lg shadow-lg shadow-brand-orange/20">
                Work With Us
                <span className="text-xl">&rarr;</span>
              </a>
            </div>
            {/* Geometric decoration */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
