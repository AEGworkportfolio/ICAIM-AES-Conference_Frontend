import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Call for Papers', path: '/call-for-papers' },
  { name: 'Registration', path: '/registration' },
  { name: 'Important Dates', path: '/important-dates' },
];

const resourceLinks = [
  { name: 'Keynote Speakers', path: '/speakers' },
  { name: 'Committees', path: '/committees' },
  { name: 'Contact Us', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl leading-tight">
                  <span className="text-white">ICAIM-AES</span>
                  <span className="text-orange-400">-2026</span>
                </div>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              International Conference on AI/ML Applications in Advanced Energy Systems
            </p>
            <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm mb-6">
              <div className="w-1 h-1 rounded-full bg-orange-400"></div>
              22–26th July 2026
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-700/50 hover:bg-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-orange-400 transition-colors"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-orange-400" />
                </div>
                <span className="pt-1">aegresearchlens@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-orange-400" />
                </div>
                <span className="pt-1">+91 6268558700</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300 group">
                <div className="w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <span className="pt-1">VIDYAPEETH INSTITUTE OF SCIENCE AND TECHNOLOGY BHOPAL, 462022, INDIA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        
      </div>
    </footer>
  );
}