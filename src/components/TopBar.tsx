import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-brand-blue-dark text-gray-300 py-2.5 px-4 md:px-8 xl:px-12 text-sm border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white">16024 Manchester Road, St. Louis, MO</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-4 h-4 text-white" />
            <span className="text-white">jcs@jupiterconsulting.com</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors cursor-pointer">
            <Phone className="w-4 h-4" />
            <span>(636)-343-5801</span>
          </div>
          <div className="flex items-center gap-4">
            <Facebook className="w-4 h-4 text-white hover:text-brand-orange cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-white hover:text-brand-orange cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 text-white hover:text-brand-orange cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}
