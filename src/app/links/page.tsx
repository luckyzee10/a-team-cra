import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'A-Team — Links',
  description: 'Quick links to the A-Team app and resources',
}

export default function LinksPage() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center px-4 py-6 sm:px-6 lg:px-8">
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/assets/app_icon.png"
              alt="A-Team logo"
              fill
              sizes="48px"
              className="rounded-lg"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="ml-3 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            A-Team
          </span>
        </div>
      </header>

      {/* Main Content */}
      <section className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl space-y-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Explore A-Team
            </h1>
            <p className="mt-2 text-neutral-600">
              Quick access to our app and featured resources.
            </p>
          </div>

          <div className="space-y-8">
            {/* App card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:flex sm:items-center sm:gap-6">
              <div className="mb-4 flex justify-center sm:mb-0 sm:block">
                <div className="relative h-24 w-24">
                  <Image
                    src="/assets/app_icon.png"
                    alt="A-Team App icon"
                    fill
                    sizes="96px"
                    className="rounded-xl"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-neutral-900">A-Team App</h2>
                <p className="mt-2 text-neutral-600">
                  Your gentle ADHD toolkit, powered by AI.
                </p>
                <Link
                  href="https://apps.apple.com/us/app/a-team-app/id6746423068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  View in App Store
                </Link>
              </div>
            </div>

            {/* E-book card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:flex sm:items-center sm:gap-6">
              <div className="mb-4 flex justify-center sm:mb-0 sm:block">
                <div className="relative h-24 w-24">
                  <Image
                    src="/assets/ebook_cover.png"
                    alt="Thriving Together e-book cover"
                    fill
                    sizes="96px"
                    className="rounded-xl"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-neutral-900">
                  “Thriving Together” E-book
                </h2>
                <p className="mt-2 text-neutral-600">
                  Discover practical strategies to turn ADHD relationship challenges into strengths.
                </p>
                <Link
                  href="https://ateamapp.gumroad.com/l/bzwxj?_gl=1*1vkj81*_ga*MzQzNDgxMjg2LjE3NTM0Njg4NjQ.*_ga_6LJN6D94N6*czE3NTM0NzI2OTYkbzIkZzEkdDE3NTM0NzI3MDckajQ5JGwwJGgw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Buy on Gumroad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 