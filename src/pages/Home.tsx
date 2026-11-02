import { Link } from 'react-router-dom'
import { ArrowRight, Shield, ClipboardCheck, DollarSign, Wrench, Star, MapPin, Phone } from 'lucide-react'
import Seo from '../components/Seo'

const stats = [
  { value: '347', label: 'Units Managed' },
  { value: '18', label: 'Years on Maui' },
  { value: '96.2%', label: 'Occupancy Rate' },
  { value: '4.8', label: 'Owner Satisfaction' },
]

const services = [
  {
    icon: ClipboardCheck,
    title: 'Tenant Screening',
    desc: 'Background checks, income verification, rental history, and credit review. Average 3 applicants screened per vacancy.',
    cta: 'See screening process',
    href: '/services#placement',
  },
  {
    icon: DollarSign,
    title: 'Rent Collection',
    desc: 'Online portal for tenants. Direct deposit to owners by the 10th. Delinquency follow-up starts day 6.',
    cta: 'How collection works',
    href: '/services#management',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    desc: '24-hour emergency line. Vetted Maui vendor network. Owner approval required above $500.',
    cta: 'Maintenance details',
    href: '/services#maintenance',
  },
  {
    icon: Shield,
    title: 'Owner Reporting',
    desc: 'Monthly statements, year-end tax documents, inspection photos, and market rent analysis.',
    cta: 'View report samples',
    href: '/services#reporting',
  },
]

const testimonials = [
  {
    quote: 'We own two condos in Kihei and live on the mainland. Capitol handles everything. Our units have been occupied for 14 consecutive months. The monthly reports are detailed enough that our CPA stopped asking follow-up questions.',
    name: 'David M.',
    detail: 'Condo owner, Kihei',
    date: 'September 2025',
  },
  {
    quote: 'After a bad experience with another management company, we moved our Wailuku rental to Capitol. They found a qualified tenant in 11 days and the rent has been on time every month since.',
    name: 'Sarah K.',
    detail: 'Single-family owner, Wailuku',
    date: 'March 2025',
  },
  {
    quote: 'The maintenance coordination alone is worth it. When our water heater failed at 9pm, Capitol had a plumber there by 7am the next morning. I got a text, a photo of the old unit, and an invoice. Done.',
    name: 'James T.',
    detail: '3-unit portfolio, Kahului',
    date: 'November 2024',
  },
]

const towns = [
  'Kahului', 'Wailuku', 'Kihei', 'Wailea', 'Lahaina',
  'Makawao', 'Paia', 'Haiku', 'Kula',
]

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Seo
        title="Capitol Properties | Property Management, Kahului Maui HI"
        description="Maui property management. Tenant screening, rent collection, maintenance coordination, and owner reporting. 347 units managed. 96.2% occupancy rate. Call (808) 555-0132."
        canonical="https://capitol-properties-demo.thewateringhole.com"
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80&auto=format&fit=crop"
            alt="Residential property with tropical landscaping on Maui"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/70 to-navy/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-2xl">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
              Maui Property Management
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              Your Maui rental,{' '}
              <span className="text-gold">managed like our own.</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">
              Tenant screening, rent collection, maintenance, and monthly reporting
              for residential properties across Maui. 347 units. 18 years. One office
              in Kahului.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary bg-gold hover:bg-gold/90 text-navy-deep text-center">
                Request a management proposal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a href="tel:+18088711322" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-center">
                <Phone className="w-4 h-4 mr-2" />
                (808) 555-0132
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-navy" aria-label="Key statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-gold">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding" id="services-overview">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              What we handle, so you don't have to.
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Four departments under one roof at our Kahului office. Each property
              gets a dedicated manager, not a call center.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                to={svc.href}
                className="card p-6 group hover:border-l-4 hover:border-l-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-cream-dark flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                    <svc.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-2">{svc.title}</h3>
                    <p className="text-slate text-sm leading-relaxed mb-3">{svc.desc}</p>
                    <span className="text-sm font-semibold text-navy group-hover:text-gold transition-colors inline-flex items-center gap-1">
                      {svc.cta}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Capitol */}
      <section className="bg-cream-dark section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
                347 units. One team. Zero surprises on your statement.
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Licensed and Bonded', detail: 'Hawaii Real Estate License RB-21847' },
                  { label: 'Owner Approval Threshold', detail: 'No repair over $500 without your sign-off' },
                  { label: 'Vacancy Turnaround', detail: 'Average 13 days from move-out to new lease signed' },
                  { label: 'Rent Disbursement', detail: 'Direct deposit to your account by the 10th of every month' },
                  { label: 'Inspection Cadence', detail: 'Drive-by monthly, interior every 6 months with photo report' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <div>
                      <span className="font-semibold text-navy">{item.label}.</span>{' '}
                      <span className="text-slate text-sm">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80&auto=format&fit=crop"
                alt="Keys being handed over during property management onboarding"
                className="rounded-[10px] w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-4 -left-4 bg-navy rounded-[10px] p-4 shadow-lg">
                <p className="text-gold font-extrabold text-2xl">18 yrs</p>
                <p className="text-white/70 text-xs">Managing Maui rentals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-2">
              4.8 from 62 owner reviews.
            </h2>
            <p className="text-slate">Owners managing properties from the mainland and across the islands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate leading-relaxed mb-4">
                  "{t.quote}"
                </blockquote>
                <div className="border-t border-cream-dark pt-3">
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-slate">{t.detail}</p>
                  <p className="text-xs text-slate-light mt-0.5">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Strip */}
      <section className="bg-navy py-8" aria-label="Service area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-white/50 text-sm font-semibold uppercase tracking-wider">
              Serving
            </span>
            {towns.map((town) => (
              <span key={town} className="flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="w-3 h-3 text-gold" />
                {town}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Considering a property manager for your Maui rental?
          </h2>
          <p className="text-slate mb-8 max-w-xl mx-auto">
            We will review your property, outline our fees, and give you a clear
            picture of projected rental income. No contracts until you are ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center">
              Request a proposal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="tel:+18088711322" className="btn-outline text-center">
              <Phone className="w-4 h-4 mr-2" />
              (808) 555-0132
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
