import { motion } from 'motion/react';
import { useEffect } from 'react';
import { ShieldCheck, Users, Briefcase, Award } from 'lucide-react';

export function JobSecurityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-gray-light flex flex-col font-sans text-[#2f3c4e]">
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Jupiter Job Security</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              We are committed to the long-term security, stability, and growth of our employees.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="flex-grow max-w-5xl mx-auto px-4 md:px-8 xl:px-12 py-16 md:py-24">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8">
             <div className="p-4 bg-brand-blue-dark/10 rounded-2xl">
               <ShieldCheck className="w-10 h-10 text-brand-blue-dark" />
             </div>
             <h2 className="text-3xl font-bold text-brand-blue-dark">Your Security, Our Commitment</h2>
          </div>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="font-medium text-brand-blue-dark">
              Our mission is to build a long term win-win partnership and alliance with each of our Employees. Jupiter is committed to long-term job security of its employees.
            </p>
            <p>
              This is a firm that plans its work force based on long range industry trends and market conditions. Jupiter Consulting makes conservative hiring decisions based on careful analysis, and once committed, Jupiter provides a safe and stable environment for its long term employee.
            </p>
            <p>
              Jupiter provides full compensation and benefits to its consulting work force even during the downtime between projects. The company is also committed to sponsoring its employees for permanent residency in the United States, if they so desire, at the company’s expense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {[
              { icon: Briefcase, title: "Stable Environments", desc: "Conservative, analysis-driven hiring for long-term safety." },
              { icon: Users, title: "Full Compensation", desc: "Benefits supported even during project downtime." },
              { icon: Award, title: "Career Support", desc: "Commitment to permanent residency sponsorship." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-gray-light p-6 rounded-2xl border border-gray-100">
                <feature.icon className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-bold text-lg text-brand-blue-dark mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
