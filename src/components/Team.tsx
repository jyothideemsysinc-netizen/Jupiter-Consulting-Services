import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router-dom';

export function Team() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Images */}
        <AnimatedSection direction="left" className="relative">
          <div className="flex gap-4">
            <div className="w-1/2 pt-12">
               <div 
                className="w-full h-[400px] object-cover shadow-xl"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
            <div className="w-1/2 overflow-visible relative">
              <div className="absolute top-8 right-8 w-24 h-24 border-8 border-brand-orange rounded-full z-0 opacity-20 transform translate-x-1/2 -translate-y-1/2" />
              <div 
                className="w-full h-[450px] object-cover shadow-2xl relative z-10"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Right Side: Text content */}
        <AnimatedSection direction="right" delay={0.2} className="space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold text-gray-500 tracking-widest uppercase">Our Mission</span>
              <div className="h-px w-16 bg-brand-orange"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to build long-term, win-win partnerships and alliances with each of our employees and customers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At Jupiter, we pride ourselves on low employee turnover, driven by our commitment to stability and professional growth. We are an extended family of like-minded professionals working together to build a future defined by security and shared rewards.
            </p>
          </div>

          <Link to="/team" className="bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 font-medium transition-colors inline-flex items-center gap-2">
            Read More
            <span className="text-xl leading-none">&rarr;</span>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}
