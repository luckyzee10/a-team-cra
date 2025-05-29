import Image from 'next/image'

export default function WhyAteam() {
  return (
    <section className="bg-primary-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Why A-team?
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">Built by a solo founder with ADHD</h3>
                  <p className="mt-2 text-neutral-600">
                    Created from personal experience and understanding of the challenges we face every day.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">Designed for neurodivergent minds</h3>
                  <p className="mt-2 text-neutral-600">
                    Every feature is crafted with our unique way of thinking in mind.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-neutral-900">No streaks, no pressure, no guilt</h3>
                  <p className="mt-2 text-neutral-600">
                    Just gentle support that adapts to your needs and helps you move forward at your own pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative block w-full rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/assets/community_banner.png"
                  alt="A-team community banner"
                  width={640}
                  height={360}
                  className="rounded-2xl object-cover w-full h-auto"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 