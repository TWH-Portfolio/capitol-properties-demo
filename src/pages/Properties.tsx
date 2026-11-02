import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Bed, Bath, DollarSign } from 'lucide-react'
import Seo from '../components/Seo'

const available = [
  {
    title: '2BR/1BA Condo, Kihei',
    address: 'South Kihei Rd, Kihei',
    beds: 2,
    baths: 1,
    rent: 2450,
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop',
    features: ['Lanai with ocean view', 'In-unit washer/dryer', 'Assigned parking', 'Pool and BBQ area'],
  },
  {
    title: '3BR/2BA House, Wailuku',
    address: 'Lower Main St, Wailuku',
    beds: 3,
    baths: 2,
    rent: 3200,
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&auto=format&fit=crop',
    features: ['Fenced yard', 'Covered carport', 'Pet-friendly with deposit', 'Recently renovated kitchen'],
  },
  {
    title: '1BR/1BA Apartment, Kahului',
    address: 'Lono Ave, Kahului',
    beds: 1,
    baths: 1,
    rent: 1850,
    img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format&fit=crop',
    features: ['Utilities included', 'Walking distance to Queen Kaahumanu Center', 'Coin laundry on-site', 'Month-to-month available'],
  },
]

const stats = [
  { value: '347', label: 'Total units managed' },
  { value: '96.2%', label: 'Average occupancy rate' },
  { value: '13', label: 'Average days to lease' },
  { value: '$2,340', label: 'Average monthly rent' },
]

export default function Properties() {
  return (
    <main id="main" tabIndex={-1} className="pt-20">
      <Seo
        title="Available Rentals | Capitol Properties | Maui"
        description="Browse available rental properties managed by Capitol Properties on Maui. Condos, houses, and apartments in Kahului, Kihei, Wailuku, and across Central and South Maui."
        canonical="https://capitol-properties-demo.thewateringhole.com/properties"
      />

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
            alt="Maui residential properties with mountain backdrop"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-navy-deep/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Available rentals on Maui.
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Current vacancies across our managed portfolio. Updated weekly.
            Apply online or call the office for a showing.
          </p>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="bg-navy py-8" aria-label="Portfolio statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-gold">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Listings */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-navy mb-8">
            Currently available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {available.map((listing) => (
              <div key={listing.title} className="card overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={listing.img}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-navy">{listing.title}</h3>
                    <div className="flex items-center gap-1 text-gold font-extrabold">
                      <DollarSign className="w-4 h-4" />
                      {listing.rent.toLocaleString()}/mo
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {listing.address}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5" />
                      {listing.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5" />
                      {listing.baths}
                    </span>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {listing.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate">
                        <div className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-navy hover:text-gold transition-colors inline-flex items-center gap-1"
                  >
                    Schedule a showing
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Owners */}
      <section className="bg-cream-dark section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">
            Own a rental on Maui?
          </h2>
          <p className="text-slate mb-8">
            We will evaluate your property, estimate rental income, and explain our management process. No commitment required.
          </p>
          <Link to="/contact" className="btn-primary text-center inline-flex">
            Request a free rental analysis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  )
}
