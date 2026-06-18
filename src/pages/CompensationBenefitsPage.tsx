import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Gift, Award, TrendingUp, ShieldCheck } from 'lucide-react';

export function CompensationBenefitsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Jupiter Compensation and Benefits</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Rewarding talent, loyalty, and commitment with industry-leading packages.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="flex-grow max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="space-y-8"
          >
            <div className="flex items-center gap-4 text-brand-orange">
              <div className="p-4 bg-white shadow-sm border border-brand-orange/20 rounded-2xl">
                <Gift className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-brand-blue-dark">Valuing Our People</h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to build a long term win-win partnership and alliance with each of our Employee. Jupiter's compensation and benefits package is among the best in the industry.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-brand-orange relative overflow-hidden">
               <div className="absolute -right-4 -bottom-4 opacity-5">
                 <Award className="w-32 h-32 text-brand-blue-dark" />
               </div>
              <p className="text-brand-blue-dark font-medium text-lg italic relative z-10 leading-relaxed">
                "We recognize that talent, loyalty, integrity, and commitment to professionalism and to the firm needs to be rewarded."
              </p>
            </div>
            
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "Competitive Pay", desc: "Top-tier compensation packages that match your expertise and market value.", icon: TrendingUp },
              { title: "Comprehensive Benefits", desc: "Health, dental, and vision coverage to keep you and your family secure.", icon: ShieldCheck },
              { title: "Recognition", desc: "Regular rewards for exceptional performance and dedication.", icon: Award },
              { title: "Long-Term Security", desc: "A stable career path with clear opportunities for growth and advancement.", icon: Gift }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-orange/30 transition-all group">
                  <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                    <Icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue-dark mb-3 leading-tight">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
