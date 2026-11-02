import { Link } from 'react-router-dom'
import { ArrowRight, Users, Building, Clock } from 'lucide-react'
import Seo from '../components/Seo'

const team = [
  {
    name: 'Alan Fernandez',
    role: 'Principal Broker',
    tenure: 'Since 2007',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Lisa Nakamura',
    role: 'Property Manager',
    tenure: 'Since 2014',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Derek Chang',
    role: 'Maintenance Coordinator',
    tenure: 'Since 2016',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop',
  },
  {
    name: 'Malia Torres',
    role: 'Leasing Specialist',
    tenure: 'Since 2019',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop',
  },
]

const milestones = [
  { year: '2007', event: 'Founded in Kahului with 12 rental units' },
  { year: '2011', event: 'Crossed 100 units under management' },
  { year: '2015', event: 'Launched online owner and tenant portals' },
  { year: '2018', event: 'Expanded vendor network to 40+ licensed contractors' },
  { year: '2022', event: 'Reached 300 units across Central and South Maui' },
  { year: '2025', event: '347 units, 4 full-time staff, same Kahului office' },
]

export default function About() {
  return (
    <main id="main" tabIndex={-1} className="pt-20">
      <Seo
        title="About Us | Capitol Properties | Kahului Maui"
        description="Capitol Properties has managed Maui residential rentals since 2007. 4-person team in Kahului. 347 units under management. Licensed broker RB-21847."
        canonical="https://capitol-properties-demo.thewateringhole.com/about"
      />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop"
            alt="Aerial view of Maui residential neighborhood"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Same office. Same team. 18 years.
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We started with 12 units in 2007. Today we manage 347 across Maui.
            The office is still on Ano Street. The phone number has not changed.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-navy mb-6">
                Started by an owner who needed a manager and could not find one.
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  In 2007, Alan Fernandez bought his first rental condo in Kihei. He
                  interviewed three property management companies on Maui. One never
                  returned his call. One quoted fees but could not explain what was
                  included. The third had a two-month waitlist.
                </p>
                <p>
                  So he got his broker license and started Capitol Properties from a
                  spare bedroom in Kahului. The premise was simple: answer the phone,
                  explain the fees, report every dollar.
                </p>
                <p>
                  That premise has not changed. The operation has. We now manage 347
                  units with a team of four, a network of 40+ licensed vendors, and
                  online portals for both owners and tenants. The work still starts
                  with the same question Alan asked in 2007: if this were my property,
                  what would I want to know?
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                alt="Capitol Properties office in Kahului"
                className="rounded-[10px] w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="bg-cream-dark section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Dedicated Manager',
                body: 'Every property is assigned one manager. Owners and tenants call the same person, not a rotation.',
              },
              {
                icon: Building,
                title: 'Local Vendors Only',
                body: '40+ licensed Maui contractors. No mainland call centers dispatching off-island techs.',
              },
              {
                icon: Clock,
                title: 'Same-Day Response',
                body: 'Owner inquiries returned within 4 business hours. Emergency maintenance line answered 24/7.',
              },
            ].map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-[10px] bg-navy/5 flex items-center justify-center shrink-0">
                  <v.icon className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{v.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" id="team">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy mb-8 text-center">
            Four people. You will know all of them.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div key={person.name} className="card overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={person.img}
                    alt={`${person.name}, ${person.role} at Capitol Properties`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={533}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy">{person.name}</h3>
                  <p className="text-sm text-slate">{person.role}</p>
                  <p className="text-xs text-slate-light mt-1">{person.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-navy section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">
            From 12 units to 347.
          </h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex items-start gap-4">
                <span className="text-gold font-extrabold text-lg w-16 shrink-0">{m.year}</span>
                <div className="flex-1 border-l-2 border-white/10 pl-4 pb-2">
                  <p className="text-white/80 text-sm">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">
            Want to see how we would manage your property?
          </h2>
          <p className="text-slate mb-8">
            We will walk through your property, outline fees, and give you a
            projected rental income estimate. Takes about 20 minutes.
          </p>
          <Link to="/contact" className="btn-primary text-center inline-flex">
            Schedule a property review
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
