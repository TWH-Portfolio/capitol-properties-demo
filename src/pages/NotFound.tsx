import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="pt-20">
      <Seo
        title="Page Not Found | Capitol Properties"
        description="The page you are looking for does not exist."
        canonical="https://capitol-properties-demo.thewateringhole.com/404"
      />

      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-7xl font-extrabold text-navy/10 mb-4">404</p>
          <h1 className="text-2xl font-extrabold text-navy mb-3">Page not found.</h1>
          <p className="text-slate mb-8 max-w-md mx-auto">
            The page you are looking for may have been moved or no longer exists.
          </p>
          <Link to="/" className="btn-primary inline-flex text-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
