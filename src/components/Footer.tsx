import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">CP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-tight">Capitol</span>
                <span className="font-bold text-sm leading-tight">Properties</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Maui property management. Screening tenants, collecting rent, coordinating repairs, reporting to owners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/50">Pages</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/properties" className="text-sm text-white/70 hover:text-white transition-colors">Properties</Link></li>
              <li><Link to="/tenants" className="text-sm text-white/70 hover:text-white transition-colors">Tenant Resources</Link></li>
              <li><Link to="/contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/50">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#management" className="text-sm text-white/70 hover:text-white transition-colors">Property Management</Link></li>
              <li><Link to="/services#placement" className="text-sm text-white/70 hover:text-white transition-colors">Tenant Placement</Link></li>
              <li><Link to="/services#maintenance" className="text-sm text-white/70 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link to="/services#reporting" className="text-sm text-white/70 hover:text-white transition-colors">Owner Reporting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/50">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" />
                <span className="text-sm text-white/70">347 Ano St # C, Kahului, HI 96732</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/50 shrink-0" />
                <a href="tel:+18088711322" className="text-sm text-white/70 hover:text-white transition-colors">(808) 555-0132</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/50 shrink-0" />
                <a href="mailto:info@capitol-properties-example.com" className="text-sm text-white/70 hover:text-white transition-colors">info@capitol-properties-example.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/50 shrink-0" />
                <span className="text-sm text-white/70">Mon-Fri 8:30am - 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Capitol Properties. All rights reserved.
          </p>
          <Link to="/legal" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            Privacy &amp; Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
