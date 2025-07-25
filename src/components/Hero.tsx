import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl flex flex-col items-center">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="mb-4 flex justify-center w-full">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-2xl shadow-lg bg-[#F6E2B6] flex items-center justify-center">
              <Image
                src="/assets/app_icon.png"
                alt="A-team app icon"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 text-center mb-4 tracking-tight">A-Team</h2>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl text-center">
            Your gentle ADHD toolkit, powered by AI.
          </h1>
          <p className="mt-4 text-lg text-neutral-600 sm:text-xl text-center">
            A-team helps you get unstuck, organize your brain, and find your flow — one small win at a time.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://apps.apple.com/us/app/a-team-app/id6746423068"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.41-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.61 3.44 1.57-3.14 1.88-2.29 5.74.45 7.12-.65 1.29-1.43 2.58-2.48 4.32zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              View in App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 