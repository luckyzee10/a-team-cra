export default function Footer() {
  return (
    <footer className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
            Your brain deserves support — not shame.
          </h2>
          <div className="mt-8">
            <button className="inline-flex items-center rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.74.45 7.12-.65 1.29-1.43 2.58-2.48 4.32zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Download on App Store
            </button>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-200 pt-8">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="/about" className="text-sm text-neutral-600 hover:text-neutral-900">
              About
            </a>
            <a href="/contact" className="text-sm text-neutral-600 hover:text-neutral-900">
              Support
            </a>
            <a href="/privacy" className="text-sm text-neutral-600 hover:text-neutral-900">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-neutral-600 hover:text-neutral-900">
              Terms
            </a>
          </nav>
          <p className="mt-8 text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} A-team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 