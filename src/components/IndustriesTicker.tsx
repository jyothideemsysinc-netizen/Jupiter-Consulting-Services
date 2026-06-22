import { motion } from 'motion/react';

const industries = [
  "Automotive", "Banking/Finance", "Biomedical", "Brokerage", "Chemical/Petroleum",
  "Computers", "Consulting", "Distribution", "Food/Beverage", "Education",
  "Insurance", "Manufacturing", "Pharmaceuticals", "Retail", "Telecommunications", "Travel"
];

export function IndustriesTicker() {
  return (
    <div className="bg-brand-blue-dark py-4 overflow-hidden border-t-4 border-brand-orange">
      <div className="flex items-center whitespace-nowrap text-white">
        <motion.div
          className="flex gap-8 px-4"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...industries, ...industries].map((industry, index) => (
            <div key={index} className="flex items-center gap-8 text-lg font-medium opacity-80">
              <span>{industry}</span>
              <span className="text-brand-orange font-bold">|</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
