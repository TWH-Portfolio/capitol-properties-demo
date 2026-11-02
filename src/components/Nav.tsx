import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Properties', path: '/properties' },
  { label: 'Tenants', path: '/tenants' },
  { label: 'Contact', path: '/contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-[10px] bg-navy flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">CP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-navy text-sm leading-tight tracking-tight">Capitol</span>
              <span className="font-bold text-navy text-sm leading-tight tracking-tight">Properties</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-[10px] transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-navy text-white'
                    : 'text-navy hover:bg-cream-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:+18088711322"
            className="hidden md:inline-flex items-center gap-2 btn-primary text-sm"
          >
            <Phone className="w-4 h-4" />
            (808) 555-0132
          </a>

          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-cream-dark">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded-[10px] transition-colors ${
                    location.pathname === link.path
                      ? 'bg-navy text-white'
                      : 'text-navy hover:bg-cream-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+18088711322"
                className="mt-2 btn-primary text-sm text-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (808) 555-0132
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
