import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const programs = [
    'Blood Donor Summit',
    'International Young School',
    'Emergency Services',
    'Child Protection',
    'Women\'s Empowerment',
    'Climate Justice'
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Mission', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Global Presence', href: '#global' },
    { name: 'Annual Reports', href: '#' },
    { name: 'Careers', href: '#' }
  ]

  const resources = [
    { name: 'Research & Publications', href: '#' },
    { name: 'News & Updates', href: '#' },
    { name: 'Events Calendar', href: '#' },
    { name: 'Media Kit', href: '#' },
    { name: 'Partner With Us', href: '#' },
    { name: 'Volunteer', href: '#' }
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">
      
      {/* Newsletter Section */}
      <div className="border-y border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Stay Connected With Our Mission</h3>
            <p className="text-slate-400 text-lg">
              Join our community and receive updates on our humanitarian work and impact stories
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-emerald-500 h-12 p-2 rounded-lg "
              />
              <button className="bg-[#058610] hover:bg-emerald-700 text-white h-12 px-6 whitespace-nowrap rounded-full flex items-center justify-center">
                Subscribe <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 border-b border-slate-800">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex gap-1 items-center">
              <div className="h-14 my-5 ">
                <img src="/logo.jpeg" className="h-full rounded-full " alt="CRY Logo" />
              </div>
              <div>
                <h2>CRY Organization</h2>
              </div>
              </div>
                 
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <Mail className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>info@cryhumanitarian.org</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <Phone className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Regional Offices across Asia-Pacific</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href="#programs"
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Call to Action */}
            <button className="w-full rounded-full p-2 bg-[#058610] hover:bg-emerald-700 text-white font-medium">
              Donate Now
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-slate-500 text-center md:text-left">
            <p>© {currentYear} Comrades of Rohingya Youth (CRY). All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-emerald-500 transition-colors">Cookie Policy</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500 hidden sm:inline">Follow us:</span>
            <div className="flex items-center space-x-3">
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 hover:bg-emerald-600 p-2.5 rounded-lg transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <span className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Registered NGO</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Transparent Operations</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Youth-Led Initiative</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}