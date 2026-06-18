import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

export function HotRequirementsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hot Requirements</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our current open job opportunities and take the next step in your career.
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
           className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
             <div className="p-4 bg-brand-orange/10 rounded-2xl">
               <Briefcase className="w-10 h-10 text-brand-orange" />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-brand-blue-dark">Software Engineer</h2>
                <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mt-1">NOTICE OF JOB OPPORTUNITY</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex items-center gap-3">
              <MapPin className="text-brand-orange w-5 h-5" />
              <span className="text-gray-700 font-medium">St. Louis, MO</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-brand-orange w-5 h-5" />
              <span className="text-gray-700 font-medium">9:00 a.m. – 5:00 p.m. (M-F)</span>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="text-brand-orange w-5 h-5" />
              <span className="text-gray-700 font-medium">$75,500.00 per year</span>
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-3">Job duties / Requirements</h3>
              <p>Design, development, test, configure, customize, & implement software apps; analyze user requirements; modify & enhance existing software; resolve technical errors, etc. Requires Master’s deg. or education evaluated to Master’s in C.Sc., Info system, or related field. Demonstrated knowledge of Linux, SQL Server, Weblogic, XML, & Oracle required. Will accept any suitable combination of education, training, and/or work exp.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-3">Application Submission</h3>
              <p>Submit resumes: Recruitment & Employment Office, Jupiter Consulting Services, LLC, Attn: Job Ref#: JUP06290, P.O. Box 56625 , Atlanta , GA 30303.</p>
            </div>

            <div className="bg-brand-gray-light p-6 rounded-2xl text-sm italic border-l-4 border-gray-300">
              <strong>NOTE:</strong> This notice is being posted in connection with the filing of an application for permanent alien labor certification. Any person may provide documentary evidence bearing on the application to the Certifying Officer (CO) of the Department of Labor at U.S. Department of Labor, Employment and Training Administration, Office of Foreign Labor Certification, Atlanta National Processing Center, 233 Peachtree Street, Suite 410, Atlanta, GA 30303.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
