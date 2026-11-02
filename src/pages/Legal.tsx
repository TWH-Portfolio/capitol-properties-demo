import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'

export default function Legal() {
  return (
    <main id="main" tabIndex={-1} className="pt-12">
      <Seo
        title="Privacy & Terms | Capitol Properties"
        description="Privacy policy and terms of service for Capitol Properties website."
        canonical="https://capitol-properties-demo.thewateringhole.com/legal"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-extrabold text-navy mb-8">Privacy &amp; Terms</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Privacy Policy</h2>
            <p className="text-sm text-slate leading-relaxed mb-3">
              Capitol Properties ("we," "us," or "our") respects your privacy. This policy explains how we collect, use, and protect personal information submitted through this website.
            </p>
            <h3 className="font-semibold text-navy text-sm mt-4 mb-2">Information We Collect</h3>
            <p className="text-sm text-slate leading-relaxed">
              We collect information you voluntarily provide through our contact form: name, email address, phone number, and message content. We also collect standard web analytics data (page views, device type, referring source) through Google Analytics when enabled.
            </p>
            <h3 className="font-semibold text-navy text-sm mt-4 mb-2">How We Use Your Information</h3>
            <p className="text-sm text-slate leading-relaxed">
              Contact form submissions are used solely to respond to your inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
            <h3 className="font-semibold text-navy text-sm mt-4 mb-2">Data Retention</h3>
            <p className="text-sm text-slate leading-relaxed">
              Contact form data is retained for 24 months and then deleted. Analytics data is retained per Google Analytics default settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Terms of Service</h2>
            <p className="text-sm text-slate leading-relaxed mb-3">
              By using this website, you agree to these terms. This website is provided for informational purposes only.
            </p>
            <h3 className="font-semibold text-navy text-sm mt-4 mb-2">Accuracy</h3>
            <p className="text-sm text-slate leading-relaxed">
              We make reasonable efforts to keep information on this site accurate and current. Property availability, pricing, and service details are subject to change without notice.
            </p>
            <h3 className="font-semibold text-navy text-sm mt-4 mb-2">Liability</h3>
            <p className="text-sm text-slate leading-relaxed">
              Capitol Properties is not liable for any damages arising from your use of this website. All property management services are governed by separate written agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">Contact</h2>
            <p className="text-sm text-slate leading-relaxed">
              Questions about this policy: info@capitol-properties-example.com or (808) 555-0132.
            </p>
          </section>

          <p className="text-xs text-slate-light">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  )
}
