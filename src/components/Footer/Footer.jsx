import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const programs = [
    { name: "Blood Donation", href: "blood-donation" },
    { name: "International Young School", href: "international-young-school" },
    { name: "Emergency Services", href: "emergency-services" },
    { name: "Child Protection", href: "child-protection" },
    { name: "Women's Empowerment", href: "womens-rights" },
    { name: "Climate Change & Human Rights Justice", href: "climate-change-human-rights-justice" },
    { name: "Advocacy & Justice", href: "advocacy-justice" },
    { name: "Research", href: "research" }

  ]

  const quickLinks = [
    { name: 'Who We Are', href: 'who-we-are' },
    { name: 'Our Mission', href: 'who-we-are#mission' },
    { name: 'Our Vision', href: 'who-we-are#vision' },
    { name: 'Leadership', href: 'leadership' },
    { name: 'Global Presence', href: 'global-presences' },
    { name: 'Annual Reports', href: '#' },
  ]

  const resources = [
    { name: 'Latest News', href: 'news' },
    { name: 'Press Releases', href: '#' },
    { name: 'Photos Gallery', href: '#' },
    { name: 'Partner With Us', href: '#' },
    { name: 'Volunteer', href: '#' }
  ]

  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* Newsletter Section done */}
      <div className="border-y border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Stay Connected With Our Mission</h3>
            <p className="text-slate-400 text-lg">
              Join our community and receive updates on our humanitarian work and impact stories from the largest Rohingya Refugee camp of Cox's Bazar, Bangladesh and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <input
                type="email"
                placeholder="Disabled as of now"
                disabled
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-emerald-500 h-12 p-2 rounded-lg "
              />
              <button type='submit' className="bg-[#058610] hover:bg-emerald-700 text-white h-12 px-6 whitespace-nowrap rounded-full flex items-center justify-center">
                Subscribe <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer design fully done with responsiveness */}
      <div className="container mx-auto px-4 py-12 md:py-16 border-b border-slate-800">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section done */}
          <div className="lg:col-span-4">
            <div className="flex gap-1 items-center">
              <div className="h-14 my-5 ">
                <img src="/logo.jpeg" className="h-full rounded-full " alt="CRY Logo" />
              </div>
              <div>
                <h2>CRY Humanitarian</h2>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-sm">
                <Mail className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>info@cryhumanitarian.org</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <Phone className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Regional Offices across Asia-Pacific</span>
              </div>
            </div>
          </div>

          {/* Quick Links done */}
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

          {/* Programs section done */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program?.href}
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                  >
                    {program?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources done */}
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
              <li><a
                href="/donate-us"
                className="text-emerald-500 transition-colors text-base hover:font-semibold inline-block hover:translate-x-1 duration-200"
              >
                Donate Us
              </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer done*/}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Copyright part */}
          <div className="text-sm text-slate-500 text-center md:text-left">
            <p> &copy; {currentYear} Comrades of Rohingya Youth (CRY). All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
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

      {/* Trust Badge done */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <span className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Refugee Led NGO</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Transparent Operations</span>
            </span>
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