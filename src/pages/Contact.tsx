import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import Seo from '../components/Seo'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (honeypot) return
    setSubmitted(true)
  }

  return (
    <main id="main" tabIndex={-1} className="pt-20">
      <Seo
        title="Contact | Capitol Properties | Kahului Maui"
        description="Contact Capitol Properties for a free rental analysis, management proposal, or tenant inquiry. Office at 347 Ano St # C, Kahului HI. Call (808) 555-0132."
        canonical="https://capitol-properties-demo.thewateringhole.com/contact"
      />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop"
            alt="Modern office building exterior"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get in touch.
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Owner inquiry, tenant question, or just want to learn how we work. We respond within 4 business hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-navy mb-6">Send us a message</h2>
              {submitted ? (
                <div className="card p-8 text-center" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">Message received.</h3>
                  <p className="text-slate text-sm">
                    We will get back to you within 4 business hours. If this is urgent,
                    call us at (808) 555-0132.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company_website">Company website</label>
                    <input
                      type="text"
                      id="company_website"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-[10px] border border-cream-dark bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-[10px] border border-cream-dark bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-[10px] border border-cream-dark bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-semibold text-navy mb-1.5">
                      I am a...
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="w-full px-4 py-3 rounded-[10px] border border-cream-dark bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                    >
                      <option value="owner">Property owner looking for management</option>
                      <option value="tenant">Current tenant</option>
                      <option value="prospective">Prospective tenant</option>
                      <option value="vendor">Vendor or contractor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-[10px] border border-cream-dark bg-white text-navy text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-y"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto text-center">
                    Send message
                    <Send className="w-4 h-4 ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-6">
                <h3 className="font-bold text-navy mb-4">Office</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-navy">347 Ano St # C</p>
                      <p className="text-sm text-slate">Kahului, HI 96732</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold shrink-0" />
                    <a href="tel:+18088711322" className="text-sm text-navy hover:text-gold transition-colors font-semibold">
                      (808) 555-0132
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gold shrink-0" />
                    <a href="mailto:info@capitol-properties-example.com" className="text-sm text-navy hover:text-gold transition-colors">
                      info@capitol-properties-example.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-navy">Mon - Fri</p>
                      <p className="text-sm text-slate">8:30 AM - 5:00 PM</p>
                      <p className="text-xs text-slate mt-1">24/7 emergency maintenance line</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Booking Placeholder */}
              <div className="card p-6 border-2 border-dashed border-cream-dark">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-navy" />
                  <h3 className="font-bold text-navy">Online Booking</h3>
                </div>
                <p className="text-sm text-slate mb-4">
                  Schedule a property review or owner consultation directly. Calendly widget will appear here once connected.
                </p>
                <a href="tel:+18088711322" className="btn-outline w-full text-center text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Book: (808) 555-0132
                </a>
              </div>

              {/* Map */}
              <div className="card overflow-hidden">
                <iframe
                  title="Capitol Properties office location"
                  src="https://maps.google.com/maps?q=347+Ano+St+Kahului+HI+96732&output=embed"
                  className="w-full h-64"
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
