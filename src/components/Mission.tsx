import { AnimatedSection } from './AnimatedSection';
import { Target, Lightbulb, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Mission() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-blue text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <AnimatedSection direction="up" className="mb-16">
           <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-brand-orange-light tracking-widest uppercase">Our Vision & Goals</span>
              <div className="h-px w-16 bg-brand-orange"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
              Our Vision & Goals
            </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
          
          {/* Video / Image Box */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="relative h-full min-h-[400px] w-full group overflow-hidden">
               <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-brand-blue/40 group-hover:bg-brand-blue/20 transition-colors duration-500"/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue hover:text-brand-orange transition-colors shadow-xl">
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </button>
                </div>
            </div>
          </AnimatedSection>

          {/* Combined Vision & Goals Box */}
          <AnimatedSection direction="up" delay={0.2} className="bg-white text-gray-800 p-10 md:p-14">
            <div className="flex gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-gray-light flex items-center justify-center rounded-sm text-brand-blue transition-transform hover:-translate-y-2 duration-300">
                <Lightbulb className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 bg-brand-gray-light flex items-center justify-center rounded-sm text-brand-blue transition-transform hover:-translate-y-2 duration-300">
                <Target className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-blue-dark mb-4">Our Vision & Goals</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our mission is to build long-term, win-win partnerships and alliances with each of our employees and customers. We are committed to fostering an environment of stability and growth.
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
               <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                 <span>Building long-term, sustainable partnerships.</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                 <span>Fostering stability, security, and professional growth.</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                 <span>Delivering value to both employees and clients.</span>
               </li>
            </ul>
            <Link to="/mission" className="bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 font-medium transition-colors inline-flex items-center gap-2">
              Read More
              <span className="text-xl leading-none">&rarr;</span>
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
