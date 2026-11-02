import { Link } from 'react-router-dom'
import { ArrowRight, Phone, ClipboardCheck, DollarSign, Wrench, FileText, Search, Home, Shield, Users } from 'lucide-react'
import Seo from '../components/Seo'

const services = [
  {
    id: 'management',
    icon: Home,
    title: 'Full-Service Property Management',
    body: 'Day-to-day operations for your Maui rental. We handle tenant communication, lease enforcement, move-in/move-out inspections, and vendor coordination. Each property gets a dedicated manager who knows the unit, the tenant, and the neighborhood.',
    bullets: [
      'Monthly drive-by inspections, interior every 6 months with photos',
      'Lease renewal negotiations 90 days before expiration',
      'HOA and condo association liaison',
      'Neighbor complaint resolution',
    ],
  },
  {
    id: 'placement',
    icon: Search,
    title: 'Tenant Screening and Placement',
    body: 'Finding a qualified tenant fast. We market vacancies across 6 platforms, conduct showings, and run background, credit, income, and rental history checks. Average time from listing to signed lease: 13 days.',
    bullets: [
      'Listed on Zillow, Apartments.com, Craigslist, Facebook Marketplace, and two local boards',
      'Background check, credit pull, income verification, landlord references',
      'Average 3 applicants screened per vacancy',
      'Move-in condition report with timestamped photos',
    ],
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Maintenance Coordination',
    body: '24-hour emergency line. 40+ licensed Maui vendors. No repair above $500 without owner approval. Every job gets a photo before and after, plus a copy of the invoice.',
    bullets: [
      '24/7 emergency response for water, fire, and lockout',
      'Routine repairs dispatched within one business day',
      'Annual preventive maintenance schedule (AC filters, gutters, smoke detectors)',
      'Vendor invoices shared with monthly statement',
    ],
  },
  {
    id: 'reporting',
    icon: FileText,
    title: 'Owner Reporting and Financials',
    body: 'Monthly statements emailed by the 15th. Year-end tax documents (1099, Schedule E summary) by January 31. Every dollar in, every dollar out, documented.',
    bullets: [
      'Monthly income and expense statement',
      'Year-end 1099 and Schedule E summary for your CPA',
      'Online owner portal with real-time ledger access',
      'Annual market rent analysis with adjustment recommendation',
    ],
  },
]

const pricing = [
  {
    title: 'Full Management',
    price: '8%',
    unit: 'of monthly rent collected',
    features: [
      'All four service departments',
      'Dedicated property manager',
      'Online owner portal',
      '24/7 emergency line',
      'Monthly and year-end reporting',
    ],
    cta: 'Request a proposal',
    primary: true,
  },
  {
    title: 'Tenant Placement Only',
    price: "75%",
    unit: "of first month's rent",
    features: [
      'Vacancy marketing on 6 platforms',
      'Full applicant screening',
      'Lease preparation and execution',
      'Move-in condition report',
      'No ongoing management fees',
    ],
    cta: 'Get a placement quote',
    primary: false,
  },
]

export default function Services() {
  return (
    <main id="main" tabIndex={-1} className="pt-20">
      <Seo
        title="Services | Capitol Properties | Maui Property Management"
        description="Full-service property management, tenant screening, maintenance coordination, and owner reporting for Maui residential rentals. 8% management fee. 24/7 emergency line."
        canonical="https://capitol-properties-demo.thewateringhole.com/services"
      />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1920&q=80&auto=format&fit=crop"
            alt="Residential property exterior on Maui"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Four departments. One monthly fee.
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Screening, collecting, maintaining, reporting. Each handled by the same Kahului office that has been doing this since 2007.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-start ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-[10px] bg-cream-dark flex items-center justify-center shrink-0">
                    <svc.icon className="w-5 h-5 text-navy" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-navy">{svc.title}</h2>
                </div>
                <p className="text-slate leading-relaxed mb-4">{svc.body}</p>
                <ul className="space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <div className="card p-5 bg-cream-dark/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-navy" />
                    <span className="font-bold text-navy text-sm">Quick facts</span>
                  </div>
                  {svc.id === 'management' && (
                    <ul className="text-sm text-slate space-y-1.5">
                      <li>8% of monthly rent collected</li>
                      <li>No setup fee</li>
                      <li>Month-to-month contract</li>
                      <li>30-day cancellation notice</li>
                    </ul>
                  )}
                  {svc.id === 'placement' && (
                    <ul className="text-sm text-slate space-y-1.5">
                      <li>75% of first month's rent</li>
                      <li>Average 13 days to lease</li>
                      <li>3 applicants screened per vacancy</li>
                      <li>Placement guarantee: re-screen free if tenant breaks lease within 6 months</li>
                    </ul>
                  )}
                  {svc.id === 'maintenance' && (
                    <ul className="text-sm text-slate space-y-1.5">
                      <li>$500 owner approval threshold</li>
                      <li>40+ licensed Maui vendors</li>
                      <li>Emergency response 24/7</li>
                      <li>No markup on vendor invoices</li>
                    </ul>
                  )}
                  {svc.id === 'reporting' && (
                    <ul className="text-sm text-slate space-y-1.5">
                      <li>Statements by the 15th</li>
                      <li>1099 by January 31</li>
                      <li>Online portal access 24/7</li>
                      <li>Annual rent market analysis included</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-cream-dark section-padding" id="pricing">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-navy mb-4">
              Simple pricing. No hidden fees.
            </h2>
            <p className="text-slate max-w-xl mx-auto">
              Two options. Both month-to-month. Cancel with 30 days written notice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.title}
                className={`card p-8 ${plan.primary ? 'border-2 border-navy' : ''}`}
              >
                <h3 className="font-bold text-navy text-lg mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-navy">{plan.price}</span>
                  <span className="text-sm text-slate ml-2">{plan.unit}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate">
                      <ClipboardCheck className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={plan.primary ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">
            Questions about a specific property?
          </h2>
          <p className="text-slate mb-8">
            Call the office or send us the property address. We will tell you what we think it rents for and what management would look like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center">
              Send a property address
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
