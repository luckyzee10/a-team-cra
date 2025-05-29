import Image from 'next/image'

interface ToolCardProps {
  title: string
  description: string
  image: string
}

export default function ToolCard({ title, description, image }: ToolCardProps) {
  // Custom object position for Tone Analyzer
  const isToneAnalyzer = title === 'Tone Analyzer';
  const objectPosition = isToneAnalyzer ? 'center 30%' : 'center';

  return (
    <div className="group relative rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md flex flex-col items-center">
      <div className="mb-4 w-full flex justify-center">
        <div className="relative h-48 w-48 max-w-full overflow-hidden rounded-xl shadow-md bg-neutral-100">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover', objectPosition }}
            sizes="(max-width: 768px) 100vw, 192px"
            className="rounded-xl"
            priority={false}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-neutral-900 text-center">{title}</h3>
      <p className="mt-2 text-neutral-600 text-center">{description}</p>
    </div>
  )
} 