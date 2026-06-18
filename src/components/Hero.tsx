import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video & Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://www.image2url.com/r2/default/videos/1781782679039-3a5365ef-11ce-438f-a69f-9c55c74924bd.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-brand-blue-dark/70 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          IT  consulting services for your business 
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm md:text-base text-gray-300 font-medium tracking-wide uppercase"
        >
          Passionate About Driving Success For Businesses
        </motion.p>
      </div>
    </div>
  );
}
