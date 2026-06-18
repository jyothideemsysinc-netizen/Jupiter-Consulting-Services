import { AnimatedSection } from './AnimatedSection';

export function CTA() {
  return (
    <section className="relative py-24 px-6 md:px-12 flex items-center min-h-[400px]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070)' }}
      >
        <div className="absolute inset-0 bg-brand-blue/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl text-white">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Let's Discuss Your Business Goals & Schedule A Free Consultation Today
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-blue-100 leading-relaxed mb-8 max-w-xl text-lg font-light">
              Let's explore how the right strategy and technology can help your business grow and succeed.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <button className="bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-3.5 font-medium transition-colors inline-flex items-center gap-2">
              Get a Quotation
              <span className="text-xl leading-none">&rarr;</span>
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
