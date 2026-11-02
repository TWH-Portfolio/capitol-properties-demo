import { Link } from 'react-router-dom'
import { ArrowRight, Phone, FileText, Wrench, CreditCard, Shield, HelpCircle, AlertTriangle, Clock } from 'lucide-react'
import Seo from '../components/Seo'

const resources = [
  {
    icon: CreditCard,
    title: 'Pay Rent Online',
    body: 'Log in to the tenant portal to pay rent, set up autopay, or view your payment history. Rent is due on the 1st. Late fees apply after the 5th.',
  },
  {
    icon: Wrench,
    title: 'Submit a Maintenance Request',
    body: 'Non-emergency repairs: submit through the tenant portal. Include a photo if possible. We dispatch a vendor within one business day.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Maintenance',
    body: 'Water leak, fire, gas smell, or lockout: call the 24-hour emergency line immediately. Do not use the online portal for emergencies.',
  },
  {
    icon: FileText,
    title: 'Lease and Documents',
    body: 'Your lease, move-in condition report, and community rules are available in the tenant portal. Contact your property manager for any questions.',
  },
  {
    icon: Shield,
    title: "Renter's Insurance",
    body: "All tenants are required to carry renter's insurance with a minimum $100,000 liability. Capitol Properties must be listed as an interested party.",
  },
  {
    icon: Clock,
    title: 'Move-Out Process',
    body: 'Provide 30 days written notice. Schedule a pre-move-out inspection. Leave the unit in broom-clean condition. Security deposit returned within 14 days.',
  },
]

const faqs = [
  {
    q: 'How do I pay rent?',
    a: 'Through the online tenant portal. You can pay by bank transfer (ACH) or debit card. Autopay is available. Rent is due on the 1st of each month.',
  },
  {
    q: 'When does the late fee apply?',
    a: 'A late fee of $50 applies if rent is not received by 11:59 PM on the 5th. The specific amount is stated in your lease.',
  },
  {
    q: 'How do I request maintenance?',
    a: 'Log in to the tenant portal and submit a maintenance request. Include a description and photo. For emergencies (water, fire, gas, lockout), call the 24-hour line at (808) 555-0132.',
  },
  {
    q: 'Can I have a pet?',
    a: 'Pet policies vary by property. Check your lease or contact your property manager. If pets are allowed, a pet deposit and monthly pet rent apply.',
  },
  {
    q: 'How do I renew my lease?',
    a: 'We will contact you 90 days before your lease expires with renewal options. If you want to go month-to-month, let us know at least 60 days before expiration.',
  },
  {
    q: 'What happens when I move out?',
    a: 'Give 30 days written notice. We will schedule a pre-move-out walk-through. Leave the unit broom-clean. Your security deposit (minus any deductions) is returned within 14 business days.',
  },
]

export default function Tenants() {
  return (
    <main id="main" tabIndex={-1} className="pt-20">
      <Seo
        title="Tenant Resources | Capitol Properties | Maui"
        description="Pay rent online, submit maintenance requests, and access your lease documents. 24-hour emergency maintenance line. Capitol Properties tenant portal."
        canonical="https://capitol-properties-demo.thewateringhole.com/tenants"
      />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1920&q=80&auto=format&fit=crop"
            alt="Person relaxing in a bright apartment living room"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Tenant resources.
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Pay rent, request maintenance, and find answers. Everything you need as a Capitol Properties tenant.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
          <AlertTriangle className="w-5 h-5 text-white shrink-0" />
          <p className="text-white text-sm font-semibold">
            Emergency maintenance (water, fire, gas, lockout):{' '}
            <a href="tel:+18088711322" className="underline">(808) 555-0132</a>
            {' '}(available 24/7)
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy mb-8">
            Quick access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="w-11 h-11 rounded-[10px] bg-cream-dark flex items-center justify-center mb-4">
                  <r.icon className="w-5 h-5 text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2">{r.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark section-padding" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-6 h-6 text-navy" />
            <h2 className="text-3xl font-extrabold text-navy">Frequently asked</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-5">
                <h3 className="font-bold text-navy mb-2">{faq.q}</h3>
                <p className="text-sm text-slate leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">
            Something not covered here?
          </h2>
          <p className="text-slate mb-8">
            Call the office during business hours or email your property manager directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-center">
              Contact us
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
