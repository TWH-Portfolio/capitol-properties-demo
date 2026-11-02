import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 safe-bottom">
      <div className="flex items-center gap-3">
        <a
          href="tel:+18085550132"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-navy-deep font-semibold text-sm py-3 rounded-[10px] transition-colors hover:bg-gold/90"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-sm py-3 rounded-[10px] transition-colors hover:bg-white/20"
        >
          Get a Proposal
        </Link>
      </div>
    </div>
  )
}
