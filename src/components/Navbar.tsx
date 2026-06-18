import { motion } from 'motion/react';
import { ChevronDown, Menu, Phone, Hexagon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm w-full z-50 px-4 md:px-8 xl:px-12 py-5 border-b border-gray-100 sticky top-0">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-4 xl:gap-8 bg-white">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 shrink-0"
          >
            <img src="https://www.image2url.com/r2/default/images/1781777565095-e02b80ec-bba9-4d7f-a029-ceed206f6bcf.png" alt="Jupiter Consulting Services Logo" className="h-12 object-contain" />
            <span className="text-brand-blue-dark text-xl font-bold tracking-wider hidden sm:block">Jupiter Consulting Services</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex items-center gap-4 xl:gap-6 text-[#2f3c4e] text-xs xl:text-[13px] font-semibold tracking-wide"
        >
          <Link to="/" className="flex items-center gap-1.5 cursor-pointer group hover:text-brand-orange transition-colors">
            <span>HOME</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange transition-colors" />
          </Link>
          <div className="flex items-center gap-1.5 cursor-pointer group hover:text-brand-orange transition-colors relative py-2 -my-2">
            <span>CORPORATE</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange transition-colors" />
            
            {/* Submenu Dropdown */}
            <div className="absolute top-full left-0 w-60 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white shadow-xl border-t-2 border-brand-orange flex flex-col">
                <Link to="/about" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">About us</Link>
                <Link to="/mission" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Our vision & goals</Link>
                <Link to="/team" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Our mission</Link>
                <Link to="/differentiators" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors text-sm font-medium">Differentiators</Link>
              </div>
            </div>
          </div>
          <Link to="/services" className="flex items-center gap-1.5 cursor-pointer group hover:text-brand-orange transition-colors">
            <span>SERVICES</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange transition-colors" />
          </Link>
          <div className="flex items-center gap-1.5 cursor-pointer group hover:text-brand-orange transition-colors relative py-2 -my-2">
            <span>CAREERS</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange transition-colors" />
            
            {/* Submenu Dropdown */}
            <div className="absolute top-full left-0 w-72 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white shadow-xl border-t-2 border-brand-orange flex flex-col">
                <a href="https://www.dice.com/jobs/detail/s?caller=searchagain&q=jupiter+consulting+services&x=all&p=" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Current openings</a>
                <Link to="/careers/hot-requirements" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Hot requirements</Link>
                <Link to="/careers/security" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Jupiter job security</Link>
                <Link to="/careers/cross-platform-training" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Cross platform training</Link>
                <Link to="/careers/compensation" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Jupiter compensation and benefits</Link>
                <Link to="/careers/future" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">The Jupiter future</Link>
                <Link to="/careers/referral" className="px-6 py-3.5 text-[#2f3c4e] hover:bg-gray-50 hover:text-brand-orange transition-colors border-b border-gray-100 text-sm font-medium">Employee referral program</Link>
              </div>
            </div>
          </div>
          <Link to="/downloads" className="flex items-center gap-1.5 cursor-pointer group hover:text-brand-orange transition-colors">
            <span>DOWNLOADS</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/feedback" className="flex items-center gap-1.5 cursor-pointer group hover:text-brand-orange transition-colors">
            <span>FEEDBACK</span>
            <ChevronDown className="w-4 h-3.5 text-gray-400 group-hover:text-brand-orange transition-colors" />
          </Link>
          <Link to="/contact" className="hover:text-brand-orange transition-colors">CONTACT US</Link>
        </motion.div>

        {/* Contact Block CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden xl:flex items-center gap-3 shrink-0"
        >
          <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center">
            <Phone className="w-5 h-5 text-brand-orange" />
          </div>
          <div className="flex flex-col flex-shrink-0 whitespace-nowrap">
            <span className="text-gray-500 text-xs font-medium">Call us today!</span>
            <span className="text-brand-blue-dark font-black tracking-wide">+123 456 7890</span>
          </div>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue-dark">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white text-gray-900 shadow-xl flex flex-col p-6 font-semibold animate-in slide-in-from-top-2 z-50 border-t border-gray-100">
          <Link to="/" className="py-3 border-b border-gray-100 flex justify-between" onClick={() => setIsOpen(false)}>HOME <ChevronDown className="w-4 h-4" /></Link>
          <div className="border-b border-gray-100 flex flex-col">
            <a href="#" className="py-3 flex justify-between">CORPORATE <ChevronDown className="w-4 h-4" /></a>
            <div className="flex flex-col pl-4 pb-3 space-y-3 font-medium text-sm text-gray-600">
              <Link to="/about" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>About us</Link>
              <Link to="/mission" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Our vision & goals</Link>
              <Link to="/team" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Our mission</Link>
              <Link to="/differentiators" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Differentiators</Link>
            </div>
          </div>
          <Link to="/services" className="py-3 border-b border-gray-100 flex justify-between">SERVICES <ChevronDown className="w-4 h-4" /></Link>
          <div className="border-b border-gray-100 flex flex-col">
            <a href="#" className="py-3 flex justify-between">CAREERS <ChevronDown className="w-4 h-4" /></a>
            <div className="flex flex-col pl-4 pb-3 space-y-3 font-medium text-sm text-gray-600">
              <a href="https://www.dice.com/jobs/detail/s?caller=searchagain&q=jupiter+consulting+services&x=all&p=" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Current openings</a>
              <Link to="/careers/hot-requirements" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Hot requirements</Link>
              <Link to="/careers/security" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Jupiter job security</Link>
              <Link to="/careers/cross-platform-training" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Cross platform training</Link>
              <Link to="/careers/compensation" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Jupiter compensation and benefits</Link>
              <Link to="/careers/future" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>The Jupiter future</Link>
              <Link to="/careers/referral" className="hover:text-brand-orange" onClick={() => setIsOpen(false)}>Employee referral program</Link>
            </div>
          </div>
          <Link to="/downloads" className="py-3 border-b border-gray-100 flex justify-between" onClick={() => setIsOpen(false)}>DOWNLOADS <ChevronDown className="w-4 h-4" /></Link>
          <Link to="/feedback" className="py-3 border-b border-gray-100 flex justify-between">FEEDBACK <ChevronDown className="w-4 h-4" /></Link>
          <Link to="/contact" className="py-3">CONTACT US</Link>
          <div className="mt-6 flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-brand-orange" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs font-medium">Call us today!</span>
              <span className="text-brand-blue-dark font-black">+123 456 7890</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
