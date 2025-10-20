// components/About.tsx

interface Stat {
  value: string
  label: string
}

export default function About() {
  const stats: Stat[] = [
    { value: '4', label: 'Guests' },
    { value: '1', label: 'Bedroom' },
    { value: '1', label: 'Bathroom' },
    { value: '650', label: 'Sq Ft' },
    { value: '4.98 ⭐', label: 'Guest Rating' },
  ]

  const features = [
    'Ski-in/ski-out access (0 min walk to lift)',
    'Smart home controls (thermostat, lights, locks)',
    'Recently renovated (2024)',
    'High-speed WiFi (250+ Mbps)',
    'Mountain view balcony',
    'In-unit washer/dryer',
  ]

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About This Property
        </h2>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 my-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 my-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-green-600 text-xl flex-shrink-0" aria-hidden="true">
                ✓
              </span>
              <span className="text-gray-700 text-base md:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
