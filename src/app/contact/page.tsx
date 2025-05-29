export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-2 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary-700 text-center tracking-tight">Support</h1>
        <p className="text-lg text-neutral-700 mb-4 text-center">
          Need help or have feedback? I'd love to hear from you!
        </p>
        <div className="bg-primary-50 rounded-xl p-6 shadow flex flex-col items-center w-full">
          <span className="font-semibold text-neutral-900 mb-2">Email:</span>
          <a href="mailto:benjamin.franklindevelopment@gmail.com" className="text-primary-700 underline text-lg break-all">
            benjamin.franklindevelopment@gmail.com
          </a>
        </div>
        <p className="mt-8 text-neutral-600 text-base text-center">I read every message and do my best to respond quickly. You're not alone—reach out any time!</p>
      </div>
    </section>
  )
} 