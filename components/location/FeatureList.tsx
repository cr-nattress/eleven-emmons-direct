// components/location/FeatureList.tsx

interface FeatureListProps {
  items: string[]
  columns?: 1 | 2
  icon?: string
}

export default function FeatureList({
  items,
  columns = 2,
  icon = '✓',
}: FeatureListProps) {
  return (
    <ul className={`grid ${columns === 2 ? 'md:grid-cols-2' : ''} gap-3 list-none`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span
            className="text-green-600 text-lg flex-shrink-0"
            aria-hidden="true"
          >
            {icon}
          </span>
          <span className="text-gray-700 text-sm md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  )
}
