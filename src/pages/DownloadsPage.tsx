import { motion } from 'motion/react';
import { useEffect } from 'react';
import { FileText, Download } from 'lucide-react';

export function DownloadsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadFiles = [
    { title: "Jupiter Time Sheet", name: "JCS-time-sheet.doc" },
    { title: "Jupiter Brochure", name: "Jupiter.pdf" },
    { title: "W-9 Form", name: "W-9.pdf" },
    { title: "W-4 Form", name: "W-4.pdf" },
    { title: "Expense Report", name: "Jupiter-Expense-Reports.xls" },
    { title: "Employee Hand Book", name: "Employee Hand Book" },
    { title: "Federal labor Law Posting", name: "Fed_Poster" },
  ];

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Downloads</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Access necessary forms, documents, and resources here.
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="flex-grow max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
        >
          <div className="space-y-4">
            {downloadFiles.map((file, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-brand-gray-light/50 rounded-2xl hover:bg-brand-gray-light transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <FileText className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-blue-dark">{file.title}</h3>
                    <p className="text-sm text-gray-500">{file.name}</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  className="flex items-center gap-2 px-6 py-3 bg-brand-blue-dark text-white rounded-xl font-bold text-sm hover:bg-brand-orange transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
