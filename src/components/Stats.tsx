import { AnimatedSection } from './AnimatedSection';

export function Stats() {
  const stats = [
    { value: '680', label: 'Business Trust Us', suffix: '+' },
    { value: '1,354', label: 'Projects Done', suffix: '+' },
    { value: '97', label: 'Success Rate', suffix: '%' },
    { value: '15', label: 'Years Of Experience', suffix: 'Y+' },
  ];

  return (
    <section className="bg-brand-blue-dark text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x divide-gray-800/0 md:divide-gray-800">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index} 
              direction="up" 
              delay={index * 0.1}
              className="px-4"
            >
              <div className="text-4xl md:text-5xl font-bold mb-3 flex justify-center items-baseline">
                {stat.value}
                <span className="text-brand-orange font-medium text-3xl ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {stat.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
