import { Outlet, Link } from 'react-router-dom'
import { Truck } from './Icons'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 text-gray-900 no-underline">
            <Truck />
            <span className="text-xl font-bold">Zen Trucking</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900 no-underline">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-600 hover:text-gray-900 no-underline">
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zen Trucking / Zenteck AI. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6 mt-3">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-700 no-underline">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-500 hover:text-gray-700 no-underline">
              Terms & Conditions
            </Link>
            <a href="mailto:dispatch@zenteck.ai" className="text-gray-500 hover:text-gray-700 no-underline">
              dispatch@zenteck.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
