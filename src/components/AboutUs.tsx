import { AnimatedSection } from './AnimatedSection';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutUs() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Images */}
        <AnimatedSection direction="left" className="relative">
          <div className="relative h-[600px] w-full max-w-[500px] mx-auto lg:mx-0">
            {/* Main background image */}
            <div 
              className="absolute top-0 right-0 w-4/5 h-4/5 object-cover"
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            {/* Floating foreground image */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 border-8 border-white bg-white shadow-xl z-10 p-2">
               <div 
                className="w-full h-full object-cover"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top'
                }}
              />
            </div>
            
            {/* Stats Box overlay */}
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-brand-blue text-white p-8 shadow-2xl z-20">
              <div className="text-4xl font-bold mb-1">680<span className="text-brand-orange">+</span></div>
              <div className="text-sm font-medium whitespace-nowrap">Business Trust Us</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Side: Text content */}
        <AnimatedSection direction="right" delay={0.2} className="space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-brand-orange"></div>
              <span className="text-sm font-bold text-gray-500 tracking-widest uppercase">About Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue-dark leading-tight mb-6">
              Jupiter Consulting Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jupiter Consulting Services is an IT (Information Technology) services company focused on providing project and outsourcing solutions and services for clients worldwide.
            </p>
          </div>

          <div className="border-l-4 border-brand-orange pl-6 my-8">
             <p className="text-lg text-gray-700 italic font-medium leading-relaxed">
              "Jupiter provides total solutions that deliver value while providing a competitive advantage for its clients."
             </p>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <div className="p-3 bg-brand-gray-light text-brand-blue">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-blue-dark mb-2">Founded In 1998</h4>
              <p className="text-gray-600 text-sm">Specializing in working with large client environments and Fortune 100 firms.</p>
            </div>
          </div>

          <Link to="/about" className="bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 font-medium transition-colors inline-flex items-center gap-2">
            Read More
            <span className="text-xl leading-none">&rarr;</span>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}
