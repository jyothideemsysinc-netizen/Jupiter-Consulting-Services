import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Users, DollarSign, FileText, Clock, Gift } from 'lucide-react';

export function EmployeeReferralPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Employee Referral Program</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Help us grow our family. Refer talented professionals and earn a rewarding bonus.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 xl:px-12 py-16 md:py-24">
        {/* Main Content Sections */}
        <div className="space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-brand-orange flex gap-6 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-orange" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-4">Who is Eligible to Participate?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Any employee on Jupiter’s payroll can participate with the exception of executive staff, employees in the Human Resources Department, and direct or indirect supervisors of the designated job opening.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-brand-blue-dark flex gap-6 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-brand-blue-dark" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-4">What positions are bonus eligible?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Any full or part-time position that has been posted on the Jupiter’s website is bonus eligible for <span className="font-bold text-brand-orange">$500.00 to $800.00</span> based upon the position hired.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-brand-orange flex gap-6 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-orange" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-4">How do I refer someone?</h2>
              <p className="text-gray-600 text-lg leading-relaxed space-y-4">
                <span className="block">Your referral should complete an Employee Referral Bonus Form and submit it with the application at the time they complete the application for employment (this can be done as late as the new employee’s first day of work).</span>
                <span className="block">Only candidates referred from external sources qualify for the bonus. Anyone who has worked for Jupiter within the last twelve months does not qualify as bonus eligible candidates. This includes regular, student, as well as employees working at Jupiter through a temporary agency or as an independent consultant.</span>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-4 border-brand-blue-dark flex gap-6 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-brand-blue-dark" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-4">When do I receive the bonus?</h2>
              <div className="bg-brand-gray-light p-6 rounded-xl inline-block mb-4">
                <div className="flex items-center gap-3 text-brand-blue-dark font-semibold">
                  <Clock className="w-5 h-5 text-brand-orange" />
                  <span>After 90 consecutive business days</span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                You will receive your bonus after the new employee has worked 90 consecutive business days. Both you and the new employee must be employed by Jupiter at the time of the bonus payment.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
