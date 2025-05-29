import ToolCard from './ToolCard'

const tools = [
  {
    title: 'Magic Task Breaker',
    description: 'The perfect To-Do for the neurospicy. Breaks dawnting tasks into manageable steps',
    image: '/assets/task_breaker_2.jpeg',
  },
  {
    title: 'Tone Rewriter',
    description: 'Rewrites your message to sound more confident, kind, or whatever you want!',
    image: '/assets/tone_rewriter.PNG',
  },
  {
    title: 'Tone Analyzer',
    description: 'Helps you understand how your message sounds emotionally',
    image: '/assets/tone_analyzer.PNG',
  },
  {
    title: 'Time Estimator',
    description: 'fight time blindness with this handy tool',
    image: '/assets/focus_timer.PNG',
  },
  {
    title: 'Brain Dump Compiler',
    description: 'Making a gameplan has never been this simple!',
    image: '/assets/brain_dump_compiler.jpg',
  },
  {
    title: 'Thinking Partner',
    description: 'A supportive AI that talks you through stuck thoughts',
    image: '/assets/thinking_partner.PNG',
  },
]

export default function Tools() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Your ADHD Toolkit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            A collection of gentle tools designed to help you navigate daily challenges with ease.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              image={tool.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 