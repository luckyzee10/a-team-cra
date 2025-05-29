export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 to-white py-12 px-2 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-primary-700 text-center tracking-tight">About</h1>
        <div className="prose prose-lg text-neutral-800 text-center max-w-none">
          <p>
            Hi, I&apos;m the solo founder behind A-Team. For most of my life, I struggled with focus, motivation, and a constant sense that I was somehow falling behind. I didn&apos;t know why things that seemed easy for others felt so overwhelming for me. It wasn&apos;t until recently that I was diagnosed with ADHD&mdash;and suddenly, my whole world came crashing down and clicked into place at the same time.
          </p>
          <p>
            At first, I felt tremendous sadness for all the years I spent fighting myself, not understanding why I couldn&apos;t just &quot;try harder.&quot; But then, something new happened: I found a compassion for myself that I&apos;d never been able to access before. I realized that my struggles weren&apos;t a personal failing&mdash;they were a different way of being in the world.
          </p>
          <p>
            With this new perspective, I started building tools to help myself&mdash;tools that were gentle, forgiving, and designed for the way my brain actually works. And guess what? They worked. For the first time, I felt supported instead of shamed. I could finally help myself from the right perspective.
          </p>
          <p>
            Now, I&apos;m offering these tools to you. If you&apos;ve ever felt misunderstood, overwhelmed, or like you just can&apos;t keep up, I want you to know: you&apos;re not alone. A-Team is here to support you, one small win at a time. I hope these tools help you feel seen, supported, and empowered&mdash;because you deserve it.
          </p>
          <p className="mt-8 font-semibold text-primary-700">With compassion,<br/>A fellow ADHDer</p>
        </div>
      </div>
    </section>
  )
} 