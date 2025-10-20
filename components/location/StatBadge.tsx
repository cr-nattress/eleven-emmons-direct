// components/location/StatBadge.tsx

interface StatBadgeProps {
  value: string | number
  label: string
  icon?: string
  highlight?: boolean
}

export default function StatBadge({
  value,
  label,
  icon,
  highlight = false,
}: StatBadgeProps) {
  return (
    <div
      className={`
        p-4 rounded-lg text-center transition-all duration-200
        ${
          highlight
            ? 'bg-blue-50 border-2 border-blue-500'
            : 'bg-gray-50 hover:bg-gray-100'
        }
      `}
    >
      {icon && (
        <div className="flex justify-center mb-2 text-2xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm text-gray-600 font-medium">
        {label}
      </div>
    </div>
  )
}
