import { Facebook, Twitter, Youtube, Instagram, Play } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function Footer() {
  return (
    <footer className="bg-[#F5F6F8] text-[#2f3c4e] pt-20 pb-6 px-6 md:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-white inline-block p-2 rounded-lg">
                <img src="https://www.image2url.com/r2/default/images/1781777565095-e02b80ec-bba9-4d7f-a029-ceed206f6bcf.png" alt="Jupiter Consulting Services Logo" className="h-8 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-wider">Jupiter Consulting</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Jupiter Consulting Services is an IT services company focused on providing project and outsourcing solutions and services for clients worldwide.
            </p>
          </AnimatedSection>

          {/* Quick Links Col */}
          <AnimatedSection direction="up" delay={0.2}>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Homepage', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-brand-orange transition-colors flex items-center gap-2 text-sm">
                    <Play className="w-3 h-3 fill-current" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Corporate Col */}
          <AnimatedSection direction="up" delay={0.3}>
            <h4 className="text-lg font-bold mb-6">Corporate</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Vision & Goals', href: '/mission' },
                { name: 'Our Mission', href: '/team' },
                { name: 'Differentiators', href: '/differentiators' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-brand-orange transition-colors flex items-center gap-2 text-sm">
                    <Play className="w-3 h-3 fill-current" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Address Col */}
          <AnimatedSection direction="up" delay={0.4}>
            <h4 className="text-lg font-bold mb-6">Head Quarters</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              16024 Manchester Road, Suite 262<br />
              St. Louis, MO 63011
            </p>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <p className="text-gray-600 text-sm leading-relaxed hover:text-[#2f3c4e] transition-colors">
              Tel: (636)-343-5801<br />
              Email: jcs@jupiterconsulting.com
            </p>
          </AnimatedSection>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
             © {new Date().getFullYear()} Jupiter Consulting Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <Facebook className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Youtube className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
